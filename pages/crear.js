
import Layout from "../components/common/layout";
import Create from "../components/create";
import Head from 'next/head'

export default function createPage() {
  return (
    <Layout>
    
      <Head>
         <html lang="es" />
        <meta charset="utf-8" />
        <title>Empleos de Marketing | Crea tu anuncio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/img/logo_blue.png" />
        

        <meta name="title" content="Empleos de Marketing | Crea tu anuncio" />
        <meta
          name="description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo perez" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marketingempleos.lat/" />
        <meta property="og:title" content="Empleos de Marketing | Crea tu anuncio" />
        <meta
          property="og:description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta property="og:image" content="https://marketingempleos.lat/thumb.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marketingempleos.lat/" />
        <meta property="twitter:title" content="Empleos de Marketing | Crea tu anuncio" />
        <meta
          property="twitter:description"
          content="Busca ofertas de empleos de Marketing , SEO , Community manager, etc.  Publica tus ofertas de empleo para tu empresa."
        />
        <meta
          property="twitter:image"
          content="https://marketingempleos.lat/thumb.png"
        />

      </Head>
      <Create/>
      
    </Layout>
    
  )
}