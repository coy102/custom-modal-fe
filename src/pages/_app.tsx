import { AppProps } from 'next/app'

import CustomHead from '~/components/CustomHead'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <CustomHead />

    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
)

export default App
