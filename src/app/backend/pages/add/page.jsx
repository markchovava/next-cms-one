"use client"
import { BackendContextState } from '@/context/Backend/BackendContext';


function Add() {
  const { setPageName } = BackendContextState()
  setPageName(() => 'Add Page');

  return (
    <div>Add</div>
  )
}

export default Add