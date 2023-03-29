import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position='top-center' autoClose={3000} draggable />
    </>
  )
}
