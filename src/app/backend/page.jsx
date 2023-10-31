"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";


function Backend() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Backend');
  
  return (
    <div>Backend</div>
  )
}

export default Backend