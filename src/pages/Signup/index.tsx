import { Link } from "react-router-dom"
import GenderCheckbox from "../../components/GenderCheckbox"

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 py-2">Sign up <span className="text-blue-500">ChatApp</span> </h1>

        <form className="flex flex-col gap-2">
          <div>
            <label className="label p-2"><span className="text-base label-text">Full name</span></label>
            <input type="text" className="w-full input input-bordered h-10" placeholder="John Doe" />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Username</span></label>
            <input type="text" className="w-full input input-bordered h-10" placeholder="Johndoe" />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Password</span></label>
            <input type="password" className="w-full input input-bordered h-10" placeholder="Password" />
          </div>

          <div>
            <label className="label p-2"><span className="text-base label-text">Confirm password</span></label>
            <input type="password" className="w-full input input-bordered h-10" placeholder="Confirm password" />
          </div>

          <GenderCheckbox />

          <Link className="w-fit text-sm hover:text-blue-600 mt-2 duration-100" to="/login">Already have an account?</Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default index