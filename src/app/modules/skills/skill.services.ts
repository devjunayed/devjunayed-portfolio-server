import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TSkill } from './skills.interface'
import { Skills } from './skills.model'

const createSkillIntoDB = async ({
  skillName,
  icon,
  categoryName,
  description,
}: TSkill) => {
  const isCategoryExist = await Skills.findOne({
    categoryName,
  })

  if(isCategoryExist && isCategoryExist.skills.find(skill => skill.icon === icon)){
    throw new AppError(httpStatus.NOT_ACCEPTABLE, "Icon is already added");
  }

  if (isCategoryExist) {
    const result = await Skills.findOneAndUpdate(
      { categoryName },
      {
        $push: {
          skills: {
            skillName,
            icon,
            description,
          },
        },
      },
    )
    return result
  }
  const result = await Skills.create({
    categoryName,
    skills: [{ skillName, icon, description }],
  })
  return result
}

export const SkillServices = {
  createSkillIntoDB,
}
