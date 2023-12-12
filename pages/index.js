
import Layout from "../components/common/layout";
import Head from 'next/head'

import Hero from "../components/hero"

import Testimonial from "../components/testimonials";

import Steps from "../components/steps"
import SingleTestimonial from "../components/singletestimonial";
import Listings from "../components/listings";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher);

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
        <title>Empleos de Marketing | Busca tu empleo soñado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/img/logo_blue.png" />
        

        <meta name="title" content="Empleos de Marketing | Busca tu empleo soñado" />
        <meta
          name="description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo perez" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marketingempleos.lat/" />
        <meta property="og:title" content="Empleos de Marketing | Busca tu empleo soñado" />
        <meta
          property="og:description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta property="og:image" content="https://marketingempleos.lat/thumb.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marketingempleos.lat/" />
        <meta property="twitter:title" content="Empleos de Marketing | Busca tu empleo soñado" />
        <meta
          property="twitter:description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta
          property="twitter:image"
          content="https://marketingempleos.lat/thumb.png"
        />


      
      </Head>
      <Hero />
    
      <Listings jobs={data} category="Marketing general"/>
     
      
    </Layout>
    
  )
}