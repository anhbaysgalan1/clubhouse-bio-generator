import React from 'react';
import Document, { Head, Main, Html, NextScript } from 'next/document';


export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            defer
            data-domain="clubhouses.me"
            src="https://plausible.io/js/plausible.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
