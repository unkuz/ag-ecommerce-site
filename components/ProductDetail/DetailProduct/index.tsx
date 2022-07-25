import React from 'react'

export const DetailProduct = () => {
  return (
    <div className="detail_">
      <h1>
        <span>Smart phone</span>Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính
        thức
      </h1>
      <div className="votes">
        <ul>
          <li>
            <span className="fa fa-star" />
          </li>
          <li>
            <span className="fa fa-star" />
          </li>
          <li>
            <span className="fa fa-star" />
          </li>
          <li>
            <span className="fa fa-star" />
          </li>
          <li>
            <span className="fa fa-star-half" />
          </li>
          <li>
            <span style={{ marginLeft: 5 }}>4.5</span>
          </li>
        </ul>
        <a href="#" className="vote_num">
          5 Đánh giá
        </a>
        <span>99 Đã bán</span>
      </div>
      <div className="price_p">
        <span className="p1">10.999.000đ</span>
        <span className="p2">12.999.999đ</span>
      </div>
      <div className="texts_p">
        <img src="../images/aq.png" alt="" />
        <p>
          Miễn phí vận chuyển cho đơn hàng từ <span>149.000đ</span> (lên đến đến{' '}
          <span>45.000đ</span> tùy giá trị đơn hàng và tùy Shop)
        </p>
      </div>
      <div className="feature_p">
        <ul>
          <li>
            <span className="a-list-item">Intel Core i5 processors (13-inch model)</span>
          </li>
          <li>
            <span className="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span>
          </li>
          <li>
            <span className="a-list-item">Flash storage</span>
          </li>
          <li>
            <span className="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span>
          </li>
          <li>
            <span className="a-list-item">Force Touch trackpad (13-inch model)</span>
          </li>
        </ul>
      </div>
      <div className="color_p">
        <ul className="nav-list">
          <li>
            <strong style={{ marginRight: 15 }}>Màu sắc:</strong>
          </li>
          <li className="show_nums">
            <button className="active">Trắng</button>
            <span>Có 111 sản phẩm</span>
          </li>
          <li className="show_nums">
            <button>Đỏ</button>
            <span>Có 23 sản phẩm</span>
          </li>
          <li className="show_nums">
            <button>Đen</button>
            <span>Có 54 sản phẩm</span>
          </li>
        </ul>
      </div>
      <div className="num_p">
        <span>
          <strong style={{ marginRight: 12 }}>Số lượng:</strong>
        </span>
        <div className="qty-input">
          <span className="less">-</span>
          <input type="text" defaultValue={1} />
          <span className="more">+</span>
        </div>
      </div>
      <div className="addtocart">
        <button type="button" className="buy">
          Mua ngay
        </button>
        <button type="button" className="add">
          Thêm vào giỏ
        </button>
      </div>
      <div className="share">
        <ul>
          <li>
            <strong style={{ marginRight: 15 }}>Chia sẻ:</strong>
          </li>
          <li>
            <a href="" title="Facebook">
              <span className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="" title="Zalo">
              <span style={{ fontWeight: 'bold' }}>Z</span>
            </a>
          </li>
          <li>
            <a href="" title="Twitter">
              <span className="fa fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
