import Layout from "../components/common/layout";
import Head from 'next/head'


import Listings from "../components/listings";
import useSWR from 'swr';

// to works on Vercel we need to remove next export on package.js

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function SeoPage() {
    const { data, error } = useSWR('/api/seo', fetcher);

    //Handle the error state
    if (error) {
        console.log("Error" + error)
        
    }
    //Handle the loading state
    if (!data) return <div>Esperando...</div>;
  
  return (
    <Layout>
      <Head>
        <html lang="es" />
        <meta charset="utf-8" />
        <title>Empleos de Marketing | SEO </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/img/logo_blue.png" />
        

        <meta name="title" content="Empleos de Marketing | SEO" />
        <meta
          name="description"
          content="Empleos de Marketing | SEO"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pixweb" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="marketingempleos.lat/" />
        <meta property="og:title" content="Empleos de Marketing | SEO" />
        <meta
          property="og:description"
          content="Empleos de Marketing | SEO"
        />
        <meta property="og:image" content="marketingempleos.lat/seothumb.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="marketingempleos.lat/" />
        <meta property="twitter:title" content="Empleos de Marketing | SEO" />
        <meta
          property="twitter:description"
          content="Empleos de Marketing | SEO"
        />
        <meta
          property="twitter:image"
          content="marketingempleos.lat/seothumb.png"
        />


      
      </Head>
      <div className="h-h-screen p-24 bg-orange-500">
    <p className="sm:mt-3  sm:text-[5.2rem] text-4xl  leading-tight  text-white font-black text-center" >SEO empleos</p>

      </div>
      <Listings jobs={data} category="SEO"/>
     
      
    </Layout>
    
  )
}
