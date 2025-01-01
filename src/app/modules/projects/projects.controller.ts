import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { SkillServices } from './projects.services'

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill created successfully',
    data: result,
  })
})
const getAllSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillFromDB()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill fetched successfully',
    data: result,
  })
})

export const SkillsController = {
  createSkill,
  getAllSkill
}
