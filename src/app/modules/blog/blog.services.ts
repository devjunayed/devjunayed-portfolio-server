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

const getSingleBlogFromDB = async (blogId: string) => {
  const result = await Blog.findById(blogId);
  return result;
}
const getFeaturedBlogFromDB = async () => {
  const result = await Blog.find({ isFeatured: true });
  return result;
}
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findOneAndDelete({ _id: id });
  return result;
}
const updateBlogFromDB = async (id: string, data: Partial<TBlog>) => {
  const result = await Blog.findOneAndUpdate({ _id: id }, data, { new: true });
  return result;
}

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  getFeaturedBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
}
