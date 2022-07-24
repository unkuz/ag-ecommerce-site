import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import styles from './SlideProduct.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../Common/SlideNext'
import { useHoverAndMouseMoveZoomImage } from '@@/hooks/useHoverAndMouseMoveZoomImage'
// import Image from 'next/image'
// import Zoom from 'react-medium-image-zoom'

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
  const currentImageRef = useRef<any>([])
  // const [currentStateImage, setCurrentStateImage] = useState<any>(
  //   imagesProduct.map((image) => ({
  //     backgroundImage: `url(${image.img})`,
  //     backgroundPosition: '0% 0%',
  //   }))
  // )
  const containerImageRef = useRef<any>([])
  const imageRef = useRef<any>([])
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

  // const onZoom = (index: number) => {
  //   console.log('hover')
  //   return (e: any) => {
  //     const x = e.clientX - e.target.offsetLeft
  //     const y = e.clientY - e.target.offsetTop

  //     imageRef.current[index].style.transformOrigin = `${x}px ${y}px`
  //     imageRef.current[index].style.transform = 'scale(1.5)'
  //   }
  // }

  // const offZoom = (index: number) => {
  //   console.log('out')
  //   return (e: any) => {
  //     imageRef.current[index].style.transformOrigin = `center center`
  //     imageRef.current[index].style.transform = 'scale(1)'
  //   }
  // }

  // useEffect(() => {
  //   const currentContainerImageRef = containerImageRef.current
  //   currentContainerImageRef.forEach((element: any, index: number) => {
  //     element.addEventListener('mousemove', onZoom(index))
  //     element.addEventListener('mouseover', onZoom(index))
  //     element.addEventListener('mouseleave', offZoom(index))
  //   })

  // return () => {
  //   currentContainerImageRef.forEach((element: any, index: number) => {
  //     element.removeEventListener('mousemove', onZoom(index))
  //     element.removeEventListener('mouseover', onZoom(index))
  //     element.removeEventListener('mouseleave', offZoom(index))
  //   })
  // }
  // }, [])

  const handleMouseMove = (e: any) => {
    console.log('move', e.target.id)
    e.target.style.transform = 'scale(2)'
    const { left, top, width, height } = e.target.getBoundingClientRect()
    // console.log('left', left)
    // console.log('top', top)
    // console.log('width', width)
    // console.log('height', height)
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    e.target.style.transformOrigin = `${x}% ${y}%`
    // e.target.style.backgroundPosition = `${x}% ${y}%`
    // setCurrentStateImage((prev: any) =>
    //   prev.map((state: any, index: number) =>
    //     Number(e.target.id.split('-')[1]) === index
    //       ? { ...state, backgroundPosition: `${x}% ${y}%` }
    //       : state
    //   )
    // )
  }

  const handleMouseOut = (e: any) => {
    console.log('out', e.target.id)
    // e.target.style.transform = ' scale(1)'
    // e.target.style.transformOrigin = '0 0'
  }

  currentImageRef.current.forEach((ref, index: number) => {
    useHoverAndMouseMoveZoomImage(ref, () => console.log(''))
  })

  return (
    <div className={cls(styles.slick_slide_container)}>
      <Slider ref={setSliderRef} {...settings}>
        {imagesProduct.map((product, index) => (
          <div key={index} className={cls(styles.slick_slide_image_container)}>
            <div
              id={`img-${index}`}
              ref={(el) => (currentImageRef.current[index] = el)}
              className={cls(styles.slick_slide_image)}
              style={{ backgroundImage: `url(${product.img})` }}
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            ></div>
          </div>
          // <figure
          //   key={product.id}
          //   className={cls(styles.slick_slide_image_container)}
          //   // style={currentStateImage[index]}
          //   style={{
          //     backgroundImage: `url(${product.img})`,
          //     backgroundPosition: '0% 0%',
          //   }}
          //   onMouseMove={handleMouseMove}
          // >
          //   <img
          //     ref={(el) => (imageRef.current[index] = el)}
          //     id={`img-${index}`}
          //     className={cls(styles.slick_slide_image)}
          //     src={product.img}
          //     alt="no image"
          //   />
          // </figure>
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
