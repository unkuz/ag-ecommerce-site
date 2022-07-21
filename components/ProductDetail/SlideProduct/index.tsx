import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './SlideProduct.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../Common/SlideNext'
import Image from 'next/image'

const imagesProduct = [
  {
    id: 1,
    img: '/images/bt.jpg',
  },
  {
    id: 2,
    img: '/images/dt.jpg',
  },
  {
    id: 3,
    img: '/images/flycam.jpg',
  },
]

export const SlideProduct = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
  }
  return (
    <div className={cls(styles.slick_slide_container)}>
      {/* <div className="slide_product_drtail"> */}
      <Slider ref={setSliderRef} {...settings}>
        {imagesProduct.map((product) => (
          <div key={product.id} className={cls(styles.slick_slide_image_container)}>
            <Image
              className={cls(styles.slick_slide_image)}
              src={product.img}
              alt="no image"
              layout="fill"
            />
          </div>
        ))}
      </Slider>
      {/* </div> */}
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} position={0} />
      </div>
      <div onClick={sliderRef?.slickPrev}>
        <SlideBtnNextPrev type={Btn_Type.PREV} position={0} />
      </div>
    </div>
  )
}
