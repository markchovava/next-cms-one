"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



const View = () => {
  const {setPageName} = BackendContextState()
  setPageName(() => 'View User');

  return (
    <div>View</div>
  )
}

export default View