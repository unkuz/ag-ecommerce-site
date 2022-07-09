import React from 'react'

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="footer_left">
                <ul>
                  <li>
                    <h4 className="footer_title">
                      Liên hệ với chúng tôi
                      <span />
                    </h4>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-map-marker adds" />
                      Số 6/45 Trần Thái Tông - Cầu Giấy - Hà Nội
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-phone-handset" />
                      02462818868
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-envelope" />
                      info@agecome.com
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-clock clock" />
                      Thứ 2 đến CN: 9h - 18h (Hotline), 7h - 22h(chat trực tuyến)
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4 className="footer_title">
                      Kết nối với chúng tôi
                      <span />
                    </h4>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <span style={{ fontWeight: 'bold' }}>Z</span>Zalo
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-youtube-play" />
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-sm-8">
              <div className="footer_center">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col_st v2">
                    <ul>
                      <li>
                        <h4 className="footer_title">
                          Dành cho người mua
                          <span />
                        </h4>
                      </li>
                      <li>
                        <a>Giải quyết khiếu nại</a>
                      </li>
                      <li>
                        <a>Hướng dẫn mua hàng</a>
                      </li>
                      <li>
                        <a>Chính sách đổi trả</a>
                      </li>
                      <li>
                        <a>Chính sách bảo hành &amp; bảo dưỡng</a>
                      </li>
                      <li>
                        <a>Chăm sóc khách hàng</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h4 className="footer_title">
                          Dành cho người bán
                          <span />
                        </h4>
                      </li>
                      <li>
                        <a>Bán hàng trên AG-Ecome</a>
                      </li>
                      <li>
                        <a>Quy định đối với người bán</a>
                      </li>
                      <li>
                        <a>Chính sách bán hàng</a>
                      </li>
                      <li>
                        <a>Hệ thống tiêu chí kiểm duyệt</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6 col_st v2">
                    <ul>
                      <li>
                        <h4 className="footer_title">
                          Giới thiệu
                          <span />
                        </h4>
                      </li>
                      <li>
                        <a>Giới thiệu AG-Ecome</a>
                      </li>
                      <li>
                        <a>Chính sách bảo mật &amp; thanh toán</a>
                      </li>
                      <li>
                        <a>Chính sách bảo thông tin tài khoản</a>
                      </li>
                      <li>
                        <a>Chính sách giải quyết khiếu nại</a>
                      </li>
                      <li>
                        <a>Điều khoản &amp; chính sách sử dụng</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h4 className="footer_title">
                          Hỗ trợ khách hàng
                          <span />
                        </h4>
                      </li>
                      <li>
                        <a>Các câu hỏi thường gặp</a>
                      </li>
                      <li>
                        <a>Gửi yêu cầu hỗ trợ</a>
                      </li>
                      <li>
                        <a>Cách thức vận chuyển</a>
                      </li>
                      <li>
                        <a>Hướng dẫn mua trả góp</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer_right">
                <h4 className="footer_title">
                  Tìm kiếm sản phẩm
                  <span />
                </h4>
                <form action="#" className="footer_form">
                  <div className="form-group">
                    <input type="text" placeholder="Tên sản phẩm..." />
                  </div>
                  <div className="form-group">
                    <div className="grid_formBottom">
                      <div className="types_product">
                        <select name="#">
                          <option>Ngành sản phẩm...</option>
                          <option>Thời trang</option>
                          <option>Thể thao</option>
                          <option>Du lịch</option>
                          <option>Sức khỏe</option>
                          <option>Công nghệ</option>
                          <option>Ẩm thực</option>
                          <option>Lễ hội</option>
                          <option>Xe và đời sống</option>
                          <option>Mẹ và bé</option>
                          <option>Thú cưng</option>
                        </select>
                      </div>
                      <div className="quantity_input">
                        <input type="number" placeholder="Số lượng..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button>Tìm kiếm</button>
                  </div>
                </form>
                <h4 className="footer_title">
                  Chứng nhận
                  <span />
                </h4>
                <div className="certification">
                  <img alt="" src="images/rx1.png" />
                  <img alt="" className="img_center" src="images/rx3.png" />
                  <img alt="" src="images/rx2.png" />
                </div>
                <h4 className="footer_title">
                  Tải ứng dụng trên
                  <span />
                </h4>
                <div className="certification">
                  <a>
                    <img alt="" src="images/google.jpg" style={{ marginRight: 15 }} />
                  </a>
                  <a>
                    <img alt="" src="images/app.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="payment_method">
            <h4 className="footer_title">
              Cách thức thanh toán
              <span />
            </h4>
            <div className="payment_box">
              <ul>
                <li>
                  <a>
                    <img alt="" src="images/paypal.jpg" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/discover.jpg" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/visa.jpg" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/master.jpg" />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>
                    <img alt="" src="images/n1.png" style={{ width: 125, padding: 6 }} />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/n2.png" style={{ width: 125, padding: 6 }} />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/n3.png" style={{ width: 125, padding: 6 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shipping_method">
            <h4 className="footer_title">
              Cách thức vận chuyển
              <span />
            </h4>
            <div className="shipping_box">
              <ul>
                <li>
                  <a>
                    <img alt="" src="images/s1.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/vt.jpg" style={{ padding: 3 }} />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s3.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s4.png" />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>
                    <img alt="" src="images/s5.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s6.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s7.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s8.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img alt="" src="images/s9.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="ft_end">
        <div className="container">
          <div className="copyRight_">
            Copyright: © 2020/
            <a style={{ color: '#fd8d01' }}>Ag-Ecome</a>
            <br /> Designed by DSCo., Ltd/
            <a style={{ color: '#060ef3' }}>ds.net.vn</a>
          </div>
        </div>
      </div>
    </>
  )
}
