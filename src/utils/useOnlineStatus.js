import { useEffect, useState } from "react"

const useOnlineStatus = () =>{

    const [onlineStat,setOnlineStat] = useState(true)

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            return  setOnlineStat(false)
        })

        window.addEventListener("online",()=>{
            return  setOnlineStat(true)
        })

    },[])

    return onlineStat;
}
export default useOnlineStatus