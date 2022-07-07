import React from "react";

export const FlashSale = () => {
  return (
    <section className="flash_sale">
      <div className="container">
        <div className="title_primery v2">
          <h1 className="t1">
            flash sale
            <span />
          </h1>
          <a>
            Xem thêm <span className="fa fa-angle-right" />
          </a>
        </div>
        <div className="flash_time">
          <div className="end_time">Kết thúc trong:</div>
          <div id="clockdown">
            <span className="days" />
            <span className="hours" />
            <span className="minutes" />
            <span className="seconds" />
          </div>
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
  );
};
