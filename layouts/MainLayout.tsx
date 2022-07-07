import React, { ReactChild, ReactElement, ReactNode } from "react";
import { AGPoints } from "../components/Layouts/Header/AGPoints";
import { BannerTop } from "../components/Layouts/Header/BannerTop";
import { MenuHeader } from "../components/Layouts/Header/MenuHeader";
import { ScrollTop } from "./ScrollTop";
import { TopBarCategories } from "../components/Layouts/Header/TopBarCategories";
import { TopBarV2 } from "../components/Layouts/Header/TopBarV2";
import { Header } from "@@/components/Layouts/Header";

type IProps = {
  children: ReactElement;
};

export const MainLayout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <ScrollTop />
    </div>
  );
};
