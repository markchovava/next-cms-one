"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



const Edit = () => {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Edit User');

  return (
    <div>Edit</div>
  )
}

export default Edit