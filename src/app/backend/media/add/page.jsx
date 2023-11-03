"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";
import { MdAddCircleOutline } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import Topbar from "@/components/backend/Topbar";
import Footer from "@/components/backend/Footer";



const Add = () => {
    const {pageName, setPageName} = BackendContextState()
    setPageName(() => 'Add Media');


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
              {/* IMAGE */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Image:</label>
                <div className="w-[100%] flex items-center justify-center pb-4">
                  <div className="w-[50%] aspect-[5/3] relative overflow-hidden rounded-2xl border border-slate-400">
                    <div className="w-[100%] h-[100%] flex justify-center items-center ">
                      No Image</div>
                    <img className="absolute object-cover z-20 top-0 left-0"
                        src=""/>
                  </div>
                </div>
                <input type='file' className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' /> 
              </div>
              {/* TITLE */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Title:</label>
                <input type='text' placeholder='Enter the Title...' 
                    className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div>  
              {/* BUTTON */}
              <div className="pt-4 pb-8">
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