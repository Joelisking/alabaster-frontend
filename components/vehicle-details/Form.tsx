'use client';
import React from 'react';
import { EnquiryForm, enquiryFormSchema } from './types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField';
import { GlobalSettings, TripTypePricing } from '@/lib/types';
import { format } from 'date-fns';

interface FormProps {
  tripTypes: TripTypePricing[];
  globalSettings?: GlobalSettings;
}

function Form({ tripTypes }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquiryFormSchema),
  });

  const onSubmit = (data: EnquiryForm) => {
    // Find selected trip type name
    const selectedTripType =
      tripTypes.find((t) => t.tripType._id === data.tripType)
        ?.tripType.name || 'Unknown Trip Type';

    // Format dates
    const formattedStartDate = format(data.startDate, 'dd MMM yyyy');
    const formattedReturnDate = format(
      data.returnDate,
      'dd MMM yyyy'
    );

    // Clean phone number
    const cleanedPhone = data.phone.replace(/\D/g, '');

    // Create WhatsApp message
    const message = `New Trip Inquiry:%0A%0A
    Name: ${data.name}%0A
    Phone: ${cleanedPhone}%0A
    Trip Type: ${selectedTripType}%0A
    Destination: ${data.destination}%0A
    Start Date: ${formattedStartDate}%0A
    Return Date: ${formattedReturnDate}`;

    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/233538237772?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 sm:mt-12 space-y-10 flex-1 text-white">
      <FormField
        name="name"
        placeholder="Your name"
        register={register}
        errors={errors}
      />

      <FormField
        name="phone"
        placeholder="Phone number for calls"
        register={register}
        errors={errors}
        type="tel"
      />

      <FormField
        name="tripType"
        type="select"
        placeholder="Select trip type"
        options={
          Array.isArray(tripTypes) && tripTypes.length > 0
            ? tripTypes.map((t) => ({
                value: t.tripType._id as string,
                label: t.tripType.name as string,
              }))
            : []
        }
        register={register}
        errors={errors}
      />

      <FormField
        name="startDate"
        placeholder="Start Date"
        type="date"
        control={control}
        register={register}
        errors={errors}
      />

      <FormField
        name="returnDate"
        placeholder="Return Date"
        type="date"
        control={control}
        register={register}
        errors={errors}
      />

      <FormField
        name="destination"
        placeholder="Destination"
        register={register}
        errors={errors}
      />

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-6 rounded-full hover:bg-accent-dark transition-colors">
        Send Message
      </button>
    </form>
  );
}

export default Form;
