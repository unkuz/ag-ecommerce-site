import React from "react";
import { AGPoints } from "./AGPoints";
import { BannerTop } from "./BannerTop";
import { MenuHeader } from "./MenuHeader";
import { TopBarCategories } from "./TopBarCategories";
import { TopBarV2 } from "./TopBarV2";

export const Header: React.FC = () => {
  return (
    <div>
      <header>
        <BannerTop />
        <TopBarCategories />
        <TopBarV2 />
        <AGPoints />
        <MenuHeader />
      </header>
      <div className="m-nav active">
        <button className="m-nav-close following">×</button>
        <div className="nav-ct">
          <ul>
            {/* <li><a class="smooth" href="#" title="">Menu 1</a></li> */}
            <li>
              <a href="tmdt_home.html">
                <img src="images/l1.png" alt />
              </a>
            </li>
            <li>
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
              <button type="button" className="acd-drop" />
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
        </div>
      </div>
    </div>
  );
};
