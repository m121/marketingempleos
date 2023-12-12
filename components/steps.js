export default function Steps(){
    return (
        <section id="works" className="text-gray-600 body-font bg-background-100">
  <div className="container px-5 py-24 mx-auto">
    <h2 className="sm:text-4xl text-3xl font-bold title-font text-center text-black mb-20">How it works
      <p className="text-[#000000] sm:text-2xl text-xl  font-medium  opacity-60">Start earning in 3 easy steps</p>
    </h2>
    <div className="flex sm:flex-row flex-col sm:-m-0 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 px-4 sm:space-x-12 space-x-0 ">
      <div className="p-8 md:w-1/3 w-full flex flex-col bg-white rounded-xl " >
        <div className="w-12 h-12 justify-center mx-auto  items-center    mb-4 ">
          <img src="/img/step1.svg" className="w-12 h-12"/>
        </div>
        <div className="flex-grow ">
          <h2 className="text-black text-center sm:text-lg text-lg title-font font-bold mb-2">1. Create your profile</h2>
          <p className="leading-relaxed text-justify text-base font-medium">Personalize your profile and start searching for studies that interest you. We&apos;ll also send you good fit studies via email!</p>
          
        </div>
      </div>
      <div className="p-8 md:w-1/3 w-full flex flex-col bg-white rounded-xl" >
        <div className="w-12 h-12 justify-center mx-auto items-center mb-4  ">
        <img src="/img/step2.svg" className="w-12 h-12"/>
        </div>
        <div className="flex-grow ">
          <h2 className="text-black text-center sm:text-lg text-lg title-font font-bold mb-2">2. Apply to projects</h2>
          <p className="leading-relaxed text-justify text-base font-medium">Apply to projects by answering a few questions designed to help researchers find the best participants. Most forms can be completed in less than a minute.</p>
          
        </div>
      </div>
      <div className="p-8 md:w-1/3 w-full flex flex-col bg-white rounded-xl">
        <div className="w-12 h-12 justify-center mx-auto items-center  rounded-full  mb-4 flex-shrink-0">
        <img src="/img/step3.svg" className="w-12 h-12"/>
        </div>
        <div className="flex-grow ">
          <h2 className="text-black sm:text-lg text-lg text-center title-font font-bold mb-2">3. Participate and get paid</h2>
          <p className="leading-relaxed  text-justify text-base font-medium">Once approved, schedule a session time that works for you. Finish the session and get paid within a few days.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
    )
}