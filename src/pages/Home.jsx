import { Plus, Search } from "react-feather"
import { App as CapacitorApp } from '@capacitor/app';
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NativeBiometric} from "capacitor-native-biometric"
import Plugin from "../plugin/Plugin.js"
import List from "../components/List.jsx"

export default function Home() {
  const navigate = useNavigate()
  const [datas, setDatas] = useState([])

  const getData = async() => {
    const data = await Plugin.getData()
    setDatas((data.data == "No Data" ? [] : JSON.parse(data.data)))
  }

  const checkCredentialStatus = async () => {
    try {
      const credentials = await NativeBiometric.getCredentials({
        server: "com.test.tasktracker",
      });

    } catch (error) {
      navigate('/login');
    }
  };

  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  useEffect(() => {
    checkCredentialStatus()
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
          {datas.length === 0 ? "" : datas.reverse().map(d => <li><List title={d.title} location={d.location} img={d.imgSrc}/></li>)}
        </ul>
      </div>
      <Link to="/input" className="bg-blue-600 fixed rounded-full p-4 bottom-8 right-8"><Plus color="white" stroke-width={3}/></Link>
    </>
  )
}