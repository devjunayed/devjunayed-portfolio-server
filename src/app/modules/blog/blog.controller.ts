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
  const {result, totalDocument} = await BlogServices.getAllBlogFromDB(req.query)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    totalDocument: Number(totalDocument),
    message: 'All Blog fetched successfully',
    data: result,
  })
})
const getSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getSingleBlogFromDB(req.params.blogId)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog fetched successfully',
    data: result,
  })
})

const getFeaturedBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getFeaturedBlogFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog fetched successfully',
    data: result,
  })
})
const deleteBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.deleteBlogFromDB(req?.params?.id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog deleted successfully',
    data: result,
  })
})

export const BlogController = {
  getFeaturedBlog,
  getSingleBlog,
  createBlog,
  getAllBlog,
  deleteBlog
}
