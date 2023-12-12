
import Layout from "../components/common/layout";
import Head from "next/head";


import Listings from "../components/listings";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function EmailMarketingPage() {
    const { data, error } = useSWR('/api/emailmarketing', fetcher);

    //Handle the error state
    if (error) return <div>Error al cargar</div>;
    //Handle the loading state
    if (!data) return <div>Esperando...</div>;
  
  return (
    <Layout>
         <Head>
        <html lang="es" />
        <meta charset="utf-8" />
        <title>Empleos de Marketing | Email Marketing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/img/logo_blue.png" />
        

        <meta name="title" content="Empleos de Marketing | Email Marketing" />
        <meta
          name="description"
          content="Empleos de Marketing | Email Marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pixweb" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="marketingempleos.lat/" />
        <meta property="og:title" content="Empleos de Marketing | Email Marketing" />
        <meta
          property="og:description"
          content="Empleos de Marketing | Email Marketing"
        />
        <meta property="og:image" content="marketingempleos.lat/emailmarketingthumb.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="marketingempleos.lat/" />
        <meta property="twitter:title" content="Empleos de Marketing | Email Marketing" />
        <meta
          property="twitter:description"
          content="Empleos de Marketing | Email Marketing"
        />
        <meta
          property="twitter:image"
          content="marketingempleos.lat/emailmarketingthumb.png"
        />


      
      </Head>
      <div className="h-h-screen p-24 bg-orange-500">
    <p className="sm:mt-3  sm:text-[5.2rem] text-4xl  leading-tight  text-white font-black text-center" >Email Marketing empleos</p>

      </div>
      <Listings jobs={data} category="Email marketing"/>
     
      
    </Layout>
    
  )
}