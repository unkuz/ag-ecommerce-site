import React, { useCallback, useState } from 'react'
import { clearScreenDown } from 'readline'
import cls from 'classnames'

enum TABS {
  TAB1 = 'TAB1',
  TAB2 = 'TAB2',
}

const tabs = [
  {
    id: 1,
    name: 'Thị trường của tôi',
    else: TABS.TAB1,
    content: [
      { name: 'Trang phục', icon: 'icofont-jacket' },
      { name: 'Chăm sóc cá nhân &amp; Làm đẹp', icon: 'icofont-ui-touch-phone' },
      { name: 'Hàng điện tử tiêu dùng', icon: 'icofont-ui-touch-phone' },
      { name: 'Đồng hồ, trang sức, kính', icon: 'icofont-ui-touch-phone' },
      { name: 'Nhà và Vườn', icon: 'icofont-cement-mix' },
      { name: 'Bao bì &amp; In ấn', icon: 'icofont-cube' },
      { name: 'Thể thao &amp; giải trí', icon: 'icofont-muscle-weight' },
      { name: 'Hành lý, túi và cặp', icon: 'icofont-bag-alt' },
      { name: 'Quà tặng và hàng thủ công', icon: 'icofont-gift' },
      { name: 'Sức khỏe và y tế', icon: 'icofont-first-aid' },
    ],
  },
  {
    id: 2,
    name: 'Danh mục hot tháng 9',
    else: TABS.TAB2,
    content: [
      { name: 'Trang phục', icon: 'icofont-jacket' },
      { name: 'Chăm sóc cá nhân &amp; Làm đẹp', icon: 'icofont-ui-touch-phone' },
      { name: 'Hàng điện tử tiêu dùng', icon: 'icofont-ui-touch-phone' },
      { name: 'Đồng hồ, trang sức, kính', icon: 'icofont-ui-touch-phone' },
      { name: 'Nhà và Vườn', icon: 'icofont-cement-mix' },
      { name: 'Bao bì &amp; In ấn', icon: 'icofont-cube' },
      { name: 'Thể thao &amp; giải trí', icon: 'icofont-muscle-weight' },
      { name: 'Hành lý, túi và cặp', icon: 'icofont-bag-alt' },
      { name: 'Quà tặng và hàng thủ công', icon: 'icofont-gift' },
      { name: 'Sức khỏe và y tế', icon: 'icofont-first-aid' },
    ],
  },
]

export const BannerTopSlide = () => {
  const [currentTab, setCurrentTab] = useState(TABS.TAB1)

  const onChangeCurrentTab = useCallback((tab: TABS) => {
    setCurrentTab(tab)
  }, [])
  return (
    <div className="banner_topSlide">
      <div className="container">
        <div className="group_bnItem">
          <div className="grid_box">
            <div className="grid_item">
              <div className="left_categories ">
                <div className="tabs_box">
                  <div id="tabs-container">
                    <ul className="tabs-menu">
                      {tabs.map((i) => (
                        <li
                          onClick={() => {
                            onChangeCurrentTab(i.else)
                          }}
                          key={i.id}
                          className={cls({ current: i.else === currentTab })}
                        >
                          <a>{i.name}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="tab">
                      {tabs.map((i) => (
                        <>
                          {currentTab === i.else && (
                            <div>
                              <div className="categories_box">
                                <ul>
                                  {i.content.map((_i, idx) => (
                                    <li key={idx}>
                                      <a>
                                        <i className={_i.icon} />
                                        <span>{_i.name}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid_item">
              <section className="slide_banner_top owl-carousel">
                <div className="item_slide">
                  <a>
                    <img src="images/12.png" />
                  </a>
                </div>
                <div className="item_slide">
                  <a>
                    <img src="images/1.webp" />
                  </a>
                </div>
                <div className="item_slide">
                  <a>
                    <img src="images/2.webp" />
                  </a>
                </div>
              </section>
            </div>
            <div className="grid_item">
              <div className="right_banners bn_group">
                <div className="top_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/b7.jpg" />
                  </a>
                </div>
                <div className="bottom_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/t2.jpg" />
                  </a>
                </div>
                <div className="bottom_rightBn bn_item">
                  <a className="hvr-grow">
                    <img src="images/b5.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
