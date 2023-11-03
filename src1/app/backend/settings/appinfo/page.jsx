"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";


function AppInfo() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'App Info');
  return (
    <div>AppInfo</div>
  )
}

export default AppInfo