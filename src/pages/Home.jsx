import { Plus, Search } from "react-feather"
import { Link } from "react-router-dom"
import List from "../components/List.jsx"

export default function Home() {
  return(
    <>
      <nav className="bg-blue-600 flex justify-between items-center p-4 sticky top-0">
        <h1 className="font-bold text-white text-lg">My Task</h1>
        <Search color="white" stroke-width={4}/>
      </nav>
      <div className="flex justify-center p-5">
        <ul className="w-full">
          <li><List/></li>
        </ul>
      </div>
      <Link to="/input" className="bg-blue-600 fixed rounded-full p-4 bottom-8 right-8"><Plus color="white" stroke-width={3}/></Link>
    </>
  )
}