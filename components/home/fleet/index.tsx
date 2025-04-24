import React from 'react';
import Header from './Header';
import Container from '../../shared/container';
import FleetCards from './FleetCards';

function Fleet() {
  return (
    <section className="mt-24">
      <Container>
        <Header />
        <FleetCards />
      </Container>
    </section>
  );
}

export default Fleet;
