
import Sidebar from "@/components/backend/Sidebar";
import Topbar from "@/components/backend/Topbar";
import BackendContextProvider from "@/context/Backend/BackendContext";


export const metadata = {
    title: "CMS ONE",
    description: "This is the description",
};


export default function BackendLayout({ children }) {
    return (
        <div className="w-[100%] h-auto flex justify-start items-start bg-slate-100">
            <BackendContextProvider> 
                {/**** SIDEBAR ****/}
                <Sidebar />
                {/**** MAINBAR ****/}
                <section className='left-[22%] fixed w-[78%] overflow-auto'>
                    {/**** TOPBAR ****/}
                    <Topbar />
                    {/*  */}
                    {children}
                </section>
            </BackendContextProvider>
        </div>
    
    )
}

