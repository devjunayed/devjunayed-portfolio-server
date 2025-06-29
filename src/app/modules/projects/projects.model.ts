import { model, Schema } from 'mongoose';
import { TProject, TProjectTag, TProjectTechnology } from './projects.interface';


const projectTechnologySchema = new Schema<TProjectTechnology>({
  title: String,
  icon: String
})
const projectTagSchema = new Schema<TProjectTag>({
  title: String,
})

const projectSchema = new Schema<TProject>({
  projectTitle: {
    type: String,
    required: true,
  },
  projectThumbnail: {
    type: String,
    required: true,
  },
  projectClientViewLink: {
    type: String,
    required: true,
  },
  projectServerViewLink: {
    type: String,
  },
  projectClientCodeLink: {
    type: String,
    required: true,
  },
  projectServerCodeLink: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectShortDescription: {
    type: String,
    required: true,
  },
  projectTags: {
    type: [projectTagSchema],
    required: false,
  },
  projectTechnologies: {
    type: [projectTechnologySchema],
    required: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  }
});

export const Projects = model<TProject>('Project', projectSchema);
