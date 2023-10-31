"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";



function Add() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Add Access Level');

  return (
    <div>Add</div>
  )
}

export default Add