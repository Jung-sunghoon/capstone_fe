// 프로젝트 데이터의 타입 정의
export interface ProjectData {
  projectTitle: string //프로젝트 이름
  description: string //프로젝트 설명
  views: number //조회수
  likes: number //좋아요 수
  generateDate: string //생성 날짜
  projectStatus: 'Ps_pr' | 'Ps_co'
  imgSrc?: string
  // projectId: number; //프로젝트Id
  // userId: string; //제작자 Id
  // status: string; //구인 상태(O , X)
  // recruitmentCount: number; //구인 명 수
  // acceptedID: string; //구인된 Id
}
