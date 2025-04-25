'use client';
import React from 'react';
import Container from '../shared/container';
import Form from './Form';
import Info from './Info';

function ContactSection() {
  return (
    <section className="mt-20">
      <Container className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 xl:gap-16">
        <Form />
        <Info />
      </Container>
    </section>
  );
}

export default ContactSection;
