import { z } from 'zod'

export const createProjectValidationSchema = z.object({
  body: z.object({
    projectTitle: z.string({
      required_error: 'Project title is required',
      invalid_type_error: 'Project title must be a string',
    }),
    projectThumbnail: z.string({
      required_error: 'Project thumbnail is required',
      invalid_type_error: 'Project thumbnail must be a string',
    }),
    projectClientViewLink: z.string({
      required_error: 'Client view link is required',
      invalid_type_error: 'Client view link must be a string',
    }),
    projectServerViewLink: z
      .string({
        required_error: 'Server view link is required',
        invalid_type_error: 'Server view link must be a string',
      })
      .optional(),
    projectClientCodeLink: z.string({
      required_error: 'Client code link is required',
      invalid_type_error: 'Client code link must be a string',
    }),
    projectServerCodeLink: z.string({
      required_error: 'Server code link is required',
      invalid_type_error: 'Server code link must be a string',
    }),
    projectDescription: z.string({
      required_error: 'Project description is required',
      invalid_type_error: 'Project description must be a string',
    }),
    projectShortDescription: z.string({
      required_error: 'Project short description is required',
      invalid_type_error: 'Project short description must be a string',
    }),
    projectTags: z.array(
      z.object({
        title: z.string({
          required_error: 'Project tag title is required',
          invalid_type_error: 'Project tag title must be a string',
        }),
      }),
    ),
    projectTechnologies: z.array(
      z.object({
        title: z.string({
          required_error: 'Project technology title is required',
          invalid_type_error: 'Project technology title must be a string',
        }),
        icon: z.string({
          required_error: 'Project technology icon is required',
          invalid_type_error: 'Project technology icon must be a string',
        }),
      }),
    ),
    isFeatured: z.boolean({
      required_error: 'Is featured is required',
      invalid_type_error: 'Is featured must be a boolean',
    }),
  }),
})
