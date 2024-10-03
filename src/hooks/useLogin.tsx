import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { Zoom, toast } from "react-toastify"

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const login = async(username: string, password: string) => {
    try {
      setIsLoading(true)

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (!res.ok) {
        
        toast.error(data.error, {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          })
        return
      }

      setAuthUser(data)
    } catch(e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  return {isLoading, login}
}

export default useLogin