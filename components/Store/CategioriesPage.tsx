import React from 'react'

export const CategioriesPage = () => {
  return (
    <section className="categories_page">
      <div className="container">
        <div className="row">
          <div className="col-md-3 filter_1366">
            <div className="cate_filter">
              <div className="products_filter">
                <h4 className="title_cate_left">
                  Bộ lọc sản phẩm <span className="lnr lnr-funnel" />
                </h4>
                <div className="checks_">
                  <div className="promotion_checkbox">
                    <input type="checkbox" id="promotion" name defaultValue />
                    <label htmlFor="promotion">Khuyến mại</label>
                  </div>
                  <div className="ex_d_speed_checkbox">
                    <input type="checkbox" id="ex_d_speed" name defaultValue />
                    <label htmlFor="ex_d_speed">Chuyển phát hỏa tốc</label>
                  </div>
                  <div className="app_sale_checkbox">
                    <input type="checkbox" id="app_sale" name defaultValue />
                    <label htmlFor="app_sale">Khuyến mại app</label>
                  </div>
                  <div className="installment_checkbox">
                    <input type="checkbox" id="installment" name defaultValue />
                    <label htmlFor="installment">Trả góp 0%</label>
                  </div>
                </div>
                <div className="prices_">
                  <h4 className="title_cate_left">Khoảng giá</h4>
                  <div className="price_range_filter">
                    <div className="price_range_input">
                      <input type="text" maxLength={13} placeholder="Từ" defaultValue />
                      <input type="text" maxLength={13} placeholder="Đến" defaultValue />
                      <button className="button_solid">
                        Áp dụng
                        <i className="fa fa-angle-double-right" />
                      </button>
                    </div>
                  </div>
                  <div className="other_prices">
                    <button>Dưới 250K</button>
                    <button>250K - 350K</button>
                    <button>350K - 900K</button>
                    <button>900K - 1.5M</button>
                    <button>1.5M - 2.5M</button>
                    <button>2.5M - 5M</button>
                    <button>5M - 8.5M</button>
                    <button>8.5M - 10M</button>
                    <button>10M - 15M</button>
                    <button>Trên 15M</button>
                  </div>
                </div>
                <div className="colors">
                  <h4 className="title_cate_left">Màu sắc</h4>
                  <div className="black">
                    <input type="checkbox" id="black_" name defaultValue />
                    <label htmlFor="black_">Đen</label>
                  </div>
                  <div className="red">
                    <input type="checkbox" id="red_" name defaultValue />
                    <label htmlFor="red_">Đỏ</label>
                  </div>
                  <div className="yellow">
                    <input type="checkbox" id="yellow_" name defaultValue />
                    <label htmlFor="yellow_">Vàng</label>
                  </div>
                  <div className="white">
                    <input type="checkbox" id="white_" name defaultValue />
                    <label htmlFor="white_">Trắng</label>
                  </div>
                  <div className="blue">
                    <input type="checkbox" id="blue_" name defaultValue />
                    <label htmlFor="blue_">Xanh da trời</label>
                  </div>
                  <div className="green">
                    <input type="checkbox" id="green_" name defaultValue />
                    <label htmlFor="green_">Xanh lá cây</label>
                  </div>
                  <div className="orange">
                    <input type="checkbox" id="orange_" name defaultValue />
                    <label htmlFor="orange_">Cam</label>
                  </div>
                  <div className="purple">
                    <input type="checkbox" id="purple_" name defaultValue />
                    <label htmlFor="purple_">Tím</label>
                  </div>
                  <div className="green_2">
                    <input type="checkbox" id="green_2_" name defaultValue />
                    <label htmlFor="green_2_">Xanh ngọc</label>
                  </div>
                </div>
                <div className="manufacturer">
                  <h4 className="title_cate_left">Hãng sản xuất</h4>
                  <div className="appple">
                    <input type="checkbox" id="apple_" name defaultValue />
                    <label htmlFor="apple_">Apple</label>
                  </div>
                  <div className="samsung">
                    <input type="checkbox" id="samsung_" name defaultValue />
                    <label htmlFor="samsung_">Samsung</label>
                  </div>
                  <div className="oppo">
                    <input type="checkbox" id="oppo_" name defaultValue />
                    <label htmlFor="oppo_">Oppo</label>
                  </div>
                  <div className="xiaomi">
                    <input type="checkbox" id="xiaomi_" name defaultValue />
                    <label htmlFor="xiaomi_">Xiaomi</label>
                  </div>
                  <div className="vsmart">
                    <input type="checkbox" id="vsmart_" name defaultValue />
                    <label htmlFor="vsmart_">Vsmart</label>
                  </div>
                  <div className="vivo">
                    <input type="checkbox" id="vivo_" name defaultValue />
                    <label htmlFor="vivo_">Vivo</label>
                  </div>
                  <div className="realme">
                    <input type="checkbox" id="realme_" name defaultValue />
                    <label htmlFor="realme_">Realme</label>
                  </div>
                </div>
                <div className="sizes">
                  <h4 className="title_cate_left">Kích thước</h4>
                  <div className="size1">
                    <input type="checkbox" id="size1_" name defaultValue />
                    <label htmlFor="size1_">1.5 inch - 2.5 inch</label>
                  </div>
                  <div className="size2">
                    <input type="checkbox" id="size2_" name defaultValue />
                    <label htmlFor="size2_">2.5 inch - 3.5 inch</label>
                  </div>
                  <div className="size3">
                    <input type="checkbox" id="size3_" name defaultValue />
                    <label htmlFor="size3_">3.5 inch - 4.5 inch</label>
                  </div>
                  <div className="size4">
                    <input type="checkbox" id="size4_" name defaultValue />
                    <label htmlFor="size4_">4.5 inch - 5.5 inch</label>
                  </div>
                  <div className="size5">
                    <input type="checkbox" id="size5_" name defaultValue />
                    <label htmlFor="size5_">5.5 inch - 6.5 inch</label>
                  </div>
                  <div className="size6">
                    <input type="checkbox" id="size6_" name defaultValue />
                    <label htmlFor="size6_">Khác</label>
                  </div>
                </div>
                <div className="ram">
                  <h4 className="title_cate_left">RAM</h4>
                  <div className="ram1">
                    <input type="checkbox" id="ram1_" name defaultValue />
                    <label htmlFor="ram1_">1 GB</label>
                  </div>
                  <div className="ram2">
                    <input type="checkbox" id="ram2_" name defaultValue />
                    <label htmlFor="ram2_">2 GB</label>
                  </div>
                  <div className="ram3">
                    <input type="checkbox" id="ram3_" name defaultValue />
                    <label htmlFor="ram3_">3 GB</label>
                  </div>
                  <div className="ram4">
                    <input type="checkbox" id="ram4_" name defaultValue />
                    <label htmlFor="ram4_">4 GB</label>
                  </div>
                  <div className="ram5">
                    <input type="checkbox" id="ram5_" name defaultValue />
                    <label htmlFor="ram5_">5 GB</label>
                  </div>
                  <div className="ram6">
                    <input type="checkbox" id="ram6_" name defaultValue />
                    <label htmlFor="ram6_">8 GB</label>
                  </div>
                  <div className="ram7">
                    <input type="checkbox" id="ram7_" name defaultValue />
                    <label htmlFor="ram7_">16 GB</label>
                  </div>
                  <div className="ram8">
                    <input type="checkbox" id="ram8_" name defaultValue />
                    <label htmlFor="ram8_">Khác</label>
                  </div>
                </div>
                <div className="memory">
                  <h4 className="title_cate_left">Bộ nhớ trong</h4>
                  <div className="memory1">
                    <input type="checkbox" id="memory1_" name defaultValue />
                    <label htmlFor="memory1_">Dưới 2 GB</label>
                  </div>
                  <div className="memory2">
                    <input type="checkbox" id="memory2_" name defaultValue />
                    <label htmlFor="memory2_">8 GB</label>
                  </div>
                  <div className="memory3">
                    <input type="checkbox" id="memory3_" name defaultValue />
                    <label htmlFor="memory3_">16 GB</label>
                  </div>
                  <div className="memory4">
                    <input type="checkbox" id="memory4_" name defaultValue />
                    <label htmlFor="memory4_">32 GB</label>
                  </div>
                  <div className="memory5">
                    <input type="checkbox" id="memory5_" name defaultValue />
                    <label htmlFor="memory5_">64 GB</label>
                  </div>
                  <div className="memory6">
                    <input type="checkbox" id="memory6_" name defaultValue />
                    <label htmlFor="memory6_">Khác</label>
                  </div>
                </div>
                <div className="sim">
                  <h4 className="title_cate_left">số sim</h4>
                  <div className="sim1">
                    <input type="checkbox" id="sim1_" name defaultValue />
                    <label htmlFor="sim1_">1 SIM</label>
                  </div>
                  <div className="sim2">
                    <input type="checkbox" id="sim2_" name defaultValue />
                    <label htmlFor="sim2_">2 SIM</label>
                  </div>
                  <div className="sim3">
                    <input type="checkbox" id="sim3_" name defaultValue />
                    <label htmlFor="sim3_">3 SIM</label>
                  </div>
                  <div className="sim4">
                    <input type="checkbox" id="sim4_" name defaultValue />
                    <label htmlFor="sim4_">4 SIM</label>
                  </div>
                </div>
                <div className="features">
                  <h4 className="title_cate_left">Tính năng</h4>
                  <div className="features1">
                    <input type="checkbox" id="features1_" name defaultValue />
                    <label htmlFor="features1_">Dành cho người cao tuổi</label>
                  </div>
                  <div className="features2">
                    <input type="checkbox" id="features2_" name defaultValue />
                    <label htmlFor="features2_">Chống va đập</label>
                  </div>
                  <div className="features3">
                    <input type="checkbox" id="features3_" name defaultValue />
                    <label htmlFor="features3_">Chống nước</label>
                  </div>
                  <div className="features4">
                    <input type="checkbox" id="features4_" name defaultValue />
                    <label htmlFor="features4_">Chuyên gia selfie</label>
                  </div>
                  <div className="features5">
                    <input type="checkbox" id="features5_" name defaultValue />
                    <label htmlFor="features5_">Pin khủng</label>
                  </div>
                  <div className="features6">
                    <input type="checkbox" id="features6_" name defaultValue />
                    <label htmlFor="features6_">Sạc nhanh</label>
                  </div>
                  <div className="features7">
                    <input type="checkbox" id="features7_" name defaultValue />
                    <label htmlFor="features7_">Tràn viền</label>
                  </div>
                </div>
                <div className="location">
                  <h4 className="title_cate_left">Vị trí shop</h4>
                  <div className="location1">
                    <input type="checkbox" id="location1_" name defaultValue />
                    <label htmlFor="location1_">Hà Nội</label>
                  </div>
                  <div className="location2">
                    <input type="checkbox" id="location2_" name defaultValue />
                    <label htmlFor="location2_">Đà Nẵng</label>
                  </div>
                  <div className="location3">
                    <input type="checkbox" id="location3_" name defaultValue />
                    <label htmlFor="location3_">TP. HCM</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter_991">
            {/* Buttons */}
            <label htmlFor="slide-menu-right" className="menu-button">
              Bộ lọc
            </label>
            <div className="slide-menu">
              <input id="slide-menu-right" className="menu-toggle" type="checkbox" />
              <div className="menu-wrap">
                <label htmlFor="slide-menu-right" className="menu-close">
                  Close
                </label>
                <div className="cate_filter">
                  <div className="products_filter">
                    <h4 className="title_cate_left">
                      Bộ lọc sản phẩm <span className="lnr lnr-funnel " />
                    </h4>
                    <div className="checks_">
                      <div className="promotion_checkbox">
                        <input type="checkbox" id="promotion" name defaultValue />
                        <label htmlFor="promotion">Khuyến mại</label>
                      </div>
                      <div className="ex_d_speed_checkbox">
                        <input type="checkbox" id="ex_d_speed" name defaultValue />
                        <label htmlFor="ex_d_speed">Chuyển phát hỏa tốc</label>
                      </div>
                      <div className="app_sale_checkbox">
                        <input type="checkbox" id="app_sale" name defaultValue />
                        <label htmlFor="app_sale">Khuyến mại app</label>
                      </div>
                      <div className="installment_checkbox">
                        <input type="checkbox" id="installment" name defaultValue />
                        <label htmlFor="installment">Trả góp 0%</label>
                      </div>
                    </div>
                    <div className="prices_">
                      <h4 className="title_cate_left">Khoảng giá</h4>
                      <div className="price_range_filter">
                        <div className="price_range_input">
                          <input type="text" maxLength={13} placeholder="Từ" defaultValue />
                          <span />
                          <input type="text" maxLength={13} placeholder="Đến" defaultValue />
                          <span />
                          <button className="button_solid">
                            Áp dụng
                            <i className="fa fa-angle-double-right" />
                          </button>
                        </div>
                      </div>
                      <div className="other_prices">
                        <button>Dưới 250K</button>
                        <button>250K - 350K</button>
                        <button>350K - 900K</button>
                        <button>900K - 1.5M</button>
                        <button>1.5M - 2.5M</button>
                        <button>2.5M - 5M</button>
                        <button>5M - 8.5M</button>
                        <button>8.5M - 10M</button>
                        <button>10M - 15M</button>
                        <button>Trên 15M</button>
                      </div>
                    </div>
                    <div className="colors">
                      <h4 className="title_cate_left">Màu sắc</h4>
                      <div className="black">
                        <input type="checkbox" id="black_" name defaultValue />
                        <label htmlFor="black_">Đen</label>
                      </div>
                      <div className="red">
                        <input type="checkbox" id="red_" name defaultValue />
                        <label htmlFor="red_">Đỏ</label>
                      </div>
                      <div className="yellow">
                        <input type="checkbox" id="yellow_" name defaultValue />
                        <label htmlFor="yellow_">Vàng</label>
                      </div>
                      <div className="white">
                        <input type="checkbox" id="white_" name defaultValue />
                        <label htmlFor="white_">Trắng</label>
                      </div>
                      <div className="blue">
                        <input type="checkbox" id="blue_" name defaultValue />
                        <label htmlFor="blue_">Xanh da trời</label>
                      </div>
                      <div className="green">
                        <input type="checkbox" id="green_" name defaultValue />
                        <label htmlFor="green_">Xanh lá cây</label>
                      </div>
                      <div className="orange">
                        <input type="checkbox" id="orange_" name defaultValue />
                        <label htmlFor="orange_">Cam</label>
                      </div>
                      <div className="purple">
                        <input type="checkbox" id="purple_" name defaultValue />
                        <label htmlFor="purple_">Tím</label>
                      </div>
                      <div className="green_2">
                        <input type="checkbox" id="green_2_" name defaultValue />
                        <label htmlFor="green_2_">Xanh ngọc</label>
                      </div>
                    </div>
                    <div className="manufacturer">
                      <h4 className="title_cate_left">Hãng sản xuất</h4>
                      <div className="appple">
                        <input type="checkbox" id="apple_" name defaultValue />
                        <label htmlFor="apple_">Apple</label>
                      </div>
                      <div className="samsung">
                        <input type="checkbox" id="samsung_" name defaultValue />
                        <label htmlFor="samsung_">Samsung</label>
                      </div>
                      <div className="oppo">
                        <input type="checkbox" id="oppo_" name defaultValue />
                        <label htmlFor="oppo_">Oppo</label>
                      </div>
                      <div className="xiaomi">
                        <input type="checkbox" id="xiaomi_" name defaultValue />
                        <label htmlFor="xiaomi_">Xiaomi</label>
                      </div>
                      <div className="vsmart">
                        <input type="checkbox" id="vsmart_" name defaultValue />
                        <label htmlFor="vsmart_">Vsmart</label>
                      </div>
                      <div className="vivo">
                        <input type="checkbox" id="vivo_" name defaultValue />
                        <label htmlFor="vivo_">Vivo</label>
                      </div>
                      <div className="realme">
                        <input type="checkbox" id="realme_" name defaultValue />
                        <label htmlFor="realme_">Realme</label>
                      </div>
                    </div>
                    <div className="sizes">
                      <h4 className="title_cate_left">Kích thước</h4>
                      <div className="size1">
                        <input type="checkbox" id="size1_" name defaultValue />
                        <label htmlFor="size1_">1.5 inch - 2.5 inch</label>
                      </div>
                      <div className="size2">
                        <input type="checkbox" id="size2_" name defaultValue />
                        <label htmlFor="size2_">2.5 inch - 3.5 inch</label>
                      </div>
                      <div className="size3">
                        <input type="checkbox" id="size3_" name defaultValue />
                        <label htmlFor="size3_">3.5 inch - 4.5 inch</label>
                      </div>
                      <div className="size4">
                        <input type="checkbox" id="size4_" name defaultValue />
                        <label htmlFor="size4_">4.5 inch - 5.5 inch</label>
                      </div>
                      <div className="size5">
                        <input type="checkbox" id="size5_" name defaultValue />
                        <label htmlFor="size5_">5.5 inch - 6.5 inch</label>
                      </div>
                      <div className="size6">
                        <input type="checkbox" id="size6_" name defaultValue />
                        <label htmlFor="size6_">Khác</label>
                      </div>
                    </div>
                    <div className="ram">
                      <h4 className="title_cate_left">RAM</h4>
                      <div className="ram1">
                        <input type="checkbox" id="ram1_" name defaultValue />
                        <label htmlFor="ram1_">1 GB</label>
                      </div>
                      <div className="ram2">
                        <input type="checkbox" id="ram2_" name defaultValue />
                        <label htmlFor="ram2_">2 GB</label>
                      </div>
                      <div className="ram3">
                        <input type="checkbox" id="ram3_" name defaultValue />
                        <label htmlFor="ram3_">3 GB</label>
                      </div>
                      <div className="ram4">
                        <input type="checkbox" id="ram4_" name defaultValue />
                        <label htmlFor="ram4_">4 GB</label>
                      </div>
                      <div className="ram5">
                        <input type="checkbox" id="ram5_" name defaultValue />
                        <label htmlFor="ram5_">5 GB</label>
                      </div>
                      <div className="ram6">
                        <input type="checkbox" id="ram6_" name defaultValue />
                        <label htmlFor="ram6_">8 GB</label>
                      </div>
                      <div className="ram7">
                        <input type="checkbox" id="ram7_" name defaultValue />
                        <label htmlFor="ram7_">16 GB</label>
                      </div>
                      <div className="ram8">
                        <input type="checkbox" id="ram8_" name defaultValue />
                        <label htmlFor="ram8_">Khác</label>
                      </div>
                    </div>
                    <div className="memory">
                      <h4 className="title_cate_left">Bộ nhớ trong</h4>
                      <div className="memory1">
                        <input type="checkbox" id="memory1_" name defaultValue />
                        <label htmlFor="memory1_">Dưới 2 GB</label>
                      </div>
                      <div className="memory2">
                        <input type="checkbox" id="memory2_" name defaultValue />
                        <label htmlFor="memory2_">8 GB</label>
                      </div>
                      <div className="memory3">
                        <input type="checkbox" id="memory3_" name defaultValue />
                        <label htmlFor="memory3_">16 GB</label>
                      </div>
                      <div className="memory4">
                        <input type="checkbox" id="memory4_" name defaultValue />
                        <label htmlFor="memory4_">32 GB</label>
                      </div>
                      <div className="memory5">
                        <input type="checkbox" id="memory5_" name defaultValue />
                        <label htmlFor="memory5_">64 GB</label>
                      </div>
                      <div className="memory6">
                        <input type="checkbox" id="memory6_" name defaultValue />
                        <label htmlFor="memory6_">Khác</label>
                      </div>
                    </div>
                    <div className="sim">
                      <h4 className="title_cate_left">số sim</h4>
                      <div className="sim1">
                        <input type="checkbox" id="sim1_" name defaultValue />
                        <label htmlFor="sim1_">1 SIM</label>
                      </div>
                      <div className="sim2">
                        <input type="checkbox" id="sim2_" name defaultValue />
                        <label htmlFor="sim2_">2 SIM</label>
                      </div>
                      <div className="sim3">
                        <input type="checkbox" id="sim3_" name defaultValue />
                        <label htmlFor="sim3_">3 SIM</label>
                      </div>
                      <div className="sim4">
                        <input type="checkbox" id="sim4_" name defaultValue />
                        <label htmlFor="sim4_">4 SIM</label>
                      </div>
                    </div>
                    <div className="features">
                      <h4 className="title_cate_left">Tính năng</h4>
                      <div className="features1">
                        <input type="checkbox" id="features1_" name defaultValue />
                        <label htmlFor="features1_">Dành cho người cao tuổi</label>
                      </div>
                      <div className="features2">
                        <input type="checkbox" id="features2_" name defaultValue />
                        <label htmlFor="features2_">Chống va đập</label>
                      </div>
                      <div className="features3">
                        <input type="checkbox" id="features3_" name defaultValue />
                        <label htmlFor="features3_">Chống nước</label>
                      </div>
                      <div className="features4">
                        <input type="checkbox" id="features4_" name defaultValue />
                        <label htmlFor="features4_">Chuyên gia selfie</label>
                      </div>
                      <div className="features5">
                        <input type="checkbox" id="features5_" name defaultValue />
                        <label htmlFor="features5_">Pin khủng</label>
                      </div>
                      <div className="features6">
                        <input type="checkbox" id="features6_" name defaultValue />
                        <label htmlFor="features6_">Sạc nhanh</label>
                      </div>
                      <div className="features7">
                        <input type="checkbox" id="features7_" name defaultValue />
                        <label htmlFor="features7_">Tràn viền</label>
                      </div>
                    </div>
                    <div className="location">
                      <h4 className="title_cate_left">Vị trí shop</h4>
                      <div className="location1">
                        <input type="checkbox" id="location1_" name defaultValue />
                        <label htmlFor="location1_">Hà Nội</label>
                      </div>
                      <div className="location2">
                        <input type="checkbox" id="location2_" name defaultValue />
                        <label htmlFor="location2_">Đà Nẵng</label>
                      </div>
                      <div className="location3">
                        <input type="checkbox" id="location3_" name defaultValue />
                        <label htmlFor="location3_">TP. HCM</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <label htmlFor="slide-menu-right" className="menu-overlay" />
            </div>
          </div>
          <div className="col-md-9 col_nopadding">
            <div className="right_catePage">
              <div className="similar_product v2">
                <div className="title_primery v2" style={{ paddingBottom: 15 }}>
                  <h1>Tìm kiếm liên quan</h1>
                  {/* <a href="">Xem thêm <span class="fa fa-angle-right"></span></a> */}
                </div>
                <div className=" slide_categoriesTop owl-carousel">
                  <div className="item">
                    <div className="similar_product_img">
                      <a href>
                        <img src="images/i2.png" alt />
                      </a>
                    </div>
                    <div className="similar_product_price">
                      <span>Computers &amp; Accessories</span>
                      <h1>
                        <a href>Cordless TrackMan Wheel</a>
                      </h1>
                      <div className="prices">
                        <span className="pri_1">199.000đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="similar_product_img">
                      <a href>
                        <img src="images/h1_s1.jpg" alt />
                      </a>
                    </div>
                    <div className="similar_product_price">
                      <span>Computers &amp; Accessories</span>
                      <h1>
                        <a href>Cordless TrackMan Wheel</a>
                      </h1>
                      <div className="prices">
                        <span className="pri_1">199.000đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="similar_product_img">
                      <a href>
                        <img src="images/h1_s2.jpg" alt />
                      </a>
                    </div>
                    <div className="similar_product_price">
                      <span>Computers &amp; Accessories</span>
                      <h1>
                        <a href>Cordless TrackMan Wheel</a>
                      </h1>
                      <div className="prices">
                        <span className="pri_1">199.000đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="similar_product_img">
                      <a href>
                        <img src="images/h1_s3.jpg" alt />
                      </a>
                    </div>
                    <div className="similar_product_price">
                      <span>Computers &amp; Accessories</span>
                      <h1>
                        <a href>Cordless TrackMan Wheel</a>
                      </h1>
                      <div className="prices">
                        <span className="pri_1">199.000đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="similar_product_img">
                      <a href>
                        <img src="images/i2.png" alt />
                      </a>
                    </div>
                    <div className="similar_product_price">
                      <span>Computers &amp; Accessories</span>
                      <h1>
                        <a href>Cordless TrackMan Wheel</a>
                      </h1>
                      <div className="prices">
                        <span className="pri_1">199.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-list-box">
                <h4>
                  Điện thoại - máy tính bảng: <span>123 kết quả</span>
                </h4>
              </div>
              <div className="view_priority">
                <span>Ưu tiên xem:</span>
                <ul className="nav">
                  <li className="active_">
                    <a href="#">Hàng mới</a>
                  </li>
                  <li>
                    <a href="#">Bán chạy</a>
                  </li>
                  <li>
                    <a href="#">Giảm giá</a>
                  </li>
                  <li>
                    <a href="#">Giá từ thấp đến cao</a>
                  </li>
                  <li>
                    <a href="#">Giá từ cao đến thấp</a>
                  </li>
                  <li>
                    <a href="#">Phổ biến</a>
                  </li>
                </ul>
              </div>
              <div className="exclusive_products categories_list" style={{ marginBottom: 0 }}>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_1">
                        <img src="images/samsungbox.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/samsungbox.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/headphone3.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/sound.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1 ">299.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/usb.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/pd3.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/flycam.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ubl.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ring.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/samsung3.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow  i_2">
                        <img src="images/sony2.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/sound2.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ubl.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/sony2.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/sound2.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ubl.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/usb.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow  i_2">
                        <img src="images/pd3.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/flycam.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ubl.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/flycam.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/ubl.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="line_center" style={{ marginRight: 5 }}>
                            --
                          </span>
                          <span className="pri_1">299.000đ</span>
                        </div>
                        <div className="sale_ v2">NEW</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow i_2">
                        <img src="images/usb.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs col_st">
                    <div className="item_ex_pro">
                      <a href="product_detail.html" className="hvr-grow  i_2">
                        <img src="images/pd3.jpg" alt />
                      </a>
                      <div className="flash_name">
                        <span>Computers &amp; Accessories</span>
                        <h1>Cordless TrackMan Wheel</h1>
                        <div className="prices">
                          <span className="pri_1">199.000đ</span>
                          <span className="pri_2">2.999.000đ</span>
                        </div>
                        <div className="sale_">-25%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation" className="navigation_page">
                  <ul className="pagination" style={{ background: 'none' }}>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="lnr lnr-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item  active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="lnr lnr-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
