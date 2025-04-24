import FAQAccordion from '@/components/faqs/Accordion';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

function Faqs() {
  return (
    <main>
      <PageHeader title="FAQs" />
      <FAQAccordion />
    </main>
  );
}

export default Faqs;
