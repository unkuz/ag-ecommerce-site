import React, { useCallback, useRef, useState } from 'react'

const agPoints = '198.560.000'

export const AGPoints = (): JSX.Element => {
  const [isShowShare, setIsShowShare] = useState(false)
  const [isCoppiedShareLink, setIsCoppiedShareLink] = useState(false)

  const linkShareRef = useRef(null)

  const onShowShare = useCallback(() => {
    setIsShowShare(true)
  }, [])

  const onCloseShare = useCallback(() => {
    setIsShowShare(false)
  }, [])

  const onCopyShareLink = useCallback(() => {
    navigator.clipboard.writeText((linkShareRef.current as unknown as HTMLInputElement).innerText)
    setIsCoppiedShareLink(true)
  }, [])

  return (
    <div className="ag_points">
      <div className="container">
        <div className="ag_group">
          <div className="links">
            <span>
              <i className="icofont-paper-clip icons" />
              Link giới thiệu:
            </span>
            <div className="linkBox">
              <div className="link_url">
                <span ref={linkShareRef}>https://http://ag.ds.net.vn/?ref=123456</span>
              </div>
              <button>
                <i className="icofont-memory-card icons" />
                <span
                  className="copy_btn"
                  style={{ display: 'inline-block' }}
                  onClick={onCopyShareLink}
                >
                  {isCoppiedShareLink ? 'Đã sao chép' : 'Sao chép'}
                </span>
              </button>
            </div>
            <a href="#" className="btn_showSharebox" onClick={onShowShare}>
              <i className="fa fa-share-square-o icons" aria-hidden="true" />
              Chia sẻ
            </a>
          </div>
          <div className="options_">
            <ul>
              <li>
                <div className="point_num">
                  <p>AGpoint:</p>
                  <p>
                    <span>{agPoints}</span>
                    <i className="icofont-life-buoy icons" style={{ fontSize: 17 }} />
                  </p>
                </div>
              </li>
              <li>
                <div className="add_point">
                  <a>
                    <i className="icofont-coins icons" />
                    Nhận Point
                  </a>
                </div>
              </li>
              <li>
                <div className="add_friend">
                  <a href="#" className="btn_showSharebox">
                    <i className="icofont-users-alt-4 icons" />
                    Mời bạn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {isShowShare && (
          <div className="share_box">
            <div className="notifine_box">
              <span
                className="icofont-close-line closedBtn_2"
                title="Đóng"
                onClick={onCloseShare}
              />
              <h4>Chia sẻ link giới thiệu</h4>
              <div className="s_fb s_apps">
                <a>
                  <img src="images/fb.png" alt="Facebook" /> Facebook
                </a>
              </div>
              <div className="s_mess s_apps">
                <a>
                  <img src="images/mes.png" alt="messenger" />
                  messenger
                </a>
              </div>
              <div className="s_tw s_apps">
                <a>
                  <img src="images/tw.png" alt="twitter" />
                  twitter
                </a>
              </div>
              <div className="s_zl s_apps">
                <a>
                  <img src="images/zl.png" alt="zalo" />
                  zalo
                </a>
              </div>
              <div className="s_em s_apps">
                <a>
                  <img src="images/em.png" alt="email" />
                  email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
