import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ProjectsController } from './projects.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { createProjectValidationSchema } from './projects.validation';

const router = Router();

router.post(
  '/',
  auth('creator'),
  validateRequest(createProjectValidationSchema),
  ProjectsController.createProject
);

router.get('/featured', ProjectsController.getFeaturedProjects);
router.get('/', ProjectsController.getAllProjects);
router.get('/:projectId', ProjectsController.getSingleProject);
router.patch('/:projectId', ProjectsController.updateProject);

export const ProjectRoutes = router;
