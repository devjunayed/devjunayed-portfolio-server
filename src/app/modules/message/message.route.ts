import { Router } from 'express'
import { MessageController } from './message.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import { MessageValidationSchema } from './message.validation'

const router = Router()

router.post(
  '/',
  validateRequest(MessageValidationSchema),
  MessageController.sendMessage,
)

export const MessageRoutes = router
