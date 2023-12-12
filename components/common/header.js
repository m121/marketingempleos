
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <div className=" top-0 bg-white sticky nav z-10  ">
    <nav className="w-full ">
  <div className="sm:py-5 md:py-2  mx-auto px-6  flex items-center justify-between">
  
   <Link href="/"><p className="text-orange-600 font-black cursor-pointer">Marketing empleos</p></Link>
    <div>
      
      <button  onClick={() => setNavbarOpen(!navbarOpen)} className="sm:inline md:hidden ">
      <img src="/img/hamburguer_icon.svg" className='sm:ml-48 ml-52' />
      </button>
      <div id="menu" className="md:inline sm:inline lg:inline hidden">
      
        <ul className="flex s md:text-base items-center  py-2 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
          
        {/*  <li className="mr-5  text-black font-semibold  hover:text-secondary-100 cursor-pointer text-base">
          <Link href="/" >Inicio</Link>
          </li>
          <li className="mr-5  text-black font-semibold  hover:text-secondary-100 cursor-pointer text-base">
          <Link href="/acercade" >Acerca de</Link>

          </li>
  */}
         
         
        </ul>
      </div>
    </div>
    <button className="inline-flex items-center sm:visible invisible  px-4 py-2 bg-orange-600 text-white rounded-md   focus:outline-none  hover:bg-white border border-orange-600 hover:text-orange-600 hover:border-orange-600  text-base  md:mt-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><Link href="/crear" >Crea un anuncio
       
       </Link></button>
  </div>
  
</nav>
<div className={!navbarOpen ? "hidden" : " inline"}>
        <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">

          <ul className="ml-8">
      {/*  <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
        <Link href="/" >Inicio</Link>
          </li>
          <li className="text-black  cursor-pointer text-lg lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
         <Link href="/about" >Acerca de</Link>
</li>*/}
         
          </ul>
          <button className=" mt-4 inline-flex items-center text-center justify-center w-full  px-4 py-2 bg-orange-600 text-white rounded-md   focus:outline-none hover:bg-white border hover:text-orange-600 hover:border-orange-600  text-base  md:mt-0"><Link href="/crear" >Crea un anuncio
       
       </Link></button>
        </nav>
      </div>
  </div>
  );
}


