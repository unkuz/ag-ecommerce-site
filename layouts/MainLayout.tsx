import { Footer } from '@@/components/Layouts/Footer'
import { Header } from '@@/components/Layouts/Header'
import React, { ReactElement } from 'react'
import { ScrollTop } from './ScrollTop'

type IProps = {
  children: ReactElement
}

export const MainLayout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </div>
  )
}
