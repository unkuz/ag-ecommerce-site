import { useCallback, useState } from 'react'
import { LeftCategories } from './LeftCategories'
import { RightBanner } from './RightBanner'
// import { Slide } from './Slide'
import Carousel from './Carousel'

export const BannerTopSlide = () => {
  return (
    <div className="banner_topSlide">
      <div className="container">
        <div className="group_bnItem">
          <div className="grid_box">
            <LeftCategories />
            {/* <Slide /> */}
            <Carousel />
            <RightBanner />
          </div>
        </div>
      </div>
    </div>
  )
}
