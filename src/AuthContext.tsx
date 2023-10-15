import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

// 컨텍스트의 타입 정의
interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태를 가져옴
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn')
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const login = () => {
    setIsLoggedIn(true)
    // 로그인 상태를 로컬 스토리지에 저장
    localStorage.setItem('isLoggedIn', 'true')
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userId')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    console.log('error')
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
