'use client';

import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

import './Particles.css';

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
}

const defaultColors = ['#ffffff', '#00FFFF', '#A020F0'];

const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 5.0; // Depth compression
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    
    // Smooth random movement
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.2, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.2, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.2, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    // Size calculation with brightness-based scaling
    float sizeFactor = (uBaseSize * (1.2 + uSizeRandomness * (random.x - 0.5)));
    gl_PointSize = sizeFactor / length(mvPos.xyz);

    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    // Twinkling effect: more pronounced for realism
    float twinkle = mix(0.3, 1.3, 0.5 + 0.5 * sin(uTime * 2.0 + vRandom.y * 10.0));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      // Bright core
      gl_FragColor = vec4(vColor * twinkle * 1.5, 1.0);
    } else {
      // Soft glow circular particle with bright core
      float core = smoothstep(0.15, 0.0, d) * 1.5;
      float glow = smoothstep(0.5, 0.1, d) * 0.7;
      float finalAlpha = (core + glow) * twinkle;
      
      if(finalAlpha < 0.01) discard;
      
      gl_FragColor = vec4(vColor * 1.2, finalAlpha);
    }
  }
`;

const Particles = ({
  particleCount = 250,
  particleSpread = 15,
  speed = 0.08,
  particleColors = defaultColors,
  moveParticlesOnHover = true,
  particleHoverFactor = 0.5,
  alphaParticles = true,
  particleBaseSize = 140,
  sizeRandomness = 1.8,
  cameraDistance = 25,
  disableRotation = false,
  pixelRatio = 1,
  className = ''
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: pixelRatio || window.devicePixelRatio,
      depth: false,
      alpha: true,
      antialias: true
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener('resize', resize, false);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors }
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * (pixelRatio || 1) },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 }
      },
      transparent: true,
      depthTest: false,
      // Additive blending for "glow" effect
      // @ts-ignore
      blendFunc: { src: gl.SRC_ALPHA, dst: gl.ONE }
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId: number;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.00005) * 0.03;
        particles.rotation.y = Math.cos(elapsed * 0.0001) * 0.05;
        (particles.rotation as any).z += 0.002 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      if (moveParticlesOnHover) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    pixelRatio
  ]);

  return <div ref={containerRef} className={`particles-container ${className}`} />;
};

export default Particles;