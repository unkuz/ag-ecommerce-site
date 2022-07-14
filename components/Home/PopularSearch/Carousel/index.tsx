import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const products = [
  {
    id: 1,
    img: 'images/i2.png',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 2,
    img: 'images/h1_s1.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 3,
    img: 'images/h1_s2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 4,
    img: 'images/h1_s3.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 5,
    img: 'images/h1_s2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
]

export const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    // autoplay: true,
  }
  return (
    <div className={cls(styles.slick_slide_container)}>
      <div className="slide_similar_product">
        <Slider ref={setSliderRef} {...settings}>
          {products.map((product) => (
            <div className="item" style={{ display: 'flex' }} key={product.id}>
              <div className="similar_product_img">
                <a>
                  <img alt="" src={product.img} />
                </a>
              </div>
              <div className="similar_product_price">
                <span>{product.type}</span>
                <h1>
                  <a>{product.title}</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} />
      </div>
    </div>
  )
}
