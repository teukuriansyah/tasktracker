import { Plus, Search } from "react-feather"
import { App as CapacitorApp } from '@capacitor/app';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Plugin from "../plugin/Plugin.js"
import List from "../components/List.jsx"

export default function Home() {
  const [datas, setDatas] = useState([])

  const getData = async() => {
    const data = await Plugin.getData()
    setDatas((data.data == "No Data" ? [] : JSON.parse(data.data)))
  }

  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  useEffect(() => {
    getData()
  },[])
  return(
    <>
      <nav className="bg-blue-600 flex justify-between items-center p-4 sticky top-0">
        <h1 className="font-bold text-white text-lg">My Task</h1>
        <Search color="white" stroke-width={4}/>
      </nav>
      <div className="flex justify-center p-5">
        <ul className="w-full flex flex-col gap-3">
          {datas.length === 0 ? "" : datas.reverse().map(d => <li><List title={d.title}/></li>)}
        </ul>
      </div>
      <Link to="/input" className="bg-blue-600 fixed rounded-full p-4 bottom-8 right-8"><Plus color="white" stroke-width={3}/></Link>
    </>
  )
}