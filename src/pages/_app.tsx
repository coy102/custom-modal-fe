import { AppProps } from 'next/app'

import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
)

export default App
