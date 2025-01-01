import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TProject } from './projects.interface'
import { Projects } from './projects.model'

const createProjectIntoDB = async ({
  projectTitle,
  projectThumbnail,
  projectClientViewLink,
  projectServerViewLink,
  projectClientCodeLink,
  projectServerCodeLink,
  projectDescription,
  projectTags,
  projectTechnologies,
}: TProject) => {
  // Check if the project already exists based on project title
  const isProjectExist = await Projects.findOne({ projectTitle })

  if (isProjectExist) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Project with this title already exists')
  }

  // Create new project in the database
  const result = await Projects.create({
    projectTitle,
    projectThumbnail,
    projectClientViewLink,
    projectServerViewLink,
    projectClientCodeLink,
    projectServerCodeLink,
    projectDescription,
    projectTags,
    projectTechnologies,
  })

  return result
}

const getAllProjectsFromDB = async () => {
  // Fetch all projects from the database
  const result = await Projects.find()
  return result
}

const getProjectByIdFromDB = async (projectId: string) => {
  // Fetch a single project by its ID
  const result = await Projects.findById(projectId)

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found')
  }

  return result
}

const updateProjectInDB = async (
  projectId: string,
  updates: Partial<TProject>
) => {
  // Update project by its ID
  const result = await Projects.findByIdAndUpdate(projectId, updates, { new: true })

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found')
  }

  return result
}

const deleteProjectFromDB = async (projectId: string) => {
  // Delete a project by its ID
  const result = await Projects.findByIdAndDelete(projectId)

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found')
  }

  return result
}

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getProjectByIdFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
}
