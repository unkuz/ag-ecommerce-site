import React from 'react'
import { Carousel } from './Carousel'

export const OtherProduct = () => {
  return (
    <section className="exclusive_products selling_products">
      <div className="container">
        <div className="title_primery">
          <h1 className="t1">
            Các sản phẩm khác
            <span />
          </h1>
          <a>
            Xem thêm <span className="fa fa-angle-right" />
          </a>
        </div>
        <Carousel />
      </div>
    </section>
  )
}
