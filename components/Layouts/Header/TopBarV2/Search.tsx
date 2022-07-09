import React, { useState } from "react";

export const Search = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search_form">
      <form className="search-wrapper">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          required
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <button type="submit">
          <span className="lnr lnr-magnifier" />
        </button>
      </form>
      <ul className="search_links">
        <li>
          <a>Quần áo trẻ em</a>
        </li>
        <li>
          <a>Giày thể thao</a>
        </li>
        <li>
          <a>Đồng hồ thời trang</a>
        </li>
        <li>
          <a>SmartWatch</a>
        </li>
        <li>
          <a>Xe đạp điện</a>
        </li>
        <li>
          <a className="search_end">Sạc điện thoại</a>
        </li>
      </ul>
    </div>
  );
};
