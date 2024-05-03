import { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function ProductDetailResponsive() {
  const notify = () =>
    toast.success('Đã thêm vào giỏ hàng!', {
      position: 'top-center',

      style: {
        fontSize: '14px',
      },
    });

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
            <a href="/">
              <div className="asset" />
            </a>
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
        <div className="flex-row-center">
          <span className="breadcrumb-home">Trang chủ /</span>
          <span className="breadcrumb-product">Sản phẩm</span>
          <span className="breadcrumb-detail">/ Chi tiết sản phẩm</span>
        </div>
        <div className="image">
          <div className="next-arrow">
            <div className="vector-8" />
          </div>
          <div className="previous-arrow" />
        </div>
        <span className="product-title">
          Áo Sơ mi Nam Basic dày dặn, thoáng mát form Regular
        </span>
        <span className="description">Dày dặn</span>
        <div className="flex-row-between">
          <div className="vector-9" />
          <div className="vector-a" />
          <div className="vector-b" />
          <div className="vector-c" />
          <div className="rating" />
          <span className="rating-count">(145)</span>
          <span className="sold-count">Đã bán (web): 1.909</span>
          <div className="rectangle-d" />
        </div>
        <div className="price">
          <span className="price-value">299.000</span>
          <span className="currency">đ</span>
        </div>
        <span className="discount-codes">Các mã giảm giá có thể áp dụng:</span>
        <div className="rectangle-e">
          <span className="discount">Giảm 10%</span>
        </div>
        <div className="color">
          <span className="color-label">Màu sắc:</span>
          <span className="color-value"> </span>
          <span className="color-name">Xanh rêu</span>
          <span className="color-value-f"> </span>
        </div>
        <div className="flex-row-around">
          <div className="size-guide" />
          <div className="size-selector" />
          <div className="size-selector-10" />
        </div>
        <div className="flex-row-center-11">
          <span className="size-label">Hướng dẫn chọn size</span>
          <div className="size-options">
            <span className="size-label-12">Kích thước:</span>
            <div className="size-option">
              <span className="size-value">S </span>
              <span className="size-description">
                (1m50 - 1m60 | 45kg - 55kg)
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row-between-13">
          <div className="size-selector-14">
            <span className="size-option-15">S</span>
          </div>
          <div className="size-option-16">
            <span className="size-option-17">M</span>
          </div>
          <div className="size-option-18">
            <span className="size-option-19">L</span>
          </div>
          <div className="size-option-1a">
            <span className="size-option-1b">XL</span>
          </div>
          <div className="size-option-1c">
            <span className="size-option-1d">2XL</span>
          </div>
        </div>
        <div className="flex-row-end">
          <div className="rectangle-1e">
            <div className="rectangle-1f">
              <div className="mdi-add-bold">
                <div className="vector-20" />
              </div>
            </div>
            <div className="group" />
            <span className="span">1</span>
          </div>
          <div className="rectangle-21" onClick={() => notify()}>
            <div className="ic-baseline-shopify">
              <div className="vector-22" />
            </div>
            <span className="add-to-cart">Thêm vào giỏ hàng</span>
          </div>
        </div>
        <a href="/cart-payment">
          <button className="rectangle-23">
            <span className="buy-now-24">Mua ngay</span>
            <div className="vector-25" />
          </button>
        </a>
        <div className="line" />
        <div className="flex-row-e">
          <div className="whatsapp" />
          <span className="span-26">Chat để được 365 Simple tư vấn ngay </span>
          <div className="grommet-icons-link-next">
            <div className="vector-27" />
          </div>
        </div>
        <div className="rectangle-28">
          <span className="product-details">Chi tiết sản phẩm</span>
        </div>
        <div className="flex-row">
          <span className="span-29">Danh mục</span>
          <span className="span-2a">
            {'365 Simple > Sản phẩm mới > Áo Nam'}
          </span>
        </div>
        <div className="flex-row-2b">
          <span className="span-2c">Thương hiệu</span>
          <span className="span-2d">365 Simple</span>
        </div>
        <div className="flex-row-fd">
          <span className="span-2e">Mẫu</span>
          <span className="span-2f">Form Regular</span>
        </div>
        <div className="flex-row-f">
          <span className="span-30">Phong cách</span>
          <span className="span-31">Đơn giản</span>
        </div>
        <div className="flex-row-faa">
          <span className="span-32">Chất liệu</span>
          <span className="span-33">Vải thái</span>
        </div>
        <div className="flex-row-f-34">
          <span className="span-35">Gửi từ</span>
          <span className="span-36">Hà Nội</span>
        </div>
        <div className="rectangle-37">
          <span className="product-description">Mô tả sản phẩm</span>
        </div>
        <div className="span-38">
          <span className="span-39">
            GIỚI THIỆU CHUNG
            <br />
          </span>
          <span className="span-3a">
            <br />
            Áo Sơ mi Nam Basic co giãn, thoáng khí cho form Regular <br />- Màu
            sắc: Trắng
            <br />- Size: S / M / L / XL.
            <br />- Kiểu dáng: Oversized.
            <br />
          </span>
          <span className="span-3b">
            <br />
          </span>
          <span className="span-3c">HƯỚNG DẪN SỬ DỤNG</span>
          <span className="span-3d">
            :<br />
          </span>
          <div className="span-3e">
            <br />- Lần giặt đầu chỉ nên xả nước lạnh rồi phơi khô.
            <br />- Khuyến cáo nên giặt tay, hạn chế giặt máy.
            <p>
              - Chú ý lộn trái sản phẩm trước khi giặt để không ảnh hướng tới bề
              mặt vải.
            </p>
            <p>
              - Không sử dụng thuốc tẩy, không giặt chung với các sản phẩm dễ
              phai màu.
            </p>
            <p>
              - Hạn chế phơi trực tiếp dưới ánh nắng mặt trời, nên phơi khô dưới
              ảnh sáng tự nhiên.
            </p>
          </div>
        </div>
        <div className="rectangle-3f">
          <span className="span-40">Màu sắc đơn giản</span>
        </div>
        <div className="image-41">
          <span className="span-42">Trẻ trung</span>
        </div>
        <div className="line-43" />
        <div className="rectangle-44">
          <span className="span-45">XEM THÊM</span>
        </div>
        <span className="span-46">Sản phẩm bạn có thể thích</span>
        <div className="flex-row-a">
          <div className="spham-moi">
            <div className="hover-product-shirt">
              <div className="rectangle-47" />
              <div className="image-48" />
              <div className="tag-new">
                <span className="span-49">New</span>
                <div className="rectangle-4a" />
              </div>
              <div className="star-rating">
                <span className="span-4b">4</span>
                <div className="star" />
              </div>
              <span className="simple">Simple</span>
              <div className="mobile-color-selection-shirt">
                <div className="flex-row-ff">
                  <div className="color-selection">
                    <div className="rectangle-4c" />
                  </div>
                  <div className="color-selection-4d" />
                  <div className="color-selection-4e">
                    <div className="rectangle-4f" />
                  </div>
                </div>
                <div className="description-50">
                  <span className="shirt-description">Áo Sơ mi Nam Basics</span>
                  <span className="green-moss">Dày dặn/ Xanh rêu</span>
                  <span className="price-51">299.000đ</span>
                </div>
              </div>
              <div className="heart">
                <div className="vector-52" />
              </div>
            </div>
            <div className="product-hover">
              <div className="rectangle-53" />
              <div className="image-54" />
              <div className="tag-new-55">
                <span className="new">New</span>
                <div className="rectangle-56" />
              </div>
              <div className="rating-star">
                <span className="rating-number">4</span>
                <div className="star-57" />
              </div>
              <span className="simple-58">Simple</span>
              <div className="color-selection-mobile">
                <div className="color-selection-59">
                  <div className="rectangle-5a">
                    <div className="color-selection-5b" />
                  </div>
                  <div className="color-selection-5c" />
                  <div className="rectangle-5d">
                    <div className="description-5e" />
                  </div>
                </div>
                <div className="product-name">
                  <span className="green-moss-5f">Áo Sơ mi Nam Basics</span>
                  <span className="price-60">Dày dặn/ Xanh rêu</span>
                  <span className="heart-61">299.000đ</span>
                </div>
              </div>
              <div className="vector-62">
                <div className="product-hover-63" />
              </div>
            </div>
            <div className="rectangle-64">
              <div className="image-65" />
              <div className="tag-new-66" />
              <div className="new-67">
                <span className="rectangle-68">New</span>
                <div className="rating-star-69" />
              </div>
              <div className="rating-number-6a">
                <span className="star-6b">4</span>
                <div className="simple-6c" />
              </div>
              <span className="color-selection-mobile-6d">Simple</span>
              <div className="color-selection-6e">
                <div className="rectangle-6f">
                  <div className="color-selection-70">
                    <div className="color-selection-71" />
                  </div>
                  <div className="rectangle-72" />
                  <div className="description-73">
                    <div className="product-name-74" />
                  </div>
                </div>
                <div className="green-moss-75">
                  <span className="price-76">Áo Sơ mi Nam Basics</span>
                  <span className="heart-77">Dày dặn/ Xanh rêu</span>
                  <span className="vector-78">299.000đ</span>
                </div>
              </div>
              <div className="product-hover-79">
                <div className="rectangle-7a" />
              </div>
            </div>
            <div className="image-7b">
              <div className="tag-new-7c" />
              <div className="new-7d" />
              <div className="rectangle-7e">
                <span className="rating-star-7f">New</span>
                <div className="rating-number-80" />
              </div>
              <div className="star-81">
                <span className="simple-82">4</span>
                <div className="color-selection-mobile-83" />
              </div>
              <span className="color-selection-84">Simple</span>
              <div className="rectangle-85">
                <div className="color-selection-86">
                  <div className="color-selection-87">
                    <div className="rectangle-88" />
                  </div>
                  <div className="description-89" />
                  <div className="product-name-8a">
                    <div className="green-moss-8b" />
                  </div>
                </div>
                <div className="price-8c">
                  <span className="heart-8d">Áo Sơ mi Nam Basics</span>
                  <span className="vector-8e">Dày dặn/ Xanh rêu</span>
                  <span className="product-hover-8f">299.000đ</span>
                </div>
              </div>
              <div className="rectangle-90">
                <div className="image-91" />
              </div>
            </div>
            <div className="tag-new-92">
              <div className="section-14" />
              <div className="pic-17" />
              <div className="box-15">
                <span className="new-93">New</span>
                <div className="rectangle-94" />
              </div>
              <div className="star-rating-95">
                <span className="rating-value">4</span>
                <div className="star-96" />
              </div>
              <span className="simple-97">Simple</span>
              <div className="color-selection-98" />
              <div className="color-selection-99">
                <div className="rectangle-9a" />
              </div>
              <div className="color-selection-9b">
                <div className="rectangle-9c" />
              </div>
              <div className="description-9d">
                <span className="product-name-9e">Áo Sơ mi Nam Basics</span>
                <span className="product-details-9f">Dày dặn/ Xanh rêu</span>
                <span className="price-a0">299.000đ</span>
              </div>
              <div className="heart-a1">
                <div className="vector-a2" />
              </div>
            </div>
          </div>
          <div className="previous" />
          <div className="ellipse-a3" />
          <div className="next-arrow-a4">
            <div className="vector-a5" />
          </div>
        </div>
        <div className="rectangle-a6">
          <span className="rating-value-a7">4.5</span>
          <div className="flex-row-a8">
            <span className="product-review">Đánh giá sản phẩm</span>
            <div className="vector-a9" />
            <div className="vector-aa" />
            <div className="vector-ab" />
            <div className="vector-ac" />
            <div className="half-star" />
          </div>
          <span className="review-count">145 đánh giá</span>
        </div>
        <div className="flex-row-ad">
          <div className="rectangle-ae">
            <span className="review-filter">Đánh giá</span>
            <div className="chevron-down">
              <div className="vector-af" />
            </div>
          </div>
          <div className="rectangle-b0">
            <span className="photo">Ảnh</span>
            <div className="chevron-down-b1">
              <div className="vector-b2" />
            </div>
          </div>
        </div>
        <div className="line-b3" />
        <div className="flex-row-b4">
          <div className="vector-b5" />
          <div className="vector-b6" />
          <div className="vector-b7" />
          <div className="vector-b8" />
          <div className="half-star-b9" />
        </div>
        <span className="reviewer-name">Nguyen Van Truong</span>
        <span className="product-details-ba">Xanh rêu/L</span>
        <span className="review-text">
          Áo đẹp và thoáng mát. 10 điểm.
          <br />
          Chất lượng phù hợp với giá sảnhợp với học sinh sinh viên.
        </span>
        <span className="review-date">11.03.2024</span>
        <div className="line-bb" />
        <div className="flex-row-bc">
          <div className="vector-bd" />
          <div className="vector-be" />
          <div className="vector-bf" />
          <div className="vector-c0" />
          <div className="half-star-c1" />
        </div>
        <span className="reviewer-name-c2">Nguyen Van Truong</span>
        <span className="product-details-c3">Xanh rêu/L</span>
        <div className="flex-row-c4">
          <div className="rectangle-c5" />
          <div className="rectangle-c6" />
        </div>
        <span className="review-text-c7">
          Chất lượng phù hợp với giá sản phẩm. Phù hợp với học sinh sinh viên.
          <br />
          Chất lượng phù hợp với giá sảnhợp với học sinh sinh viên.
          <br />
          Ch hợp với học sinh sinh viên.
          <br />
        </span>
        <span className="review-date-c8">11.03.2024</span>
        <div className="line-c9" />
        <div className="flex-row-ca">
          <div className="vector-cb" />
          <div className="vector-cc" />
          <div className="vector-cd" />
          <div className="vector-ce" />
          <div className="half-star-cf" />
        </div>
        <span className="reviewer-name-d0">Nguyen Van Truong</span>
        <span className="product-details-d1">Xanh rêu/L</span>
        <span className="review-text-d2">
          Áo đẹp và thoáng mát, mỏng. Tông màu đẹp và hiện đại. 10 điểm.
        </span>
        <span className="review-date-d3">11.03.2024</span>
        <div className="rectangle-d4">
          <input className="danh-gia-input" />
        </div>
        <div className="flex-row-ba">
          <div className="rectangle-d5">
            <span className="xoa">Xóa</span>
          </div>
          <div className="rectangle-d6">
            <span className="dang">Đăng</span>
          </div>
        </div>
        <div className="rectangle-d7">
          <div className="simple-chon-don-gian-song-de-dang">
            <span className="text-6c">365 Simple </span>
            <span className="chon-don-gian-song-de-dang">
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className="nhan-y-kien-dong-gop">
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </span>
          <div className="rectangle-d8">
            <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
          </div>
          <div className="flex-row-c">
            <span className="hotline">Hotline</span>
            <div className="ph-phone-light">
              <div className="vector-d9" />
            </div>
          </div>
          <span className="text-71">1900-100023 - 027.918.2981</span>
          <span className="email">Email</span>
          <div className="material-symbols-mail-outline">
            <div className="vector-da" />
          </div>
          <span className="text-73">365simple@gmail.com</span>
          <div className="flex-row-a-db">
            <div className="whatsapp-dc" />
            <div className="facebook" />
            <div className="youtube" />
            <div className="ig" />
          </div>
          <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
          <div className="flex-row-c-dd">
            <div className="ic-baseline-place">
              <div className="vector-de" />
            </div>
            <span className="co-so-1">
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="flex-row-ad-df">
            <div className="ic-baseline-place-e0">
              <div className="vector-e1" />
            </div>
            <span className="co-so-2">
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="line-e2" />
          <span className="text-77">365 Club</span>
          <span className="dang-ky-thanh-vien">Đăng ký thành viên</span>
          <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
          <span className="chinh-sach">Chính sách</span>
          <span className="dieu-khoan-va-dieu-kien">
            Điều khoản và điều kiện
          </span>
          <span className="chinh-sach-khuyen-mai">Chính sách khuyến mãi</span>
          <span className="chinh-sach-bao-mat">Chính sách bảo mật</span>
          <span className="chinh-sach-giao-hang">Chính sách giao hàng</span>
          <span className="cham-soc-khach-hang">Chăm sóc khách hàng</span>
          <span className="trai-nghiem-mua-sam-hai-long">
            Trải nghiệm mua sắm 100% hài lòng
          </span>
          <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
          <span className="kien-thuc-mac-dep">Kiến thức mặc đẹp</span>
          <span className="huong-dan-chon-size">Hướng dẫn chọn size</span>
          <span className="blog">Blog</span>
          <span className="group-mac-don-gian-song-chat">
            Group mặc đơn giản sống chất
          </span>
          <div className="line-e3" />
          <div className="flex-row-e4">
            <div className="image-e5" />
            <span className="copyright-365-simple-viet-nam">
              Copyright © 365 Simple Viet Nam
            </span>
          </div>
          <span className="giay-phep-kinh-doanh-lu-hanh-quoc-te">
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
        <div className="flex-row-be">
          <div className="rectangle-e6">
            <div className="rectangle-e7">
              <div className="home" />
            </div>
            <div className="rectangle-e8">
              <div className="archive" />
            </div>
            <div className="rectangle-e9">
              <div className="clock" />
            </div>
            <div className="rectangle-ea">
              <div className="heart-eb">
                <div className="vector-ec" />
              </div>
            </div>
            <div className="rectangle-ed">
              <div className="phone">
                <div className="vector-ee" />
              </div>
            </div>
          </div>
          <div className="home-indicator-on-light">
            <div className="rectangle-ef" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
