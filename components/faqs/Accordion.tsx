import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '../shared/container';
import { faqItems } from '@/lib/data';

function FAQAccordion() {
  return (
    <Container className=" md:mt-12 lg:mt-24">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="mt-12 w-full shadow-2xl px-2 md:px-3 py-4 rounded-3xl space-y-5">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            style={
              {
                '--overlay-opacity': '0.5',
              } as React.CSSProperties
            }
            className="px-6 py-4 rounded-2xl data-[state=open]:bg-black data-[state=closed]:bg-white data-[state=open]:text-white data-[state=closed]:text-black transition-none bg-cover bg-center data-[state=open]:after:content-[''] data-[state=open]:after:absolute data-[state=open]:after:inset-0 data-[state=open]:after:bg-[url('/accordion-overlay.png')] data-[state=open]:after:opacity-[var(--overlay-opacity)] data-[state=open]:after:bg-cover data-[state=open]:after:bg-center data-[state=open]:after:z-0 relative">
            <div className="flex items-start space-x-6 relative z-10">
              <div className="w-full">
                <AccordionTrigger className="font-bold text-lg md:text-2xl w-full mt-0.5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="md:text-lg whitespace-pre-wrap">
                  {item.content}
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export default FAQAccordion;
