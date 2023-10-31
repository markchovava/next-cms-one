export const metadata = {
    title: "CMS ONE Auth",
    description: "This is the description",
};

export default function AuthLayout({ children }) {
    return (
    <div className='bg-slate-100 w-[100vw] h-auto m-0 p-0'> 
        <section className='mx-auto py-[6rem] w-[40vw] min-h-[100vh] text-black'>
            {children}
        </section>
    </div>
    )
}