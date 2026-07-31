'use client';
import React from 'react';
import Container from '../shared/container';
import Form from './Form';
import Info from './Info';
import { CategoryOption } from '@/lib/types';

interface ContactSectionProps {
  categories?: CategoryOption[];
}

function ContactSection({ categories = [] }: ContactSectionProps) {
  return (
    <section className="mt-20">
      <Container className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 xl:gap-16">
        <Form categories={categories} />
        <Info />
      </Container>
    </section>
  );
}

export default ContactSection;
