import { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';

export default function FavoriteResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <NavBar />}

      <div className="main-container">
        <div className="rectangle">
          <div className="release-back-to-school">
            <span className="release-back-to-school-buy-now">
              Ra mắt 365 Simple Back to school!
            </span>
            <span className="buy-now">Mua ngay</span>
            <span className="release-back-to-school-buy-now-1">{' ->'}</span>
          </div>
          <div className="rectangle-2">
            <div className="asset" />
            <div className="align-left" onClick={() => setToggle(!toggle)}>
              <div className="vector" />
              <div className="vector-3" />
              <div className="vector-4" />
            </div>
            <div className="account">
              <div className="vector-5" />
            </div>
            <div className="cart">
              <div className="vector-6" />
              <div className="vector-7" />
            </div>
            <div className="search" />
            <div className="ellipse" />
            <span className="number">5</span>
          </div>
        </div>
        <div className="frame">
          <div className="link">
            <span className="favorite-products">/ Sản phẩm yêu thích</span>
            <span className="home">Trang chủ</span>
          </div>
          <div className="group">
            <div className="new-products">
              <div className="new-products-8">
                <div className="hover-shirt">
                  <div className="rectangle-9" />
                  <div className="image" />
                  <button className="tag-new">
                    <span className="new-tag">New</span>
                    <div className="rectangle-a" />
                  </button>
                  <div className="rating-stars">
                    <span className="stars">4</span>
                    <div className="star" />
                  </div>
                  <span className="simple">Simple</span>
                  <div className="shirt-colors">
                    <div className="flex-row">
                      <div className="select-color">
                        <div className="rectangle-b" />
                      </div>
                      <div className="select-color-c" />
                      <div className="select-color-d">
                        <div className="rectangle-e" />
                      </div>
                    </div>
                    <div className="description">
                      <span className="shirt-name">Áo Sơ mi Nam Basics</span>
                      <span className="thick-green">Dày dặn/ Xanh rêu</span>
                      <span className="price">299.000đ</span>
                    </div>
                  </div>
                  <div className="heart">
                    <div className="vector-f" />
                  </div>
                </div>
                <div className="hover-shirt-10">
                  <span className="simple-11">Simple</span>
                  <div className="rectangle-12" />
                  <div className="hover-shirt-13">
                    <div className="rectangle-14" />
                    <div className="image-15" />
                    <div className="image-16" />
                    <div className="sale">
                      <div className="flex-column">
                        <button className="tag-new-17">
                          <div className="sale-18">
                            <span className="sale-tag">Sale</span>
                            <div className="rectangle-19" />
                          </div>
                        </button>
                        <span className="discount">-50%</span>
                      </div>
                      <span className="price-1a">550.000đ</span>
                    </div>
                    <div className="star-rating">
                      <span className="rating-value">4</span>
                      <div className="star-1b" />
                    </div>
                    <span className="simple-1c">Simple</span>
                    <div className="color-selection">
                      <div className="flex-row-1d">
                        <div className="color-selection-1e">
                          <div className="rectangle-1f" />
                        </div>
                        <div className="color-selection-20" />
                        <div className="color-selection-21">
                          <div className="rectangle-22" />
                        </div>
                      </div>
                      <div className="description-23">
                        <span className="product-name">
                          Áo Sơ mi Nam Basics
                        </span>
                        <span className="product-details">
                          Dày dặn/ Xanh rêu
                        </span>
                        <span className="price-24">299.000đ</span>
                      </div>
                    </div>
                    <div className="heart-25">
                      <div className="vector-26" />
                    </div>
                  </div>
                  <div className="new-tag-27">
                    <span className="new-tag-28">New</span>
                    <div className="rectangle-29" />
                  </div>
                  <div className="star-rating-2a">
                    <span className="rating-value-2b">4</span>
                    <div className="star-2c" />
                  </div>
                  <div className="color-selection-2d" />
                  <div className="color-selection-2e">
                    <div className="rectangle-2f" />
                  </div>
                  <div className="color-selection-30">
                    <div className="rectangle-31" />
                  </div>
                  <div className="description-32">
                    <span className="product-name-33">Áo Sơ mi Nam Basics</span>
                    <span className="product-details-34">
                      Dày dặn/ Xanh rêu
                    </span>
                    <span className="price-35">299.000đ</span>
                  </div>
                  <div className="heart-36">
                    <div className="vector-37" />
                  </div>
                  <div className="heart-38">
                    <div className="vector-39" />
                  </div>
                </div>
              </div>
            </div>
            <div className="new-product">
              <div className="new-product-3a">
                <div className="product-hover">
                  <div className="rectangle-3b" />
                  <div className="image-3c" />
                  <div className="sale-3d">
                    <div className="column">
                      <button className="new-tag-3e">
                        <div className="sale-3f">
                          <span className="sale-tag-40">Sale</span>
                          <div className="rectangle-41" />
                        </div>
                      </button>
                      <span className="discount-42">-50%</span>
                    </div>
                    <span className="price-43">550.000đ</span>
                  </div>
                  <div className="new-tag-44">
                    <span className="new-tag-45">New</span>
                    <div className="rectangle-46" />
                  </div>
                  <div className="star-rating-47">
                    <span className="rating-value-48">4</span>
                    <div className="star-49" />
                  </div>
                  <span className="simple-4a">Simple</span>
                  <div className="color-selection-4b">
                    <div className="flex-row-4c">
                      <div className="color-selection-4d">
                        <div className="color-selection-4e" />
                      </div>
                      <div className="color-selection-4f" />
                      <div className="rectangle-50">
                        <div className="description-51" />
                      </div>
                    </div>
                    <div className="product-name-52">
                      <span className="product-details-53">
                        Áo Sơ mi Nam Basics
                      </span>
                      <span className="product-details-54">
                        Dày dặn/ Xanh rêu
                      </span>
                      <span className="price-55">299.000đ</span>
                    </div>
                  </div>
                  <div className="heart-56">
                    <div className="vector-57" />
                  </div>
                  <div className="heart-58">
                    <div className="vector-59" />
                  </div>
                </div>
                <div className="hover-san-pham-ao-so-mi">
                  <span className="simple-5a">Simple</span>
                  <div className="rectangle-5b" />
                  <div className="hover-san-pham-ao-so-mi-5c">
                    <div className="rectangle-5d" />
                    <div className="image-5e" />
                    <div className="image-5f" />
                    <div className="sale-60">
                      <div className="flex-column-f">
                        <button className="tag-new-61">
                          <div className="sale-62">
                            <span className="sale-63">Sale</span>
                            <div className="rectangle-64" />
                          </div>
                        </button>
                        <span className="percentage">-50%</span>
                      </div>
                      <span className="price-65">550.000đ</span>
                    </div>
                    <div className="tag-new-66">
                      <span className="new">New</span>
                      <div className="rectangle-67" />
                    </div>
                    <div className="danh-gia-sao">
                      <span className="star-68">4</span>
                      <div className="simple-69" />
                    </div>
                    <span className="mobile-chon-mau-ao">Simple</span>
                    <div className="flex-row-b">
                      <div className="chon-mau">
                        <div className="rectangle-6a">
                          <div className="chon-mau-6b" />
                        </div>
                        <div className="chon-mau-6c" />
                        <div className="rectangle-6d">
                          <div className="mo-ta" />
                        </div>
                      </div>
                      <div className="ao-so-mi-nam-basics">
                        <span className="ao-so-mi-nam-basics-6e">
                          Áo Sơ mi Nam Basics
                        </span>
                        <span className="day-dan-xanh-reu">
                          Dày dặn/ Xanh rêu
                        </span>
                        <span className="price-6f">299.000đ</span>
                      </div>
                    </div>
                    <div className="heart-70">
                      <div className="vector-71" />
                    </div>
                    <div className="heart-72">
                      <div className="vector-73" />
                    </div>
                  </div>
                  <div className="tag-new-74">
                    <span className="new-75">New</span>
                    <div className="rectangle-76" />
                  </div>
                  <div className="danh-gia-sao-77">
                    <span className="star-78">4</span>
                    <div className="chon-mau-79" />
                  </div>
                  <div className="chon-mau-7a" />
                  <div className="rectangle-7b">
                    <div className="chon-mau-7c" />
                  </div>
                  <div className="rectangle-7d">
                    <div className="mo-ta-7e" />
                  </div>
                  <div className="ao-so-mi-nam-basics-7f">
                    <span className="ao-so-mi-nam-basics-80">
                      Áo Sơ mi Nam Basics
                    </span>
                    <span className="day-dan-xanh-reu-81">
                      Dày dặn/ Xanh rêu
                    </span>
                    <span className="price-82">299.000đ</span>
                  </div>
                  <div className="heart-83">
                    <div className="vector-84" />
                  </div>
                  <div className="heart-85">
                    <div className="vector-86" />
                  </div>
                </div>
              </div>
            </div>
            <div className="spham-moi">
              <div className="spham-moi-87">
                <div className="hover-san-pham-ao-so-mi-88">
                  <div className="rectangle-89" />
                  <div className="image-8a" />
                  <div className="sale-8b">
                    <div className="flex-column-8c">
                      <div className="tag-new-8d">
                        <div className="sale-8e">
                          <span className="sale-text">Sale</span>
                          <div className="rectangle-8f" />
                        </div>
                      </div>
                      <span className="discount-90">-50%</span>
                    </div>
                    <span className="price-91">550.000đ</span>
                  </div>
                  <div className="tag-new-92">
                    <span className="new-text">New</span>
                    <div className="rectangle-93" />
                  </div>
                  <div className="star-rating-94">
                    <span className="star-95">4</span>
                    <div className="simple-text" />
                  </div>
                  <span className="mobile-color-selection">Simple</span>
                  <div className="flex-row-ba">
                    <div className="color-selection-96">
                      <div className="rectangle-97">
                        <div className="color-selection-98" />
                      </div>
                      <div className="color-selection-99" />
                      <div className="rectangle-9a">
                        <div className="description-9b" />
                      </div>
                    </div>
                    <div className="product-name-9c">
                      <span className="product-name-9d">
                        Áo Sơ mi Nam Basics
                      </span>
                      <span className="product-details-9e">
                        Dày dặn/ Xanh rêu
                      </span>
                      <span className="product-price">299.000đ</span>
                    </div>
                  </div>
                  <div className="heart-9f">
                    <div className="vector-a0" />
                  </div>
                  <div className="heart-a1">
                    <div className="vector-a2" />
                  </div>
                </div>
                <div className="product-hover-a3">
                  <div className="rectangle-a4" />
                  <div className="image-a5" />
                  <div className="tag-new-a6">
                    <span className="new-text-a7">New</span>
                    <div className="rectangle-a8" />
                  </div>
                  <div className="star-rating-a9">
                    <span className="star-aa">4</span>
                    <div className="simple-text-ab" />
                  </div>
                  <span className="color-selection-ac">Simple</span>
                  <div className="color-selection-ad" />
                  <div className="color-selection-ae">
                    <div className="rectangle-af" />
                  </div>
                  <div className="color-selection-b0">
                    <div className="rectangle-b1" />
                  </div>
                  <div className="description-b2">
                    <span className="product-name-b3">Áo Sơ mi Nam Basics</span>
                    <span className="product-details-b4">
                      Dày dặn/ Xanh rêu
                    </span>
                    <span className="product-price-b5">299.000đ</span>
                  </div>
                  <div className="heart-b6">
                    <div className="vector-b7" />
                  </div>
                  <div className="heart-b8">
                    <div className="vector-b9" />
                  </div>
                </div>
              </div>
            </div>
            <div className="view-more">
              <div className="line" />
              <div className="view-more-ba">
                <span className="view-more-text">XEM THÊM</span>
                <div className="rectangle-bb" />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-bc">
              <div className="group-bd">
                <div className="simple-text-be">
                  <span className="text-44">365 Simple </span>
                  <span className="simple-living">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="feedback-message">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="feedback-button">
                <span className="feedback-text">Đóng góp ý kiến</span>
                <div className="rectangle-bf" />
              </div>
              <div className="hotline">
                <div className="flex-column-bb">
                  <span className="hotline-text">Hotline</span>
                  <span className="span-tag">1900-100023 - 027.918.2981</span>
                </div>
                <div className="phone-light">
                  <div className="vector-c0" />
                </div>
              </div>
              <div className="email">
                <div className="flex-column-c1">
                  <span className="email-span">Email</span>
                  <span className="email-address">365simple@gmail.com</span>
                </div>
                <div className="mail-outline">
                  <div className="vector-c2" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-c3" />
              <div className="footer-c4">
                <div className="footer-content">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line-c5" />
                  <div className="club">
                    <span className="text-4d">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="chinh-sach-c6">Chính sách</span>
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
                    <span className="cham-soc-khach-hang-c7">
                      Chăm sóc khách hàng
                    </span>
                    <span className="trai-nghiem-mua-sam">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="hoi-dap-faqs">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep">
                    <span className="kien-thuc-mac-dep-c8">
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
                <div className="group-c9">
                  <div className="line-ca" />
                  <span className="giay-phep-kinh-doanh">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image-cb" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="co-so">
                <span className="co-so-cc">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="place">
                  <div className="vector-cd" />
                </div>
              </div>
              <div className="co-so-ce">
                <div className="place-cf">
                  <div className="vector-d0" />
                </div>
                <span className="co-so-d1">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-d2">
          <a href="/" className="rectangle-d3">
            <div className="home-d4" />
          </a>
          <a href="/cart" className="rectangle-d5">
            <div className="archive" />
          </a>
          <div className="rectangle-d6">
            <div className="clock" />
          </div>
          <div className="rectangle-d7">
            <div className="heart-d8">
              <div className="vector-d9" />
            </div>
          </div>
          <div className="rectangle-da">
            <div className="phone">
              <div className="vector-db" />
            </div>
          </div>
        </div>
        <div className="home-indicator">
          <div className="section-2a" />
        </div>
      </div>
    </>
  );
}
