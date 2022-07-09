import React, { useCallback } from "react";
import { Logo } from "./../Logo";
import { CartBellPhone } from "./CartBellPhone";

import { Search } from "./Search";

type TProps = {
  onShowNav: () => void;
};

export const TopBarV2 = ({ onShowNav }: TProps): JSX.Element => {
  const onShowNavMobile = useCallback(() => {
    onShowNav();
  }, [onShowNav]);
  return (
    <div className="topbar_v2">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <Logo />
            <div className="menu_moblie">
              <button className="open-mnav" onClick={onShowNavMobile}>
                <span className="fa fa-bars" style={{ marginRight: 5 }} /> Danh
                Mục
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <Search />
          </div>
          <div className="col-md-3 col-sm-3">
            <CartBellPhone />
          </div>
        </div>
      </div>
    </div>
  );
};
