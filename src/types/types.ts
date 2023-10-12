export interface ProjectInfoType {
  projectId: number
  projectTitle: string
  description: string
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
  techIds: number[]
}

export type ProjectsType = ProjectType[]
