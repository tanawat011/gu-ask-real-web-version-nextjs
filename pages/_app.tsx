import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import 'antd/dist/antd.min.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>GU ASK REAL</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
