import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const products = [
  {
    id: 1,
    img: 'images/pd3.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
  },
  {
    id: 2,
    img: 'images/tv2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
  },
  {
    id: 3,
    img: 'images/macbook2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
  },
  {
    id: 4,
    img: 'images/sound2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
  },
  {
    id: 5,
    img: 'images/pd4.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
  },
  {
    id: 6,
    img: 'images/samsungbox.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    label: '-25%',
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
      <div className="slide_flash">
        <Slider ref={setSliderRef} {...settings}>
          {products.map((product) => (
            <div className="item_flash" key={product.id}>
              <a href="product_detail.html">
                <img alt="" src={product.img} />
              </a>
              <div className="flash_name">
                <span>{product.type}</span>
                <h1>{product.title}</h1>
                <div className="prices">
                  <span className="pri_1">{product.priceSale}</span>
                  <span className="pri_2">{product.priceInherit}</span>
                </div>
                <div className="sale_">{product.label}</div>
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
