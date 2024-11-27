import { Router } from 'express'
import auth from '../../middlewares/auth'
import { BlogController } from './blog.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import {  createBlogValidationSchema } from './blog.validation'

const router = Router()

router.post(
  '/',
  auth('creator'),
  validateRequest(createBlogValidationSchema),
  BlogController.createBlog
)

router.get(
  '/',
  BlogController.getAllBlog,
)

export const SkillRoutes = router
