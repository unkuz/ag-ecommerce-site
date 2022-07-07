import React from "react";

export const BannerTopSlide = () => {
  return (
    <div className="banner_topSlide">
      <div className="container">
        <div className="group_bnItem">
          <div className="grid_box">
            <div className="grid_item">
              <div className="left_categories ">
                <div className="tabs_box">
                  <div id="tabs-container">
                    <ul className="tabs-menu">
                      <li>
                        <a href="#tab-1">Thị trường của tôi</a>
                      </li>
                      <li className="current">
                        <a href="#tab-2">Danh mục hot tháng 9</a>
                      </li>
                    </ul>
                    <div className="tab">
                      <div id="tab-1" className="tab-content">
                        <div className="categories_box">
                          <ul>
                            <li>
                              <a>
                                <i className="icofont-jacket" />
                                <span>Trang phục</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-ui-touch-phone" />
                                <span>Chăm sóc cá nhân &amp; Làm đẹp</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-ui-touch-phone" />
                                <span>Hàng điện tử tiêu dùng</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-ui-touch-phone" />
                                <span>Đồng hồ, trang sức, kính</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-cement-mix" />
                                <span>Nhà và Vườn</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-cube" />
                                <span>Bao bì &amp; In ấn</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-muscle-weight" />
                                <span>Thể thao &amp; giải trí</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-bag-alt" />
                                <span>Hành lý, túi và cặp</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-gift" />
                                <span>Quà tặng và hàng thủ công</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-first-aid" />
                                <span>Sức khỏe và y tế</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="tab-2" className="tab-content">
                        <div className="categories_box">
                          <ul>
                            <li>
                              <a>
                                <i className="icofont-jacket" />
                                <span>Trang phục</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-love" />
                                <span>Chăm sóc cá nhân &amp; Làm đẹp</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-usb-drive" />
                                <span>Hàng điện tử tiêu dùng</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-diamond" />
                                Đồng hồ, trang sức, kính
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-cement-mix" />
                                <span>Nhà và Vườn</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-cube" />
                                <span>Bao bì &amp; In ấn</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-muscle-weight" />
                                <span>Thể thao &amp; giải trí</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-bag-alt" />
                                <span>Hành lý, túi và cặp</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-gift" />
                                <span>Quà tặng và hàng thủ công</span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icofont-first-aid" />
                                <span>Sức khỏe và y tế</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid_item">
              <section className="slide_banner_top owl-carousel">
                <div className="item_slide">
                  <a>
                    <img src="images/12.png" />
                  </a>
                </div>
                <div className="item_slide">
                  <a>
                    <img src="images/1.webp" />
                  </a>
                </div>
                <div className="item_slide">
                  <a>
                    <img src="images/2.webp" />
                  </a>
                </div>
              </section>
            </div>
            <div className="grid_item">
              <div className="right_banners bn_group">
                <div className="top_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/b7.jpg" />
                  </a>
                </div>
                <div className="bottom_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/t2.jpg" />
                  </a>
                </div>
                <div className="bottom_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/b5.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
