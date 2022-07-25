import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import styles from './SlideProduct.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../Common/SlideNext'

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

const settingsDotActive = {
  // backgroundColor: '#ffba15',
  border: '1px solid #ffba15',
}

export const SlideProduct = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const [currentSlide, setCurrentSlide] = useState<any>(0)
  const settings = {
    infinity: true,
    speed: 1000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    fade: true,
    dotsClass: 'slick-dots slick-thumb',
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next)
    },
    customPaging: function (i: any) {
      return (
        <div
          // className={styles.custom_slick_dots}
          style={i === currentSlide ? settingsDotActive : undefined}
        >
          <a>
            <img src={`${imagesProduct[i].img}`} alt="" />
          </a>
        </div>
      )
    },
  }

  const handleMouseMove = (e: any) => {
    const targetImg = sliderRef.innerSlider.list
      .querySelector(`[data-index="${currentSlide}"]`)
      .querySelector(`#img-${currentSlide}`)
    const { left, top, width, height } = targetImg.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    targetImg.style.transform = 'scale(2)'
    targetImg.style.transformOrigin = `${x}% ${y}%`
  }

  const handleMouseOut = (e: any) => {
    const targetImg = sliderRef.innerSlider.list
      .querySelector(`[data-index="${currentSlide}"]`)
      .querySelector(`#img-${currentSlide}`)
    targetImg.style.transform = 'scale(1)'
    targetImg.style.transformOrigin = 'center center'
  }

  return (
    <div className={cls(styles.slick_slide_container)}>
      <Slider ref={setSliderRef} {...settings}>
        {imagesProduct.map((product, index) => (
          <div key={index} className={cls(styles.slick_slide_image_container)}>
            <div
              id={`img-${index}`}
              className={cls(styles.slick_slide_image)}
              style={{ backgroundImage: `url(${product.img})` }}
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            ></div>
          </div>
        ))}
      </Slider>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} position={2} />
      </div>
      <div onClick={sliderRef?.slickPrev}>
        <SlideBtnNextPrev type={Btn_Type.PREV} position={2} />
      </div>
    </div>
  )
}
