export interface ProjectType {
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
  techIds: number[]
  applications?: any
}

export type ProjectsType = ProjectType[]

export interface UserType {
  userId: string
  password: string
  name: string
  nickname: string
  email: string
  studentNumber: number
  department: string
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
