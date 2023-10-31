"use client"
import { BackendContextState } from '@/context/Backend/BackendContext';


function Edit() {
  const { setPageName } = BackendContextState()
  setPageName(() => 'Edit Page');
  return (
    <div>Edit</div>
  )
}

export default Edit