"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";


function Posts() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Post List');

  return (
    <div>Posts</div>
  )
}

export default Posts