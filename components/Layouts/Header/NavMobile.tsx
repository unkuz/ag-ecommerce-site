import React, { useCallback } from 'react'

type TProps = {
  onClose: () => void
}

export const NavMobile = ({ onClose }: TProps): JSX.Element => {
  const onCloseNav = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <div className="m-nav active">
      <button onClick={onCloseNav} className="m-nav-close following">
        ×
      </button>
      <div className="nav-ct">
        <ul>
          <li>
            <a href="tmdt_home.html">
              <img src="images/l1.png" alt="" />
            </a>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Thiết bị điện tử
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Phụ kiện điện tử
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              TV &amp; Thiết bị gia dụng
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Sức khỏe &amp; Làm đẹp
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Mẹ &amp; Bé, Đồ chơi
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Siêu thị tạp hóa
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Hàng gia dụng &amp; Đời sống
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Thời trang nam
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Thời trang nữ
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Phụ kiện thời trang
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Thể thao &amp; Du lịch
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" className="acd-drop" />
            <a className="smooth" href="#">
              Ôtô, Xe máy &amp; Thiết bị định vị
            </a>
            <ul>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
              <li>
                <a className="smooth" href="#">
                  Demo category name
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
