import { z } from 'zod';

const allowedCharacters =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const shortUrlSchema = z
  .string()
  .max(7)
  .regex(new RegExp(`^[${allowedCharacters}]+$`));

export const urlSchema = z
  .string()
  .url()
  .refine((url) => {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  });
