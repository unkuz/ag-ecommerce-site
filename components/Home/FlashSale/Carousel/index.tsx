import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'
import NextLink from 'next/link'

const flashSaleProducts = [
  {
    id: 1,
    img: 'images/pd3.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 2,
    img: 'images/tv2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 3,
    img: 'images/macbook2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 4,
    img: 'images/sound2.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 5,
    img: 'images/pd4.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 6,
    img: 'images/samsungbox.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
  {
    id: 7,
    img: 'images/pd4.jpg',
    type: 'Computers & Accessories',
    title: 'Cordless TrackMan Wheel',
    priceSale: '1.999.000đ',
    priceInherit: '2.999.000đ',
    sale: '-25%',
  },
]

export const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className={cls(styles.slick_slide_container)}>
      <div className="slide_flash">
        <Slider ref={setSliderRef} {...settings}>
          {flashSaleProducts.map((product) => (
            <div className="item_flash" key={product.id}>
              <NextLink href={`/product_detail/${product.id}`} passHref>
                <a>
                  <img src={product.img} alt="" />
                </a>
              </NextLink>
              <div className="flash_name">
                <span>{product.type}</span>
                <h1>{product.title}</h1>
                <div className="prices">
                  <span className="pri_1">{product.priceSale}</span>
                  <span className="pri_2">{product.priceInherit}</span>
                </div>
                <div className="sale_">{product.sale}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} position={0} />
      </div>
    </div>
  )
}
