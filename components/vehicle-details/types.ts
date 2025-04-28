import { z } from 'zod';

export const enquiryFormSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    startDate: z.coerce.date({
      required_error: 'Start date is required',
      invalid_type_error: 'Invalid start date',
    }),
    returnDate: z.coerce.date({
      required_error: 'Return date is required',
      invalid_type_error: 'Invalid return date',
    }),
    phone: z.string().refine((val) => {
      const digits = val.replace(/\D/g, '');
      return digits.length === 10;
    }, 'Phone number must contain 10 digits'),
    destination: z.string().min(1, 'Destination is required'),
    tripType: z.string().min(1, 'Trip type is required'),
  })
  .refine((data) => data.returnDate >= data.startDate, {
    message: 'Return date must be after start date',
    path: ['returnDate'],
  });

export type EnquiryForm = z.infer<typeof enquiryFormSchema>;
