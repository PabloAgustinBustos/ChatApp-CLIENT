import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type AuthUserType = {
  id: string
  fullName: string
  email: string
  profilePicture: string
  gender: string
}

type ContextType = {
  authUser: AuthUserType | null
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>
  isLoading: boolean
}

// Contexto que se compartirá entre componentes
const AuthContext = createContext<ContextType>({
  authUser: null,
  setAuthUser: () => {},
  isLoading: true
})

// Hook para obtener los datos del contexto
export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({children}:{children: ReactNode}) => {
  // .Todo esto es lo primero que se ejecuta
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("petición")
    const fetchAuthUser = async () => {
      try {
        const res = await fetch("/api/auth/me")
        const data = await res.json()

        if(!res.ok) {
          throw new Error(data.error)
        }

        // Una vez que tengo el usuario, lo guardo en el contexto
        // Como hay componentes suscriptos al contexto, se re-renderizan
        setAuthUser(data)
      } catch (e) {
        // console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAuthUser()
  }, [])

  return (<AuthContext.Provider value={{
    authUser,
    setAuthUser,
    isLoading
  }}>
    {children}
  </AuthContext.Provider>)
}