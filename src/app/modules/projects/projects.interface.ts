export type TProject = {
  projectTitle: string;
  projectThumbnail: string;
  projectClientViewLink: string;
  projectServerViewLink: string;
  projectClientCodeLink: string;
  projectServerCodeLink: string;
  projectDescription: string;
  projectTags: string;
  projectTechnologies: string;
};

export type TProjects = {
  projects: TProject[];
};
