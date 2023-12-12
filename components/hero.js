import {React,useEffect,useState} from "react";
import Link from "next/link";

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero(){

 


    return ( 
   
      
      <section className="sm:py-4 py-10 sm:px-0 px-4 flex items-center sm:min-h-screen justify-center bg-orange-600">
        <div className="mx-auto max-w-[83rem]">
          <div className="text-center">
           
            <h1 className="sm:mt-3  sm:text-[5.2rem] text-4xl  leading-tight  text-white font-black">Encuentra los mejores empleos de Marketing</h1>
           
          </div>
      
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/crear"><a className="transform rounded sm:text-2xl text-md text-center bg-gray-100 sm:px-5 px-2 py-3 font-medium text-orange-600 transition-colors hover:bg-white  hover:text-black hover:border-black">Crea un anuncio</a></Link>
            <AnchorLink href="#listings" className="transform sm:text-2xl text-md text-center rounded-md border border-white sm:px-5 px-2 py-3   text-white font-medium text-white transition-colors hover:bg-orange-600 hover:text-white hover:font-black"> Busca un trabajo </AnchorLink>
          </div>
        </div>
      </section>
    )
}