import React, { useCallback, useState } from "react";
import { AGPoints } from "./AGPoints";
import { BannerTop } from "./BannerTop";
import { MenuHeader } from "./MenuHeader";
import { NavMobile } from "./NavMobile";
import { TopBarCategories } from "./TopBarCategories";
import { TopBarV2 } from "./TopBarV2";

export const Header = (): JSX.Element => {
  const [isShowNav, setIsShowNav] = useState(false);

  const onCloseNav = useCallback(() => {
    setIsShowNav(false);
  }, []);

  const onShowNav = useCallback(() => {
    setIsShowNav(true);
  }, []);

  return (
    <div>
      <header>
        <BannerTop />
        <TopBarCategories />
        <TopBarV2 onShowNav={onShowNav} />
        <AGPoints />
        <MenuHeader onShowNav={onShowNav} />
      </header>
      {isShowNav && <NavMobile onClose={onCloseNav} />}
    </div>
  );
};
