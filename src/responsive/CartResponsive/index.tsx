import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function CartResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

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
            <a href="/auth/login" className="account">
              <div className="vector-6" />
            </a>
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
          <div className="gio-hang-thanh-toan-hoan-tat">
            <span className="hoan-tat">Hoàn tất</span>
            <span className="thanh-toan">Thanh toán</span>
            <span className="gio-hang">Giỏ hàng</span>
            <div className="vector-9" />
            <div className="vector-a" />
          </div>
          <div className="trang-chu-gio-hang">
            <span className="trang-chu">Trang chủ</span>
            <span className="gio-hang-b">/ Giỏ hàng</span>
          </div>
          <div className="button-mua-them-san-pham">
            <div className="line" />
            <div className="mua-them-san-pham">
              <span className="mua-them-san-pham-c">Mua thêm sản phẩm</span>
              <span className="arrow">{' >>>'}</span>
            </div>
          </div>
          <div className="tom-tat-don-hang">
            <div className="group">
              <div className="flex-column-bc">
                <span className="tom-tat-don-hang-d">TÓM TẮT ĐƠN HÀNG</span>
                <span className="chua-bao-gom-phi-van-chuyen">
                  Chưa bao gồm phí vận chuyển
                </span>
                <span className="tong-tien">Tổng tiền:</span>
              </div>
              <span className="tong-tien-e">1,647,000</span>
            </div>
            <a href="/cart-payment">
              <button className="button-tien-hanh-dat-hang">
                <span className="tien-hanh-dat-hang">Tiến hành đặt hàng</span>
                <div className="rectangle-f" />
              </button>
            </a>
            <div className="rectangle-10" />
          </div>
          <div className="san-pham-co-the-thich">
            <div className="tieu-de-san-pham-moi">
              <span className="san-pham-ban-co-the-thich">
                Sản phẩm bạn có thể thích
              </span>
            </div>
            <div className="san-pham-moi">
              <div className="hover-san-pham-ao-so-mi">
                <div className="rectangle-11" />
                <div className="image" />
                <div className="tag-new">
                  <span className="new">New</span>
                  <div className="rectangle-12" />
                </div>
                <div className="danh-gia-sao">
                  <span className="star">4</span>
                  <div className="simple" />
                </div>
                <span className="mobile-chon-mau-ao">Simple</span>
                <div className="flex-row-db">
                  <div className="chon-mau">
                    <div className="rectangle-13">
                      <div className="chon-mau-14" />
                    </div>
                    <div className="chon-mau-15" />
                    <div className="rectangle-16">
                      <div className="mo-ta" />
                    </div>
                  </div>
                  <div className="ao-so-mi-nam-basics">
                    <span className="ao-so-mi-nam-basics-17">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="day-dan-xanh-reu">Dày dặn/ Xanh rêu</span>
                    <span className="price">299.000đ</span>
                  </div>
                </div>
                <div className="heart">
                  <div className="vector-18" />
                </div>
              </div>
              <div className="hover-san-pham-ao-so-mi-19">
                <div className="rectangle-1a" />
                <div className="image-1b" />
                <div className="tag-new-1c">
                  <span className="new-1d">New</span>
                  <div className="rectangle-1e" />
                </div>
                <div className="danh-gia-sao-1f">
                  <span className="star-20">4</span>
                  <div className="simple-21" />
                </div>
                <span className="mobile-chon-mau-ao-22">Simple</span>
                <div className="flex-row-e">
                  <div className="chon-mau-23">
                    <div className="rectangle-24">
                      <div className="chon-mau-25" />
                    </div>
                    <div className="chon-mau-26" />
                    <div className="rectangle-27">
                      <div className="mo-ta-28" />
                    </div>
                  </div>
                  <div className="ao-so-mi-nam-basics-29">
                    <span className="day-dan-xanh-reu-2a">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="text-1d">Dày dặn/ Xanh rêu</span>
                    <span className="heart-2b">299.000đ</span>
                  </div>
                </div>
                <div className="vector-2c">
                  <div className="hover-san-pham-ao-so-mi-2d" />
                </div>
              </div>
              <div className="rectangle-2e">
                <div className="image-2f" />
                <div className="tag-new-30" />
                <div className="new-31">
                  <span className="rectangle-32">New</span>
                  <div className="danh-gia-sao-33" />
                </div>
                <div className="star-34">
                  <span className="simple-35">4</span>
                  <div className="mobile-chon-mau-ao-36" />
                </div>
                <span className="flex-row-df">Simple</span>
                <div className="chon-mau-37">
                  <div className="rectangle-38">
                    <div className="chon-mau-39">
                      <div className="chon-mau-3a" />
                    </div>
                    <div className="rectangle-3b" />
                    <div className="mo-ta-3c">
                      <div className="ao-so-mi-nam-basics-3d" />
                    </div>
                  </div>
                  <div className="day-dan-xanh-reu-3e">
                    <span className="text-22">Áo Sơ mi Nam Basics</span>
                    <span className="heart-3f">Dày dặn/ Xanh rêu</span>
                    <span className="vector-40">299.000đ</span>
                  </div>
                </div>
                <div className="hover-san-pham-ao-so-mi-41">
                  <div className="rectangle-42" />
                </div>
              </div>
              <div className="image-43">
                <div className="tag-new-44" />
                <div className="new-45" />
                <div className="rectangle-46">
                  <span className="danh-gia-sao-47">New</span>
                  <div className="star-48" />
                </div>
                <div className="simple-49">
                  <span className="mobile-chon-mau-ao-4a">4</span>
                  <div className="flex-row-e-4b" />
                </div>
                <span className="chon-mau-4c">Simple</span>
                <div className="rectangle-4d">
                  <div className="chon-mau-4e">
                    <div className="chon-mau-4f">
                      <div className="rectangle-50" />
                    </div>
                    <div className="mo-ta-51" />
                    <div className="ao-so-mi-nam-basics-52">
                      <div className="day-dan-xanh-reu-53" />
                    </div>
                  </div>
                  <div className="wrapper-15">
                    <span className="heart-54">Áo Sơ mi Nam Basics</span>
                    <span className="vector-55">Dày dặn/ Xanh rêu</span>
                    <span className="hover-san-pham-ao-so-mi-56">299.000đ</span>
                  </div>
                </div>
                <div className="rectangle-57">
                  <div className="image-58" />
                </div>
              </div>
              <div className="tag-new-59">
                <div className="new-5a" />
                <div className="rectangle-5b" />
                <div className="danh-gia-sao-5c">
                  <span className="star-5d">New</span>
                  <div className="simple-5e" />
                </div>
                <div className="chon-mau-5f">
                  <span className="chon-mau-60">4</span>
                  <div className="rectangle-61" />
                </div>
                <span className="chon-mau-62">Simple</span>
                <div className="pic-14" />
                <div className="group-18">
                  <div className="group-19" />
                </div>
                <div className="group-1a">
                  <div className="rectangle-63" />
                </div>
                <div className="mo-ta-64">
                  <span className="ao-so-mi-nam">Áo Sơ mi Nam Basics</span>
                  <span className="day-dan-xanh-reu-65">Dày dặn/ Xanh rêu</span>
                  <span className="price-66">299.000đ</span>
                </div>
                <div className="heart-67">
                  <div className="vector-68" />
                </div>
              </div>
            </div>
            <div className="pre-next">
              <div className="next">
                <div className="ooui-next-ltr">
                  <div className="vector-69" />
                </div>
                <div className="ellipse-6a" />
              </div>
              <div className="previous" />
            </div>
          </div>
          <div className="sp-ham-co-the-thich">
            <div className="tieude-san-pham-moi">
              <span className="san-pham-ban-vua-xem">Sản phẩm bạn vừa xem</span>
            </div>
            <div className="sp-ham-moi">
              <div className="hover-san-pham-ao-so-mi-6b">
                <div className="rectangle-6c" />
                <div className="image-6d" />
                <div className="tag-new-6e">
                  <span className="new-6f">New</span>
                  <div className="rectangle-70" />
                </div>
                <div className="danh-gia-sao-71">
                  <span className="star-72">4</span>
                  <div className="simple-73" />
                </div>
                <span className="mobile-chon-mau-ao-74">Simple</span>
                <div className="flex-row-b">
                  <div className="chon-mau-75">
                    <div className="rectangle-76">
                      <div className="chon-mau-77" />
                    </div>
                    <div className="chon-mau-78" />
                    <div className="rectangle-79">
                      <div className="mo-ta-7a" />
                    </div>
                  </div>
                  <div className="ao-so-mi-nam-7b">
                    <span className="day-dan-xanh-reu-7c">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="price-7d">Dày dặn/ Xanh rêu</span>
                    <span className="heart-7e">299.000đ</span>
                  </div>
                </div>
                <div className="vector-7f">
                  <div className="hover-san-pham-ao-so-mi-80" />
                </div>
              </div>
              <div className="rectangle-81">
                <div className="image-82" />
                <div className="tag-new-83" />
                <div className="new-84">
                  <span className="rectangle-85">New</span>
                  <div className="danh-gia-sao-86" />
                </div>
                <div className="star-87">
                  <span className="simple-88">4</span>
                  <div className="mobile-chon-mau-ao-89" />
                </div>
                <span className="flex-row-ea">Simple</span>
                <div className="chon-mau-8a">
                  <div className="rectangle-8b">
                    <div className="chon-mau-8c">
                      <div className="chon-mau-8d" />
                    </div>
                    <div className="rectangle-8e" />
                    <div className="mo-ta-8f">
                      <div className="ao-so-mi-nam-90" />
                    </div>
                  </div>
                  <div className="day-dan-xanh-reu-91">
                    <span className="price-92">Áo Sơ mi Nam Basics</span>
                    <span className="heart-93">Dày dặn/ Xanh rêu</span>
                    <span className="vector-94">299.000đ</span>
                  </div>
                </div>
                <div className="hover-san-pham-ao-so-mi-95">
                  <div className="rectangle-96" />
                </div>
              </div>
              <div className="image-97">
                <div className="tag-new-98" />
                <div className="new-99" />
                <div className="rectangle-9a">
                  <span className="danh-gia-sao-9b">New</span>
                  <div className="star-9c" />
                </div>
                <div className="simple-9d">
                  <span className="mobile-chon-mau-ao-9e">4</span>
                  <div className="flex-row-b-9f" />
                </div>
                <span className="chon-mau-a0">Simple</span>
                <div className="rectangle-a1">
                  <div className="chon-mau-a2">
                    <div className="chon-mau-a3">
                      <div className="rectangle-a4" />
                    </div>
                    <div className="pic-1f" />
                    <div className="wrapper-27">
                      <div className="wrapper-28" />
                    </div>
                  </div>
                  <div className="mo-ta-a5">
                    <span className="ao-so-mi-nam-basics-a6">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="day-dan-xanh-reu-a7">
                      Dày dặn/ Xanh rêu
                    </span>
                    <span className="price-a8">299.000đ</span>
                  </div>
                </div>
                <div className="heart-a9">
                  <div className="vector-aa" />
                </div>
              </div>
              <div className="hover-san-pham-ao-so-mi-ab">
                <div className="rectangle-ac" />
                <div className="image-ad" />
                <div className="tag-new-ae">
                  <span className="new-af">New</span>
                  <div className="rectangle-b0" />
                </div>
                <div className="danh-gia-sao-b1">
                  <span className="rating">4</span>
                  <div className="star-b2" />
                </div>
                <span className="simple-b3">Simple</span>
                <div className="mobile-chon-mau-ao-b4">
                  <div className="flex-row-c">
                    <div className="chon-mau-b5">
                      <div className="rectangle-b6" />
                    </div>
                    <div className="chon-mau-b7" />
                    <div className="chon-mau-b8">
                      <div className="rectangle-b9" />
                    </div>
                  </div>
                  <div className="mo-ta-ba">
                    <span className="ao-so-mi-nam-basics-bb">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="day-dan-xanh-reu-bc">
                      Dày dặn/ Xanh rêu
                    </span>
                    <span className="price-bd">299.000đ</span>
                  </div>
                </div>
                <div className="heart-be">
                  <div className="vector-bf" />
                </div>
              </div>
              <div className="hover-san-pham-ao-so-mi-c0">
                <div className="rectangle-c1" />
                <div className="image-c2" />
                <div className="tag-new-c3">
                  <span className="new-c4">New</span>
                  <div className="rectangle-c5" />
                </div>
                <div className="danh-gia-sao-c6">
                  <span className="rating-c7">4</span>
                  <div className="star-c8" />
                </div>
                <span className="simple-c9">Simple</span>
                <div className="chon-mau-ca" />
                <div className="chon-mau-cb">
                  <div className="rectangle-cc" />
                </div>
                <div className="chon-mau-cd">
                  <div className="rectangle-ce" />
                </div>
                <div className="mo-ta-cf">
                  <span className="ao-so-mi-nam-basics-d0">
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="day-dan-xanh-reu-d1">Dày dặn/ Xanh rêu</span>
                  <span className="price-d2">299.000đ</span>
                </div>
                <div className="heart-d3">
                  <div className="vector-d4" />
                </div>
              </div>
            </div>
            <div className="pre-next-d5">
              <div className="next-d6">
                <div className="ooui-next-ltr-d7">
                  <div className="vector-d8" />
                </div>
                <div className="ellipse-d9" />
              </div>
              <div className="previous-da" />
            </div>
          </div>
          <div className="footer">
            <div className="footer-db">
              <div className="group-dc">
                <div className="simple-chon-don-gian-song-de-dang">
                  <span className="text-50">365 Simple </span>
                  <span className="chon-don-gian-song-de-dang">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="feedback">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="button-dong-gop">
                <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
                <div className="rectangle-dd" />
              </div>
              <div className="hotline">
                <div className="flex-column-f">
                  <span className="hotline-de">Hotline</span>
                  <span className="phone-number">
                    1900-100023 - 027.918.2981
                  </span>
                </div>
                <div className="ph-phone-light">
                  <div className="vector-df" />
                </div>
              </div>
              <div className="email">
                <div className="flex-column-fed">
                  <span className="email-e0">Email</span>
                  <span className="email-address">365simple@gmail.com</span>
                </div>
                <div className="material-symbols-mail-outline">
                  <div className="vector-e1" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-e2" />
              <div className="footer-e3">
                <div className="ndung-footer">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line-e4" />
                  <div className="club">
                    <span className="text-59">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-e5">Chính sách</span>
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
                    <span className="cham-soc-khach-hang-e6">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam-hai-long">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep">
                    <span className="kien-thuc-mac-dep-e7">
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
                <div className="group-e8">
                  <div className="line-e9" />
                  <span className="giay-phep-kinh-doanh-lu-hanh-quoc-te">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image-ea" />
                  <span className="copyright-simple-viet-nam">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="co-so">
                <span className="co-so-eb">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="ic-baseline-place">
                  <div className="vector-ec" />
                </div>
              </div>
              <div className="co-so-ed">
                <div className="ic-baseline-place-ee">
                  <div className="vector-ef" />
                </div>
                <span className="co-so-f0">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
          <div className="spham-gio-hang">
            <div className="san-pham">
              <span className="ao-khoac-long-s">Áo khoác lông S2</span>
              <div className="rectangle-f1" />
              <span className="price-f2">1.799.000</span>
              <div className="kich-thuoc-san-pham">
                <div className="group-f3">
                  <span className="size-s">S</span>
                  <div className="vector-f4" />
                </div>
                <div className="rectangle-f5" />
              </div>
              <button className="color-cart">
                <div className="group-f6">
                  <span className="den">Be</span>
                  <div className="vector-f7" />
                </div>
                <div className="rectangle-f8" />
              </button>
              <div className="ph-x" />
              <div className="vector-f9" />
              <button className="add-quantity">
                <div className="group-fa" />
                <div className="group-fb">
                  <div className="rectangle-fc" />
                  <div className="mdi-add-bold">
                    <div className="vector-fd" />
                  </div>
                </div>
                <div className="rectangle-fe" />
                <span className="quantity">1</span>
              </button>
            </div>
            <div className="san-pham-ff">
              <div className="flex-row">
                <div className="rectangle-100" />
                <span className="quan-tay-nam-sitetab-v">
                  Quần tây nam SiteTab v2
                </span>
                <span className="price-101">1.799.000</span>
              </div>
              <div className="flex-row-e-102">
                <button className="color-cart-103">
                  <div className="group-104">
                    <span className="den-105">Đen</span>
                    <div className="vector-106" />
                  </div>
                  <div className="rectangle-107" />
                </button>
                <button className="kich-thuoc-san-pham-108">
                  <div className="group-109">
                    <span className="size-s-10a">S</span>
                    <div className="vector-10b" />
                  </div>
                  <div className="rectangle-10c" />
                </button>
                <div className="ph-x-10d" />
              </div>
              <div className="vector-10e" />
              <button className="add-quantity-10f">
                <div className="group-110" />
                <div className="group-111">
                  <div className="rectangle-112" />
                  <div className="mdi-add-bold-113">
                    <div className="vector-114" />
                  </div>
                </div>
                <div className="rectangle-115" />
                <span className="number-1">1</span>
              </button>
            </div>
            <div className="san-pham-116">
              <span className="quan-jeans-slimfit">Quần Jeans Slimfit</span>
              <div className="rectangle-117" />
              <span className="price-118">1.799.000</span>
              <button className="kich-thuoc-san-pham-119">
                <div className="group-11a">
                  <span className="size-s-11b">S</span>
                  <div className="vector-11c" />
                </div>
                <div className="rectangle-11d" />
              </button>
              <button className="mau-sac-gio-hang">
                <div className="group-11e">
                  <span className="den-11f">Đen</span>
                  <div className="vector-120" />
                </div>
                <div className="rectangle-121" />
              </button>
              <div className="ph-x-122" />
              <div className="vector-123" />
              <button className="them-so-luong">
                <div className="group-124" />
                <div className="group-125">
                  <div className="rectangle-126" />
                  <div className="mdi-add-bold-127">
                    <div className="vector-128" />
                  </div>
                </div>
                <div className="rectangle-129" />
                <span className="span-1">1</span>
              </button>
            </div>
          </div>
          <div className="rectangle-12a" />
        </div>
        <div className="rectangle-12b">
          <div className="rectangle-12c">
            <div className="home" />
          </div>
          <div className="rectangle-12d">
            <div className="archive" />
          </div>
          <div className="rectangle-12e">
            <div className="clock" />
          </div>
          <div className="rectangle-12f">
            <div className="heart-130">
              <div className="vector-131" />
            </div>
          </div>
          <a href="/contacts" className="rectangle-132">
            <div className="phone">
              <div className="vector-133" />
            </div>
          </a>
        </div>
        <div className="home-indicator">
          <div className="rectangle-134" />
        </div>
      </div>

      <Footer />
    </>
  );
}
