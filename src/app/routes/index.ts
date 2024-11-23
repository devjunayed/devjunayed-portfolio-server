import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/user/user.route'
import { SkillRoutes } from '../modules/skills/skill.route'


const router = Router()

const routes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes
  }
  ,
  {
    path: '/skill',
    route: SkillRoutes
  }
]

routes.forEach((route) => router.use(route.path, route.route))

export default router
