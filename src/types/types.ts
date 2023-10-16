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
  thumbnail: string
}

export interface ProjectType {
  projectInfo: ProjectInfoType
  techNames: string[]
  thumbnail: string
}

export type ProjectsType = ProjectType[]
