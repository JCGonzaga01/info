declare module "SkillsType" {
  type SkillsItems = Array<SkillsItem>;

  type SkillsItem = {
    title: string;
    icon: string;
    color: string;
    skills: Array<Skill>;
  };

  type Skill = {
    name: string;
    score: number;
    color?: string;
  };
}
