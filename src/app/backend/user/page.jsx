"use client"
import Link from "next/link";
import { BackendContextState } from "@/context/Backend/BackendContext";
import { BsArrowRight,  BsArrowLeft } from "react-icons/bs"
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Topbar from "@/components/backend/Topbar";
import Footer from "@/components/backend/Footer";



const User = () => {
    const {pageName, setPageName} = BackendContextState()
    setPageName(() => 'User List');

  return (
    <section className="w-[78%] h-[100vh] overflow-auto scroll__width">

      {/* TOPBAR */}
      <Topbar />

      {/*  */}
      <section className="px-8 pt-4 pb-2 bg-slate-50">
        <h1 className="font-semibold text-[3.5rem]">{pageName}</h1>
      </section>
      {/*  */}
      <section className="bg-white w-[100%] px-8 pt-6 h-auto drop-shadow-xl">
        <div className="flex items-center justify-between pb-4">
          <form className="w-[40%]">
            <input type="text" placeholder="Enter Search here..." className="w-[100%] px-3 py-3 outline-none border border-slate-300 rounded-md" />
          </form>
          <div className="flex justify-end gap-5">
            <section className="flex items-center justify-end gap-3">
              <button className="flex justify-center items-center gap-1 rounded-md px-4 py-2 border border-green-700 transition-all hover:bg-green-700 hover:text-white">
                <BsArrowLeft /> Previous</button>
              <button className="flex justify-center items-center gap-1 rounded-md px-4 py-2 border border-green-700 transition-all hover:bg-green-700 hover:text-white">
                Next <BsArrowRight /></button>
            </section>
            <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-all px-4 py-3 hover:drop-shadow-lg">
              Add Page
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white w-[100%] px-8 pb-8 h-auto drop-shadow-xl">
        {/* TABLE HEADER */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center font-bold">
          <div className="w-[25%] p-2 border-x border-slate-200">PAGE NAME</div>
          <div className="w-[25%] p-2 border-r border-slate-200">CREATED</div>
          <div className="w-[25%] p-2 border-r border-slate-200">AUTHOR</div>
          <div className="w-[25%] p-2 border-r border-slate-200">ACTION</div>
        </div>

        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>

        {/* ------------------------------------------ */}
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>


        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>
        {/* TABLE ROW */}
        <div className="w-[100%] h-auto border-y border-slate-200 flex justify-start items-center ">
          <div className="w-[30%] p-2 border-x border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[25%] p-2 border-r border-slate-200">####</div>
          <div className="w-[20%] p-2 border-r border-slate-200">
            <section className="flex justify-start items-center gap-2">
              <Link href='#'><AiFillEye className="text-xl text-blue-600 hover:text-blue-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillEdit className="text-xl text-green-600 hover:text-green-700 transition-all hover:scale-110" /></Link>
              <Link href='#'><AiFillDelete className="text-xl text-red-600 hover:text-red-700 transition-all hover:scale-110" /></Link>
            </section>
          </div>
        </div>


        {/* PAGINATION */}
        <div className="w-[100%] h-auto flex justify-end items-center pt-4">
          <section className="flex items-center justify-end gap-3">
            <button className="flex justify-center items-center gap-1 rounded-md px-4 py-2 border border-green-700 transition-all hover:bg-green-700 hover:text-white">
              <BsArrowLeft /> Previous</button>
            <button className="flex justify-center items-center gap-1 rounded-md px-4 py-2 border border-green-700 transition-all hover:bg-green-700 hover:text-white">
              Next <BsArrowRight /></button>
          </section>
        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </section>
  )
}

export default User