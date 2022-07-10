import React, { useCallback, useState } from 'react'
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
      { name: 'Chăm sóc cá nhân & Làm đẹp', icon: 'icofont-ui-touch-phone' },
      { name: 'Hàng điện tử tiêu dùng', icon: 'icofont-ui-touch-phone' },
      { name: 'Đồng hồ, trang sức, kính', icon: 'icofont-ui-touch-phone' },
      { name: 'Nhà và Vườn', icon: 'icofont-cement-mix' },
      { name: 'Bao bì & In ấn', icon: 'icofont-cube' },
      { name: 'Thể thao & giải trí', icon: 'icofont-muscle-weight' },
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
      { name: 'Chăm sóc cá nhân & Làm đẹp', icon: 'icofont-ui-touch-phone' },
      { name: 'Hàng điện tử tiêu dùng', icon: 'icofont-ui-touch-phone' },
      { name: 'Đồng hồ, trang sức, kính', icon: 'icofont-ui-touch-phone' },
      { name: 'Nhà và Vườn', icon: 'icofont-cement-mix' },
      { name: 'Bao bì & In ấn', icon: 'icofont-cube' },
      { name: 'Thể thao & giải trí', icon: 'icofont-muscle-weight' },
      { name: 'Hành lý, túi và cặp', icon: 'icofont-bag-alt' },
      { name: 'Quà tặng và hàng thủ công', icon: 'icofont-gift' },
      { name: 'Sức khỏe và y tế', icon: 'icofont-first-aid' },
    ],
  },
]
export const LeftCategories = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState(TABS.TAB1)

  const onChangeCurrentTab = useCallback((tab: TABS) => {
    setCurrentTab(tab)
  }, [])
  return (
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
  )
}
