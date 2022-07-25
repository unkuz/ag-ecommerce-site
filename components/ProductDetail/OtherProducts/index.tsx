import React from 'react'
import Image from 'next/image'
import cls from 'classnames'
import styles from './OtherProducts.module.scss'

const sameCategoryProducts = [
  {
    name: 'Smart phone',
    quantity: 10,
  },
  {
    name: 'Máy tính bảng',
    quantity: 550,
  },
  {
    name: 'Laptop',
    quantity: 231,
  },
  {
    name: 'Máy tính để bàn',
    quantity: 10,
  },
  {
    name: 'Gaming PC',
    quantity: 46,
  },
  {
    name: 'Gaming phone',
    quantity: 124,
  },
]

const relatedProducts = [
  {
    id: 1,
    img: '../images/bn5.jpg',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 2,
    img: '../images/i2.png',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 3,
    img: '../images/samsungbox.jpg',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 4,
    img: '../images/samsung3.jpg',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 5,
    img: '../images/i1.png',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 6,
    img: '../images/img1.jpg',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
  {
    id: 6,
    img: '../images/macbook2.jpg',
    type: 'Computers & Accessories',
    name: 'Cordless TrackMan Wheel',
    price: '199.000đ',
  },
]

export const OtherProduct = () => {
  return (
    <div className="left_proDetail">
      <div className="other_products_left">
        <div className="other_p1" style={{ marginBottom: 15 }}>
          <h1 className="t1Pro">Cùng danh mục</h1>
          <ul>
            {sameCategoryProducts.map((product, index) => (
              <li key={index}>
                <a href="">
                  {product.name} <span>({product.quantity})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="other_p2" style={{ marginBottom: 15 }}>
          <h1 className="t1Pro">Sản phẩm HOT</h1>
          <div className={cls(styles.image_container)}>
            <img src="../images/bn5.jpg" alt="" />
          </div>
        </div>
        <div className="other_p3">
          <h1 className="t1Pro">Sản phẩm liên quan</h1>
          {relatedProducts.map((product, index) => (
            <div className="related_products" key={index}>
              <div className="related_img">
                <a href="">
                  <img src={product.img} alt="" />
                </a>
              </div>
              <div className="related_product_price">
                <span>{product.type}</span>
                <h4>
                  <a href="">{product.name}</a>
                </h4>
                <div className="prices">
                  <span className="pri_1">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
