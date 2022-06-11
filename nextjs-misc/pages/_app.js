import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Head from 'next/head'
import 'styles/globals.css'
import 'styles/layout.css'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>MyEvolution</title>
        <meta name='description' content='free tuts awsome'></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
