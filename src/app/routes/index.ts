import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/user/user.route'
import { SkillRoutes } from '../modules/skills/skill.route'
import { BlogRoutes } from '../modules/blog/blog.route'
import { ProjectRoutes } from '../modules/projects/projects.route'
import { MessageRoutes } from '../modules/message/message.route'


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
  },
  {
    path: '/project',
    route: ProjectRoutes
  }
  ,
  {
    path: '/blog',
    route: BlogRoutes
  },
  {
    path: '/message',
    route: MessageRoutes
  }
]

routes.forEach((route) => router.use(route.path, route.route))

export default router
