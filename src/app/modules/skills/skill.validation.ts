import { z } from 'zod'

// Validation for a single skill
const skillSchema = z.object({
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
})

// Validation for the entire skill object
export const createSkillSchema = z.object({
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
})

// Validation for a full skill category with nested skills
export const skillCategorySchema = z.object({
  body: z.object({
    categoryName: z.string({
      required_error: 'Category name is required',
      invalid_type_error: 'Category name must be a string',
    }),
    skills: z.array(skillSchema).optional(), // Optional if no skills initially
  }),
})

// Type inference for validation
export type CreateSkillInput = z.infer<typeof createSkillSchema>
export type SkillCategoryInput = z.infer<typeof skillCategorySchema>
