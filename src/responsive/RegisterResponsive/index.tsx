import { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';

export default function RegisterResponsive() {
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
            <span className="text-5">5</span>
          </div>
        </div>
        <div className="scroll">
          <span className="dang-ky">Đăng ký</span>
          <span className="dang-nhap">
            Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ
            đơn hàng nào.
          </span>
          <span className="dang-nhap-dang-ky">
            Đăng nhập hoặc đăng ký (miễn phí)
          </span>
          <div className="flex-row-ff">
            <div className="rectangle-9" />
            <div className="rectangle-a" />
          </div>
          <div className="thog-tin">
            <div className="group">
              <span className="or">Hoặc</span>
              <div className="line" />
            </div>
            <div className="name input">
              <span className="phone-number-input">Tên của bạn</span>
              <input
                className="name-input input-text"
                placeholder="Tên của bạn"
              />
            </div>
            <div className="phone-number">
              <span className="phone-number-input">Số điện thoại</span>
              <div className="rectangle-c" />
              <input className="phone-input" />
            </div>
            <div className="email">
              <span className="your-email">Email của bạn</span>
              <div className="rectangle-d" />
              <input className="email-input" />
            </div>
            <div className="password">
              <div className="rectangle-e" />
              <input className="mkhau-input" />
              <span className="mat-khau">Mật khẩu</span>
              <div className="eye-off" />
            </div>
            <div className="nhap-lai-mkhau">
              <div className="rectangle-f" />
              <input className="nhap-lai-mkhau-input" />
              <span className="nhap-lai-mat-khau">Nhập lại mật khẩu</span>
              <div className="eye-off-10" />
            </div>
            <button className="button-tien-hanh-dat-hang">
              <span className="dang-ky-11">Đăng ký</span>
              <div className="rectangle-12" />
            </button>
            <span className="dang-nhap-13">Đăng nhập</span>
          </div>
        </div>
        <div className="rectangle-14">
          <div className="rectangle-15">
            <div className="home" />
          </div>
          <div className="rectangle-16">
            <div className="archive" />
          </div>
          <div className="rectangle-17">
            <div className="clock" />
          </div>
          <div className="rectangle-18">
            <div className="heart">
              <div className="vector-19" />
            </div>
          </div>
          <div className="rectangle-1a">
            <div className="phone">
              <div className="vector-1b" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="rectangle-1c" />
        </div>
      </div>
    </>
  );
}
