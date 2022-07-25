import React from 'react'

const btnLinks = [
  {
    img: '../images/price.svg',
    title: 'Mã giảm giá',
  },
  {
    img: '../images/price.svg',
    title: 'Gói quà tặng',
  },
  {
    img: '../images/price.svg',
    title: 'Thời trang nam',
  },
  {
    img: '../images/price.svg',
    title: 'Thời trang nữ',
  },
  {
    img: '../images/price.svg',
    title: 'Thời trang trẻ em',
  },
  {
    img: '../images/price.svg',
    title: 'Phụ kiện điện thoại',
  },
  {
    img: '../images/price.svg',
    title: 'Sức khỏe & làm đẹp',
  },
  {
    img: '../images/price.svg',
    title: 'Đồ điện gia dụng',
  },
  {
    img: '../images/price.svg',
    title: 'Du lịch',
  },
  {
    img: '../images/price.svg',
    title: 'Xe & đời sống',
  },
  {
    img: '../images/price.svg',
    title: 'Thể thao & giải trí',
  },
  {
    img: '../images/price.svg',
    title: 'Trang sức',
  },
]

export const ButtonLinks = () => {
  return (
    <section className="btns_links">
      <div className="container">
        <div className="row">
          {btnLinks.map((link, index) => (
            <div key={index} className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href="">
                    <img src={link.img} alt="image" />
                  </a>
                </div>
                <div className="title">
                  <a href="">{link.title}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
