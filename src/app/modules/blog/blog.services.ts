import QueryBuilder from '../../builder/QueryBuilder'
import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const createBlogIntoDB = async (blogData: TBlog) => {
  const result = await Blog.create(blogData)
  return result
}

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
  .search(["title", "description"])
  .filter()
  .paginate()

  const totalDocument = (await Blog.find()).length;
  const result = await blogQuery.modelQuery;
  return {result, totalDocument}
}

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
}
