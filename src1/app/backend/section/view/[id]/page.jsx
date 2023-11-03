import { BackendContextState } from "@/context/Backend/BackendContext";



function View() {
  const { pageName, setPageName } = BackendContextState()
  setPageName(() => 'View Section');

  return (
    <div className="w-[100%] h-auto pt-4 pb-8">
      {/*  */}
      <section className="px-8 bg-slate-50">
        <h1 className="font-semibold text-[3.5rem] pb-4">{pageName}</h1>
      </section>
    </div>
  )
}

export default Edit