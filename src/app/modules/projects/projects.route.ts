import { Router } from 'express'
import auth from '../../middlewares/auth'
import { SkillsController } from './skill.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import { createSkillValidationSchema } from './projects.validation'

const router = Router()

router.post(
  '/',
  auth('creator'),
  validateRequest(createSkillValidationSchema),
  SkillsController.createSkill,
)
router.get(
  '/',
  SkillsController.getAllSkill,
)

export const SkillRoutes = router
