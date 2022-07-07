import React from "react";

const categories = [
  { label: "Mua bán nhà đất", img: "images/house.svg" },
  { label: "Đặt vé máy bay", img: "images/air2.svg" },
  { label: "Đặt vé tàu - xe", img: "images/car-insurance.svg" },
  { label: "Tour du lịch", img: "images/air.svg" },
  { label: "Đặt phòng khách sạn", img: "images/booking.svg" },
  { label: "Sức khỏe &amp; Y tế", img: "images/examine.svg" },
  { label: "Vé xem phim", img: "images/ticket.svg" },
  { label: "Cổ phẩn Công ty", img: "images/work.svg" },
];

export const TopBarCategories = () => {
  return (
    <div className="topBar_categories">
      <div className="container">
        <div className="topbar_slide owl-carousel">
          {categories.map((category, idx) => (
            <div className="item" key={`category_${idx}`}>
              <a>
                <img alt="" src={category.img} />
                <span>{category.label}</span> <i className="line" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
