
"use client"

import React, { useState, useEffect } from 'react';
import { Send, User, Mail, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { StarBackground } from './StarBackground';
import { useFirestore, useAuth, useUser } from '@/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const firestore = useFirestore();
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!user && auth) {
      signInAnonymously(auth).catch(err => {
        // Silently handle anonymous auth initialization
      });
    }
  }, [user, auth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic local validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all fields before sending.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Prepare Firestore document
      const contactMessagesRef = collection(firestore!, 'contactMessages');
      const newDocRef = doc(contactMessagesRef);
      
      const payload = {
        id: newDocRef.id,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      };

      // 2. Save to Firestore (Non-blocking background call)
      setDoc(newDocRef, payload)
        .catch(async (serverError) => {
          const permissionError = new FirestorePermissionError({
            path: newDocRef.path,
            operation: 'create',
            requestResourceData: payload,
          });
          errorEmitter.emit('permission-error', permissionError);
        });

      // 3. Send email via EmailJS using environment variables
      // Template variables: {{name}}, {{email}}, {{message}}
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 4. Success handling
      toast({
        title: "Success!",
        description: "Your message has been sent successfully!",
      });

      // 5. Reset form only after successful email transmission
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      // 6. Detailed error logging as requested
      console.error("EmailJS Error:", error);
      
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error?.text || error?.message || "An unexpected error occurred. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
            <Sparkles className="w-3 h-3" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Let's <span className="gradient-text-cyan">Connect</span>
          </h2>
          <p className="text-muted-foreground font-medium">
            Have a project in mind or want to discuss AI systems? Drop a message.
          </p>
        </div>

        <div className="glass-card bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.3)] relative group">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 group/input">
                <Label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1">
                  Your Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-primary/50 rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-accent/50 rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1">
                  Message
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                    className="min-h-[150px] pl-12 pt-5 bg-black/40 border-white/5 focus:border-primary/50 rounded-[1.5rem]"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 text-white font-bold text-lg transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
