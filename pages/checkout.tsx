import { NextPage } from "next";
import React from "react";

const Checkout: NextPage = () => {
  return (
    <div>
      <header>
        {/* Banner_Top */}
        {/* <div class="banner_top">
<a href=""><img src="images/banner_top.png" alt=""></a>
</div> */}
        {/* Banner_Top */}
        <div className="topBar_categories">
          <div className="container ctn_st">
            <div className="topbar_slide owl-carousel">
              {/*   <div class="item">
<a href=""><img src="images/import.svg" alt=""><span>Hàng hóa mua về bán</span> <i class="line"></i></a>
</div>

<div class="item">
<a href=""><img src="images/delivery-man.svg" alt=""><span>Hàng hóa của các đơn vị SK-KD</span> <i class="line"></i></a>
</div>

<div class="item">
<a href=""><img src="images/bs1.svg" alt=""><span>Cá nhân hệ thống kinh doanh</span> <i class="line"></i></a>
</div> */}
              <div className="item">
                <a href>
                  <img src="images/house.svg" alt />
                  <span>Mua bán nhà đất</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/air2.svg" alt />
                  <span>Đặt vé máy bay</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/car-insurance.svg" alt />
                  <span>Đặt vé tàu - xe</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/air.svg" alt />
                  <span>Tour du lịch</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/booking.svg" alt />
                  <span>Đặt phòng khách sạn</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/examine.svg" alt />
                  <span>Sức khỏe &amp; Y tế</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/ticket.svg" alt />
                  <span>Vé xem phim</span> <i className="line" />
                </a>
              </div>
              <div className="item">
                <a href>
                  <img src="images/work.svg" alt />
                  <span>Cổ phẩn Công ty</span> <i className="line" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="topbar_v2">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-2">
                <div className="logo">
                  <a href="tmdt_home.html">
                    <img src="images/logo1.png" alt />
                  </a>
                </div>
                {/* Menu_Mobile */}
                <div className="menu_moblie">
                  <nav className="d-nav">
                    <ul>
                      {/* <li><a class="smooth" href="#" title="">Menu 1</a></li> */}
                      <li>
                        <a className="smooth" href="#" title>
                          Thiết bị điện tử
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Phụ kiện điện tử
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          TV &amp; Thiết bị gia dụng
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Sức khỏe &amp; Làm đẹp
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Mẹ &amp; Bé, Đồ chơi
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Siêu thị tạp hóa
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Hàng gia dụng &amp; Đời sống
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Thời trang nam
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Thời trang nữ
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Phụ kiện thời trang
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Thể thao &amp; Du lịch
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="smooth" href="#" title>
                          Ôtô, Xe máy &amp; Thiết bị định vị
                        </a>
                        <ul>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                          <li>
                            <a className="smooth" href="#" title>
                              Demo category name
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <button className="open-mnav">
                    <span className="fa fa-bars" style={{ marginRight: 5 }} />{" "}
                    Danh Mục
                  </button>
                </div>
                {/* End_Menu_Mobile */}
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="search_form">
                  <form action className="search-wrapper">
                    <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      required
                      defaultValue
                    />
                    <button type="submit">
                      <span className="lnr lnr-magnifier" />
                    </button>
                  </form>
                  <ul className="search_links">
                    <li>
                      <a href>Quần áo trẻ em</a>
                    </li>
                    <li>
                      <a href>Giày thể thao</a>
                    </li>
                    <li>
                      <a href>Đồng hồ thời trang</a>
                    </li>
                    <li>
                      <a href>SmartWatch</a>
                    </li>
                    <li>
                      <a href>Xe đạp điện</a>
                    </li>
                    <li>
                      <a className="search_end" href>
                        Sạc điện thoại
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="cart_bell_phone">
                  <ul>
                    <li className="hide_cart">
                      <a href="#">
                        <img src="images/cart.png" alt />
                        <span>3</span>
                      </a>
                      <div className="cart_view">
                        <h1>Sản phẩm vừa thêm</h1>
                        <div className="limit">
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/samsung3.jpg" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>
                                  Điện thoại Samsung Galaxy A20s (32GB/3GB) -
                                  Hãng phân phối chính thức
                                </a>
                              </h4>
                              <div className="t_pri">
                                <p>
                                  x1 <span>10.999.000đ</span>
                                </p>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/pd2.jpg" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>
                                  Điện thoại Samsung Galaxy A20s (32GB/3GB) -
                                  Hãng phân phối chính thức
                                </a>
                              </h4>
                              <div className="t_pri">
                                <p>
                                  x1 <span>10.999.000đ</span>
                                </p>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/pd3.jpg" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>
                                  Điện thoại Samsung Galaxy A20s (32GB/3GB) -
                                  Hãng phân phối chính thức
                                </a>
                              </h4>
                              <div className="t_pri">
                                <p>
                                  x1 <span>10.999.000đ</span>
                                </p>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/pd3.jpg" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>
                                  Điện thoại Samsung Galaxy A20s (32GB/3GB) -
                                  Hãng phân phối chính thức
                                </a>
                              </h4>
                              <div className="t_pri">
                                <p>
                                  x1 <span>10.999.000đ</span>
                                </p>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="view_andCheckout_btns">
                          <a href className="b1_cart">
                            Đến giỏ hàng
                          </a>
                          <a href className="b2_checkout">
                            Thanh toán tất cả
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="hide_notification">
                      <a href="#">
                        <img src="images/bell.png" alt />
                        <span>3</span>
                      </a>
                      <div className="notification_view">
                        <h1>Thông báo của bạn</h1>
                        <div className="limit">
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/vlt.png" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>Bó hoa ăn được mùa Valentine từ 55K</a>
                              </h4>
                              <div className="t_pri">
                                <time style={{ color: "#999", fontSize: 13 }}>
                                  10:22 11/02/2020
                                </time>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/vlt2.png" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>Gấu siêu to khổng lồ | Đồng giá 99K</a>
                              </h4>
                              <div className="t_pri">
                                <time style={{ color: "#999", fontSize: 13 }}>
                                  10:22 11/02/2020
                                </time>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/km.png" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>Mừng thành viên mới, Voucher tới </a>
                              </h4>
                              <div className="t_pri">
                                <time style={{ color: "#999", fontSize: 13 }}>
                                  10:22 11/02/2020
                                </time>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="products_inCart">
                            <div className="product__1img">
                              <a href>
                                <img src="images/km.png" alt />
                              </a>
                            </div>
                            <div className="product__1Content">
                              <h4>
                                <a href>Mừng thành viên mới, Voucher tới </a>
                              </h4>
                              <div className="t_pri">
                                <time style={{ color: "#999", fontSize: 13 }}>
                                  10:22 11/02/2020
                                </time>
                                <button>
                                  <span>Xóa</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="view_andCheckout_btns">
                          <a href className="b2_checkout">
                            Xem tất cả thông báo
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* <li class="user_box__">
              <div class="btn_drop_user" id="drop_user">
                  <img class="user" src="images/avt_ihr.jpeg" alt="">
                  <strong>User Name</strong>
                  <i class="fa fa-caret-down" style="font-size: 12px;"></i>
              </div>

              <div class="dropcontent_user">
                  <ul>
                      <li><a href="">Thông tin tài khoản</a></li>
                      <li><a href="">Theo dõi đơn hàng</a></li>
                      <li><a href="">Đăng xuất</a></li>
                  </ul>
              </div>
          </li> */}
                    <li className="user_hide_">
                      <a href="#">
                        <img className="user" src="images/avt_ihr.jpeg" alt />
                        <strong>User Name</strong>
                        <i
                          className="fa fa-caret-down"
                          style={{ fontSize: 12 }}
                        />
                      </a>
                      <div className="user_show">
                        <ul>
                          <li>
                            <a href="account_info.html">Thông tin tài khoản</a>
                          </li>
                          <li>
                            <a href="wait_for_pay.html">Theo dõi đơn hàng</a>
                          </li>
                          <li>
                            <a href>Đăng xuất</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu_header">
          <div className="container ctn_st">
            <div className="menus">
              <div className="menu_left">
                <ul className="lv_1">
                  <li>
                    <a href>
                      {" "}
                      <span
                        className="fa fa-home"
                        style={{ marginRight: 5, fontSize: 16 }}
                      />
                      Home
                    </a>
                  </li>
                  <li className="show_categories">
                    <a href="#">
                      <span className="fa fa-bars" style={{ marginRight: 5 }} />{" "}
                      Danh mục
                    </a>
                    <ul className="hide_categories lv_2">
                      <li className="list_categories">
                        <a href style={{ borderTop: "1px solid #eee" }}>
                          Thiết bị điện tử
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Thiết bị điện tử</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Phụ kiện điện tử
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Phụ kiện điện tử</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          TV &amp; Thiết bị gia dụng
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">
                              TV &amp; Thiết bị gia dụng
                            </h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Sức khỏe &amp; Làm đẹp
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Sức khỏe &amp; Làm đẹp</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Mẹ &amp; Bé, Đồ chơi
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Mẹ &amp; Bé, Đồ chơi</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Siêu thị tạp hóa
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Siêu thị tạp hóa</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Hàng gia dụng &amp; Đời sống
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">
                              Hàng gia dụng &amp; Đời sống
                            </h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Thời trang nam
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Thời trang nam</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Thời trang nữ
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Thời trang nữ</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Phụ kiện thời trang
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Phụ kiện thời trang</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Thể thao &amp; Du lịch
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">Thể thao &amp; Du lịch</h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list_categories">
                        <a href="#">
                          Ôtô, Xe máy &amp; Thiết bị định vị
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="categories_lv_3">
                          <li style={{ marginBottom: 10 }}>
                            <h4 className="title_cg">
                              Ôtô, Xe máy &amp; Thiết bị định vị
                            </h4>
                          </li>
                          <li>
                            <a href>Thiết bị điện tử</a>
                          </li>
                          <li>
                            <a href>Phụ kiện điện tử</a>
                          </li>
                          <li>
                            <a href>TV &amp; Thiết bị gia dụng</a>
                          </li>
                          <li>
                            <a href>Sức khỏe &amp; Làm đẹp</a>
                          </li>
                          <li>
                            <a href>Mẹ &amp; Bé, Đồ chơi</a>
                          </li>
                          <li>
                            <a href>Siêu thị tạp hóa</a>
                          </li>
                          <li>
                            <a href>Hàng gia dụng &amp; Đời sống</a>
                          </li>
                          <li>
                            <a href>Thời trang nam</a>
                          </li>
                          <li>
                            <a href>Thời trang nữ</a>
                          </li>
                          <li>
                            <a href>Phụ kiện thời trang</a>
                          </li>
                          <li>
                            <a href>Thể thao &amp; Du lịch</a>
                          </li>
                          <li>
                            <a href>Ôtô, Xe máy &amp; Thiết bị định vị</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="hot_sale" href>
                      Bán chạy<span>Hot</span>
                    </a>
                  </li>
                  <li>
                    <a className="hot_sale v2" href>
                      Giảm giá<span>Sale</span>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span
                        className="fa fa-gift"
                        style={{ marginRight: 5, fontSize: 16 }}
                      />
                      Quà tặng
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span
                        className="fa fa-pencil"
                        style={{ marginRight: 5 }}
                      />
                      Bán hàng cùng DV
                    </a>
                  </li>
                  <li>
                    <a className="menu_end" href>
                      {" "}
                      <span
                        className="fa fa-download"
                        style={{ marginRight: 5 }}
                      />
                      Tải ứng dụng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu_right">
                <ul>
                  <li>
                    <a href>
                      <img src="images/home.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/mess.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/tmdt.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/vi.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/dn.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/code_sale.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img src="images/voucher.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="checkout">
        <div className="container">
          <ol className="breadcrumb" style={{ background: "none", padding: 0 }}>
            <li className="breadcrumb-item">
              <a href="tmdt_home.html">Trang chủ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="cart.html">Giỏ hàng</a>
            </li>
            <li className="breadcrumb-item texts_ active" aria-current="page">
              Thanh toán
            </li>
          </ol>
          <div className="checkout_content">
            <div className="row">
              <div className="col-md-8">
                <div className="my_address">
                  {/* <h1 class="cart-title">Số lượng:<span>(3 sản phẩm)</span></h1> */}
                  <p>
                    <span className="fa fa-map-marker" />
                    Địa chỉ nhận hàng
                  </p>
                  <div className="address_info">
                    <div className="name">
                      <span>User Name</span>
                    </div>
                    <div className="phone_number">
                      <span>(+84) 123 456 789</span>
                    </div>
                    <div className="addr">
                      <span>
                        85 Nguyễn Phong Sắc ( tòa nhà 121 ) - Cầu Giấy - Hà Nội,
                        Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                      </span>
                    </div>
                    <div className="btn_edit_addr">
                      <a href="address.html">Thay đổi</a>
                    </div>
                  </div>
                </div>
                <div className="prods">
                  {/*   <p class="prods_title">Sản phẩm</p> */}
                  <div className="checkOutPrd1">
                    <div className="store_name">
                      <a href>
                        <img src="images/q1.png" alt />
                        Store Name 1
                      </a>
                    </div>
                    <div className="c1PRD">
                      <div className="prod1_">
                        <div className="prod1_img">
                          <img src="images/samsung3.jpg" alt />
                        </div>
                        <div className="content_prod1">
                          <p>
                            Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng
                            phân phối chính thức
                          </p>
                          <div className="prod1_info">
                            <span className="prices">10.999.000đ</span>
                            <span className="color">Đỏ</span>
                            <span className="num">x1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="c1PRD">
                      <div className="prod1_">
                        <div className="prod1_img">
                          <img src="images/pd2.jpg" alt />
                        </div>
                        <div className="content_prod1">
                          <p>
                            Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng
                            phân phối chính thức
                          </p>
                          <div className="prod1_info">
                            <span className="prices">10.999.000đ</span>
                            <span className="color">Trắng</span>
                            <span className="num">x1</span>
                          </div>
                        </div>
                      </div>
                      <div className="lines">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="buyer_remark">
                              <span>Lời nhắn:</span>
                              <input
                                type="text"
                                placeholder="Lưu ý cho Người bán..."
                              />
                            </div>
                          </div>
                          <div className="col-md-6 right_fixs">
                            <div className="rightBottom_prod1">
                              <div className="shipping_unit">
                                <p className="pRGB_1">Đơn vị vận chuyển:</p>
                                <p className="pRGB_2">
                                  Giao hàng nhanh | <span>40.000đ</span>
                                </p>
                                <time>Nhận hàng vào 14/02 - 15/02</time>
                              </div>
                              <div className="change_btn">
                                <button>Thay đổi</button>
                              </div>
                            </div>
                            <div className="over_lay">
                              <div className="show_shipping_unit">
                                <div className="show_">
                                  <h2>Chọn đơn vị vận chuyển</h2>
                                  <div className="checkshipping_unit">
                                    <div className="fast_delivery_box">
                                      <label>
                                        <input
                                          type="radio"
                                          name="radio"
                                          defaultChecked
                                        />
                                        <span className="checkmark" />
                                        <div className="fast_delivery">
                                          <h4>Giao hàng nhanh</h4>
                                          <time>
                                            Nhận hàng vào 14/02 - 15/02
                                          </time>
                                          <p>
                                            Cho phép thanh toán khi nhận hàng
                                          </p>
                                        </div>
                                      </label>
                                      <div className="fast_delivery_price">
                                        40.000đ
                                      </div>
                                    </div>
                                    <div className="savings_delivery_box">
                                      <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <div className="fast_delivery">
                                          <h4>Giao hàng tiết kiệm</h4>
                                          <time>
                                            Nhận hàng vào 17/02 - 19/02
                                          </time>
                                          <p>
                                            Cho phép thanh toán khi nhận hàng
                                          </p>
                                        </div>
                                      </label>
                                      <div className="savings_delivery_price">
                                        75.000đ
                                      </div>
                                    </div>
                                  </div>
                                  <div className="btns_In2">
                                    <button className="confirm_btn">
                                      Xác nhận
                                    </button>
                                    <button className="back">Quay lại</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total_pricePrd1">
                      <p>
                        Tổng số tiền <span>(2 sản phẩm)</span>
                      </p>
                      <span className="pricesTp">21,998,000‬</span>
                    </div>
                  </div>
                  <div className="checkOutPrd1">
                    <div className="store_name">
                      <a href>
                        <img src="images/bg_for.png" alt />
                        Store Name 2
                      </a>
                    </div>
                    <div className="c1PRD">
                      <div className="prod1_">
                        <div className="prod1_img">
                          <img src="images/pd3.jpg" alt />
                        </div>
                        <div className="content_prod1">
                          <p>
                            Điện thoại Samsung Galaxy A20s (32GB/3GB) - Hãng
                            phân phối chính thức
                          </p>
                          <div className="prod1_info">
                            <span className="prices">10.999.000đ</span>
                            <span className="color">Đỏ</span>
                            <span className="num">x1</span>
                          </div>
                        </div>
                      </div>
                      <div className="lines">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="buyer_remark">
                              <span>Lời nhắn:</span>
                              <input
                                type="text"
                                placeholder="Lưu ý cho Người bán..."
                              />
                            </div>
                          </div>
                          <div className="col-md-6 right_fixs">
                            <div className="rightBottom_prod1">
                              <div className="shipping_unit">
                                <p className="pRGB_1">Đơn vị vận chuyển:</p>
                                <p className="pRGB_2">
                                  Giao hàng nhanh | <span>40.000đ</span>
                                </p>
                                <time>Nhận hàng vào 14/02 - 15/02</time>
                              </div>
                              <div className="change_btn">
                                <button>Thay đổi</button>
                              </div>
                            </div>
                            <div className="over_lay">
                              <div className="show_shipping_unit">
                                <div className="show_">
                                  <h2>Chọn đơn vị vận chuyển</h2>
                                  <div className="checkshipping_unit">
                                    <div className="fast_delivery_box">
                                      <label>
                                        <input
                                          type="radio"
                                          name="radio"
                                          defaultChecked
                                        />
                                        <span className="checkmark" />
                                        <div className="fast_delivery">
                                          <h4>Giao hàng nhanh</h4>
                                          <time>
                                            Nhận hàng vào 14/02 - 15/02
                                          </time>
                                          <p>
                                            Cho phép thanh toán khi nhận hàng
                                          </p>
                                        </div>
                                      </label>
                                      <div className="fast_delivery_price">
                                        40.000đ
                                      </div>
                                    </div>
                                    <div className="savings_delivery_box">
                                      <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <div className="fast_delivery">
                                          <h4>Giao hàng tiết kiệm</h4>
                                          <time>
                                            Nhận hàng vào 17/02 - 19/02
                                          </time>
                                          <p>
                                            Cho phép thanh toán khi nhận hàng
                                          </p>
                                        </div>
                                      </label>
                                      <div className="savings_delivery_price">
                                        75.000đ
                                      </div>
                                    </div>
                                  </div>
                                  <div className="btns_In2">
                                    <button className="confirm_btn">
                                      Xác nhận
                                    </button>
                                    <button className="back">Quay lại</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total_pricePrd1">
                      <p>
                        Tổng số tiền <span>(1 sản phẩm)</span>
                      </p>
                      <span className="pricesTp">10.999.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right_fixs">
                <div className="cart_orderinfo">
                  <h1 className="cart-title">Thông tin đơn hàng</h1>
                  <div className="sale_code">
                    <button className="sale_code_btn">
                      <img src="images/credit-card2.png" alt />
                      Sử dụng mã vận chuyển/Giảm giá
                      <span className="lnr lnr-chevron-down" />
                    </button>
                    <div className="sale_code_content">
                      <div className="scroll_bar">
                        <div className="shipping_code">
                          <h4>
                            Mã vận chuyển<span>(Chọn 1 mã vận chuyển)</span>
                          </h4>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Mã miễn phí vận chuyển <span>Tối đa 30K</span>
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Mã miễn phí vận chuyển <span>Tối đa 30K</span>
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Mã miễn phí vận chuyển <span>Tối đa 30K</span>
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <div className="sales_codes">
                          <h4>
                            Mã giảm giá<span>(Chọn 1 mã giảm giá)</span>
                          </h4>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/h1_s1.jpg" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Giảm 100% Đơn Tối Thiểu 0₫ giảm tối đa 40k
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Giảm 100% Đơn Tối Thiểu 0₫ giảm tối đa 40k
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="saleCodeIn">
                            <div className="left_MKM">
                              <div className="sale_code_1">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="sale_code1Content">
                                <p>
                                  Giảm 100% Đơn Tối Thiểu 0₫ giảm tối đa 40k
                                </p>
                                <time>HSD: 29/02/2020</time>
                              </div>
                            </div>
                            <label className="container-checkbox">
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="btn_footer">
                        <button className="cancel_btn">Quay lại</button>
                        <button className="submit_btn">Xác nhận</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg_">
                    <div className="form_sale_code">
                      <input
                        type="text"
                        className="form-control"
                        id="coupon_code"
                        placeholder="Nhập mã giảm giá"
                      />
                      <button>Áp dụng</button>
                    </div>
                    <div className="total_price">
                      <p>
                        Tổng tiền hàng: <span>32,997,000đ</span>
                      </p>
                      <p>
                        Phí vận chuyển: <span>80.000đ</span>
                      </p>
                    </div>
                    <div className="total_price_2">
                      <p>
                        Tổng thanh toán<span>Đã bao gồm VAT</span>
                      </p>
                      <span className="price_End">33,037,000đ</span>
                    </div>
                    <div className="cart_confirm_btn">
                      <a href="checkout.html">Tiến hành thanh toán</a>
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
                    <a href>
                      <span className="lnr lnr-map-marker adds" />
                      Số 28, ngõ 317, Tây Sơn, Đống Đa, Hà Nội
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span className="lnr lnr-phone-handset" />
                      0393.546.863
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span className="lnr lnr-envelope" />
                      info@sdchat.vn
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span
                        className="lnr lnr-clock clock"
                        style={{ width: 45 }}
                      />
                      Thứ 2 đến CN: 9h - 18h (Hotline), 7h - 22h(chat trực
                      tuyến)
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
                    <a href>
                      <img src="images/dv.png" alt />
                      Mạng xã hội của DV
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span className="fa fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span style={{ fontWeight: "bold" }}>Z</span>Zalo
                    </a>
                  </li>
                  <li>
                    <a href>
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
                        <a href>Giải quyết khiếu nại</a>
                      </li>
                      <li>
                        <a href>Hướng dẫn mua hàng</a>
                      </li>
                      <li>
                        <a href>Chính sách đổi trả</a>
                      </li>
                      <li>
                        <a href>Chính sách bảo hành &amp; bảo dưỡng</a>
                      </li>
                      <li>
                        <a href>Chăm sóc khách hàng</a>
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
                        <a href>Bán hàng trên DVchat</a>
                      </li>
                      <li>
                        <a href>Quy định đối với người bán</a>
                      </li>
                      <li>
                        <a href>Chính sách bán hàng</a>
                      </li>
                      <li>
                        <a href>Hệ thống tiêu chí kiểm duyệt</a>
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
                        <a href>Giới thiệu DVchat</a>
                      </li>
                      <li>
                        <a href>Chính sách bảo mật &amp; thanh toán</a>
                      </li>
                      <li>
                        <a href>Chính sách bảo thông tin tài khoản</a>
                      </li>
                      <li>
                        <a href>Chính sách giải quyết khiếu nại</a>
                      </li>
                      <li>
                        <a href>Điều khoản &amp; chính sách sử dụng</a>
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
                        <a href>Các câu hỏi thường gặp</a>
                      </li>
                      <li>
                        <a href>Gửi yêu cầu hỗ trợ</a>
                      </li>
                      <li>
                        <a href>Cách thức vận chuyển</a>
                      </li>
                      <li>
                        <a href>Hướng dẫn mua trả góp</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer_right">
                <h4 className="footer_title">
                  Đăng ký
                  <span />
                </h4>
                <form action className="subscribe_form">
                  <label htmlFor>
                    Đăng ký ngay
                    <br />
                    để nhận những ưu đãi khủng từ DVchat.
                  </label>
                  <div className="subscribe_box">
                    <input
                      type="email"
                      defaultValue
                      placeholder="Email của bạn..."
                      name="EMAIL"
                      id="mail"
                      className="newsletter-input form-control"
                    />
                    <button id="subscribe" className="button_sub" type="submit">
                      đăng ký
                    </button>
                  </div>
                </form>
                <h4 className="footer_title">
                  Chứng nhận
                  <span />
                </h4>
                <div className="certification">
                  <img src="images/rx1.png" alt />
                  <img className="img_center" src="images/rx3.png" alt />
                  <img src="images/rx2.png" alt />
                </div>
                <h4 className="footer_title">
                  Tải ứng dụng trên
                  <span />
                </h4>
                <div className="certification">
                  <a href>
                    <img
                      src="images/google.jpg"
                      alt
                      style={{ marginRight: 15 }}
                    />
                  </a>
                  <a href>
                    <img src="images/app.jpg" alt />
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
                  <a href>
                    <img src="images/paypal.jpg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/discover.jpg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/visa.jpg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/master.jpg" alt />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href>
                    <img
                      src="images/n1.png"
                      alt
                      style={{ width: 125, padding: 6 }}
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="images/n2.png"
                      alt
                      style={{ width: 125, padding: 6 }}
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="images/n3.png"
                      alt
                      style={{ width: 125, padding: 6 }}
                    />
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
                  <a href>
                    <img src="images/s1.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/vt.jpg" alt style={{ padding: 3 }} />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s3.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s4.png" alt />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href>
                    <img src="images/s5.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s6.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s7.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s8.png" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="images/s9.png" alt />
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
            Copyright: © 2019/
            <a href style={{ color: "#640fec" }}>
              DVchat.vn
            </a>
            <br />
            Designed by DSCo., Ltd/
            <a href style={{ color: "#060ef3" }}>
              ds.net.vn
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="zoa-btn scroll_top">
        <img src="images/left.png" style={{ borderRadius: "50%" }} />
      </a>
    </div>
  );
};

export default Checkout;
