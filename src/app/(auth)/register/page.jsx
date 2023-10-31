import Link from 'next/link'


function Register() {
  return (
    <div className='w-[100%] h-auto py-[3rem] rounded-lg bg-white text-black px-6'>
        <div className='w-[100%] flex justify-center items-center flex-col pb-8'>
          <h1 className='text-[3.5rem] text-center font-bold'>CMS-ONE</h1>
          <h4 className='text-[1.5rem] text-center text-blue-700 font-bold pb-3'>Register Here.</h4>
          <div className='border-b border-slate-400 w-[7rem]'></div>
        </div>
        <div className='w-[100%]'>
          <div className='pb-6'>
            <input type='text' 
              className='w-[100%] border border-slate-300 outline-none rounded-md p-3' 
              placeholder='Enter Email here...'/>
          </div>
          <div className='pb-6'>
            <input type='text' 
              className='w-[100%] border border-slate-300 outline-none rounded-md p-3' 
              placeholder='Enter Password here...'/>
          </div>
          <div className='pb-6'>
            <input type='text' 
              className='w-[100%] border border-slate-300 outline-none rounded-md p-3' 
              placeholder='Confirm Password here...'/>
          </div>
          <div className='pb-6 flex justify-start items-center gap-3'>
            <input type='checkbox' className='border border-slate-300 rounded' />I Agree to the
              <Link className='text-blue-600 transition hover:text-blue-700' href='#'>Terms and Conditions</Link>
          </div>
          <div className='pb-6'>
            <button type='text' 
              className='w-[100%] border-none bg-blue-700 hover:bg-blue-600 text-white outline-none rounded-md p-3' >
              Submit
            </button>
          </div>
          <div className='pb-6 w-[100%] flex justify-center'>
            <p>Already a Member? <Link href='/login' className='transition text-blue-600 hover:text-blue-700'>Login.</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Register