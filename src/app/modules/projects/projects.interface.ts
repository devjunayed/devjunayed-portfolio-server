export type TProjectTechnology = {
  title: string;
  icon: string
}

export type TProjectTag = {
  title: string
}

export type TProject = {
  projectTitle: string;
  projectThumbnail: string;
  projectClientViewLink: string;
  projectServerViewLink?: string;
  projectClientCodeLink: string;
  projectServerCodeLink: string;
  projectDescription: string;
  projectShortDescription: string;
  projectTags: TProjectTag[];
  projectTechnologies: TProjectTechnology[];
  isFeatured: boolean;
};

export type TProjects = {
  projects: TProject[];
};
