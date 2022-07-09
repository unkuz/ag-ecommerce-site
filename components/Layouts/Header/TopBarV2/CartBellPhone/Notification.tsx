import React, { useMemo } from 'react'

const notification = [
  {
    name: 'Bó hoa ăn được mùa Valentine từ 55K',
    time: '10:22 11/02/2020',
    image: 'images/vlt.png',
  },
  {
    name: 'Gấu siêu to khổng lồ | Đồng giá 99K',
    time: '10:22 11/02/2020',
    image: 'images/vlt2.png',
  },
  {
    name: 'Mừng thành viên mới, Voucher tới',
    time: '10:22 11/02/2020',
    image: 'images/km.png',
  },
]
export const Notification = (): JSX.Element => {
  const totalNotifications = useMemo(() => notification.length, [])
  return (
    <li className="hide_notification">
      <a href="#">
        <i className="icofont-bell-alt" />
        <span>{totalNotifications}</span>
      </a>
      <div className="notification_view">
        <h1>Thông báo của bạn</h1>
        <div className="limit">
          {notification.map((i, idx) => (
            <>
              <div className="products_inCart">
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
                    <time style={{ color: '#999', fontSize: 13 }}>{i.time}</time>
                    <button>
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="view_andCheckout_btns">
          <a href="notification.html" className="b2_checkout">
            Xem tất cả thông báo
          </a>
        </div>
      </div>
    </li>
  )
}
