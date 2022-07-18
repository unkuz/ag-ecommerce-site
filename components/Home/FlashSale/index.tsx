import React from 'react'
import { Carousel } from './Carousel'

export const FlashSale = () => {
  return (
    <section className="flash_sale">
      <div className="container">
        <div className="title_primery v2">
          <h1 className="t1">
            flash sale
            <span />
          </h1>
          <a>
            Xem thêm <span className="fa fa-angle-right" />
          </a>
        </div>
        <div className="flash_time">
          <div className="end_time">Kết thúc trong:</div>
          <div id="clockdown">
            <span className="days">0</span>
            <span className="hours">23</span>
            <span className="minutes">30</span>
            <span className="seconds">45</span>
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  )
}
