
import Sidebar from "@/components/backend/Sidebar";
import BackendContextProvider from "@/context/Backend/BackendContext";


export const metadata = {
    title: "CMS ONE",
    description: "This is the description",
};


export default function BackendLayout({ children }) {
    return (
        <div>
            <BackendContextProvider> 
            <div className="w-[100%] h-auto bg-slate-100 flex justify-start items-start"> 
                <Sidebar />
                {/*  */}
                {children} 
            </div>
            </BackendContextProvider>
        </div>
    
    )
}

