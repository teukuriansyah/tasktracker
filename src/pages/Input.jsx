import { useState, useEffect } from "react"
import { App as CapacitorApp } from '@capacitor/app';
import { Link } from "react-router-dom"
import { ArrowLeft } from "react-feather"
import { Geolocation} from "@capacitor/geolocation"
import { Camera } from '@capacitor/camera';
import Plugin from "../plugin/Plugin"

export default function Input() {
  const [datas, setDatas] = useState("")
  const [location, setLocation] = useState("")
  const [imgSrc, setImgSrc] = useState("")

  const getData = async() => {
    const data = await Plugin.getData()
    setDatas((data.data == "No data") ? [] : JSON.parse(data.data))
  }

  const getLocation = async() => {
    const location = await Geolocation.getCurrentPosition()
    setLocation(`${location.coords.latitude}, ${location.coords.longitude}`)
  }

  const takePicture = async () => {
    try {
      const result = await Camera.takePhoto({
        quality: 90,
        includeMetadata: true,
      });

      setImgSrc(result.webPath)
    } catch (e) {
      const error = e;
      const message = error.code ? `[${error.code}] ${error.message}` : error.message;
      console.error('takePhoto failed:', message);
    }
  };

  const postData = async(formData) => {
    const title = formData.get("title")
    const date = formData.get("date")
    const sendData = datas
    sendData.push({title,date,location,imgSrc})
    await Plugin.postData({data:JSON.stringify(sendData)})
    setLocation("")
    setImgSrc("")
  }

  CapacitorApp.addListener('backButton', () => window.history.back());

  useEffect(() => {
    getData()
  },[])
  return(
    <>
      <nav className="bg-gray-900 p-4 text-white flex gap-3 items-center">
        <Link to="/"><ArrowLeft/></Link>
        <h1 className="font-bold text-lg">Add new task</h1>
      </nav>
      <div className="p-4">
        <form className="flex flex-col gap-3" action={postData}>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">Title</label>
            <input name="title" className="outline-0 border-2 border-gray-500 rounded" required/>
            <label className="text-gray-700 font-bold">Date</label>
            <input name="date" type="date" required className="outline-0 border-2 border-gray-500 rounded w-full"/>
          </div>
          <div className="flex flex-col gap-2 border-2 border-blue-500 border-dashed rounded bg-blue-50 p-3">
            <h1 className="text-blue-800 font-bold">Integrated Native Android</h1>
            <button type="button" onClick={() => takePicture()} className="border-2 border-gray-500 rounded bg-gray-200">📷 Take photo</button>
            <img src={imgSrc} className={`${(imgSrc == "") ? "hidden" : ""} aspect-square w-[50%]`}/>
            <button type="button" onClick={() => getLocation()} className="border-2 border-gray-500 rounded bg-gray-200">{(location === "") ? "📍 Add location" : location}</button>
          </div>
          <div>
            <button type="submit" className="bg-blue-800 font-bold text-white rounded w-full p-2">Save Task</button>
          </div>
        </form>
      </div>
    </>
  )
}