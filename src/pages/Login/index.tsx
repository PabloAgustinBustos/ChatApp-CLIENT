import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  const [inputs, setInput] = useState({
    username: "",
    password: ""
  })

  const {isLoading, login} = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    login(inputs.username, inputs.password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 py-2">Login <span className="text-blue-500">ChatApp</span> </h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2"><span className="text-base label-text">Username</span></label>
            <input 
              type="text" 
              className="w-full input input-bordered h-10"
              placeholder="Enter username"
              value={inputs.username}
              onChange={e => setInput({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Password</span></label>
            <input 
              type="password" 
              className="w-full input input-bordered h-10"
              placeholder="Enter password"
              value={inputs.password}
              onChange={e => setInput({...inputs, password: e.target.value})}
            />
          </div>

          <Link className="w-fit text-sm hover:text-blue-600 mt-2 duration-100" to="/signup">Don't have an account?</Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
          </div>
        </form>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default index