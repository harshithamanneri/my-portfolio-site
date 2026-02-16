
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

export const ContactForm = () => {
  const firestore = useFirestore();
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ensure user is authenticated anonymously for the security rules
  useEffect(() => {
    if (!user && auth) {
      signInAnonymously(auth).catch(err => {
        // Errors during anonymous sign-in are logged but not shown to the user
        // as they are typically transient network issues or configuration errors.
        console.error("Anonymous sign-in failed:", err);
      });
    }
  }, [user, auth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Required Field Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all fields before sending.",
      });
      return;
    }

    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Firestore is not initialized. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const contactMessagesRef = collection(firestore, 'contactMessages');
      const newDocRef = doc(contactMessagesRef);
      
      const payload = {
        id: newDocRef.id,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      };

      // 2. Non-blocking mutation pattern following framework guidelines.
      // We do NOT 'await' this call directly to optimize for responsiveness and offline usage.
      setDoc(newDocRef, payload)
        .then(() => {
          // 3. Success handling: Show message and clear form
          toast({
            title: "Success!",
            description: "Message sent successfully!",
          });
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(async (serverError) => {
          // 4. Error handling: Emit contextual error for development and show destructive toast
          const permissionError = new FirestorePermissionError({
            path: newDocRef.path,
            operation: 'create',
            requestResourceData: payload,
          });
          errorEmitter.emit('permission-error', permissionError);
          
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Could not send message. Please check your connection and try again.",
          });
        })
        .finally(() => {
          // 5. Reset loading state
          setIsSubmitting(false);
        });

    } catch (error) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "An unexpected error occurred. Please try again.",
      });
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
          <div className="absolute inset-0 rounded-[2rem] border border-gradient-to-r from-primary/20 to-accent/20 pointer-events-none opacity-50" />
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 group/input">
                <Label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-primary">
                  Your Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    autoComplete="name"
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-accent">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    autoComplete="email"
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-accent/50 focus:ring-accent/20 rounded-2xl transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(0,255,255,0.2)]"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-primary">
                  Message
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                    className="min-h-[150px] pl-12 pt-5 bg-black/40 border-white/5 focus:border-primary/50 focus:ring-primary/20 rounded-[1.5rem] transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 text-white font-bold text-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
