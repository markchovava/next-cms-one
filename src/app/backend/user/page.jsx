"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



const User = () => {
    const {setPageName} = BackendContextState()
    setPageName(() => 'User List');
  return (
    <div>User</div>
  )
}

export default User