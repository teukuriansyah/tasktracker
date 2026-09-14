import Plugin from "../plugin/Plugin.js"
import { useState, useEffect } from "react"

export default function Home() {
  const [datas,setDatas] = useState("")

  const getData = async() => {
    const data = await Plugin.getData()
    setDatas(data.data)
  }
  
  useEffect(() => {
    getData()
  },[])
  return(
    <>
      {datas}
    </>
  )
}