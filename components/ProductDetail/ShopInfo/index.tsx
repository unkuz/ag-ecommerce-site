import React from 'react'

export const ShopInfo = () => {
  return (
    <div className="shopInfo">
      <div className="shop">
        <div className="shop_name">
          <a href="">
            <img src="../images/q1.png" alt="" />
          </a>
          <a href="">
            <span>Được bán bởi</span> Store Name
          </a>
        </div>
        <div className="shop_view">
          <div className="view">
            <a href="store.html">Xem Shop</a>
          </div>
          <div className="message">
            <button>Nhắn tin</button>
          </div>
        </div>
      </div>
      <div className="end_detail">
        <p>
          Đánh giá tích cực: <span>95%</span>
        </p>
        <p>
          Giao đúng hạn: <span>95%</span>
        </p>
        <p style={{ border: 'none' }}>
          Tỉ lệ phản hồi: <span>95%</span>
        </p>
      </div>
    </div>
  )
}
