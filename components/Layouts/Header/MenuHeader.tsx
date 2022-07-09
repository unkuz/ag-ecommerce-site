import { categories } from "@@/constants/nav";
import { useHoverOutSide } from "@@/hooks/useHoverOutSide";
import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@@/routes";

type TProps = {
  onShowNav: () => void;
};

export const MenuHeader = ({ onShowNav }: TProps): JSX.Element => {
  const [isShowNavDesktop, setIsShowNavDesktop] = useState(false);
  const categoryRef = useRef(null);

  const onShowNavDesktop = useCallback(() => {
    setIsShowNavDesktop(true);
  }, []);

  const onShowNavMobile = useCallback(() => {
    onShowNav();
  }, [onShowNav]);

  useHoverOutSide(categoryRef.current, () => {
    setIsShowNavDesktop(false);
  });
  return (
    <div className="menu_header">
      <div className="container">
        <div className="menus">
          <div className="menu_left">
            <ul className="lv_1">
              <li className="show_categories" ref={categoryRef}>
                <a role="button" onMouseEnter={onShowNavDesktop}>
                  <span className="fa fa-bars" style={{ marginRight: 5 }} />{" "}
                  Danh mục
                </a>
                {isShowNavDesktop && (
                  <ul
                    className="hide_categories lv_2"
                    style={{ display: "block" }}
                  >
                    {categories.map((i, idx) => (
                      <>
                        <li className="list_categories">
                          <a style={{ borderTop: "1px solid #eee" }}>
                            {i.title}
                            <i className="fa fa-angle-right" />
                          </a>
                          <ul className="categories_lv_3">
                            <li style={{ marginBottom: 10 }}>
                              <h4 className="title_cg">{i.title}</h4>
                            </li>
                            {i.nested.map((section, idx) => (
                              <>
                                <li>
                                  <a>{section.title}</a>
                                </li>
                              </>
                            ))}
                          </ul>
                        </li>
                      </>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href={ROUTES.HOME}>
                  <a>
                    <span
                      className="fa fa-home"
                      style={{ marginRight: 5, fontSize: 16 }}
                    />
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CATEGORIES}>
                  <a className="hot_sale" href="categories.html">
                    Bán chạy<span>Hot</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CATEGORIES}>
                  <a className="hot_sale v2" href="categories.html">
                    Giảm giá<span>Sale</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.PRESENT_PAGE}>
                  <a>
                    <span
                      className="fa fa-gift"
                      style={{ marginRight: 5, fontSize: 16 }}
                    />
                    Quà tặng
                  </a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SELLER}>
                  <a href="seller.html">
                    <span className="fa fa-pencil" style={{ marginRight: 5 }} />
                    Đăng ký bán hàng
                  </a>
                </Link>
              </li>
              <li className="apps">
                <a className="menu_end">
                  <span className="fa fa-download" style={{ marginRight: 5 }} />
                  Tải ứng dụng
                </a>
                <div className="googlePlay_appStore">
                  <div className="googlePlay">
                    <a>
                      <img src="images/google.jpg" alt="Google Play" />
                      <span>Google Play</span>
                    </a>
                  </div>
                  <div className="appStore">
                    <a>
                      <img src="images/app.jpg" alt="App Store" />
                      <span>App Store</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu_right">
            <ul>
              {/* <li>
                          <a href=""><i class="icofont-home"></i></a>
                      </li> */}
              {/* <li>
                          <a href=""><img src="images/mess.png" alt=""></a>
                      </li> */}
              <li>
                <a title="Mạng xã hội">
                  <i className="icofont-world" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icofont-wallet" title="Ví điện tử" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icofont-handshake-deal" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icofont-sale-discount" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icofont-gift" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
