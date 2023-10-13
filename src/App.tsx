import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import SignUp from './pages/Authentication/SignUp'
import ServiceInfo from './pages/ServiceInfo/ServiceInfo'
import Login from './pages/Authentication/Login'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/Projects/ProjectDetails'
import { AuthProvider } from './AuthContext' // AuthProvider 추가
import Generate from './pages/Projects/Generate'

function App() {
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
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
