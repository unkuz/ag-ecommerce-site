import { BannerTopSlide } from '@@/components/Home/BannnerTop/BannerTopSlide'
import { ExclusiveProducts } from '@@/components/Home/ExclusiveProducts'
import { FlashSale } from '@@/components/Home/FlashSale'
import { MainLayout } from '@@/layouts/MainLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { BannerContent } from '@@/components/Home/BannerContent'
import { TopVideoCourse } from '@@/components/Home/TopVideoCourse/TopVideoCourse'
import { PopularSearch } from '@@/components/Home/PopularSearch/PopularSearch'
import { OtherProduct } from '@@/components/Home/OtherProducts/OtherProduct'
import { LeadingProvider } from '@@/components/Home/LeadingProvider'

const Home: NextPageWithLayout = (): JSX.Element => {
  return (
    <div>
      <BannerTopSlide />
      <BannerContent />
      <LeadingProvider />
      <FlashSale />
      <BannerContent />
      <ExclusiveProducts />
      <TopVideoCourse />
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
                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit</a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img alt="" src="images/sony.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sony2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sony3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sony4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit</a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img alt="" src="images/samsung3.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/samsungbox.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sound2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sound.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit</a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img alt="" src="images/ubl.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/sound.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/pd2.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/pd4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col_st">
              <div className="search_trends_box">
                <div className="title_nums">
                  <h4>
                    <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit</a>
                    <span>+999 sản phẩm</span>
                  </h4>
                  <a>
                    <img alt="" src="images/macbook2.jpg" />
                  </a>
                </div>
                <div className="imgs_bottom">
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/smartwatch3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/samsung3.jpg" />
                    </a>
                  </div>
                  <div className="img_box">
                    <a>
                      <img alt="" src="images/samsungbox.jpg" />
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
                    <img alt="" src="images/blog1.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <div className="news_post">
                    <h4>
                      <a href="categories.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus
                        illum alias eveniet, beatae cupiditate voluptates facere labore quasi totam
                        hic enim, repellendus deleniti qui vel quod minus. Quibusdam, ad!
                      </a>
                    </h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                    alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic enim,
                    repellendus deleniti qui vel quod minus. Quibusdam, ad!
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
                    <img alt="" src="images/blog2.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                      alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic
                      enim, repellendus deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                    alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic enim,
                    repellendus deleniti qui vel quod minus. Quibusdam, ad!
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
                    <img alt="" src="images/blog3.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                      alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic
                      enim, repellendus deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                    alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic enim,
                    repellendus deleniti qui vel quod minus. Quibusdam, ad!
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
                    <img alt="" src="images/dt.jpg" width="100%" />
                  </a>
                </div>
                <div className="ct_right">
                  <h4>
                    <a href="categories.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                      alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic
                      enim, repellendus deleniti qui vel quod minus. Quibusdam, ad!
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusamus illum
                    alias eveniet, beatae cupiditate voluptates facere labore quasi totam hic enim,
                    repellendus deleniti qui vel quod minus. Quibusdam, ad!
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
            <img alt="" src="images/banner.jpg" style={{ width: '100%' }} />
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
                  <img alt="" src="images/samsungbox.jpg" />
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
                  <img alt="" src="images/headphone3.jpg" />
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
                  <img alt="" src="images/smartwatch3.jpg" />
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
                  <img alt="" src="images/sound.jpg" />
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
                  <img alt="" src="images/usb.jpg" />
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
                  <img alt="" src="images/pd3.jpg" />
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
                  <img alt="" src="images/flycam.jpg" />
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
                  <img alt="" src="images/ubl.jpg" />
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
                  <img alt="" src="images/ring.jpg" />
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
                  <img alt="" src="images/samsung3.jpg" />
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
                  <img alt="" src="images/sony2.jpg" />
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
                  <img alt="" src="images/sound2.jpg" />
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

      <PopularSearch />

      <BannerContent />

      <OtherProduct />

      <section className="btns_links">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-mobile col_st">
              <div className="link_btn_box">
                <div className="icons">
                  <a>
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
                    <img alt="" src="images/price.svg" />
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
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default Home
