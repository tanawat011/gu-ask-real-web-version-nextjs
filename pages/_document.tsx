/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

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
