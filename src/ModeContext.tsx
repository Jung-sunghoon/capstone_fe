import { ReactNode } from 'react'

interface ModeProviderProps {
  children: ReactNode
}

export function ModeProvider({ children }: ModeProviderProps) {
  console.log(children)
}
