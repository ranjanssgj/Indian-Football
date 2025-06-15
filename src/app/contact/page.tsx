'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { GlassCard } from '@/components/ui/glass-card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useTransition } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    startTransition(() => {
      // Placeholder for actual submission logic
      console.log("Contact Form Data:", data);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    });
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Have questions, suggestions, or just want to talk football? We'd love to hear from you.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <GlassCard className="p-6 md:p-8">
          <h2 className="font-headline text-2xl text-primary mb-6">Send Us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background/70" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} className="bg-background/70" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} className="min-h-[120px] bg-background/70" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isPending ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
              </Button>
            </form>
          </Form>
        </GlassCard>

        <GlassCard className="p-6 md:p-8 space-y-6">
          <h2 className="font-headline text-2xl text-primary mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Our Office (Placeholder)</h3>
                <p className="text-foreground/80">123 Football Street, Mumbai, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a href="mailto:info@indianfootballhub.example.com" className="text-foreground/80 hover:text-primary transition-colors">
                  info@indianfootballhub.example.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Call Us (Placeholder)</h3>
                <p className="text-foreground/80">+91 22 1234 5678</p>
              </div>
            </div>
          </div>
          {/* Optionally, add a map here if needed */}
        </GlassCard>
      </div>
    </div>
  );
}
