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
 const result = await Skills.create(Skills);
 return result;
}


export const SkillServices = {
    createSkillIntoDB
}