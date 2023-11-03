"use client"
import { BackendContextState } from '@/context/Backend/BackendContext';


function Edit() {
  const { pageName, setPageName } = BackendContextState()
  setPageName(() => 'Edit Page');
  
  return (
    <div className="w-[100%] h-auto pt-4 pb-8">
      {/*  */}
      <section className="px-8 bg-slate-50">
        <h1 className="font-semibold text-[3.5rem] pb-4">{pageName}</h1>
      </section>
      {/*  */}
      <section className='w-[100%] h-auto bg-white px-8 pt-4 pb-8'>
        Add Form
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default Edit