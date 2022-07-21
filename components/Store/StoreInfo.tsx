const infoShop = {
  name: 'Store Name',
  online: 'Online 10 giờ trước',
  starRating: 5,
  countRate: 123,
  warehouseAddress: 'Hà Nội',
}

const { name, online, starRating, countRate, warehouseAddress } = infoShop

export const StoreInfo = () => {
  return (
    <section className="bg_store">
      <div className="container">
        <div className="store_info">
          <div className="left_store">
            <div className="store_avt">
              <img src="images/tv2.jpg" />
            </div>
            <div className="store_address">
              <h4>{name}</h4>
              <time>{online}</time>
              <ul>
                {Array.from(Array(starRating).keys()).map((i) => (
                  <li>
                    <span className="fa fa-star" />
                  </li>
                ))}
                <li>
                  <span className="votes">{`(${countRate} đánh giá)`}</span>
                </li>
              </ul>
              <p>
                Kho hàng: <span>{warehouseAddress}</span>
              </p>
              <div className="chat_followBtns">
                <button className="chat_btn">Nhắn tin</button>
                <button className="follow_btn">Theo dõi</button>
              </div>
              <div className="overlay">
                <div className="showChatbox">
                  <div className="chat_box">
                    <h2>
                      Nhắn tin <span className="lnr lnr-cross" />
                    </h2>
                    <div className="row">
                      <div className="col-md-4 col-sm-4 colHide">
                        <div className="chatShop">
                          <div className="search">
                            <input type="text" placeholder="Tìm kiếm..." required />
                            <button type="submit">
                              <span className="lnr lnr-magnifier" />
                            </button>
                          </div>
                        </div>
                        <div className="shop1Chat">
                          <div className="imgs1">
                            <img src="images/q1.png" />
                          </div>
                          <div className="nameS1">
                            <h3>
                              Store Name 1 <time>10 phút</time>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                        <div className="shop1Chat">
                          <div className="imgs1">
                            <img src="images/i2.png" alt />
                          </div>
                          <div className="nameS1">
                            <h3>
                              Store Name 2 <time>Vừa xong</time>
                            </h3>
                            <p>[Hình ảnh]</p>
                            <span>9+</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8 right_fixs colfullwidth">
                        <div className="lineRight">
                          <div className="rightChatbox">
                            <div className="left_info">
                              <div className="storeAvt">
                                <img src="images/q1.png" alt />
                              </div>
                              <div className="storeName_">
                                <p>Store Name 1</p>
                                <time>Hoạt động 10 phút trước</time>
                              </div>
                            </div>
                            <div className="call_">
                              <a href="tel:(+84) 123 456 789" title="(+84) 123 456 789">
                                <span className="lnr lnr-phone-handset" />
                              </a>
                            </div>
                          </div>
                          <div className="chatbox_content">
                            <div className="scroll_chatbox">
                              <div className="text_box">
                                <div className="textBoxIn">
                                  <div className="mess">
                                    <img src="images/q1.png" alt />
                                  </div>
                                  <div className="messCtent">
                                    <p>Chào bạn, bạn có cần Shop tư vấn gì không ?</p>
                                    <time>
                                      11:00
                                      <span className="fa fa-check" />
                                    </time>
                                  </div>
                                </div>
                                <div className="date_time">
                                  <time>24/12/2019 16:04</time>
                                  <hr />
                                </div>
                              </div>
                              <div className="text_box">
                                <div className="textBoxIn">
                                  <div className="mess">
                                    <img src="images/q1.png" alt />
                                  </div>
                                  <div className="messCtent">
                                    <p>Chào bạn, bạn có cần Shop tư vấn gì không ?</p>
                                    <time>
                                      11:00
                                      <span className="fa fa-check" />
                                    </time>
                                  </div>
                                </div>
                              </div>
                              <div className="text_box">
                                <div className="textBoxIn">
                                  <div className="mess">
                                    <img src="images/q1.png" alt />
                                  </div>
                                  <div className="messCtent">
                                    <p>Chào bạn, bạn có cần Shop tư vấn gì không ?</p>
                                    <a href>
                                      <img src="images/img1.jpg" alt />
                                    </a>
                                    <br />
                                    <time>
                                      11:00
                                      <span className="fa fa-check" />
                                    </time>
                                  </div>
                                </div>
                              </div>
                              <div className="my_mess">
                                <div className="mess">
                                  <img src="images/avt_ihr.jpeg" alt />
                                </div>
                                <div className="messCtent">
                                  <p>Xin chào, món đồ này còn không Shop ?</p>
                                  <a href>
                                    <img src="images/q1.png" alt />
                                  </a>
                                  <br />
                                  <time>
                                    11:00
                                    <span className="fa fa-check" />
                                  </time>
                                </div>
                              </div>
                            </div>
                            <div className="bottom_chatbox">
                              <div className="bottom_taskbar">
                                <div className="left_taskbar">
                                  <div className="icons">
                                    <button>
                                      <span className="fa fa-smile-o" />
                                    </button>
                                  </div>
                                  <div className="texts_boxPRGB">
                                    <input type="text" placeholder="Viết tin nhắn..." />
                                  </div>
                                </div>
                                <div className="files">
                                  <button>
                                    <span className="fa fa-picture-o" />
                                  </button>
                                  {/* <button><span class="fa fa-microphone"></span></button>
                                                          <button><span class="fa fa-link"></span></button> */}
                                </div>
                              </div>
                              <div className="send_btn">
                                <button>Gửi</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="store_frame">
            <div className="store_PRD storeCustom">
              <p>
                <i className="fa fa-cubes" /> Sản phẩm: <span>999</span>
              </p>
              <p>
                <i className="fa fa-cart-plus" /> THời gian chuẩn bị: <span>24h</span>
              </p>
            </div>
            <div className="store_feedback storeCustom">
              <p>
                <i className="fa fa-comments-o" /> Tỉ lệ phản hồi: <span>100%</span>
              </p>
              <p>
                <i className="fa fa-clock-o" /> Thời gian phản hồi <span>Khoảng 1h</span>
              </p>
            </div>
            <div className="store_join storeCustom">
              <p>
                <i className="fa fa-user-plus" /> Tham gia: <span>1 năm trước</span>
              </p>
              <p>
                <i className="fa fa-eye" /> Lượt theo dõi: <span>1,5k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
