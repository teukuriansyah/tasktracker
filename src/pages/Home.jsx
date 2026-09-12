import { Plus,Search } from "react-feather"
import { Link } from "react-router-dom"
import List from "../components/List.jsx"

export default function Home() {
  return(
    <>
      <nav className="bg-blue-900 flex p-4 justify-between items-center text-white sticky top-0">
        <h1 className="font-bold text-lg">My Task Today</h1>
        <Search size={24} stroke-width={3}/>
      </nav>
      <div className="p-3">
        <ul className="flex flex-col gap-3 items-center">
          <li className="w-[97%]"><List title="test" location="lokasi"/></li>
        </ul>
      </div>
      <Link to="/input"><div className="bg-blue-900 rounded-full text-white fixed bottom-8 right-8 p-3"><Plus size={24} stroke-width={3}/></div></Link>
    </>
  )
}