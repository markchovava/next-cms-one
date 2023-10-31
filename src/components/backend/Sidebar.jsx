"use client"
import { useState } from 'react'
import Link from 'next/link'
import { MdContentPaste } from 'react-icons/md'
import { BiChevronDown, BiChevronUp, BiChevronRight } from 'react-icons/bi'



const Sidebar = () => {
    const [isActive, setIsActive] = useState({})
  return (
    <>
        <section className='w-[20vw] min-h-[100vh] text-white bg-slate-900'>
        {/**** SIDEBAR TOP ****/}
        <div className='pt-6 pb-4 border-b border-slate-300 mb-4'>
          <h2 className='flex items-center justify-start px-4'>
            <Link className='flex justify-start items-center gap-3 text-xl font-semibold' href='#'>
              <MdContentPaste className='text-2xl' /> 
              <span className=''>CMS-ONE</span>
              </Link>
          </h2>
        </div>
        {/**** SIDEBAR MAIN ****/}
        <div className=''>
          <ul className='px-4'>

            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.dashboard == true ? {dashboard: false} : {dashboard: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                    Dashboard
                  <span className='flex'>
                    {isActive.dashboard == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }  
                  </span>
                </Link>
                { isActive.dashboard == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/dashboard' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> View All</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>

            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.user == true ? {user: false} : {user: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                    Users
                  <span className='flex'>
                    {isActive.user == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }  
                  </span>
                </Link>
                { isActive.user == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/user' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> View All</Link>
                    </li>
                    <li className='mb-1'>
                      <Link href='/backend/user/add' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> Add</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>
       
            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.pages == true ? {pages: false} : {pages: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                  Pages
                  <span className='flex'>
                    {isActive.pages == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }
                  </span>
                </Link>
                { isActive.pages == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/pages' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> View All</Link>
                    </li>
                    <li className='mb-1'>
                      <Link href='/backend/pages/add' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> Add</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>

            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.posts == true ? {posts: false} : {posts: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                    Posts
                  <span className='flex'>
                    {isActive.posts == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }  
                  </span>
                </Link>
                { isActive.posts == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/posts' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> View All</Link>
                    </li>
                    <li className='mb-1'>
                      <Link href='/backend/posts/add' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> Add</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>

            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.media == true ? {media: false} : {media: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                    Media
                  <span className='flex'>
                    {isActive.media == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }  
                  </span>
                </Link>
                { isActive.media == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/posts' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> View All</Link>
                    </li>
                    <li className='mb-1'>
                      <Link href='/backend/posts/add' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> Add</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>

            {/* SECTION */}
            <li className='pb-2'>
              <div className=''>
                <Link href='#' onClick={() => {
                    setIsActive(() => isActive.settings == true ? {settings: false} : {settings: true})
                    //console.log(isActive.dashboard)
                  }}
                  className='flex justify-between items-center mb-2'> 
                    Settings
                  <span className='flex'>
                    {isActive.settings == true ?
                      <BiChevronUp className='text-lg' />
                    :
                      <BiChevronDown className='text-lg' />
                    }  
                  </span>
                </Link>
                { isActive.settings == true 
                  ? 
                  <ul className='pl-4 transition'>
                    <li className='mb-1'>
                      <Link href='/backend/settings/access-level' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> Access Level</Link>
                    </li>
                    <li className='mb-1'>
                      <Link href='/backend/settings/appinfo' className='flex justify-start items-center gap-1 transition-all hover:translate-x-2'>
                        <BiChevronRight /> App Info</Link>
                    </li>
                  </ul>
                  : null }
              </div>
            </li>

            
 
          </ul>
        </div>
        </section>
    </>
  )
}

export default Sidebar