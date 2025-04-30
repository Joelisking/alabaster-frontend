import Container from '@/components/shared/container';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

function TermsOfUse() {
  return (
    <main>
      <PageHeader title="Terms of Use" />
      <Container>
        <div className="space-y-6 py-6">
          <p className="text-lg">
            By making a reservation with Alabaster Car Rentals, you
            agree to abide by these terms and conditions.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              1. Vehicle Pickup and Return
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                The rental period begins and ends at the agreed-upon
                dates and times stated in the reservation.
              </li>
              <li>
                Late returns may incur additional charges unless prior
                arrangements have been made.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              2. Payment and Security Deposit
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Payment is due at the start of the rental period. We
                accept major payment methods.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              3. Cancellation and Modification
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Cancellations made 48 hours or more before the
                scheduled pickup time will receive a full refund.
              </li>
              <li>
                Modifications to reservations are subject to
                availability and may incur additional charges.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Fuel Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Vehicles are rented with a full tank of fuel and
                should be returned with the same level.
              </li>
              <li>
                If the vehicle is returned with less fuel, the renter
                will be charged for the missing fuel at a
                predetermined rate.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Insurance</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                All rentals include basic insurance coverage.
                Additional insurance options are available for
                purchase.
              </li>
              <li>
                The renter is responsible for any damages or theft not
                covered by insurance.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              6. Prohibited Uses
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                The rental vehicle must not be used for illegal
                activities, off-road driving, racing, or towing.
              </li>
              <li>
                Smoking and transporting pets without prior approval
                are strictly prohibited.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              7. Maintenance and Repairs
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Renter agrees to inform Alabaster Car Rentals
                immediately of any mechanical issues or accidents.
              </li>
              <li>
                Repairs costing less than GHS 500 do not require prior
                authorization, but the renter must keep and submit
                receipts for reimbursement.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">8. Liability</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Alabaster Car Rentals is not responsible for any
                personal items left in the rental vehicle.
              </li>
              <li>
                The renter is liable for any fines, tolls, or
                violations incurred during the rental period.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              9. Termination of Agreement
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Alabaster Car Rentals reserves the right to terminate
                the rental agreement if the renter fails to comply
                with the terms and conditions.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              10. Jurisdiction
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Any disputes arising from this agreement will be
                governed by the laws of Ghana.
              </li>
            </ul>
          </section>

          <div className="pt-4">
            <p>
              By accepting these terms, you acknowledge that you have
              read, understood, and agreed to the Alabaster Car
              Rentals terms and conditions.
            </p>
            <p className="mt-4 font-medium">Thank You.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default TermsOfUse;
