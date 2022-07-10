import { useCallback, useState } from 'react'
import { LeftCategories } from './LeftCategories'
import { RightBanner } from './RightBanner'
import { Slide } from './Slide'

export const BannerTopSlide = () => {
  return (
    <div className="banner_topSlide">
      <div className="container">
        <div className="group_bnItem">
          <div className="grid_box">
            <LeftCategories />
            <Slide />
            <RightBanner />
          </div>
        </div>
      </div>
    </div>
  )
}
