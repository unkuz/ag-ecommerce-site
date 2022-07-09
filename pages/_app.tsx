// import "@@/assets/css/main.scss";

import '@@/assets/css/animate.css'
import '@@/assets/css/bootstrap.min.css'
import '@@/assets/css/hover-min.css'
import '@@/assets/css/main.css'
import '@@/assets/css/owl.carousel.min.css'
import '@@/assets/fonts/elegantIcon/elegantIcon.css'
import '@@/assets/fonts/font-awesome/css/font-awesome.min.css'
import '@@/assets/fonts/icofont/icofont.min.css'
import '@@/assets/fonts/WebFont/style.css'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Head>
        <title>AG-Ecome | Thế giới mua sắm trực tuyến</title>
        <link rel="icon" href="favicon.ico" type="images/png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
