import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const images = [
  { id: 1, img: 'images/12.png' },
  { id: 2, img: 'images/1.webp' },
  { id: 3, img: 'images/2.webp' },
]

export const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
  }
  return (
    <div className={cls('grid_item', styles.slick_slide_container)}>
      <Slider ref={setSliderRef} {...settings}>
        {images.map((i) => (
          <div key={i.id}>
            <img src={i.img} className={cls(styles.slick_slide_image)} alt="" />
          </div>
        ))}
      </Slider>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} />
      </div>
      <div onClick={sliderRef?.slickPrev}>
        <SlideBtnNextPrev type={Btn_Type.PREV} />
      </div>
    </div>
  )
}
