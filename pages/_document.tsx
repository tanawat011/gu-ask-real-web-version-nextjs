/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const page = ctx.renderPage((App) => (props) =>
    sheet.collectStyles(<App {...props} />)
  )
  const styleTags = sheet.getStyleElement()
  return { ...page, styleTags }
}
