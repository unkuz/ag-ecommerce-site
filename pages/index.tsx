import { AGPoints } from "@@/components/Layouts/Header/AGPoints";
import { BannerContent } from "@@/layouts/BannerContent";
import { BannerTop } from "@@/components/Layouts/Header/BannerTop";
import { BannerTopSlide } from "@@/layouts/BannerTopSlide";
import { ExclusiveProducts } from "@@/layouts/ExclusiveProducts";
import { FlashSale } from "@@/layouts/FlashSale";
import { Footer } from "@@/layouts/Footer";
import { FtEnd } from "@@/layouts/FtEnd";
import { MenuHeader } from "@@/components/Layouts/Header/MenuHeader";
import { ScrollTop } from "@@/layouts/ScrollTop";
import { Slide2 } from "@@/layouts/Slide2";
import { TopBarCategories } from "@@/components/Layouts/Header/TopBarCategories";
import { TopBarV2 } from "@@/components/Layouts/Header/TopBarV2";
import { NextPage } from "next";
import Script from "next/script";
import { MainLayout } from "@@/layouts/MainLayout";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <BannerTopSlide />
      <BannerContent />
      <Slide2 />
      <FlashSale />
      <BannerContent />
      <ExclusiveProducts />

      <section className="caterory_5 news_">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="course_bner">
                <a>
                  <img src="images/video2.png" width="100%" />
                </a>
              </div>
            </div>
            <div className="col-md-9 clear_Leftpd">
              <div className="title_primery v2">
                <h1 className="t1">
                  Top video khóa học
                  <span />
                </h1>
                <a>
                  Xem thêm <span className="fa fa-angle-right" />
                </a>
              </div>
              <div className="bg_">
                <div className="slide_group slide_category_5 owl-carousel">
                  <div className="item">
                    <a href="course_details.html">
                      <img src="images/t1.png" width="100%" />
                    </a>
                    <div className="element-list">
                      <span className="icon_sale v2">HOT</span>
                      <h4>
                        <a href="course_details.html">
                          Nền tảng tiếng Anh cho người mới bắt đầu
                        </a>
                      </h4>
                      <div className="author-info">
                        <a>
                          <img src="images/2.png" />
                          <span>Nguyễn Đức Chung</span>
                        </a>
                      </div>
                      <div className="price">
                        <span className="price_sale">199.000đ</span>
                        <span className="price_inherit">299.000đ</span>
                      </div>
                      <div className="categories_bottom">
                        <div className="vote_caterory_1">
                          <ul className="vote">
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star-half-o" />
                              </a>
                            </li>
                          </ul>
                          <span className="amount">(999)</span>
                        </div>
                        <div className="view">
                          <i className="icofont-users-alt-4" />
                          <span>1.1k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="course_details.html">
                      <img src="images/t2.jpg" width="100%" />
                    </a>
                    <div className="element-list">
                      <span className="icon_sale v2">HOT</span>
                      <h4>
                        <a href="course_details.html">
                          Cordless TrackMan Wheel Cordless TrackMan Wheel
                        </a>
                      </h4>
                      <div className="author-info">
                        <a>
                          <img src="images/3.png" />
                          <span>Nguyễn Đức Chung</span>
                        </a>
                      </div>
                      <div className="price">
                        <span className="price_sale">199.000đ</span>
                        <span className="price_inherit">299.000đ</span>
                      </div>
                      <div className="categories_bottom">
                        <div className="vote_caterory_1">
                          <ul className="vote">
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star-half-o" />
                              </a>
                            </li>
                          </ul>
                          <span className="amount">(999)</span>
                        </div>
                        <div className="view">
                          <i className="icofont-users-alt-4" />
                          <span>861</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="course_details.html">
                      <img src="images/t5.jpg" width="100%" />
                    </a>
                    <div className="element-list">
                      <span className="icon_sale v2">HOT</span>
                      <h4>
                        <a href="course_details.html">
                          Cordless TrackMan Wheel Cordless TrackMan Wheel
                        </a>
                      </h4>
                      <div className="author-info">
                        <a>
                          <img src="images/4.png" />
                          <span>Nguyễn Đức Chung</span>
                        </a>
                      </div>
                      <div className="price">
                        <span className="price_sale">199.000đ</span>
                        <span className="price_inherit">299.000đ</span>
                      </div>
                      <div className="categories_bottom">
                        <div className="vote_caterory_1">
                          <ul className="vote">
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star-half-o" />
                              </a>
                            </li>
                          </ul>
                          <span className="amount">(999)</span>
                        </div>
                        <div className="view">
                          <i className="icofont-users-alt-4" />
                          <span>524</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="course_details.html">
                      <img src="images/t3.jpg" width="100%" />
                    </a>
                    <div className="element-list">
                      <span className="icon_sale v2">HOT</span>
                      <h4>
                        <a href="course_details.html">
                          Cordless TrackMan Wheel Cordless TrackMan Wheel
                        </a>
                      </h4>
                      <div className="author-info">
                        <a>
                          <img src="images/5.png" />
                          <span>Nguyễn Đức Chung</span>
                        </a>
                      </div>
                      <div className="price">
                        <span className="price_sale">199.000đ</span>
                        <span className="price_inherit">299.000đ</span>
                      </div>
                      <div className="categories_bottom">
                        <div className="vote_caterory_1">
                          <ul className="vote">
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <span className="fa fa-star-half-o" />
                              </a>
                            </li>
                          </ul>
                          <span className="amount">(999)</span>
                        </div>
                        <div className="view">
                          <i className="icofont-users-alt-4" />
                          <span>323</span>
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
      <section className="search_trends">
        <div className="container">
          <div className="title_primery v2">
            <h1 className="t1">
              Xu hướng tìm kiếm
              <span />
            </h1>
            <a>
              Xem thêm <span className="fa fa-angle-right" />
            </a>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img src="images/sony.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img src="images/sony2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/sony3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/sony4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img src="images/samsung3.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img src="images/samsungbox.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/sound2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/sound.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img src="images/ubl.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img src="images/sound.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/pd2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/pd4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img src="images/macbook2.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img src="images/smartwatch3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/samsung3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img src="images/samsungbox.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="caterory_6">
        <div className="container">
          <div className="title_primery">
            <h1 className="t1">
              Tin tức mới
              <span />
            </h1>
            <a>
              Xem thêm <span className="fa fa-angle-right" />
            </a>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col_st">
              <div className="flex_6">
                <div className="content_6">
                  <a href="categories.html">
                    <img src="images/blog1.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <div className="news_post">
                    <h4>
                      <a href="categories.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iure accusamus illum alias eveniet, beatae
                        cupiditate voluptates facere labore quasi totam hic
                        enim, repellendus deleniti qui vel quod minus.
                        Quibusdam, ad!
                      </a>
                    </h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure accusamus illum alias eveniet, beatae cupiditate
                    voluptates facere labore quasi totam hic enim, repellendus
                    deleniti qui vel quod minus. Quibusdam, ad!
                  </p>
                  <div className="bottom_news">
                    <time>
                      <i className="icofont-clock-time" />
                      23/06/20 15:00
                    </time>
                    <p>
                      <i className="icofont-newspaper" />
                      Tin bởi <span>Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="flex_6">
                <div className="content_6">
                  <a href="categories.html">
                    <img src="images/blog2.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iure accusamus illum alias eveniet, beatae cupiditate
                      voluptates facere labore quasi totam hic enim, repellendus
                      deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure accusamus illum alias eveniet, beatae cupiditate
                    voluptates facere labore quasi totam hic enim, repellendus
                    deleniti qui vel quod minus. Quibusdam, ad!
                  </p>
                  <div className="bottom_news">
                    <time>
                      <i className="icofont-clock-time" />
                      23/06/20 15:00
                    </time>
                    <p>
                      <i className="icofont-newspaper" />
                      Tin bởi <span>Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="flex_6">
                <div className="content_6">
                  <a href="categories.html">
                    <img src="images/blog3.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iure accusamus illum alias eveniet, beatae cupiditate
                      voluptates facere labore quasi totam hic enim, repellendus
                      deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure accusamus illum alias eveniet, beatae cupiditate
                    voluptates facere labore quasi totam hic enim, repellendus
                    deleniti qui vel quod minus. Quibusdam, ad!
                  </p>
                  <div className="bottom_news">
                    <time>
                      <i className="icofont-clock-time" />
                      23/06/20 15:00
                    </time>
                    <p>
                      <i className="icofont-newspaper" />
                      Tin bởi <span>Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="flex_6">
                <div className="content_6">
                  <a href="categories.html">
                    <img src="images/dt.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iure accusamus illum alias eveniet, beatae cupiditate
                      voluptates facere labore quasi totam hic enim, repellendus
                      deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure accusamus illum alias eveniet, beatae cupiditate
                    voluptates facere labore quasi totam hic enim, repellendus
                    deleniti qui vel quod minus. Quibusdam, ad!
                  </p>
                  <div className="bottom_news">
                    <time>
                      <i className="icofont-clock-time" />
                      23/06/20 15:00
                    </time>
                    <p>
                      <i className="icofont-newspaper" />
                      Tin bởi <span>Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="banner_content">
        <div className="container">
          <a>
            <img src="images/banner.jpg" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
      <section className="exclusive_products selling_products">
        <div className="container">
          <div className="title_primery">
            <h1 className="t1">
              Sản phẩm bán chạy
              <span />
            </h1>
            <a>
              Xem thêm <span className="fa fa-angle-right" />
            </a>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/samsungbox.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/headphone3.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/smartwatch3.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/sound.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/usb.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/pd3.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/flycam.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/ubl.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/ring.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/samsung3.jpg" />
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
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/sony2.jpg" />
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
                  <div className="sale_">-25%</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-mobile col_st fix_column">
              <div className="item_ex_pro">
                <a className="hvr-grow">
                  <img src="images/sound2.jpg" />
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
          </div>
        </div>
      </section>
      <section className="similar_product">
        <div className="container">
          <div className="title_primery v2">
            <h1 className="t1">
              Tìm kiếm phổ biến
              <span />
            </h1>
          </div>
          <div className="slide_similar_product owl-carousel">
            <div className="item">
              <div className="similar_product_img">
                <a>
                  <img src="images/i2.png" />
                </a>
              </div>
              <div className="similar_product_price">
                <span>Computers &amp; Accessories</span>
                <h1>
                  <a>Cordless TrackMan Wheel</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">199.000đ</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="similar_product_img">
                <a>
                  <img src="images/h1_s1.jpg" />
                </a>
              </div>
              <div className="similar_product_price">
                <span>Computers &amp; Accessories</span>
                <h1>
                  <a>Cordless TrackMan Wheel</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">199.000đ</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="similar_product_img">
                <a>
                  <img src="images/h1_s2.jpg" />
                </a>
              </div>
              <div className="similar_product_price">
                <span>Computers &amp; Accessories</span>
                <h1>
                  <a>Cordless TrackMan Wheel</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">199.000đ</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="similar_product_img">
                <a>
                  <img src="images/h1_s3.jpg" />
                </a>
              </div>
              <div className="similar_product_price">
                <span>Computers &amp; Accessories</span>
                <h1>
                  <a>Cordless TrackMan Wheel</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">199.000đ</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="similar_product_img">
                <a>
                  <img src="images/i2.png" />
                </a>
              </div>
              <div className="similar_product_price">
                <span>Computers &amp; Accessories</span>
                <h1>
                  <a>Cordless TrackMan Wheel</a>
                </h1>
                <div className="prices">
                  <span className="pri_1">199.000đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="banner_content">
        <div className="container">
          <a>
            <img src="images/banner.jpg" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
      <section className="exclusive_products selling_products">
        <div className="container">
          <div className="title_primery">
            <h1 className="t1">
              Các sản phẩm khác
              <span />
            </h1>
            <a>
              Xem thêm <span className="fa fa-angle-right" />
            </a>
          </div>
          <div className="slide_flash owl-carousel">
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/pd3.jpg" />
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
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/tv2.jpg" />
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
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/macbook2.jpg" />
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
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/sound2.jpg" />
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
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/pd4.jpg" />
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
            <div className="item_flash">
              <a href="product_detail.html">
                <img src="images/samsungbox.jpg" />
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
      </section>
      <section className="btns_links">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Mã giảm giá</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Gói quà tặng</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Thời trang nam</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Thời trang nữ</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Thời trang trẻ em</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Phụ kiện điện thoại</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Sức khỏe &amp; làm đẹp</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Đồ điện gia dụng</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Du lịch</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Xe &amp; đời sống</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Thể thao &amp; giải trí</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img src="images/price.svg" />
                  </a>
                </div>
                <div className="title">
                  <a>Trang sức</a>
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
              <a className="bill texts-s">Theo dõi đơn hàng</a>
              <a className="texts-s">Đăng ký bán hàng</a>
            </div>
            <div className="topbar_right">
              <a className="bill texts-s">Tải ứng dụng</a>
              <a className="bill texts-s">Hỗ trợ khách hàng</a>
              <a className="texts-s">Trợ giúp</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FtEnd />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
