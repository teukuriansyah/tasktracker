import { ArrowLeft } from "react-feather"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { TaskPlugin } from "../../taskplugin/src/index.ts"

export default function Input() {
  const [location,setLocation] = useState("")
  const [message, setMessage] = useState()

  const getLocation = async() => {
    const location = await TaskPlugin.getLocation()
    setLocation(location)
  }

  const postData = async(formData) => {
    const date = formData.get("date")
    const title = formData.get("title")
    const nativeMessage = await TaskPlugin.postData(JSON.stringify({title,date}))
    setMessage(nativeMessage)
  }
  return(
    <>
      <nav className="bg-gray-950 p-4 text-white flex gap-2 items-center sticky">
        <Link to="/"><ArrowLeft size={20} stroke-width={3}/></Link>
        <h1 className="font-bold text-lg">Add New Task</h1>
      </nav>
      <div>
        <form action={postData} className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label>Title</label>
              <input name="title" className="outline-0 border border-grey-50 rounded px-1"/>
            </div>
            <div className="flex flex-col">
              <label>Date</label>
              <input name="date" type="date" className="outline-0 border rounded w-full border-grey-50 px-1"/>
            </div>
          </div>
          
          <div className="border border-dashed rounded border-blue-300 bg-blue-50 p-5 flex flex-col gap-5">
            <button className="border border-gray-400 bg-gray-200 text-gray-700 rounded w-full">📷 Take photo</button>
            <button className="border border-gray-400 bg-gray-200 text-gray-700 rounded w-full" onClick={() => getLocation()}>📍 Located tag {location}</button>
          </div>
          
          <button type="submit" className="bg-blue-600 font-bold text-white rounded p-3 w-full">Save Task</button>
        </form>
      </div>
    </>
  )
}