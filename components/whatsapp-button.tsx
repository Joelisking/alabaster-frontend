// components/WhatsAppContact.tsx
'use client';

import { useState } from 'react';
import { Send, MessageSquare, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import img from '@/public/popover-header.png';
import { Icon } from './ui';

export default function WhatsAppContact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1); // 1 for initial options, 2 for WhatsApp form
  const router = useRouter();

  // Replace with your WhatsApp number (with country code, no spaces or symbols)
  const whatsappNumber = '233538237772';

  const handleSend = () => {
    const formattedMessage = `${subject}: ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setOpen(false);
    setStep(1); // Reset to first step

    // Reset form
    setSubject('');
    setMessage('');
  };

  const handleContactClick = () => {
    router.push('/contact');
    setOpen(false);
    setStep(1); // Reset to first step
  };

  const handleWhatsAppClick = () => {
    setStep(2); // Go to WhatsApp form
  };

  const handleBack = () => {
    setStep(1); // Go back to initial options
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover
        open={open}
        onOpenChange={(newOpen) => {
          setOpen(newOpen);
          if (!newOpen) setStep(1); // Reset to first step when closing
        }}>
        <PopoverTrigger asChild>
          <Button
            className={`rounded-full h-14 w-14 ${
              open
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-primary hover:bg-accent-foreground'
            } shadow-lg flex items-center justify-center`}
            aria-label="Contact options">
            {open ? (
              <ChevronDown className="w-6 h-6" />
            ) : (
              <MessageSquare className="w-6 h-6" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 min-h-96 p-0" align="end">
          {step === 1 ? (
            <div className="space-y-2">
              <div className="rounded-t-lg overflow-hidden relative">
                <Image src={img} alt="" />
                <div className="absolute bottom-8 left-4 text-white">
                  <p className="text-3xl font-extralight">
                    Hi there,
                  </p>
                  <p className="text-3xl font-bold">
                    How can we help?
                  </p>
                </div>
              </div>

              <div className="mx-4 -mt-6 z-10 relative bg-white rounded-xl mb-32 space-y-2">
                <button
                  onClick={handleContactClick}
                  className="flex items-center justify-between w-full p-4 text-left text-sm border border-border cursor-pointer hover:bg-gray-100 rounded-2xl">
                  <span>Send us a message</span>
                  <Icon name="Send" />
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-between w-full p-4 text-left text-sm border border-border cursor-pointer hover:bg-gray-100 rounded-2xl">
                  <span>Chat with us on WhatsApp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col p-4 border-t border-border">
                <span className="text-sm">
                  Leave us a message, and we will reply as soon as we
                  can
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 p-4">
              <button
                onClick={handleBack}
                className="text-sm text-primary flex items-center">
                ← Back
              </button>
              <h3 className="font-medium text-lg mb-8">
                Contact Us on WhatsApp
              </h3>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                />
              </div>
              <div className="space-y-2 mb-8">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here"
                  rows={5}
                />
              </div>
              <Button
                onClick={handleSend}
                className="w-full bg-primary hover:bg-accent-foreground mb-10">
                <Send className="mr-2 h-4 w-4" />
                Send via WhatsApp
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
