import React from 'react'
import { Carousel } from './Carousel'

export const PopularSearch = () => {
  return (
    <section className="similar_product">
      <div className="container">
        <div className="title_primery v2">
          <h1 className="t1">
            Tìm kiếm phổ biến
            <span />
          </h1>
        </div>
        <Carousel />
      </div>
    </section>
  )
}
