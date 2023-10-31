"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";


function Pages() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Pages List');

  return (
    <div>Pages</div>
  )
}

export default Pages