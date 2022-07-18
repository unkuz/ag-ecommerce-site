import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './TopBarCategories.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const categories = [
  { id: 1, label: 'Mua bán nhà đất', img: 'images/house.svg' },
  { id: 2, label: 'Đặt vé máy bay', img: 'images/air2.svg' },
  { id: 3, label: 'Đặt vé tàu - xe', img: 'images/car-insurance.svg' },
  { id: 4, label: 'Tour du lịch', img: 'images/air.svg' },
  { id: 5, label: 'Đặt phòng khách sạn', img: 'images/booking.svg' },
  { id: 6, label: 'Sức khỏe & Y tế', img: 'images/examine.svg' },
  { id: 7, label: 'Vé xem phim', img: 'images/ticket.svg' },
  { id: 8, label: 'Cổ phẩn Công ty', img: 'images/work.svg' },
]

export const TopBarCategories = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 568,
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
      <div className={cls('topBar_categories', styles.topBar_categories)}>
        <div className={cls('container', styles.container)}>
          <Slider ref={setSliderRef} {...settings}>
            {categories.map((category) => (
              <div key={category.id} className={cls('item', styles.item)}>
                <img alt="" src={category.img} />
                <span>{category.label}</span>
                <i className={cls('line', styles.line)} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} position={30} />
      </div>
    </div>
  )
}
