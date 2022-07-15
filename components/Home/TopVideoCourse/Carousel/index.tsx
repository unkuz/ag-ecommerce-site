import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import cls from 'classnames'
import { Btn_Type, SlideBtnNextPrev } from '../../../Common/SlideNext'

const courses = [
  {
    id: 1,
    imgBg: 'images/t1.png',
    title: 'Nền tảng tiếng Anh cho người mới bắt đầu',
    author: 'Nguyễn Đức Chung',
    imgAuthor: 'images/2.png',
    price: {
      sale: '199.000đ',
      inherit: '299.000đ',
    },
    voteAmount: '999',
    user: '1.1k',
  },
  {
    id: 2,
    imgBg: 'images/t2.jpg',
    title: 'Nền tảng tiếng Anh cho người mới bắt đầu',
    author: 'Nguyễn Đức Chung',
    imgAuthor: 'images/3.png',
    price: {
      sale: '199.000đ',
      inherit: '299.000đ',
    },
    voteAmount: '999',
    user: '861',
  },
  {
    id: 3,
    imgBg: 'images/t5.jpg',
    title: 'Nền tảng tiếng Anh cho người mới bắt đầu',
    author: 'Nguyễn Đức Chung',
    imgAuthor: 'images/4.png',
    price: {
      sale: '199.000đ',
      inherit: '299.000đ',
    },
    voteAmount: '999',
    user: '524',
  },
  {
    id: 4,
    imgBg: 'images/t3.jpg',
    title: 'Nền tảng tiếng Anh cho người mới bắt đầu',
    author: 'Nguyễn Đức Chung',
    imgAuthor: 'images/5.png',
    price: {
      sale: '199.000đ',
      inherit: '299.000đ',
    },
    voteAmount: '999',
    user: '323',
  },
  {
    id: 5,
    imgBg: 'images/t5.jpg',
    title: 'Nền tảng tiếng Anh cho người mới bắt đầu',
    author: 'Nguyễn Đức Chung',
    imgAuthor: 'images/4.png',
    price: {
      sale: '199.000đ',
      inherit: '299.000đ',
    },
    voteAmount: '999',
    user: '524',
  },
]

export const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const settings = {
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <div className="bg_">
        <div className="slide_group slide_category_5">
          <Slider ref={setSliderRef} {...settings}>
            {courses.map((course) => (
              <div className="item" key={course.id}>
                <a href="course_details.html">
                  <img alt="" src={course.imgBg} width="100%" />
                </a>
                <div className="element-list">
                  <span className="icon_sale v2">HOT</span>
                  <h4>
                    <a href="course_details.html">{course.title}</a>
                  </h4>
                  <div className="author-info">
                    <a>
                      <img alt="" src="images/2.png" />
                      <span>{course.author}</span>
                    </a>
                  </div>
                  <div className="price">
                    <span className="price_sale">{course.price.sale}</span>
                    <span className="price_inherit">{course.price.inherit}</span>
                  </div>
                  <div className="categories_bottom">
                    <div className="vote_caterory_1">
                      <ul className="vote">
                        <li>
                          <a>
                            <span className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="fa fa-star-half-o" />
                          </a>
                        </li>
                      </ul>
                      <span className="amount">({course.voteAmount})</span>
                    </div>
                    <div className="view">
                      <i className="icofont-users-alt-4" />
                      <span>{course.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div onClick={sliderRef?.slickNext}>
        <SlideBtnNextPrev type={Btn_Type.NEXT} position={30} />
      </div>
      <div onClick={sliderRef?.slickPrev}>
        <SlideBtnNextPrev type={Btn_Type.PREV} position={30} />
      </div>
    </div>
  )
}
