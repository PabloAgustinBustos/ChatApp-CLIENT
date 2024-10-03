import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const index = () => {
  const { logout } = useLogout()

  return (
    <div className="mt-auto" onClick={logout}>
      <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
    </div>
  )
}

export default index