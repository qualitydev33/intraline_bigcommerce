import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

import {store} from '../utils/redux/store'

import { Provider as ReduxProvider } from 'react-redux'
// import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'
import { CookiesProvider } from 'react-cookie';

const Noop: FC = ({ children }) => <>{children}</>



export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head></Head>
      <ManagedUIContext>
        <CookiesProvider>
          {/* <HubspotProvider> */}
            <ReduxProvider store={store}>
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            </ReduxProvider>
          {/* </HubspotProvider> */}
        </CookiesProvider>
      </ManagedUIContext>
    </>
  )
}
