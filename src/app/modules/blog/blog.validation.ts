import { z } from 'zod'

export const createBlogValidationSchema = z.object({
  body: z.object({
   title: z.string({
    required_error: "Blog title is required",
    invalid_type_error: "Title must be string"
   }),
   description: z.string({
    required_error: "Blog description is required",
    invalid_type_error: "Blog description must be string"
   })
  }),
})
