"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";
import { MdAddCircleOutline } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import Topbar from "@/components/backend/Topbar";
import Footer from "@/components/backend/Footer";



function Add() {
  const { pageName, setPageName } = BackendContextState()
  setPageName(() => 'Add Page');

  return (
    <section className="w-[78%] h-[100vh] overflow-auto scroll__width">

      {/* TOPBAR */}
      <Topbar />

      {/*  */}
      <section className="px-8 pt-4 bg-slate-50">
        <h1 className="font-semibold text-[3.5rem]">{pageName}</h1>
      </section>
      {/*  */}
      <section className='w-[100%] h-auto pt-3 pb-8'>
        <div className='w-[100%] flex justify-between items-start gap-2'>   
            {/* LEFT */}
            <section className='w-[64%] bg-white drop-shadow-md py-4 px-8'>
              <h4 className='font-bold text-2xl pb-4'>{`${pageName} Form`}</h4> 
              {/*  */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Page Title:</label>
                <input type='text' placeholder='Enter the Title...' className='w-[100%] border border-slate-300 rounded-md text-xl outline-none py-3 px-4' />
              </div>    
              {/*  */}
              <div className='pb-4 border-b border-slate-300'>
                <label className='text-sm font-semibold pb-2 block'>Page Description:</label>
                <textarea className='w-[100%] h-[10rem] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div> 
              {/*  */}
              <div className='py-4'>
                <label className='text-sm font-semibold pb-2 block'>Add Page Section:</label>
                <div className='flex justify-start items-center'>
                  <input type='text' placeholder='Enter the Keyword...' 
                    className='w-[88%] border-y border-l border-slate-300 rounded-l-md outline-none py-3 px-4' />
                  <button className='text-center flex items-center justify-center w-[12%] border border-green-700 rounded-r-md bg-green-700 hover:bg-green-800 transition-all py-3 px-4'>
                    <MdAddCircleOutline className='text-2xl text-white' /></button>
                </div>
              </div> 
              {/*  */}
              <div className="pb-4">
                <label className='text-sm font-semibold pb-2 block'>Add Page Section:</label>
                <select className="w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4 focus:ring-green-400 focus:border-green-400">
                  <option className=''>Option 1</option>
                  <option className='p-3'>Option 2</option>
                  <option className='p-3'>Option 3</option>
                  <option className='p-3'>Option 4</option>
                </select>
              </div>
              <div className="pb-6 border-b border-slate-300">
                <ul className="">
                  <li className=" flex items-center justify-between text-sm font-bold pb-2">
                    <div className="70%">
                      NAME </div>
                    <div className="w-[30%] flex justify-start gap-0">
                        <div className="w-[60%]">LEVEL</div>
                        <div className="w-[40%] text-right">ACTION</div>
                    </div>
                  </li>
                  <li className=" flex items-center justify-between">
                    <p className="70%">
                      Name of it </p>
                    <div className="w-[30%] flex items-center justify-between gap-2">
                      <input type="number" min="0" placeholder="1-10" className="w-[60%] px-4 py-2 rounded-lg outline-none border border-slate-300" />  
                      <TiDeleteOutline className="text-red-500 hover:text-red-600 text-2xl" />
                    </div> 
                  </li>
                </ul>
              </div>
              {/* BUTTON */}
              <div className="py-4">
                <button className="w-[100%] text-white text-center flex items-center justify-center rounded-lg bg-green-700 hover:bg-green-800 transition-all py-4">
                  Submit
                </button>
              </div>
            </section>
            {/* RIGHT */}
            <section className='w-[35%] bg-white drop-shadow-md py-4 px-8'>
              <h4 className='font-bold text-2xl pb-4'>
                {`${pageName} Meta`}
              </h4> 
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Meta Keywords</label>
                <div className='flex justify-start items-center'>
                  <input type='text' placeholder='Enter the Keyword...' 
                    className='w-[85%] border-y border-l border-slate-300 rounded-l-md outline-none py-2 px-3' />
                  <button className='w-[15%] flex items-center justify-center border border-green-700 rounded-r-md bg-green-700 hover:bg-green-800 transition-all py-2 px-3'>
                    <MdAddCircleOutline className='text-2xl text-white' /></button>
                </div>
              </div> 
              <div className="pb-4">
                <ul className="flex justify-start gap-2">
                  <li className="bg-green-200 py-1 px-2 rounded-xl flex items-center justify-start gap-1">
                    Tag <TiDeleteOutline className="hover:text-red-700 text-lg" /></li>
                  <li className="bg-green-200 py-1 px-2 rounded-xl flex items-center justify-start gap-1">
                    Tag Two <TiDeleteOutline className="hover:text-red-700 text-lg" /></li>
                  <li className="bg-green-200 py-1 px-2 rounded-xl flex items-center justify-start gap-1">
                    Tag <TiDeleteOutline className="hover:text-red-700 text-lg" /></li>
                  <li className="bg-green-200 py-1 px-2 rounded-xl flex items-center justify-start gap-1">
                    Tag <TiDeleteOutline className="hover:text-red-700 text-lg" /></li>
                </ul>
              </div>   
            </section>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </section>
  )
}

export default Add