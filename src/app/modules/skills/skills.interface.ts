export type TSkill = {
  categoryName?: string
  skillName: string
  description: string
  icon: string
}

export type TSkills = {
  categoryName: string
  skills: TSkill[]
}
