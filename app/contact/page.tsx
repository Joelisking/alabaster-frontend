import ContactSection from '@/components/contact/ContactSection';
import PageHeader from '@/components/shared/page-header';
import { client } from '@/lib/sanity';
import { CATEGORIES_QUERY } from '@/lib/queries';
import { CategoryOption } from '@/lib/types';
import React from 'react';

async function Contact() {
  const categories = await client.fetch<CategoryOption[]>(
    CATEGORIES_QUERY
  );

  return (
    <main>
      <PageHeader title="contact us" />
      <ContactSection categories={categories} />
    </main>
  );
}

export default Contact;
