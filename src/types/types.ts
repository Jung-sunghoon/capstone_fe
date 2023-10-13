export interface ProjectInfoType {
  projectId: number
  projectTitle: string
  description: string | any
  userId: string
  projectStatus: string
  status: string
  recruitmentCount: number
  generateDate: string
  likes: number
  views: number
}

export interface ProjectType {
  projectInfo: ProjectInfoType
  techNames: string[]
}

export type ProjectsType = ProjectType[]
