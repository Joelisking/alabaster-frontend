'use client';
import {
  FieldError,
  UseFormRegister,
  Controller,
  Control,
} from 'react-hook-form';
import { Icon } from '@/components/ui';
import { EnquiryForm } from './types';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface FormFieldProps {
  name: keyof EnquiryForm;
  type?: 'text' | 'email' | 'tel' | 'date' | 'select';
  placeholder: string;
  isTextArea?: boolean;
  register: UseFormRegister<EnquiryForm>;
  control?: Control<EnquiryForm>;
  errors: Partial<Record<keyof EnquiryForm, FieldError>>;
  options?: { value: string; label: string }[];
}

const DatePickerField = ({
  name,
  placeholder,
  control,
  register,
  errors,
}: FormFieldProps) => {
  // Fallback to standard input if no control is provided
  if (!control) {
    console.warn(
      `Control is missing for date field: ${String(name)}. Falling back to basic input.`
    );
    return (
      <div className="relative">
        <input
          type="date"
          id={String(name)}
          placeholder={placeholder}
          className={`appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary placeholder:text-[#C1C1C1] w-full transition-all duration-300 pb-2 pr-8 text-white ${
            errors[name] ? 'border-red-500' : ''
          }`}
          {...register(name)}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="Calendar" className="w-5 h-5 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <div
                className={cn(
                  'flex items-center border-b border-muted-foreground hover:border-primary focus-within:border-primary transition-all duration-300 pb-2 cursor-pointer',
                  errors[name] && 'border-red-500'
                )}>
                <Button
                  variant="ghost"
                  type="button"
                  className={cn(
                    'w-full justify-start text-left font-normal p-0 bg-transparent hover:bg-transparent focus:ring-0 active:ring-0 focus:outline-none',
                    !field.value && 'text-[#C1C1C1]'
                  )}>
                  {field.value ? (
                    format(new Date(field.value), 'MMM dd, yyyy')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </Button>
                <div className="pointer-events-none absolute right-0">
                  <Icon
                    name="Calendar"
                    className="w-5 h-5 text-primary"
                  />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 border-primary"
              align="start"
              sideOffset={8}>
              <Calendar
                mode="single"
                selected={
                  field.value ? new Date(field.value) : undefined
                }
                onSelect={(date) =>
                  field.onChange(date?.toISOString())
                }
                initialFocus
                className="bg-black rounded-md border border-primary p-3"
                classNames={{
                  months: 'space-y-4',
                  month: 'space-y-4',
                  caption:
                    'flex justify-center pt-1 relative items-center',
                  caption_label: 'text-sm font-medium text-white',
                  nav: 'space-x-1 flex items-center',
                  head_row: 'flex justify-between py-2',
                  head_cell:
                    'text-primary font-medium text-sm w-9 rounded-md',
                  row: 'flex w-full mt-2 gap-2',
                  cell: 'h-9 w-9 text-center text-sm relative p-0 focus-within:relative rounded-md',
                  day: 'h-9 w-9 p-0 hover:bg-gray-800 hover:text-white focus:bg-gray-800 rounded-md flex items-center justify-center aria-selected:opacity-100',
                  day_selected:
                    'bg-primary text-black font-medium hover:bg-primary hover:text-black focus:bg-primary focus:text-black',
                  day_today: 'border border-primary text-white',
                  day_outside: 'text-muted-foreground opacity-50',
                  day_disabled: 'text-muted-foreground opacity-50',
                  day_range_middle:
                    'aria-selected:bg-accent aria-selected:text-accent-foreground',
                  day_hidden: 'invisible',
                  nav_button:
                    'h-7 w-7 bg-transparent p-0 hover:bg-gray-800 text-primary rounded-md flex items-center justify-center',
                  nav_button_previous: 'absolute left-1 text-primary',
                  nav_button_next: 'absolute right-1 text-primary',
                  table: 'w-full border-collapse space-y-1',
                }}
                components={{
                  IconLeft: () => (
                    <Icon name="ChevronLeft" className="h-4 w-4" />
                  ),
                  IconRight: () => (
                    <Icon name="ChevronRight" className="h-4 w-4" />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

const SelectField = ({
  name,
  placeholder,
  register,
  errors,
  options,
}: FormFieldProps) => (
  <div className="relative">
    <select
      id={String(name)}
      className={`appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary placeholder:text-[#C1C1C1] w-full transition-all duration-300 pb-2 pr-8 text-white ${
        errors[name] ? 'border-red-500' : ''
      }`}
      {...register(name)}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
      <Icon name="ChevronDown" className="w-5 h-5 text-primary" />
    </div>
  </div>
);

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
      id={String(name)}
      placeholder={placeholder}
      className={`appearance-none bg-transparent focus:ring-0 active:ring-0 focus:outline-none border-b border-muted-foreground focus:border-primary active:border-primary placeholder:text-[#C1C1C1] w-full transition-all duration-300 pb-2 pr-8 text-white ${
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
      id={String(name)}
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
  if (props.type === 'select') {
    return (
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative">
          <SelectField {...props} />
        </div>
        {props.errors[props.name] && (
          <p className="text-red-500 text-sm mt-1">
            {props.errors[props.name]?.message}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="relative">
        {props.isTextArea ? (
          <TextAreaField {...props} />
        ) : props.type === 'date' ? (
          <DatePickerField {...props} />
        ) : (
          <InputField {...props} />
        )}
      </div>
      {props.errors[props.name] && (
        <p className="text-red-500 text-sm mt-1">
          {props.errors[props.name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
