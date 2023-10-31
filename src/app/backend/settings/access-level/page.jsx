"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";


function AccessLevel() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Access Level List');

  return (
    <div>AccessLevel</div>
  )
}

export default AccessLevel