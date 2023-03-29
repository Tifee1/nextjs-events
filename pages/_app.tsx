import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position='top-center' autoClose={3000} draggable />
    </>
  )
}
