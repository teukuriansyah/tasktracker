import { Link } from "react-router-dom"
import { ArrowLeft } from "react-feather"

export default function Input() {
  return(
    <>
      <nav className="bg-gray-900 p-4 text-white flex gap-3 items-center">
        <Link to="/"><ArrowLeft/></Link>
        <h1 className="font-bold text-lg">Add new task</h1>
      </nav>
      <div className="p-4">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">Title</label>
            <input className="outline-0 border-2 border-gray-500 rounded"/>
            <label className="text-gray-700 font-bold">Date</label>
            <input type="date" className="outline-0 border-2 border-gray-500 rounded w-full"/>
          </div>
          <div className="flex flex-col gap-2 border-2 border-blue-500 border-dashed rounded bg-blue-50 p-3">
            <h1 className="text-blue-800 font-bold">Integrated Native Android</h1>
            <button className="border-2 border-gray-500 rounded bg-gray-200">📷 Take photo</button>
            <button className="border-2 border-gray-500 rounded bg-gray-200">📍 Add location</button>
          </div>
          <div>
            <button type="submit" className="bg-blue-800 font-bold text-white rounded w-full p-2">Save Task</button>
          </div>
        </form>
      </div>
    </>
  )
}