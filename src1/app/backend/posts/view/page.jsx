"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



function View() {
  const {setPageName} = BackendContextState();
  setPageName(() => 'View Post');

  return (
    <div>View</div>
  )
}

export default View