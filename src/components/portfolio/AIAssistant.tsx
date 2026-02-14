"use client"

import React, { useState } from 'react';
import { aiPortfolioAssistant } from '@/ai/flows/ai-portfolio-assistant-flow';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export const AIAssistant = ({ portfolioContent }: { portfolioContent: string }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const currentQuery = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', content: currentQuery }]);
    setIsLoading(true);

    try {
      const response = await aiPortfolioAssistant({ query: currentQuery, portfolioContent });
      setMessages(prev => [...prev, { role: 'ai', content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-white/5 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
            <Sparkles className="w-4 h-4" />
            AI Assistant
          </div>
          <h2 className="text-4xl font-headline font-bold">Ask Anything About <span className="text-primary">Me</span></h2>
          <p className="text-muted-foreground">Recruiter assistant trained on my professional journey and projects.</p>
        </div>

        <Card className="glass-card border-white/5 shadow-2xl overflow-hidden rounded-3xl">
          <CardHeader className="bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Portfolio Assistant</CardTitle>
                <CardDescription className="text-xs">Always online • Ask about skills, projects or CGPA</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-6">
              <div className="space-y-6">
                {messages.length === 0 && (
                  <div className="text-center py-20 space-y-4">
                    <p className="text-muted-foreground text-sm">"What are Harshitha's core strengths in AI?"</p>
                    <p className="text-muted-foreground text-sm">"Tell me more about her research projects."</p>
                    <p className="text-muted-foreground text-sm">"How does she handle full-stack development?"</p>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${msg.role === 'user' ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-accent" /> : <Bot className="w-4 h-4 text-primary" />}
                    </div>
                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-accent text-accent-foreground font-medium rounded-tr-none' : 'bg-white/5 text-muted-foreground border border-white/5 rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-primary/10 border-primary/20">
                      <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    </div>
                    <div className="bg-white/5 text-muted-foreground border border-white/5 px-4 py-2 rounded-2xl text-sm italic rounded-tl-none">
                      Analyzing portfolio content...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <form onSubmit={handleAsk} className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
              <Input
                placeholder="Ask a question..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-background/50 border-white/10 focus:border-primary/50 rounded-full px-6"
              />
              <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/90 flex-shrink-0" disabled={isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
