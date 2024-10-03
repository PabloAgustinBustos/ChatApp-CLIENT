import { Link } from "react-router-dom"
import GenderCheckbox from "../../components/GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"
import { ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const { loading, signup } = useSignup()

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({ ...inputs, gender })
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 py-2">Sign up <span className="text-blue-500">ChatApp</span> </h1>
        
        <form onSubmit={submitForm} className="flex flex-col gap-2">
          <div>
            <label className="label p-2"><span className="text-base label-text">Full name</span></label>
            <input 
              type="text" 
              id="fullName"
              className="w-full input input-bordered h-10" 
              placeholder="John Doe" 
              value={inputs.fullName}
              onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Username</span></label>
            <input 
              type="text" 
              id="username"
              className="w-full input input-bordered h-10" 
              placeholder="Johndoe" 
              value={inputs.username}
              onChange={e => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Password</span></label>
            <input 
              type="password" 
              id="password"
              className="w-full input input-bordered h-10" 
              placeholder="Password" 
              value={inputs.password}
              onChange={e => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Confirm password</span></label>
            <input 
              type="password" 
              id="confirmPassword"
              className="w-full input input-bordered h-10" 
              placeholder="Confirm password" 
              onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox selectedGender={inputs.gender} onChange={handleCheckboxChange}/>

          <Link className="w-fit text-sm hover:text-blue-600 mt-2 duration-100" to="/login">Already have an account?</Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? "Loading..." : "Sign up"}</button>
          </div>

        </form>
        
      </div>
      
      <ToastContainer/>
    </div>
  )
}

export default index