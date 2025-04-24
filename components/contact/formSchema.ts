import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type FormSchema = z.infer<typeof formSchema>;
