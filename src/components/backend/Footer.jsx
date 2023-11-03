import Link from "next/link"


const Footer = () => {

  return (
    <section className="bg-white py-6 px-8 mt-1 drop-shadow-xl w-[100%] h-auto">
        <div className="flex justify-between items-center">
        <p className="font-medium text-sm">CMS-One, 2023 &#174;</p>
        <ul className=" flex justify-end gap-2 items-center">
            <li><Link href="" className="text-green-700 hover:text-green-900 transition">
                About Us</Link></li> /
            <li><Link href="" className="text-green-700 hover:text-green-900 transition">
                Contact Us</Link></li>
        </ul>
        </div>
    </section>
  )
}

export default Footer