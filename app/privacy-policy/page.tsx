import Container from '@/components/shared/container';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

function PrivacyPolicy() {
  return (
    <main>
      <PageHeader title="Privacy Policy" />
      <Container>
        <div className="space-y-6 py-6">
          <p className="text-lg">
            By using Alabaster Car Rentals&apos; website, or any of
            our services, you agree to the terms outlined in this
            Privacy Policy. Please read this document carefully to
            understand how we collect, use, disclose, and safeguard
            your personal information.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">
                  Personal Information:
                </span>{' '}
                When you make a reservation or sign up for an account,
                we may collect personal information such as your name,
                contact details, and payment information.
              </li>
              <li>
                <span className="font-medium">
                  Vehicle Information:
                </span>{' '}
                We collect information related to the vehicle you
                rent, including pick-up and drop-off locations, rental
                dates, and vehicle preferences.
              </li>
              <li>
                <span className="font-medium">
                  Usage Information:
                </span>{' '}
                We gather data on how you interact with our website,
                including IP addresses, browser information, and
                device identifiers.
              </li>
              <li>
                <span className="font-medium">
                  Communication Data:
                </span>{' '}
                If you contact us, we may keep a record of that
                communication for customer support purposes.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">
                  Reservation Processing:
                </span>{' '}
                To fulfill your car rental reservations and provide
                the requested services.
              </li>
              <li>
                <span className="font-medium">Customer Support:</span>{' '}
                To respond to your inquiries, provide assistance, and
                address any issues.
              </li>
              <li>
                <span className="font-medium">
                  Improving Services:
                </span>{' '}
                To enhance and personalize your experience, including
                improving our website and services based on your
                feedback.
              </li>
              <li>
                <span className="font-medium">Marketing:</span> To
                inform you about promotions, special offers, and
                updates, with the option to opt-out.
              </li>
              <li>
                <span className="font-medium">
                  Legal Obligations:
                </span>{' '}
                To comply with applicable laws, regulations, and legal
                processes.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              3. How We Share Your Information
            </h2>
            <p>
              We may share your information with third parties for the
              following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">
                  Service Providers:
                </span>{' '}
                We may disclose your information to third-party
                service providers who assist us in providing and
                improving our services.
              </li>
              <li>
                <span className="font-medium">Legal Compliance:</span>{' '}
                We may share your information to comply with legal
                obligations or respond to lawful requests from
                authorities.
              </li>
              <li>
                <span className="font-medium">
                  Business Transactions:
                </span>{' '}
                In the event of a merger, acquisition, or sale of all
                or a portion of our assets, your information may be
                transferred.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              4. Security Measures
            </h2>
            <p>
              We implement industry-standard security measures to
              protect your information from unauthorized access,
              disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Your Choices</h2>
            <p>
              You have the right to access, correct, or delete your
              personal information. You can manage your communication
              preferences and opt-out of marketing communications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              6. Changes to the Privacy Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy. Any
              changes will be effective when posted on our website.
              Please check this page periodically for updates.
            </p>
          </section>

          <div className="pt-4">
            <p>
              If you have any questions or concerns regarding this
              Privacy Policy, please contact us at{' '}
              <a
                href="mailto:info@alabastergh.com"
                className="text-blue-600 hover:underline">
                info@alabastergh.com
              </a>
              .
            </p>
            <p className="mt-4 font-medium">
              Thank you for choosing Alabaster Car Rentals.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default PrivacyPolicy;
