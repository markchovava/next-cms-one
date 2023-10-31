"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



const Add = () => {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Add User');

  return (
    <div>Add</div>
  )
}

export default Add