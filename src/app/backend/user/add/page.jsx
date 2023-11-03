"use client"
import { BackendContextState } from "@/context/Backend/BackendContext";
import { MdAddCircleOutline } from "react-icons/md"
import Topbar from "@/components/backend/Topbar";
import Footer from "@/components/backend/Footer";



const Add = () => {
  const {pageName, setPageName} = BackendContextState()
  setPageName(() => 'Add User');

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
              {/* USERNAME */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Username:</label>
                <input type='text' placeholder='Enter the Username...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div>    
              {/* FULL NAME */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Full Name:</label>
                <input type='text' placeholder='Enter the Full Name...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div>  
               {/* GENDER */}
               <div className="pb-4">
                <label className='text-sm font-semibold pb-2 block'>Gender:</label>
                <select className="w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4 focus:ring-green-400 focus:border-green-400">
                  <option className=''>Choose an option.</option>
                  <option className='p-3'>Male</option>
                  <option className='p-3'>Female</option>
                </select>
              </div> 
              {/* DATE OF BIRTH */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Date of Birth:</label>
                <input type='text' placeholder='01 October 2000...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div>   
              {/* EMAIL */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Email:</label>
                <input type='email' placeholder='Enter the Email...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
              </div>    
              {/* PHONE NUMBER */}
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Phone Number:</label>
                <input type='text' placeholder='Enter the Phone Number...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-3 px-4' />
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
                {`${pageName} Image`}
              </h4> 
              <div className='pb-4'>
                <label className='text-sm font-semibold pb-2 block'>Image</label>
                <input type='file' placeholder='01 October 2000...' 
                  className='w-[100%] border border-slate-300 rounded-md outline-none py-2 px-3 mb-3' />
                <div className="w-[100%] flex items-center justify-center">
                  <div className="w-[50%] aspect-square relative overflow-hidden rounded-full border border-slate-400">
                    <div className="w-[100%] h-[100%] flex justify-center items-center ">
                      No Image</div>
                    <img className="absolute object-cover z-20 top-0 left-0"
                      src=""/>
                  </div>
                </div>
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