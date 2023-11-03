import Link from 'next/link'
import React from 'react'

function Login() {
  return (
  
    <div className='w-[100%] h-auto py-[3rem] rounded-lg bg-white text-black px-6'>
        <div className='w-[100%] flex justify-center items-center flex-col pb-8'>
          <h1 className='text-[3.5rem] text-center font-bold'>CMS-ONE</h1>
          <h4 className='text-[1.5rem] text-center text-blue-700 font-bold pb-3'>Login here.</h4>
          <div className='border-b border-slate-400 w-[7rem]'></div>
        </div>
        <div className='w-[100%]'>
          <div className='pb-6'>
            <input type='text' 
              className='w-[100%] border border-slate-300 outline-none rounded-md p-3' 
              placeholder='Enter email here...'/>
          </div>
          <div className='pb-6'>
            <input type='text' 
              className='w-[100%] border border-slate-300 outline-none rounded-md p-3' 
              placeholder='Enter Password here...'/>
              <div className='flex justify-end items-center'>
                <Link href='#' className='text-red-600 hover:text-red-700 text-sm pt-2 cursor-pointer'>Forgot Password.</Link>
              </div>
          </div>
          <div className='pb-6'>
            <button type='text' 
              className='w-[100%] border-none bg-blue-700 hover:bg-blue-600 text-white outline-none rounded-md p-3' >
              Submit
            </button>
          </div>
          <div className='pb-6 w-[100%] flex justify-center'>
            <p>Not a Member yet? <Link href='/register' className='transition text-blue-600 hover:text-blue-700'>Sign up.</Link></p>
          </div>
        </div>
    </div>
  
  )
}

export default Login