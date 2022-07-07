import React from "react";

export const AGPoints = () => {
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
                <span>https://http://ag.ds.net.vn/?ref=123456</span>
              </div>
              <button>
                <i className="icofont-memory-card icons" />
                <span className="copy_btn" style={{ display: "inline-block" }}>
                  Sao chép
                </span>
              </button>
            </div>
            <a href="#" className="btn_showSharebox">
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
                    <span>198.560.000</span>
                    <i
                      className="icofont-life-buoy icons"
                      style={{ fontSize: 17 }}
                    />
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
        <div className="share_box" style={{ display: "none" }}>
          <div className="notifine_box">
            <span className="icofont-close-line closedBtn_2" title="Đóng" />
            <h4>Chia sẻ link giới thiệu</h4>
            <div className="s_fb s_apps">
              <a>
                <img src="images/fb.png" /> Facebook
              </a>
            </div>
            <div className="s_mess s_apps">
              <a>
                <img src="images/mes.png" />
                messenger
              </a>
            </div>
            <div className="s_tw s_apps">
              <a>
                <img src="images/tw.png" />
                twitter
              </a>
            </div>
            <div className="s_zl s_apps">
              <a>
                <img src="images/zl.png" />
                zalo
              </a>
            </div>
            <div className="s_em s_apps">
              <a>
                {" "}
                <img src="images/em.png" />
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
