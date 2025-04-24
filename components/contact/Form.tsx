import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from './formSchema';
import FormField from './FormField';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
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
