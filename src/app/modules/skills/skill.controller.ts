import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { SkillServices } from './skill.services'

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDB(req.body)
  console.log(result)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill created successfully',
    data: result,
  })
})

export const SkillsController = {
  createSkill,
}
