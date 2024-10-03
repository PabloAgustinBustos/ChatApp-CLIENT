import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { Zoom, toast } from "react-toastify"

type SignupInputs = {
  fullName: string
  username: string
  password: string
  confirmPassword: string
  gender: string
}

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signup = async(inputs: SignupInputs) => {
    try {
      setLoading(true)

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
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
    } catch (e) {
      console.log("error", e)
    } finally {
      setLoading(false)
    }
  }

  return {loading, signup}
}

export default useSignup