import { model, Schema } from 'mongoose';
import { TProject } from './projects.interface';

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
    required: true,
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
    type: String,
    required: false,
  },
  projectTechnologies: {
    type: String,
    required: false,
  },
});

export const Projects = model<TProject>('Project', projectSchema);
