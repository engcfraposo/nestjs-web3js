import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateWeb3jsServiceSchema = z
  .object({
    infuraUrl: z.string().url().min(3),
  })
  .required();

// class is required for using DTO as a type
export class CreateWeb3jsServiceDto extends createZodDto(
  CreateWeb3jsServiceSchema,
) {}
