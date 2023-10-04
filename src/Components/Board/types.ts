// 프로젝트 데이터의 타입 정의
export interface ProjectData {
  projectTitle: string //프로젝트 이름
  description: string //프로젝트 설명
  readCnt: number //조회수
  likes: number //좋아요 수
  generateDate: string //생성 날짜
  status: '진행 중' | '완료'
  imgSrc?: string
  // projectId: number; //프로젝트Id
  // creatorId: string; //제작자 Id
  // recruitmentStatus: string; //구인 상태(O , X)
  // recruitmentCount: number; //구인 명 수
  // acceptedID: string; //구인된 Id
}
