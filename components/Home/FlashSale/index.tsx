import React from 'react'
import { Carousel } from './Carousel'
import { CountdownTimer } from '../../Common/CountdownTimer'

export const FlashSale = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS
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
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <Carousel />
      </div>
    </section>
  )
}
