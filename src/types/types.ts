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
  techIds: number[]
  thumbnail: string
}

export type ProjectsType = ProjectType[]

export interface UserType {
  userId: string
  password: string
  name: string
  nickname: string
  email: string
  gitAddress: string
  point: number
}

export type UsersType = UserType[]

export type CommentType = {
  commentId: number
  userId: string
  content: string
  createdAt: string
}
