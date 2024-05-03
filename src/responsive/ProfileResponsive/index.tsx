import React, { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function ProfileResponsive() {
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
        <div className="scroll">
          <div className="flex-row">
            <span className="home">Trang chủ /</span>
            <span className="account-info">Tài khoản</span>
            <span className="personal-info">/ Thông tin cá nhân</span>
          </div>
          <span className="welcome-message">Xin chào Xuân Trường</span>
          <span className="welcome-text">Chào mừng đến với tài khoản</span>
          <button className="info-button">
            <div className="rectangle-9" />
            <span className="personal-info-a">Thông tin cá nhân</span>
            <div className="user">
              <div className="vector-b" />
              <div className="vector-c" />
            </div>
            <div className="formkit-down">
              <div className="vector-d" />
            </div>
          </button>
          <span className="thong-tin-ca-nhan">Thông tin cá nhân</span>
          <div className="chi-tiet-lien-he">
            <span className="chi-tiet-lien-he-e">Chi tiết liên hệ</span>
            <div className="ho-ten">
              <span className="ho-va-ten">Họ và tên</span>
              <div className="group">
                <div className="ho-ten-f">
                  <span className="vu-xuan-truong">Vũ Xuân Trường</span>
                  <div className="rectangle-10" />
                </div>
                <input className="group-input" />
              </div>
            </div>
            <div className="flex-row-11">
              <div className="email">
                <span className="email-12">Email</span>
                <button className="email-13">
                  <span className="vutruong-gmail-com">vutruong@gmail.com</span>
                  <div className="rectangle-14" />
                </button>
              </div>
              <div className="ssdt">
                <span className="so-dien-thoai">Số điện thoại</span>
                <button className="sdt">
                  <span className="text-13">0987654321</span>
                  <div className="rectangle-15" />
                </button>
              </div>
            </div>
            <div className="mkhau">
              <span className="mat-khau">Mật khẩu</span>
              <div className="ghi-chu-them">
                <span className="dots">.........</span>
                <div className="flex-row-deb">
                  <div className="eye-off" />
                  <div className="rectangle-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="dia-chi">
            <span className="dia-chi-17">Địa chỉ</span>
            <div className="flex-row-aa">
              <div className="tpho">
                <span className="thanh-pho">Thành phố</span>
                <div className="email-input">
                  <div className="rectangle-18" />
                  <span className="ha-noi">Hà Nội</span>
                  <div className="vector-19" />
                </div>
              </div>
              <div className="ssdt-1a">
                <span className="quan-huyen">Quận/Huyện</span>
                <div className="flex-row-cda">
                  <div className="vector-1b" />
                  <div className="sdt-1c">
                    <span className="hoang-mai">Hoàng Mai</span>
                    <div className="rectangle-1d" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row-b">
              <div className="email-1e">
                <span className="xa-phuong">Xã/Phường</span>
                <div className="flex-row-1f">
                  <div className="vector-20" />
                  <div className="email-21">
                    <span className="dinh-cong">Định Công</span>
                    <div className="rectangle-22" />
                  </div>
                </div>
              </div>
              <div className="ssdt-23">
                <span className="dia-chi-24">Địa chỉ</span>
                <div className="sdt-25">
                  <span className="dinh-cong-26">96 Định Công</span>
                  <div className="rectangle-27" />
                </div>
              </div>
            </div>
          </div>
          <div className="button-thay-doi">
            <span className="luu-thay-doi">Lưu thay đổi</span>
            <div className="rectangle-28" />
          </div>
          <div className="footer">
            <div className="footer-29">
              <div className="group-2a">
                <div className="simple-chon-don-gian-song-de-dang">
                  <span className="text-20">365 Simple </span>
                  <span className="chon-don-gian-song-de-dang">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="nhan-y-kien-dong-gop">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="button-dong-gop">
                <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
                <div className="rectangle-2b" />
              </div>
              <div className="hotline">
                <div className="flex-column-cc">
                  <span className="hotline-2c">Hotline</span>
                  <span className="hotline-info">
                    1900-100023 - 027.918.2981
                  </span>
                </div>
                <div className="ph-phone-light">
                  <div className="vector-2d" />
                </div>
              </div>
              <div className="email-2e">
                <div className="flex-column-cf">
                  <span className="email-2f">Email</span>
                  <span className="email-info">365simple@gmail.com</span>
                </div>
                <div className="material-symbols-mail-outline">
                  <div className="vector-30" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-31" />
              <div className="footer-32">
                <div className="footer-content">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line" />
                  <div className="club">
                    <span className="club-33">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-34">Chính sách</span>
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
                    <span className="cham-soc-khach-hang-35">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam-hai-long">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="faq">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="knowledge-fashion">
                    <span className="fashion-tips">Kiến thức mặc đẹp</span>
                    <span className="size-guide">Hướng dẫn chọn size</span>
                    <span className="blog">Blog</span>
                    <span className="simple-style-group">
                      Group mặc đơn giản sống chất
                    </span>
                  </div>
                </div>
                <div className="group-36">
                  <div className="line-37" />
                  <span className="international-business-license">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="location">
                <span className="location-38">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="place-icon">
                  <div className="vector-39" />
                </div>
              </div>
              <div className="location-3a">
                <div className="place-icon-3b">
                  <div className="vector-3c" />
                </div>
                <span className="location-3d">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-3e">
          <div className="rectangle-3f">
            <div className="home-40" />
          </div>
          <div className="rectangle-41">
            <div className="archive" />
          </div>
          <div className="rectangle-42">
            <div className="clock" />
          </div>
          <div className="rectangle-43">
            <div className="heart">
              <div className="vector-44" />
            </div>
          </div>
          <div className="rectangle-45">
            <div className="phone">
              <div className="vector-46" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="rectangle-47" />
        </div>
      </div>

      <Footer />
    </>
  );
}
