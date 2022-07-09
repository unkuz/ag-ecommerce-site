import cls from "classnames";
import { useRef } from "react";
import styles from "./TopBarCategories.module.scss";

const categories = [
  { label: "Mua bán nhà đất", img: "images/house.svg" },
  { label: "Đặt vé máy bay", img: "images/air2.svg" },
  { label: "Đặt vé tàu - xe", img: "images/car-insurance.svg" },
  { label: "Tour du lịch", img: "images/air.svg" },
  { label: "Đặt phòng khách sạn", img: "images/booking.svg" },
  { label: "Sức khỏe & Y tế", img: "images/examine.svg" },
  { label: "Vé xem phim", img: "images/ticket.svg" },
  { label: "Cổ phẩn Công ty", img: "images/work.svg" },
];
export const TopBarCategories = () => {
  const slideRef = useRef(null);
  return (
    <div className={cls("topBar_categories", styles.topBar_categories)}>
      <div className={cls("container", styles.container)}>
        <div
          className={cls("topbar_slide", styles.topbar_slide)}
          ref={slideRef}
        >
          {categories.map((category, idx) => (
            <div className={cls("item", styles.item)} key={`category_${idx}`}>
              <a>
                <img alt="" src={category.img} />
                <span>{category.label}</span> <i className="line" />
              </a>
            </div>
          ))}
        </div>
        <div className={cls("slide-next", styles["slide-next"])}>
          <i className="arrow_carrot-right"></i>
        </div>
      </div>
    </div>
  );
};
