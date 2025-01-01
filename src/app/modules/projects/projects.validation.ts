import { z } from 'zod'

export const createSkillValidationSchema = z.object({
  body: z.object({
    categoryName: z.string({
      required_error: 'Category name is required',
      invalid_type_error: 'Category name must be a string',
    }),
    skillName: z.string({
      required_error: 'Skill name is required',
      invalid_type_error: 'Skill name must be a string',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    }),
    icon: z.string({
      required_error: 'Icon is required',
      invalid_type_error: 'Icon must be a string',
    }),
  }),
})
