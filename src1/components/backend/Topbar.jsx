"use client"
import { GrUserSettings, GrMailOption } from 'react-icons/gr'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { BiSolidExit } from 'react-icons/bi'
import { BsPencilFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'
import { BackendContextState } from '@/context/Backend/BackendContext'

const Topbar = () => {
    const [isUserClicked,setIsUserClicked] = useState(false)
    const [isMessageClicked, setIsMessageClicked] = useState(false)
    const [isSettingsClicked, setIsSettingsClicked] = useState(false)
    const {pageName} = BackendContextState()

  return (
    <div className='w-[100%] h-auto bg-white drop-shadow-xl flex justify-between py-4 px-8'>
        <section className="">
            <h4 className='font-medium'>{pageName ? pageName : 'CMS-ONE Page'}</h4> 
        </section>
        <section className="">
            <ul className="flex justify-end gap-2 items-center">
                {/* MESSAGE */}
                <li className='ml-4 relative '>
                    <span onClick={() => {
                        setIsMessageClicked(!isMessageClicked)
                        setIsUserClicked(false)
                        setIsSettingsClicked(false)
                    }} 
                        className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                        <GrMailOption className='text-lg'/>
                        {isMessageClicked == true ? 
                            <BiChevronDown className='text-lg' /> 
                            :   
                            <BiChevronUp className='text-lg' />
                        }
                    </span>
                    { isMessageClicked == true ? 
                        <ul className='bg-slate-50 w-[11rem] top-11 rounded-md right-0 absolute py-2 '>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <span className='flex justify-center items-center bg-slate-800 px-1 rounded-full text-white'>0</span> Read Messages</Link></li>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <BsPencilFill /> Write Message</Link></li>
                        </ul>
                    : '' }
                </li>

                {/* SETTINGS */}
                <li className='ml-4 relative '>
                    <span onClick={() => {
                        setIsSettingsClicked(!isSettingsClicked)
                        setIsUserClicked(false)
                        setIsMessageClicked(false)
                    }} 
                        className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                        <FiSettings className='text-lg'/>
                        {isSettingsClicked == true ? 
                            <BiChevronDown className='text-lg' /> 
                            :   
                            <BiChevronUp className='text-lg' />
                        }
                    </span>
                    { isSettingsClicked == true ? 
                        <ul className='bg-slate-50 w-[11rem] top-11 rounded-md right-0 absolute py-2 '>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="/backend/settings/appinfo" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <span className='flex justify-center items-center bg-slate-800 px-1 rounded-full text-white'>0</span> 
                                    App Info</Link></li>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="/backend/settings/access-level" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <BsPencilFill /> Access Level</Link></li>
                        </ul>
                    : '' }
                </li>
                
                {/* USER */}
                <li className='ml-4 relative '>
                    <span onClick={() => {
                        setIsUserClicked(!isUserClicked)
                        setIsMessageClicked(false)
                        setIsSettingsClicked(false)
                    }} 
                        className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                        <GrUserSettings className='text-lg'/>
                        {isUserClicked == true ? 
                            <BiChevronDown className='text-lg' /> 
                            :   
                            <BiChevronUp className='text-lg' />
                        }
                    </span>
                    { isUserClicked == true ? 
                        <ul className='bg-slate-50 w-[9rem] top-11 rounded-md right-0 absolute py-2 '>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <FaUser /> My Profile</Link></li>
                            <li className='text-slate-800 hover:text-black px-3'>
                                <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                                    <BiSolidExit /> Sign Out</Link></li>
                        </ul>
                    : '' }
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Topbar