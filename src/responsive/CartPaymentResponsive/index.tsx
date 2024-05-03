'use client';

import React, { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function CartPaymentResponsive() {
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
        <div className="flex-row-fbc">
          <span className="gio-hang">Giỏ hàng</span>
          <span className="thanh-toan">Thanh toán</span>
          <span className="hoan-tat">Hoàn tất</span>
          <div className="vector-9" />
          <div className="vector-a" />
        </div>
        <div className="flex-row-bbc">
          <span className="thong-tin-van-chuyen">Thông tin vận chuyển</span>
          <div className="rectangle-b" />
          <button className="su-dung-dia-chi-mac-dinh" />
        </div>
        <div className="rectangle-c">
          <input className="ho-ten-input" placeholder="Họ và Tên" />
        </div>
        <div className="flex-row">
          <div className="rectangle-d">
            <span className="email">Email</span>
          </div>
          <div className="rectangle-e">
            <span className="phone-number">Số điện thoại</span>
          </div>
        </div>
        <div className="flex-row-f">
          <div className="rectangle-f">
            <span className="city">Thành phố</span>
            <div className="formkit-down">
              <div className="vector-10" />
            </div>
          </div>
          <div className="rectangle-11">
            <span className="district">Quận/Huyện</span>
            <div className="formkit-down-12">
              <div className="vector-13" />
            </div>
          </div>
        </div>
        <div className="flex-row-14">
          <div className="rectangle-15">
            <span className="ward">Xã/phường</span>
            <div className="formkit-down-16">
              <div className="vector-17" />
            </div>
          </div>
          <div className="rectangle-18">
            <span className="address">Địa chỉ</span>
          </div>
        </div>
        <div className="rectangle-19">
          <span className="additional-note">Ghi chú thêm</span>
        </div>
        <span className="cart-1a">Giỏ hàng</span>
        <div className="flex-row-bcd">
          <div className="rectangle-1b" />
          <span className="fur-coat-s">Áo khoác lông S2</span>
          <span className="price">1.799.000</span>
          <span className="proceed-to-checkout">Tiến hành đặt hàng</span>
          <div className="rectangle-1c">
            <span className="black">Be</span>
            <div className="vector-1d" />
          </div>
          <div className="rectangle-1e">
            <span className="size-s">S</span>
            <div className="vector-1f" />
          </div>
          <div className="ph-x" />
          <div className="vector-20" />
          <div className="rectangle-21">
            <div className="group" />
            <div className="rectangle-22">
              <div className="mdi-add-bold">
                <div className="vector-23" />
              </div>
            </div>
            <span className="quantity">1</span>
          </div>
        </div>
        <div className="flex-row-dd">
          <div className="rectangle-24" />
          <span className="quan-tay-nam-sitetab-v">
            Quần tây nam SiteTab v2
          </span>
          <span className="price-25">1.799.000</span>
          <div className="rectangle-26">
            <span className="den">Đen</span>
            <div className="vector-27" />
          </div>
          <div className="rectangle-28">
            <span className="size-s-29">S</span>
            <div className="vector-2a" />
          </div>
          <div className="ph-x-2b" />
          <div className="vector-2c" />
          <div className="rectangle-2d">
            <div className="group-2e" />
            <div className="rectangle-2f">
              <div className="mdi-add-bold-30">
                <div className="vector-31" />
              </div>
            </div>
            <span className="quantity-32">1</span>
          </div>
        </div>
        <div className="flex-row-33">
          <div className="rectangle-34" />
          <span className="quan-jeans-slimfit">Quần Jeans Slimfit</span>
          <span className="price-35">1.799.000</span>
          <div className="rectangle-36">
            <span className="den-37">Đen</span>
            <div className="vector-38" />
          </div>
          <div className="rectangle-39">
            <span className="size-s-3a">S</span>
            <div className="vector-3b" />
          </div>
          <div className="ph-x-3c" />
          <div className="vector-3d" />
          <div className="rectangle-3e">
            <div className="group-3f" />
            <div className="rectangle-40">
              <div className="mdi-add-bold-41">
                <div className="vector-42" />
              </div>
            </div>
            <span className="quantity-43">1</span>
          </div>
        </div>
        <div className="flex-row-b">
          <div className="rectangle-44">
            <input className="group-input" />
          </div>
          <button className="apply-button">
            <span className="rectangle-45">Áp dụng</span>
          </button>
        </div>
        <div className="flex-row-46">
          <span className="tam-tinh">Tạm tính</span>
          <span className="full-stack">1,647,000</span>
        </div>
        <div className="flex-row-cd">
          <span className="giam-gia">Giảm giá</span>
          <span className="full-stack-47">0</span>
        </div>
        <div className="flex-row-b-48">
          <span className="phi-giao-hang">Phí giao hàng</span>
          <span className="mien-phi">Miễn phí</span>
        </div>
        <div className="flex-row-e">
          <span className="tong">Tổng</span>
          <span className="full-stack-49">1,647,000</span>
        </div>
        <span className="phuong-thuc-thanh-toan">Phương thức thanh toán</span>
        <div className="flex-row-ed">
          <div className="vector-4a" />
          <div className="rectangle-4b">
            <span className="cod-thanh-toan-khi-nhan-hang">
              COD (Thanh toán khi nhận hàng)
            </span>
          </div>
        </div>
        <div className="flex-row-b-4c">
          <div className="vector-4d" />
          <div className="rectangle-4e">
            <span className="thanh-toan-qua-vi-momo">
              Thanh toán qua ví MoMo
            </span>
          </div>
        </div>
        <div className="flex-row-fa">
          <div className="vector-4f" />
          <div className="rectangle-50">
            <span className="thanh-toan-qua-vi-dien-tu">
              Thanh toán qua ví điện tử (ZaloPay / VNPAY..)
            </span>
          </div>
        </div>
        <div className="flex-row-fc">
          <div className="vector-51" />
          <button className="rectangle-52">
            <span className="quet-qr-thanh-toan-bang-ung-dung-ngan-hang">
              Quét QR / Thanh toán bằng ứng dụng ngân hàng
            </span>
          </button>
        </div>
        <div className="rectangle-53">
          <span className="hoan-tat-don-hang">Hoàn tất đơn hàng</span>
        </div>
        <div className="rectangle-54">
          <div className="simple-chon-don-gian-song-de-dang">
            <span className="text-33">365 Simple </span>
            <span className="chon-don-gian-song-de-dang">
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className="full-stack-55">
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </span>
          <div className="rectangle-56">
            <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
          </div>
          <div className="flex-row-ffe">
            <span className="hotline">Hotline</span>
            <div className="ph-phone-light">
              <div className="vector-57" />
            </div>
          </div>
          <span className="contact-info">1900-100023 - 027.918.2981</span>
          <span className="email-58">Email</span>
          <div className="mail-outline">
            <div className="vector-59" />
          </div>
          <span className="email-address">365simple@gmail.com</span>
          <div className="flex-row-b-5a">
            <div className="whatsapp" />
            <div className="facebook" />
            <div className="youtube" />
            <div className="ig" />
          </div>
          <span className="contact-address">Địa chỉ liên hệ</span>
          <div className="flex-row-5b">
            <div className="place-icon">
              <div className="vector-5c" />
            </div>
            <span className="address-1">
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="flex-row-ec">
            <div className="place-icon-5d">
              <div className="vector-5e" />
            </div>
            <span className="address-2">
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="line" />
          <span className="club">365 Club</span>
          <span className="register-member">Đăng ký thành viên</span>
          <span className="exclusive-offers">Ưu đãi & độc quyền</span>
          <span className="policy">Chính sách</span>
          <span className="terms-and-conditions">Điều khoản và điều kiện</span>
          <span className="promotion-policy">Chính sách khuyến mãi</span>
          <span className="privacy-policy">Chính sách bảo mật</span>
          <span className="delivery-policy">Chính sách giao hàng</span>
          <span className="customer-care">Chăm sóc khách hàng</span>
          <span className="shopping-experience">
            Trải nghiệm mua sắm 100% hài lòng
          </span>
          <span className="faqs">Hỏi đáp - FAQs</span>
          <span className="fashion-knowledge">Kiến thức mặc đẹp</span>
          <span className="size-guide">Hướng dẫn chọn size</span>
          <span className="blog">Blog</span>
          <span className="simple-living-group">
            Group mặc đơn giản sống chất
          </span>
          <div className="line-5f" />
          <div className="flex-row-60">
            <div className="image" />
            <span className="copyright">Copyright © 365 Simple Viet Nam </span>
          </div>
          <span className="business-license">
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
