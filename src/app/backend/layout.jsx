
import Sidebar from "@/components/backend/Sidebar";
import Topbar from "@/components/backend/Topbar";
import BackendContextProvider from "@/context/Backend/BackendContext";


export const metadata = {
    title: "CMS ONE",
    description: "This is the description",
};


export default function BackendLayout({ children }) {
    return (
        <div className='w-[100vw] h-auto overflow-y-auto flex justify-start items-center'>
            <BackendContextProvider> 
                {/**** SIDEBAR ****/}
                <Sidebar />
                {/**** MAINBAR ****/}
                <section className='w-[80vw] min-h-[100vh] bg-slate-100'>
                    {/**** TOPBAR ****/}
                    <Topbar />

                    {children}
                </section>
            </BackendContextProvider>
        </div>
    
    )
}

