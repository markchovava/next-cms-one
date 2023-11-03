"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";
import Link from "next/link";
import { BsArrowRight,  BsArrowLeft } from "react-icons/bs"
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Footer from "@/components/backend/Footer";


function Pages() {
  const {pageName, setPageName} = BackendContextState()
  setPageName(() => 'Pages List');

  return (
    <div className="w-[100%] h-auto pt-4 pb-8 ">
      {/*  */}
      <section className="px-8 bg-slate-50">
        <h1 className="font-semibold text-[3.5rem] pb-4">{pageName}</h1>
      </section>

      <div className="overflow-scroll">
        
      </div>
     
        1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br /> 1 <br />
      
      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default Pages