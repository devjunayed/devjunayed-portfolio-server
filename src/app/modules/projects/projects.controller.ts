import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ProjectServices } from './projects.services';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Project created successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Projects fetched successfully',
    data: result,
  });
});
const getFeaturedProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getFeaturedProjectsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Projects fetched successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async(req, res) => {
  const { projectId } = req.params;
  const result = await ProjectServices.getProjectByIdFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project fetched successfully',
    data: result,
  });
})
const updateProject = catchAsync(async(req, res) => {
  const { projectId } = req.params;
  const result = await ProjectServices.updateProjectInDB(projectId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project updated successfully',
    data: result,
  });
})

export const ProjectsController = {
  createProject,
  getAllProjects,
  getFeaturedProjects,
  getSingleProject,
  updateProject
};
