import React from 'react'
import { Carousel } from './Carousel'

export const LeadingProvider = () => {
  return (
    <section className="slide_2">
      <div className="container">
        <div className="title_primery v2">
          <h1 className="t1">
            Nhà cung cấp hàng đầu
            <span />
          </h1>
        </div>
        <Carousel />
      </div>
    </section>
  )
}
