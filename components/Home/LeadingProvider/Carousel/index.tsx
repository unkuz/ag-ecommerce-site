import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const providers = [
  {
    id: 1,
    img: 'images/img1.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
  },
  {
    id: 2,
    img: 'images/img2.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
  },
  {
    id: 3,
    img: 'images/img1.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
  },
  {
    id: 4,
    img: 'images/img1.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
  },
  {
    id: 5,
    img: 'images/img1.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
  },
  {
    id: 6,
    img: 'images/img1.jpg',
    title: 'Smart Phone',
    quantity: '+999 sản phẩm',
    expandBtn: 'Xem thêm',
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
      <div className="products_slide">
        <Slider ref={setSliderRef} {...settings}>
          {providers.map((provider) => (
            <div className="item_slide_pro" key={provider.id}>
              <div className="flex_items">
                <div className="img">
                  <a>
                    <img src={provider.img} alt="" />
                  </a>
                </div>
                <div className="content_slide_pro">
                  <h4>{provider.title}</h4>
                  <span>{provider.quantity}</span>
                  <a>{provider.expandBtn}</a>
                </div>
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
