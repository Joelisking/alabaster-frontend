'use client';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { Icon } from '@/components/ui';

interface FormFieldProps {
  name: keyof FormSchema;
  type?: 'text' | 'email' | 'tel';
  placeholder: string;
  isTextArea?: boolean;
  register: UseFormRegister<FormSchema>;
  errors: Partial<Record<keyof FormSchema, FieldError>>;
}

const InputField = ({
  name,
  type,
  placeholder,
  register,
  errors,
}: FormFieldProps) => (
  <div className="relative">
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      className={`appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary placeholder:text-[#C1C1C1] w-full transition-all duration-300 pb-2 pr-8 ${
        errors[name] ? 'border-red-500' : ''
      }`}
      {...register(name)}
    />
    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
      <Icon name="ArrowRight" className="w-5 h-5 text-primary" />
    </div>
  </div>
);

const TextAreaField = ({
  name,
  placeholder,
  register,
  errors,
}: FormFieldProps) => (
  <div className="relative">
    <textarea
      id={name}
      placeholder={placeholder}
      className={`appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary placeholder:text-[#C1C1C1] w-full transition-all duration-300 pb-2 pr-8 ${
        errors[name] ? 'border-red-500' : ''
      }`}
      {...register(name)}
      rows={4}
    />
    <div className="absolute right-0 top-2 -translate-y-1/2 pointer-events-none">
      <Icon name="ArrowRight" className="w-5 h-5 text-primary" />
    </div>
  </div>
);

const FormField = (props: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="relative">
        {props.isTextArea ? (
          <TextAreaField {...props} />
        ) : (
          <InputField {...props} />
        )}
      </div>
      {props.errors[props.name as keyof FormSchema] && (
        <p className="text-red-500 text-sm mt-1">
          {props.errors[props.name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
