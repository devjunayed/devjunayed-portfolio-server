import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { BlogServices } from './blog.services'

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog created successfully',
    data: result,
  })
})
const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Blog fetched successfully',
    data: result,
  })
})

export const BlogController = {
  createBlog,
  getAllBlog
}
