import React from "react";

export const Account = () => {
  return (
    <li className="user_hide_">
      <a href="#">
        <img className="user" src="images/avt_ihr.jpeg" />
        {/* <strong>User Name</strong> */}
        <i className="fa fa-caret-down" style={{ fontSize: 12 }} />
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
            <a>Đăng xuất</a>
          </li>
        </ul>
      </div>
    </li>
  );
};
