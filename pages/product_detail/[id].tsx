import { SlideProduct } from '@@/components/ProductDetail/SlideProduct'
import { MainLayout } from '@@/layouts/MainLayout'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const ProductDetail: NextPageWithLayout = () => {
  return (
    <div>
      <section className="product_detail">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Thiết bị điện tử</a>
              </li>
              <li className="breadcrumb-item texts_ active" aria-current="page">
                Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng phân phối chính thức
              </li>
            </ol>
          </nav>
          <div className="row flex_row">
            <div className="col-md-3">
              <div className="left_proDetail">
                <div className="other_products_left">
                  <div className="other_p1" style={{ marginBottom: 15 }}>
                    <h1 className="t1Pro">Cùng danh mục</h1>
                    <ul>
                      <li>
                        <a href>
                          Smart phone <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Máy tính bảng <span>(550)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Laptop <span>(231)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Máy tính để bàn <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Gaming PC<span>(46)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Gaming phone <span>(123)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="other_p2" style={{ marginBottom: 15 }}>
                    <h1 className="t1Pro">Sản phẩm HOT</h1>
                    <a href>
                      <img src="images/bn5.jpg" alt />
                    </a>
                  </div>
                  <div className="other_p3">
                    <h1 className="t1Pro">Sản phẩm liên quan</h1>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/i2.png" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/samsungbox.jpg" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/samsung3.jpg" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/i1.png" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/img1.jpg" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                    <div className="related_products">
                      <div className="related_img">
                        <a href>
                          <img src="images/macbook2.jpg" alt />
                        </a>
                      </div>
                      <div className="related_product_price">
                        <span>Computers &amp; Accessories</span>
                        <h4>
                          <a href>Cordless TrackMan Wheel</a>
                        </h4>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col_p1">
              <div className="bg">
                <div className="row ">
                  <div className="col-md-6">
                    <SlideProduct />
                    {/* <div className="slide_product_drtail">
                      <div id="sync1" className="owl-carousel owl-theme">
                        <div className="item">
                          <div className="tiles">
                            <div className="tile" data-scale={2} data-image="images/bt.jpg" />
                          </div>
                        </div>
                        <div className="item">
                          <div className="tiles">
                            <div className="tile" data-scale={2} data-image="images/dt.jpg" />
                          </div>
                        </div>
                        <div className="item">
                          <div className="tiles">
                            <div className="tile" data-scale={2} data-image="images/flycam.jpg" />
                          </div>
                        </div>
                      </div>
                      <div id="sync2" className="owl-carousel owl-theme">
                        <div className="item">
                          <a href>
                            <img src="images/bt.jpg" alt="" />
                          </a>
                        </div>
                        <div className="item">
                          <a href>
                            <img src="images/dt.jpg" alt />
                          </a>
                        </div>
                        <div className="item">
                          <a href>
                            <img src="images/flycam.jpg" alt />
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-md-6 col_p1">
                    <div className="detail_">
                      <h1>
                        {' '}
                        <span>Smart phone</span>Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng
                        phân phối chính thức
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
                        <img src="images/aq.png" alt />
                        <p>
                          Miễn phí vận chuyển cho đơn hàng từ <span>149.000đ</span> (lên đến đến{' '}
                          <span>45.000đ</span> tùy giá trị đơn hàng và tùy Shop)
                        </p>
                      </div>
                      <div className="feature_p">
                        <ul>
                          <li>
                            <span className="a-list-item">
                              Intel Core i5 processors (13-inch model)
                            </span>
                          </li>
                          <li>
                            <span className="a-list-item">
                              Intel Iris Graphics 6100 (13-inch model)
                            </span>
                          </li>
                          <li>
                            <span className="a-list-item">Flash storage</span>
                          </li>
                          <li>
                            <span className="a-list-item">
                              Up to 10 hours of battery life2 (13-inch model)
                            </span>
                          </li>
                          <li>
                            <span className="a-list-item">
                              Force Touch trackpad (13-inch model)
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="color_p">
                        <ul className="nav-list">
                          <li>
                            <strong style={{ marginRight: 15 }}>Màu sắc:</strong>
                          </li>
                          <li className="show_nums">
                            <button className="active" href="#">
                              Trắng
                            </button>
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
                            <a href title="Facebook">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href title="Zalo">
                              <span style={{ fontWeight: 'bold' }}>Z</span>
                            </a>
                          </li>
                          <li>
                            <a href title="Twitter">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shopInfo">
                  <div className="shop">
                    <div className="shop_name">
                      <a href>
                        <img src="images/q1.png" alt />
                      </a>
                      <a href>
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
              </div>
              <div className="tab_product_detail">
                <ul className="tabs">
                  <li>
                    <a href="#tab1_describe">Mô tả sản phẩm</a>
                  </li>
                  <li>
                    <a href="#tab2_detail">Chi tiết sản phẩm</a>
                  </li>
                  <li>
                    <a href="#tab3_evaluate">Đánh giá sản phẩm</a>
                  </li>
                </ul>
                <div className="tab_container">
                  <div id="tab1_describe" className="tab_content">
                    <div className="content_tab1_p">
                      <ul>
                        <li>
                          <p>
                            Bộ sản phẩm gồm điện thoại Samsung Galaxy A20s, bộ dây sạc điện thoại và
                            giấy HDSD
                          </p>
                          <p>
                            Mặt lưng tráng gương kết hợp với viền cong mượt mà từ Galaxy A20s mang
                            lại sự sang trọng và cảm giác cầm nắm vừa vặn trong lòng bàn tay. Đa
                            dạng các phiên bản màu để bạn thoả sức lựa chọn: Đen cá tính, Xanh ngọc
                            lục và Đỏ ruby.
                          </p>
                          <img src="images/dt6.jpg" alt />
                        </li>
                        <li>
                          <p>
                            Màn hình siêu rộng Infinity-V 6.5-inch nâng tầm mọi trải nghiệm thị
                            giác. Thiết kế tràn viền đến từ tuyệt tác Galaxy A20s mở ra thế giới
                            giải trí sống động trước mắt bạn.
                          </p>
                          <img src="images/dt4.jpg" alt />
                        </li>
                        <li>
                          <p>
                            Lưu giữ mọi khoảnh khắc quý giá cùng bộ ba camera đỉnh cao. Camera chính
                            13MP cho mọi bức hình luôn rõ ràng, sắc nét hoàn hảo. Chụp xoá phông
                            chuyên nghiệp với camera Cảm Biến Chiều Sâu 5MP. Mở rộng khung hình, bắt
                            trọn mọi khoảnh khắc với camera Góc Siêu Rộng 120 độ đầy ấn tượng.
                          </p>
                          <img src="images/dt5.jpg" alt />
                        </li>
                        <li>
                          <p>
                            Sự kết hợp giữa camera Góc Rộng 77 độ và Góc Siêu Rộng 120 độ trong
                            Galaxy A20s giúp bạn chụp toàn cảnh dễ dàng hơn bao giờ hết. Chụp điều
                            bạn thấy, trọn vẹn từng chi tiết.
                          </p>
                        </li>
                        <li>
                          <p>
                            Bộ xử lý Octa-Core mạnh mẽ cùng với RAM 3GB/4GB giúp bạn chơi game mượt
                            mà và xem video trực tuyến tốc độ cao. Lưu giữ hình ảnh, tài liệu quan
                            trọng và nhiều hơn thế nữa với bộ nhớ trong 32GB và bộ nhớ ngoài lên đến
                            512GB.
                          </p>
                          <img src="images/dt2.jpg" alt />
                        </li>
                        <li>
                          <p>
                            Galaxy A20s có dung lượng pin lên đến 4000mAh (tiêu chuẩn)* và công nghệ
                            Sạc Nhanh 15W ấn tượng, khiến việc giải trí không còn bị gián đoạn.
                            Thoải mái nhắn tin với hội bạn, xem bất tận các video trực tuyến và làm
                            mọi điều bạn thích liền mạch, suốt ngày dài.
                          </p>
                        </li>
                        <li>
                          <p>Truy Cập Dễ Dàng. Bảo Mật Tối Ưu</p>
                        </li>
                        <li>
                          <p>
                            Sẵn sàng trải nghiệm những đột phá trên giao diện One UI Core của
                            Samsung mang đến hiệu suất ấn tượng kết hợp thiết kế hoàn toàn mới giúp
                            tối ưu trải nghiệm người dùng. Chuyển đổi dễ dàng toàn bộ màn hình sang
                            tông tối với Chế Độ Ban Đêm trên Galaxy A20s mang lại cảm giác tự nhiên
                            và dễ chịu cho mắt khi sử dụng.
                          </p>
                          <img src="images/dt.jpg" alt />
                        </li>
                        <li>
                          <p>
                            Với khả năng hỗ trợ và chẩn đoán tình trạng thiết bị, gửi các báo cáo
                            lỗi và yêu cầu trợ giúp, ứng dụng Samsung Members giúp thiết bị Galaxy
                            vận hành tối ưu, mang đến những trải nghiệm hoàn hảo cho người dùng.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="tab2_detail" className="tab_content">
                    <div className="content_tab2_p">
                      <ul>
                        <li>
                          <p>Thông số kỹ thuật chi tiết:</p>
                        </li>
                        <li>
                          <p>Danh bạ lưu trữ : Không giới hạn</p>
                        </li>
                        <li>
                          <p>RAM: 3 GB</p>
                        </li>
                        <li>
                          <p>ROM: 32 GB</p>
                        </li>
                        <li>
                          <p>Thẻ nhớ ngoài: MicroSD</p>
                        </li>
                        <li>
                          <p>Hỗ trợ thẻ nhớ tối đa: 512 GB</p>
                        </li>
                        <li>
                          <p>Màu màn hình: 16 triệu màu</p>
                        </li>
                        <li>
                          <p>Công nghệ màn hình : IPS LCD</p>
                        </li>
                        <li>
                          <p>Màn hình: 6.5 inches</p>
                        </li>
                        <li>
                          <p>Mặt kính màn hình: Kính cường lực Gorilla Glass</p>
                        </li>
                        <li>
                          <p>Chuẩn màn hình: HD+</p>
                        </li>
                        <li>
                          <p>Độ phân giải màn hình: Đang cập nhật</p>
                        </li>
                        <li>
                          <p>
                            Thiết kế &amp; Trọng lượng: kích thước: 163.3 x 77.5 x 8.0, trọng lượng:
                            183 g
                          </p>
                        </li>
                        <li>
                          <p>Loại pin: Li-Ion</p>
                        </li>
                        <li>
                          <p>Dung lượng pin: 4000 mAh</p>
                        </li>
                        <li>
                          <p>Công nghệ pin: Tiết kiệm pin, Sạc pin nhanh</p>
                        </li>
                        <li>
                          <p>Kết nối &amp; Cổng giao tiếp</p>
                        </li>
                        <li>
                          <p>Khe cắm sim: 2</p>
                        </li>
                        <li>
                          <p>Wifi: Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot</p>
                        </li>
                        <li>
                          <p>GPS: BDS, A-GPS, GLONASS</p>
                        </li>
                        <li>
                          <p>Bluetooth: v4.2, A2DP, LE</p>
                        </li>
                        <li>
                          <p>Băng tần 4G: 4G LTE</p>
                        </li>
                        <li>
                          <p>Mạng di động: 2G, 3G, 4G</p>
                        </li>
                        <li>
                          <p>Cổng sạc: USB Type-C</p>
                        </li>
                        <li>
                          <p>Hệ điều hành : Android 9.0 (Pie)</p>
                        </li>
                        <li>
                          <p>Camera Trước: độ phân giải: 8.0 MP</p>
                        </li>
                        <li>
                          <p>Camera Sau: độ phân giải 13.0 MP + 8.0 MP + 5.0 MP</p>
                        </li>
                        <li>
                          <p>Đèn Flash: Có</p>
                        </li>
                        <li>
                          <p>Chipset: Exynos 7884 8 nhân</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="tab3_evaluate" className="tab_content">
                    <p className="paragrab">
                      (Đây là thông tin người mua đánh giá shop bán sản phẩm này có đúng mô tả
                      không.)
                    </p>
                    <div className="tab_in">
                      <div className="evaluate_btn  tabs">
                        <div className="evaluate">
                          <span className="num1">4.5</span>
                          <span className="allNum">/5 Sao</span>
                          <h2 className="t_evaluate">
                            Dựa trên <span>5</span> đánh giá
                          </h2>
                        </div>
                        <div className="tab-opt">
                          <ul>
                            <li className="active">
                              <a href="#tab-01_evaluate">
                                Tất cả <span>(5)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#tab-02_evaluate">
                                5 SAO <span>(1)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#tab-03_evaluate">
                                4 SAO <span>(1)</span>
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#tab-04_evaluate">
                                3 SAO <span>(1)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#tab-05_evaluate">
                                2 SAO <span>(1)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#tab-06_evaluate">
                                1 SAO <span>(1)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tabs-content">
                        <div id="tab-01_evaluate">
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/1.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Hằng Trần</span>
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
                                  <span className="fa fa-star" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/2.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Sơn Nguyễn</span>
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
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/3.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Hương DPK22</span>
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
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/4.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Phạm Thùy Linh</span>
                              <ul>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/5.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Sơn Tùng</span>
                              <ul>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div id="tab-02_evaluate" style={{ display: 'none' }}>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/1.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Hằng Trần</span>
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
                                  <span className="fa fa-star" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div id="tab-03_evaluate" style={{ display: 'none' }}>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/2.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Sơn Nguyễn</span>
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
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div id="tab-04_evaluate" style={{ display: 'none' }}>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/3.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Hương DPK22</span>
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
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div id="tab-05_evaluate" style={{ display: 'none' }}>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/4.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Phạm Thùy Linh</span>
                              <ul>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div id="tab-06_evaluate" style={{ display: 'none' }}>
                          <div className="feedback_">
                            <div className="feedbacker">
                              <img src="images/5.png" alt />
                            </div>
                            <div className="fbContent">
                              <span>Sơn Tùng</span>
                              <ul>
                                <li>
                                  <span className="fa fa-star" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" />
                                </li>
                              </ul>
                              <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                              </p>
                              <time>
                                {' '}
                                <span>11:45</span> 05-02-2020{' '}
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="btns_links">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Mã giảm giá</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Gói quà tặng</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Thời trang nam</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Thời trang nữ</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Thời trang trẻ em</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Phụ kiện điện thoại</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Sức khỏe &amp; làm đẹp</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Đồ điện gia dụng</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Du lịch</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Xe &amp; đời sống</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Thể thao &amp; giải trí</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a href>
                    <img src="images/price.svg" alt />
                  </a>
                </div>
                <div className="title">
                  <a href>Trang sức</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="topbar">
        <div className="container">
          <div className="flex_topbar">
            <div className="topbar_left">
              <a href className="bill texts-s">
                Theo dõi đơn hàng
              </a>
              <a href className="texts-s">
                Bán hàng cùng Divi
              </a>
            </div>
            <div className="topbar_right">
              <a href className="bill texts-s">
                Tải ứng dụng
              </a>
              <a href className="bill texts-s">
                Hỗ trợ khách hàng
              </a>
              <a href className="texts-s">
                Trợ giúp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default ProductDetail
