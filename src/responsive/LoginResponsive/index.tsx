import React, { useState } from 'react';

import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

const LoginResponsive = () => {
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
        <span className="login">Đăng nhập</span>
        <span className="login-info">
          Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ
          đơn hàng nào.
        </span>
        <span className="login-register">
          Đăng nhập hoặc đăng ký (miễn phí)
        </span>
        <div className="flex-row-b">
          <div className="rectangle-9" />
          <div className="rectangle-a" />
        </div>
        <div className="flex-row-cf">
          <span className="or">Hoặc</span>
          <div className="line" />
        </div>
        <div className="rectangle-b">
          <input className="email-input" placeholder="Email/SĐT của bạn" />
        </div>
        <div className="rectangle-c">
          <input className="mkhau-input" placeholder="Mật khẩu" />
        </div>
        <div className="rectangle-d">
          <span className="dang-nhap">Đăng nhập</span>
        </div>
        <div className="flex-row-a">
          <span className="dang-ky-tai-khoan-moi">Đăng ký tài khoản mới</span>
          <span className="quen-mat-khau">Quên mật khẩu ?</span>
        </div>
        <div className="flex-row">
          <div className="rectangle-e">
            <div className="rectangle-f">
              <div className="home" />
            </div>
            <div className="rectangle-10">
              <div className="archive" />
            </div>
            <div className="rectangle-11">
              <div className="clock" />
            </div>
            <div className="rectangle-12">
              <div className="heart">
                <div className="vector-13" />
              </div>
            </div>
            <div className="rectangle-14">
              <div className="phone">
                <div className="vector-15" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginResponsive;
