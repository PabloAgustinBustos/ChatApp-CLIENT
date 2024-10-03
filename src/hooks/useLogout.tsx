import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()
  
  const logout = async() => {
    try {
      setLoading(true)

      const res = await fetch("/api/auth/logout", {
        method: "POST",
      })

      const data = await res.json()

      console.log(data)
      if (!res.ok) throw new Error(data.error)

      setAuthUser(null)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return {loading, logout}
}

export default useLogout