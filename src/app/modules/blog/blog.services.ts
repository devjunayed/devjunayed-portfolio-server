import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const createBlogIntoDB = async (blogData: TBlog) => {
  const result = await Blog.create(blogData)
  return result
}

const getAllBlogFromDB = async () => {
  const result = await Blog.find()
  return result
}

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
}
