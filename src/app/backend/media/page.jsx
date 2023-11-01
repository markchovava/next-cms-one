"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



function Media() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Media List');
  return (
    <div>Media</div>
  )
}

export default Media