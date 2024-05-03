import React, { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';

export default function NewsDetailResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <NavBar />}

      <div className="main-container">
        <div className="rectangle">
          <div className="ra-mat-simple-back-to-school">
            <span className="ra-mat-simple-back-to-school-1">
              Ra mắt 365 Simple Back to school!
            </span>
            <span className="mua-ngay">Mua ngay</span>
            <span className="ra-mat-simple-back-to-school-2">{' ->'}</span>
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
            <span className="trang-chu">Trang chủ</span>
          </div>
          <div className="mobile-tim-kiem-theo">
            <div className="rectangle-9" />
            <input className="mobile-tim-kiem-theo-input" />
            <span className="search-by">Tìm kiếm theo</span>
            <div className="formkit-down">
              <div className="vector-a" />
            </div>
          </div>
          <span className="outfit-shirt">Phối đồ gì với áo Sơ mi?</span>
          <div className="image" />
          <span className="wide-shirt-khaki">
            Áo sơ mi dáng rộng và quần kaki
          </span>
          <span className="outfit-description">
            Kết hợp giữa áo sơ mi form rộng với quần kaki cũng khá ổn, giúp các
            bạn nam trở nên đỉnh đạc
            <br />
            và menly hơn. Các bạn trẻ không muốn quá nghiêm túc có thể sử dụng
            cách phối này
          </span>
          <div className="image-b" />
          <span className="wide-shirt-jeans">
            Áo sơ mi dáng rộng và quần jean
          </span>
          <span className="outfit-description-c">
            Quần jean cũng khá hợp khi phối cùng với áo sơ mi form rộng, thường
            ngoài quần tây ra thì quần jean được các bạn nam chọn dùng nhiều
            nhất bởi sự tiện lợi, năng động, hợp bất kỳ kiểu dáng nào.
          </span>
          <div className="image-d" />
          <span className="wide-shirt-trousers">
            Áo sơ mi dáng rộng và quần âu
          </span>
          <span className="outfit-description-e">
            Một kiểu phối đồ luôn được nhiều bạn trẻ yêu thích, áo sơ mi form
            rộng kết hợp với chiếc quần tây đen hoặc trắng tạo nên nét thư sinh,
            thanh lịch và khá hợp thời trang, kiểu phối này không cầu kỳ hay
            phức tạp nhưng luôn giữ được vẻ chất lừ.
          </span>
          <div className="see-more">
            <span className="see-more-btn">XEM THÊM</span>
            <div className="rectangle-f" />
          </div>
          <span className="new-posts">Những bài viết mới</span>
          <div className="news-posts">
            <div className="line" />
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <span className="white-shirt-outfit">
              Phối đồ với sơ mi trắng sao cho hợp ??
            </span>
            <div className="details-btn">
              <span className="details">CHI TIẾT</span>
              <div className="rectangle-12" />
            </div>
          </div>
          <div className="news-posts-13">
            <div className="line-14" />
            <div className="rectangle-15" />
            <div className="rectangle-16" />
            <span className="derby-shoes-outfit">
              4 cách phối đồ với giày derby lịch lãm chuẩn men cho phái mạnh
            </span>
            <div className="details-btn-17">
              <span className="chi-tiet">CHI TIẾT</span>
              <div className="rectangle-18" />
            </div>
          </div>
          <div className="tin-tuc-19">
            <div className="line-1a" />
            <div className="rectangle-1b" />
            <div className="rectangle-1c" />
            <span className="phoi-do-ao-so-mi">
              Bỏ túi 6 cách phối đồ với áo sơ mi nam cổ vest ấn tượng nhất 2024
            </span>
            <div className="button-chi-tiet">
              <span className="chi-tiet-1d">CHI TIẾT</span>
              <div className="rectangle-1e" />
            </div>
          </div>
          <div className="xem-them">
            <span className="xem-them-1f">XEM THÊM</span>
            <div className="rectangle-20" />
          </div>
          <div className="footer">
            <div className="footer-21">
              <div className="group">
                <div className="simple-chon-don-gian-song-de-dang">
                  <span className="text-19">365 Simple </span>
                  <span className="chon-don-gian-song-de-dang">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="nhan-xet-khach-hang">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="button-dong-gop">
                <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
                <div className="rectangle-22" />
              </div>
              <div className="hotline">
                <div className="flex-column-d">
                  <span className="hotline-23">Hotline</span>
                  <span className="text-1e">1900-100023 - 027.918.2981</span>
                </div>
                <div className="ph-phone-light">
                  <div className="vector-24" />
                </div>
              </div>
              <div className="email">
                <div className="flex-column-f">
                  <span className="email-25">Email</span>
                  <span className="simple-email">365simple@gmail.com</span>
                </div>
                <div className="mail-outline">
                  <div className="vector-26" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-27" />
              <div className="footer-28">
                <div className="footer-content">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line-29" />
                  <div className="club">
                    <span className="text-22">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-2a">Chính sách</span>
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
                    <span className="cham-soc-khach-hang-2b">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep">
                    <span className="kien-thuc-mac-dep-2c">
                      Kiến thức mặc đẹp
                    </span>
                    <span className="huong-dan-chon-size">
                      Hướng dẫn chọn size
                    </span>
                    <span className="blog">Blog</span>
                    <span className="simple-living-group">
                      Group mặc đơn giản sống chất
                    </span>
                  </div>
                </div>
                <div className="group-2d">
                  <div className="line-2e" />
                  <span className="international-tourism-license">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image-2f" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="location-30">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="location-icon">
                  <div className="vector-31" />
                </div>
              </div>
              <div className="location-32">
                <div className="location-icon-33">
                  <div className="vector-34" />
                </div>
                <span className="location-35">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-36">
          <div className="rectangle-37">
            <div className="home" />
          </div>
          <div className="rectangle-38">
            <div className="archive" />
          </div>
          <div className="rectangle-39">
            <div className="clock" />
          </div>
          <div className="rectangle-3a">
            <div className="heart">
              <div className="vector-3b" />
            </div>
          </div>
          <div className="rectangle-3c">
            <div className="phone">
              <div className="vector-3d" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="rectangle-3e" />
        </div>
      </div>
    </>
  );
}
