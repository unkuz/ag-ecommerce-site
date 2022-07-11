import React from "react";

export const Slide2 = () => {
  return (
    <section className="slide_2">
      <div className="container">
        <div className="title_primery v2">
          <h1 className="t1">
            Nhà cung cấp hàng đầu
            <span />
          </h1>
        </div>
        <div className="products_slide owl-carousel">
          <div className="item_slide_pro">
            <div className="flex_items">
              <div className="img">
                <a>
                  <img src="images/img1.jpg" />
                </a>
              </div>
              <div className="content_slide_pro">
                <h4>Smart Phone </h4>
                <span>+999 sản phẩm</span>
                <a>Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="item_slide_pro">
            <div className="flex_items">
              <div className="img">
                <a>
                  <img src="images/img2.jpg" />
                </a>
              </div>
              <div className="content_slide_pro">
                <h4>Smart Phone </h4>
                <span>+999 sản phẩm</span>
                <a>Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="item_slide_pro">
            <div className="flex_items">
              <div className="img">
                <a>
                  <img src="images/img1.jpg" />
                </a>
              </div>
              <div className="content_slide_pro">
                <h4>Smart Phone </h4>
                <span>+999 sản phẩm</span>
                <a>Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
