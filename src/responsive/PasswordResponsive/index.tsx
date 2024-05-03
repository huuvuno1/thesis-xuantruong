import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function PasswordResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className="main-container">
        <div className="rectangle">
          <div className="back-to-school">
            <span className="back-to-school-link">
              Ra mắt 365 Simple Back to school!
            </span>
            <span className="buy-now">Mua ngay</span>
            <span className="back-to-school-link-1">{' ->'}</span>
          </div>
          <div className="rectangle-2">
            <div className="asset" />
            <div className="align-left" onClick={() => setToggle(!toggle)}>
              <div className="vector" />
              <div className="vector-3" />
              <div className="vector-4" />
            </div>
            <a href='/auth/login' className="account">
              <div className="vector-5" />
            </a>
            <a href="/cart" className="cart">
              <div className="vector-6" />
              <div className="vector-7" />
            </a>
            <div className="search" />
            <div className="ellipse" />
            <span className="number">5</span>
          </div>
        </div>
        <div className="scroll">
          <div className="flex-row">
            <span className="home">Trang chủ /</span>
            <span className="account-8">Tài khoản</span>
            <span className="change-password">/ Thay đổi mật khẩu</span>
          </div>
          <span className="welcome-message">Xin chào Xuân Trường</span>
          <span className="welcome-text">Chào mừng đến với tài khoản</span>
          <button className="button-thay-mmkhau">
            <div className="rectangle-9" />
            <span className="span-thay-doi-mat-khau">Thay đổi mật khẩu</span>
            <div className="lock" />
            <div className="formkit-down">
              <div className="vector-a" />
            </div>
          </button>
          <span className="span-thong-tin-ca-nhan">Thông tin cá nhân</span>
          <div className="chi-tiet-lien-he">
            <span className="span-chi-tiet-lien-he">Chi tiết liên hệ</span>
            <div className="ho-ten">
              <span className="span-mat-khau-hien-tai">Mật khẩu hiện tại</span>
              <div className="flex-row-f">
                <div className="eye-off" />
                <div className="group">
                  <span className="span-dots">.........</span>
                  <div className="ho-ten-b">
                    <div className="rectangle-c" />
                    <input className="ho-ten-input" />
                  </div>
                </div>
              </div>
            </div>
            <div className="email">
              <span className="span-mat-khau-moi">Mật khẩu mới</span>
              <span className="span-dots-d">.........</span>
              <div className="email-e">
                <div className="rectangle-f" />
                <input className="email-input" />
              </div>
              <div className="eye-off-10" />
            </div>
            <div className="mkhau">
              <span className="span-nhap-lai-mat-khau">Nhập lại mật khẩu</span>
              <div className="ghi-chu-them">
                <span className="span-dots-11">.........</span>
                <div className="rectangle-12" />
                <div className="eye-off-13" />
              </div>
            </div>
          </div>
          <div className="flex-row-d">
            <button className="button-huy">
              <span className="span-huy">Hủy</span>
              <div className="rectangle-14" />
            </button>
            <button className="button-luu-thay-doi">
              <span className="span-luu-thay-doi">Lưu thay đổi</span>
              <div className="rectangle-15" />
            </button>
          </div>
          <div className="button-quay-lai-trang-chu">
            <span className="span-luu-thay-doi-16">Lưu thay đổi</span>
            <div className="rectangle-17" />
          </div>
          <div className="footer">
            <div className="footer-18">
              <div className="group-19">
                <div className="simple-chon-don-gian-song-de-dang">
                  <span className="span-365-simple">365 Simple </span>
                  <span className="span-chon-don-gian-song-de-dang">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="span-chung-toi-luon-tran-trong">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="button-dong-gop">
                <span className="span-dong-gop-y-kien">Đóng góp ý kiến</span>
                <div className="rectangle-1a" />
              </div>
              <div className="hotline">
                <div className="flex-column-fb">
                  <span className="span-hotline">Hotline</span>
                  <span className="span-1900-100023-027-918-2981">
                    1900-100023 - 027.918.2981
                  </span>
                </div>
                <div className="ph-phone-light">
                  <div className="vector-1b" />
                </div>
              </div>
              <div className="email-1c">
                <div className="flex-column-ea">
                  <span className="span-email">Email</span>
                  <span className="span-365simple-gmail-com">
                    365simple@gmail.com
                  </span>
                </div>
                <div className="material-symbols-mail-outline">
                  <div className="vector-1d" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-1e" />
              <div className="footer-1f">
                <div className="ndung-footer">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line" />
                  <div className="club">
                    <span className="text-20">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-20">Chính sách</span>
                    <span className="dieu-khoan-va-dieu-kien">
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
                    <span className="cham-soc-khach-hang-21">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep">
                    <span className="kien-thuc-mac-dep-22">
                      Kiến thức mặc đẹp
                    </span>
                    <span className="huong-dan-chon-size">
                      Hướng dẫn chọn size
                    </span>
                    <span className="blog">Blog</span>
                    <span className="group-mac-don-gian-song-chat">
                      Group mặc đơn giản sống chất
                    </span>
                  </div>
                </div>
                <div className="group-23">
                  <div className="line-24" />
                  <span className="business-license">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="base">
                <span className="base-address">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="place">
                  <div className="vector-25" />
                </div>
              </div>
              <div className="base-26">
                <div className="place-27">
                  <div className="vector-28" />
                </div>
                <span className="base-address-29">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-2a">
          <div className="rectangle-2b">
            <div className="home-2c" />
          </div>
          <div className="rectangle-2d">
            <div className="archive" />
          </div>
          <div className="rectangle-2e">
            <div className="clock" />
          </div>
          <div className="rectangle-2f">
            <div className="heart">
              <div className="vector-30" />
            </div>
          </div>
          <div className="rectangle-31">
            <div className="phone">
              <div className="vector-32" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="rectangle-33" />
        </div>
      </div>

      <Footer />
    </>
  );
}
