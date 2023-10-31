"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";
import { useState } from "react";



function Dashboard() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Dashboard');


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard