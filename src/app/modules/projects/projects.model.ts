import { model, Schema } from 'mongoose'
import { TSkills } from './projects.interface'

const skillsSchema = new Schema<TSkills>({
  categoryName: {
    type: String,
    required: true,
  },
  skills: [
    {
      skillName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  ],
})

export const Skills = model<TSkills>('skill', skillsSchema)
