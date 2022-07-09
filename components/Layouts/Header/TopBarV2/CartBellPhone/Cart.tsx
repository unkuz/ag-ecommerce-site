import React, { useMemo } from 'react'

const cart = [
  {
    name: ' Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính thức',
    image: 'images/samsung3.jpg',
    quantity: 9999,
    price: '0đ',
  },
  {
    name: ' Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính thức',
    image: 'images/pd2.jpg',
    quantity: 5,
    price: '0đ',
  },
  {
    name: ' Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính thức',
    image: 'images/pd3.jpg',
    quantity: 1,
    price: '10đ',
  },
  {
    name: ' IPhone 100XSMax',
    image: 'images/pd3.jpg',
    quantity: 1,
    price: '10đ',
  },
]

export const Cart = (): JSX.Element => {
  const totalItemInCart = useMemo(() => cart.length, [])
  return (
    <li className="hide_cart">
      <a href="#">
        <i className="icofont-shopping-cart" />
        <span>{totalItemInCart}</span>
      </a>
      <div className="cart_view">
        <h1>Sản phẩm vừa thêm</h1>
        <div className="limit">
          {cart.map((i, idx) => (
            <div key={idx} className="products_inCart">
              <div className="product__1img">
                <a>
                  <img src={i.image} alt={i.name} />
                </a>
              </div>
              <div className="product__1Content">
                <h4>
                  <a>{i.name}</a>
                </h4>
                <div className="t_pri">
                  <p>
                    {`x${i.quantity}`} <span>{i.price}</span>
                  </p>
                  <button>
                    <span>Xóa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view_andCheckout_btns">
          <a href="cart.html" className="b1_cart">
            Đến giỏ hàng
          </a>
          <a href="checkout.html" className="b2_checkout">
            Thanh toán tất cả
          </a>
        </div>
      </div>
    </li>
  )
}
