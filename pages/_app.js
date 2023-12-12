import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
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

<script async src="https://www.googletagmanager.com/gtag/js?id=G-CB34P8VWNG"></script>

<script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-CB34P8VWNG');`,
                }}
              ></script>

      
      </Head>

      <Component {...pageProps} />
    </div>);
}

export default MyApp