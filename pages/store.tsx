import { CatergoriesBanner } from '@@/components/Common/CatergoriesBanner'
import { Help } from '@@/components/Common/Help'
import { CategioriesPage } from '@@/components/Store/CategioriesPage'
import { StoreInfo } from '@@/components/Store/StoreInfo'
import { MainLayout } from '@@/layouts/MainLayout'
import { NextPage } from 'next'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const Store: NextPageWithLayout = (): JSX.Element => {
  return (
    <div>
      <StoreInfo />
      <CategioriesPage />
      <CatergoriesBanner />
      <Help />
    </div>
  )
}

Store.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default Store
