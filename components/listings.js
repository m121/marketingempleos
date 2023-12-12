import Link from "next/link"




export default function Listings({jobs,category}) {


    const joblistings = jobs.job;


    return (
        <div id="listings" className="sm:p-8 p-4 bg-background-100 ">
            <div className="bg-white rounded-md p-6 mb-4 shadow-md">
                <h3 className="font-medium sm:text-2xl text-xl sm:py-4 py-2">Categorías</h3>
                <div className="grid sm:grid-cols-8 grid-cols-2 sm:gap-2 gap-4">
                    
                    <Link href="/">
                        <a className="p-2 bg-white border-2 border-slater-200 text-md text-center hover:bg-amber-500 hover:text-white rounded-md font-medium">Marketing general</a>
                    </Link>
                    <Link href="/emailmarketing">
                        <a className="p-2 bg-white border-2 border-slater-200 text-md text-center hover:bg-amber-500 hover:text-white rounded-md font-medium">Email marketing</a>
                    </Link>
                    <Link href="/communitymanager">
                        <a className="p-2 bg-white border-2 border-slater-200 text-md text-center hover:bg-amber-500 hover:text-white rounded-md font-medium">Community manager</a>
                    </Link>
                    <Link href="/seo">
                        <a className="p-2 bg-white border-2 border-slater-200 text-md text-center hover:bg-amber-500 hover:text-white rounded-md font-medium">SEO</a>
                    </Link>
                   
                    <Link href="/analistadedatos">
                        <a className="p-2 bg-white border-2 border-slater-200 text-md text-center hover:bg-amber-500 hover:text-white rounded-md font-medium">Analista de datos</a>
                    </Link>
                 

                </div>
            </div>
{joblistings.sort((a, b) => new Date((b.date).slice(10,21)) - new Date((a.date).slice(10,21))).map((job,i)=>{

        
      
    return  (<div className="rounded-xl bg-white p-4 mt-4 shadow-md" key={i} >
      <details className="cursor-pointer">
       <summary><div className="flex flex-col sm:p-4 p-2 ">
           <div className="flex flex-row justify-between">
               <div>
               
               <div className="w-full sm:mt-0 mt-2">
                       <p className="ml-2 text-sm text-medium text-black opacity-60 sm:leading-relaxed">{job.company}</p>

                   </div>
                <p className="ml-2 text-black font-semibold sm:text-lg text-base">{job.title}</p>

             


               </div>
               <div>
                   <p className="sm:ml-4 ml-0  font-medium rounded-md sm:text-sm text-sm sm:text-right bg-amber-500 text-white sm:p-2  text-center">{category}</p>
                   <p className="text-black opacity-60 sm:text-sm text-xs text-right">{job.location}</p>
                   <p className="text-black opacity-60 sm:text-sm text-xs text-right">{(job.date).slice(10,21)}</p>
               </div>
           </div>


       </div>
       </summary>
       <div className="sm:p-4 p-2 bg-gray-100 rounded-lg ">
       <p className="sm:text-2xl text-xl text-black text-opacity-90  ">{job.title}</p>
       {/*<p className="sm:text-sm text-black text-opacity-90 sm:py-2 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas placerat nisl id finibus. Aenean vehicula laoreet erat et dictum. Nullam at lacus vel neque vestibulum auctor. Quisque scelerisque a purus et congue. Morbi maximus erat orci, a semper mauris placerat sed. In id massa rhoncus ex rutrum auctor vel non orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/>
Morbi ac vestibulum nisl, pharetra pretium risus. Nulla in tincidunt nunc. Nulla neque diam, faucibus non rhoncus at, fermentum nec lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui tellus, sagittis eget diam eu, rutrum elementum ex. Nulla id est pharetra, consectetur lacus id, molestie purus. Sed orci enim, iaculis eget commodo ut, maximus ut neque. Fusce urna nibh, varius sit amet venenatis et, sollicitudin nec ipsum. Vestibulum tempus risus et arcu gravida aliquet. Ut non elit at risus tristique lobortis malesuada eu tellus. Aliquam sodales, mauris non facilisis posuere, augue risus blandit nulla, sit amet posuere tellus risus non orci. Suspendisse potenti. Sed lacus eros, bibendum quis tellus ac, laoreet eleifend eros. In hac habitasse platea dictumst. Cras ac quam placerat, imperdiet elit et, congue quam. Fusce viverra erat turpis, sed mattis dolor pharetra vitae.</p>*/}
       <p className="sm:text-lg text-xl font-semibold  ">Región</p>
       <p className="sm:text-sm text-black text-opacity-90 sm:py-2 py-2">{job.location}</p>
       <p className="sm:text-lg text-xl font-semibold   ">Salario</p>
       <p className="sm:text-sm text-black text-opacity-90 sm:py-2 py-2">N/A</p>
       <p className="sm:text-lg text-xl font-semibold  ">Empresa</p>
       <p className="sm:text-sm text-black text-opacity-90 sm:py-2 py-2">{job.company}</p>
       <p className="sm:text-lg text-xl font-semibold  ">Tipo de trabajo</p>
       <p className="sm:text-sm text-black text-opacity-90 sm:py-2 py-2">N/A</p>
       
       <div className="flex w-full mt-4">
       <Link href={job.url}><a className="mx-auto transform rounded text-2xl bg-orange-600 px-5 py-3 font-medium text-white transition-colors hover:bg-white border hover:text-orange-600 hover:border-orange-600">Aplicar</a></Link>
       </div>
           
       </div>
       </details>
   </div>)
    

})}
          

           {/* <div className="flex w-full mt-4">

                <button className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 mx-auto ">
                    <Link href="/signup">View More</Link>
                </button>
    </div>*/}
        </div>
    )
}
