import { SlideProduct } from '@@/components/ProductDetail/SlideProduct'
import { MainLayout } from '@@/layouts/MainLayout'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { OtherProduct } from '@@/components/ProductDetail/OtherProducts'
import { ShopInfo } from '@@/components/ProductDetail/ShopInfo'
import { DetailProduct } from '@@/components/ProductDetail/DetailProduct'
import { TabsProductDetail } from '@@/components/ProductDetail/TabsDetailProduct'
import { BottomBar } from '@@/components/ProductDetail/BottomBar'
import { ButtonLinks } from '@@/components/ProductDetail/ButtonLinks'

const ProductDetail: NextPageWithLayout = () => {
  return (
    <div>
      <section className="product_detail">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Thiết bị điện tử</a>
              </li>
              <li className="breadcrumb-item texts_ active" aria-current="page">
                Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính thức
              </li>
            </ol>
          </nav>
          <div className="row flex_row">
            <div className="col-md-3">
              <OtherProduct />
            </div>
            <div className="col-md-9 col_p1">
              <div className="bg">
                <div className="row ">
                  <div className="col-md-6">
                    {/* Slide Product */}
                    <SlideProduct />
                  </div>
                  <div className="col-md-6 col_p1">
                    <DetailProduct />
                  </div>
                </div>
                <ShopInfo />
              </div>
              <TabsProductDetail />
            </div>
          </div>
        </div>
      </section>
      <ButtonLinks />
      <BottomBar />
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default ProductDetail
