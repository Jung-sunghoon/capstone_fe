import axios from 'axios'
import { UserType } from '@src/types'
import { useEffect, useState } from 'react'
import { convertApplyStatus } from '@src/utils/common'

export interface UserProps {
  userData: UserType
}

export interface ApplicationData {
  projectId: number
  userId: string
  status: string
}

const Profile: React.FC<UserProps> = () => {
  const [userProfile, setUserProfile] = useState<UserType | undefined>(
    undefined,
  )
  const [userApplicationData, setUserApplicationData] = useState<
    ApplicationData[]
  >([])
  const userId = localStorage.userId

  useEffect(() => {
    const profileData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/user_information?userId=${userId}`,
        )
        if (response.status === 200) {
          setUserProfile(response.data)
          console.log('프로필 출력')
        } else {
        }
      } catch (error) {
        console.error('프로필 출력 오류', error)
      }
    }
    const applicationData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/my_applications?userId=${userId}`,
        )
        if (response.status === 200) {
          setUserApplicationData(response.data)
          console.log('신청 리스트 출력')
        } else {
        }
      } catch (error) {
        console.error('신청 리스트 출력 오류', error)
      }
    }
    profileData(), applicationData()
  }, [])

  // const applicationData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${
  //         import.meta.env.VITE_API_ENDPOINT
  //       }/api/my_applications?userId=${userId}`,
  //     )
  //     if (response.status === 200) {
  //       setUserApplicationData(response.data)
  //       console.log('신청 리스트 출력')
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error('신청 리스트 출력 오류', error)
  //   }
  // }
  console.log(userApplicationData)

  return (
    <div>
      <div>
        <section>
          <div>내 정보</div>
          <div>이름: {userProfile?.name}</div>
          <div>아이디: {userProfile?.userId}</div>
          <div>닉네임: {userProfile?.nickname}</div>
          <div>비밀번호: {userProfile?.password}</div>
          <div>이메일: {userProfile?.email}</div>
          <div>Git 주소: {userProfile?.gitAddress}</div>
          <div>포인트: {userProfile?.point}</div>
        </section>
        <section>
          <ul>
            <div>신청한 프로젝트</div>
            {userApplicationData?.map(applydata => (
              <>
                <li key={applydata.projectId}>
                  projectId: {applydata?.projectId}
                </li>
                <li>status: {convertApplyStatus(applydata?.status)}</li>
              </>
            ))}
          </ul>
        </section>
        <section>
          <div>진행 중인 프로젝트</div>
          <div>완료된 프로젝트</div>
        </section>
      </div>
    </div>
  )
}

export default Profile
