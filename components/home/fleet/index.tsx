import React from 'react';
import Container from '../../shared/container';
import FleetCards from './FleetCards';
import Header from '@/components/shared/header';

async function Fleet() {
  return (
    <section className="pt-24">
      <Container>
        <Header title="our fleet" />
        <FleetCards />
      </Container>
    </section>
  );
}

export default Fleet;
