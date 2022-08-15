import Document, { Html, Main, NextScript } from 'next/document'

interface Props {
  emotionStyleTags: any
}

export default class AppDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
