import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from './formSchema';
import FormField from './FormField';
import { CategoryOption } from '@/lib/types';

const OTHER_VEHICLE_OPTION = 'Other / not sure';

interface FormProps {
  categories?: CategoryOption[];
}

function Form({ categories = [] }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    // Format the message for WhatsApp
    const whatsappMessage =
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      (data.vehicleType
        ? `*Vehicle of interest:* ${data.vehicleType}\n`
        : '') +
      (data.subject ? `*Subject:* ${data.subject}\n` : '') +
      `*Message:* ${data.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (using the one from Info component)
    const whatsappNumber = '233538237772'; // Removed the leading 0 and + for WhatsApp API

    // Open WhatsApp link
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );

    // Reset the form
    reset();
  };

  return (
    <div className="bg-black rounded-2xl text-white w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight">
        Get in touch using the form below
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 sm:mt-12 space-y-6 flex-1">
        <FormField
          name="name"
          placeholder="Your name"
          register={register}
          errors={errors}
        />
        <FormField
          name="email"
          placeholder="Email Address"
          register={register}
          errors={errors}
        />
        <FormField
          name="phone"
          placeholder="Phone number"
          register={register}
          errors={errors}
        />
        <div className="flex flex-col gap-3 mb-6">
          <div className="relative">
            <select
              id="vehicleType"
              defaultValue=""
              className="appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary w-full transition-all duration-300 pb-2 pr-8 text-[#C1C1C1] [&:valid]:text-white [&>option]:text-black"
              {...register('vehicleType')}>
              <option value="" disabled>
                Kind of vehicle (Optional)
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))}
              <option value={OTHER_VEHICLE_OPTION}>
                {OTHER_VEHICLE_OPTION}
              </option>
            </select>
          </div>
        </div>
        <FormField
          name="subject"
          placeholder="Subject (Optional)"
          register={register}
          errors={errors}
        />
        <FormField
          name="message"
          placeholder="Message"
          isTextArea
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
