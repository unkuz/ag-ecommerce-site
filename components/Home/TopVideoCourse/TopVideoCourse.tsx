import React from 'react'
import { LeftBanner } from './LeftBanner'
import { RightCourseSlide } from './RightCourseSlide'

export const TopVideoCourse = () => {
  return (
    <section className="caterory_5 news_">
      <div className="container">
        <div className="row">
          <LeftBanner />
          <RightCourseSlide />
        </div>
      </div>
    </section>
  )
}
