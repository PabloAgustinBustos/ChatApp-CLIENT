import { FaSearch } from "react-icons/fa";

const index = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="search..." className="input input-bordered rounded-full"/>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white"><FaSearch className="w-6 h-6 outline-none"/></button>
    </form>
  )
}

export default index