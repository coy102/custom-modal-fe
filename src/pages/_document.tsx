import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title> Custom Modal </title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
