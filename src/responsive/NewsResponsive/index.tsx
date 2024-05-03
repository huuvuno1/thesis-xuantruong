import React, { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';

export default function NewsResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <NavBar />}

      <div className="main-container">
        <div className="rectangle">
          <div className="back-to-school">
            <span className="back-to-school-1">
              Ra mắt 365 Simple Back to school!
            </span>
            <span className="buy-now">Mua ngay</span>
            <span className="back-to-school-2">{' ->'}</span>
          </div>
          <div className="rectangle-3">
            <div className="asset" />
            <div className="align-left" onClick={() => setToggle(!toggle)}>
              <div className="vector" />
              <div className="vector-4" />
              <div className="vector-5" />
            </div>
            <div className="account">
              <div className="vector-6" />
            </div>
            <div className="cart">
              <div className="vector-7" />
              <div className="vector-8" />
            </div>
            <div className="search" />
            <div className="ellipse" />
            <span className="number">5</span>
          </div>
        </div>
        <div className="frame">
          <div className="link">
            <span className="tin-tuc">/ Tin tức</span>
            <span className="home">Trang chủ</span>
          </div>
          <div className="mobile-search">
            <div className="rectangle-9" />
            <input className="mobile-search-input" />
            <span className="search-by">Tìm kiếm theo</span>
            <div className="formkit-down">
              <div className="vector-a" />
            </div>
          </div>
          <span className="all-posts">Tất cả bài viết</span>
          <div className="tin-tuc-b">
            <div className="group">
              <div className="image" />
            </div>
            <span className="tung-bung-khai-truong">
              Tưng bừng khai trương, nhận vàn ưu đãi!
            </span>
            <div className="flex-row-f">
              <span className="chuong-trinh-khuyen-mai">
                Nhân dịp mới ra mắt website, 365 Simple tung ra chương trình
                <br />
                khuyến mãi cực khủng, lên đến 50% toàn bộ sản phẩm....
              </span>
              <div className="group-c" />
            </div>
          </div>
          <div className="tin-tuc-d">
            <div className="group-e">
              <div className="image-f" />
            </div>
            <span className="ngay-via-than-tai">
              Ngày vía thần tài là gì? Tại sao lại mua vàng?
            </span>
            <div className="flex-row-eb">
              <span className="chuong-trinh-khuyen-mai-10">
                Nhân dịp mới ra mắt website, 365 Simple tung ra chương trình
                <br />
                khuyến mãi cực khủng, lên đến 50% toàn bộ sản phẩm....
              </span>
              <div className="group-11" />
            </div>
          </div>
          <div className="tin-tuc-12">
            <div className="group-13" />
            <span className="phoi-do">Phối đồ gì với áo sơ mi dáng rộng?</span>
            <div className="flex-row-a">
              <span className="chuong-trinh-khuyen-mai-14">
                Nhân dịp mới ra mắt website, 365 Simple tung ra chương trình
                <br />
                khuyến mãi cực khủng, lên đến 50% toàn bộ sản phẩm....
              </span>
              <div className="group-15" />
            </div>
          </div>
          <div className="tin-tuc-16">
            <div className="group-17">
              <div className="image-18" />
            </div>
            <span className="giu-mau-quan-jeans">
              Làm sao để giữ màu quần Jeans?
            </span>
            <div className="flex-row">
              <span className="chuong-trinh-khuyen-mai-19">
                Nhân dịp mới ra mắt website, 365 Simple tung ra chương trình
                <br />
                khuyến mãi cực khủng, lên đến 50% toàn bộ sản phẩm....
              </span>
              <div className="group-1a" />
            </div>
          </div>
          <div className="xem-them">
            <span className="xem-them-1b">XEM THÊM</span>
            <div className="rectangle-1c" />
          </div>
          <span className="nhung-bai-viet-moi">Những bài viết mới</span>
          <div className="tin-tuc-nhung-bai-viet-ms">
            <div className="line" />
            <div className="rectangle-1d" />
            <div className="rectangle-1e" />
            <span className="phoi-do-so-mi">
              Phối đồ với sơ mi trắng sao cho hợp ??
            </span>
            <div className="button-chi-tiet">
              <span className="chi-tiet">CHI TIẾT</span>
              <div className="rectangle-1f" />
            </div>
          </div>
          <div className="tin-tuc-20">
            <div className="line-21" />
            <div className="rectangle-22" />
            <div className="rectangle-23" />
            <span className="phoi-do-giay-derby">
              4 cách phối đồ với giày derby lịch lãm chuẩn men cho phái mạnh
            </span>
            <div className="button-chi-tiet-24">
              <span className="chi-tiet-25">CHI TIẾT</span>
              <div className="rectangle-26" />
            </div>
          </div>
          <div className="tin-tuc-27">
            <div className="line-28" />
            <div className="rectangle-29" />
            <div className="rectangle-2a" />
            <span className="phoi-do-ao-vest">
              Bỏ túi 6 cách phối đồ với áo sơ mi nam cổ vest ấn tượng nhất 2024
            </span>
            <div className="button-chi-tiet-2b">
              <span className="chi-tiet-2c">CHI TIẾT</span>
              <div className="rectangle-2d" />
            </div>
          </div>
          <div className="xem-them-2e">
            <span className="xem-them-2f">XEM THÊM</span>
            <div className="rectangle-30" />
          </div>
          <div className="footer">
            <div className="footer-31">
              <div className="group-32">
                <div className="simple-chon-don-gian">
                  <span className="text-1b">365 Simple </span>
                  <span className="chon-don-gian-song-de-dang">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="y-kien-dong-gop">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="dong-gop-y-kien">
                <span className="rectangle-33">Đóng góp ý kiến</span>
                <div className="hotline" />
              </div>
              <div className="flex-column-c">
                <div className="section-c">
                  <span className="hotline-34">Hotline</span>
                  <span className="phone-number">
                    1900-100023 - 027.918.2981
                  </span>
                </div>
                <div className="phone-light">
                  <div className="vector-35" />
                </div>
              </div>
              <div className="email">
                <div className="flex-column">
                  <span className="email-36">Email</span>
                  <span className="email-address">365simple@gmail.com</span>
                </div>
                <div className="mail-outline">
                  <div className="vector-37" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-38" />
              <div className="footer-39">
                <div className="footer-content">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line-3a" />
                  <div className="club">
                    <span className="club-3b">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-3c">Chính sách</span>
                    <span className="dieu-khoan-dieu-kien">
                      Điều khoản và điều kiện
                    </span>
                    <span className="chinh-sach-khuyen-mai">
                      Chính sách khuyến mãi
                    </span>
                    <span className="chinh-sach-bao-mat">
                      Chính sách bảo mật
                    </span>
                    <span className="chinh-sach-giao-hang">
                      Chính sách giao hàng
                    </span>
                  </div>
                  <div className="cham-soc-khach-hang">
                    <span className="cham-soc-khach-hang-3d">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep">
                    <span className="kien-thuc-mac-dep-3e">
                      Kiến thức mặc đẹp
                    </span>
                    <span className="huong-dan-chon-size">
                      Hướng dẫn chọn size
                    </span>
                    <span className="blog">Blog</span>
                    <span className="group-mac-don-gian">
                      Group mặc đơn giản sống chất
                    </span>
                  </div>
                </div>
                <div className="group-3f">
                  <div className="line-40" />
                  <span className="giay-phep-kinh-doanh">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image-41" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="co-so">
                <span className="co-so-42">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="ic-baseline-place">
                  <div className="vector-43" />
                </div>
              </div>
              <div className="co-so-44">
                <div className="ic-baseline-place-45">
                  <div className="vector-46" />
                </div>
                <span className="co-so-47">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-48">
          <div className="rectangle-49">
            <div className="home-4a" />
          </div>
          <div className="rectangle-4b">
            <div className="archive" />
          </div>
          <div className="rectangle-4c">
            <div className="clock" />
          </div>
          <div className="rectangle-4d">
            <div className="heart">
              <div className="vector-4e" />
            </div>
          </div>
          <div className="rectangle-4f">
            <div className="phone">
              <div className="vector-50" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="rectangle-51" />
        </div>
      </div>
    </>
  );
}
