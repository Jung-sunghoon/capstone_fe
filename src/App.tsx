import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import SignUp from './pages/Authentication/SignUp'
import ServiceInfo from './pages/ServiceInfo/ServiceInfo'
import Login from './pages/Authentication/Login'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/Projects/ProjectDetails'
import { AuthProvider } from './AuthContext' // AuthProvider 추가
import Generate from './pages/Projects/Generate'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    const fetchTechstacks = async () => {
      try {
        // Axios를 사용하여 서버에서 프로젝트 목록 가져오기
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/techstacks`,
        )
        if (response.status === 200) {
          // 가져온 techstacks 설정
          localStorage.setItem('techstacks', JSON.stringify(response.data))
        }
      } catch (error) {
        // 오류 처리
        console.error('Error fetching techstacks list:', error)
      }
    }

    // 초기 렌더링 시 데이터 가져오기
    fetchTechstacks()
  }, []) // 빈 배열을 두 번째 인수로 전달하면 useEffect가 초기 렌더링 시 한 번만 실행됩니다.

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/sign-up/*" element={<SignUp />} />
          <Route path="/service-info/*" element={<ServiceInfo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/*" element={<ProjectDetails />} />
          <Route path="/generate/*" element={<Generate />} />
          <Route path="/edit/*" element={<Generate />} />
          <Route path="/" element={<ServiceInfo />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
