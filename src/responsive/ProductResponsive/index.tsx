'use client';
import { useState } from 'react';
import './index.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function ProductResponsive() {
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
            <div
              className="asset"
              onClick={() => {
                if (window) {
                  window.location.href = '/';
                }
              }}
            />
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
            <span className="number-5">5</span>
          </div>
        </div>
        <span className="all-products">Tất cả sản phẩm</span>
        <div className="flex-row">
          <div className="rectangle-9">
            <span className="filter">Bộ lọc</span>
            <div className="rectangle-a" />
            <div className="rectangle-b" />
            <div className="rectangle-c" />
          </div>
          <div className="rectangle-d">
            <div className="chevron-down">
              <div className="vector-e" />
            </div>
            <button className="newest">Mới nhất</button>
          </div>
        </div>
        <span className="results">181 Kết quả</span>
        <div className="new-products">
          <div className="hover-shirt">
            <div className="rectangle-f" />
            <div className="image" />
            <button className="tag-new">
              <span className="new-label">New</span>
              <div className="rectangle-10" />
            </button>
            <div className="rating-stars">
              <span className="stars-4">4</span>
              <div className="star" />
            </div>
            <span className="simple">Simple</span>
            <div className="mobile-shirt-color">
              <div className="flex-row-ad">
                <div className="choose-color">
                  <div className="rectangle-11" />
                </div>
                <div className="choose-color-12" />
                <div className="choose-color-13">
                  <div className="rectangle-14" />
                </div>
              </div>
              <a href="/product-detail" className="description">
                <span
                  className="shirt-basics"
                  onClick={() => {
                    if (window) {
                      window.location.href = '/product-detail';
                    }
                  }}
                >
                  Áo Sơ mi Nam Basics
                </span>
                <span className="thick-green">Dày dặn/ Xanh rêu</span>
                <span className="price">299.000đ</span>
              </a>
            </div>
            <div className="heart">
              <div className="vector-15" />
            </div>
          </div>
          <div className="hover-shirt-16">
            <div className="rectangle-17" />
            <div className="hover-shirt-18">
              <div className="rectangle-19" />
              <div className="image-1a" />
              <div className="image-1b" />
              <div className="tag-new-1c">
                <span className="new-label-1d">New</span>
                <div className="rectangle-1e" />
              </div>
              <div className="rating-stars-1f">
                <span className="stars-4-20">4</span>
                <div className="star-21" />
              </div>
              <span className="simple-22">Simple</span>
              <div className="mobile-shirt-color-23">
                <div className="flex-row-bf">
                  <div className="choose-color-24">
                    <div className="rectangle-25" />
                  </div>
                  <div className="choose-color-26" />
                  <div className="choose-color-27">
                    <div className="rectangle-28" />
                  </div>
                </div>
                <a href="/product-detail" className="mo-ta">
                  <span
                    className="ao-so-mi-nam-basics"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="day-dan-xanh-reu">Dày dặn/ Xanh rêu</span>
                  <span className="price-29">299.000đ</span>
                </a>
              </div>
              <div className="heart-2a">
                <div className="vector-2b" />
              </div>
            </div>
            <div className="sale">
              <div className="flex-column-bb">
                <div className="tag-new-2c">
                  <div className="sale-2d">
                    <span className="sale-2e">Sale</span>
                    <div className="rectangle-2f" />
                  </div>
                </div>
                <span className="discount">-50%</span>
              </div>
              <span className="price-30">550.000đ</span>
            </div>
            <div className="mo-ta-31">
              <span
                className="ao-so-mi-nam-basics-32"
                onClick={() => {
                  if (window) {
                    window.location.href = '/product-detail';
                  }
                }}
              >
                Áo Sơ mi Nam Basics
              </span>
              <span className="day-dan-xanh-reu-33">Dày dặn/ Xanh rêu</span>
              <span className="price-34">299.000đ</span>
            </div>
          </div>
        </div>
        <div className="new-product">
          <div className="hover-product-ao-so-mi">
            <div className="rectangle-35" />
            <div className="image-36" />
            <div className="sale-37">
              <div className="flex-column-baf">
                <button className="tag-new-38">
                  <div className="sale-39">
                    <span className="sale-3a">Sale</span>
                    <div className="rectangle-3b" />
                  </div>
                </button>
                <span className="discount-3c">-50%</span>
              </div>
              <span className="price-3d">550.000đ</span>
            </div>
            <div className="tag-new-3e">
              <span className="new">New</span>
              <div className="rectangle-3f" />
            </div>
            <div className="rating-star">
              <span className="star-40">4</span>
              <div className="simple-41" />
            </div>
            <span className="mobile-choose-color-ao">Simple</span>
            <div className="flex-row-42">
              <div className="choose-color-43">
                <div className="rectangle-44">
                  <div className="choose-color-45" />
                </div>
                <div className="choose-color-46" />
                <div className="rectangle-47">
                  <div className="mo-ta-48" />
                </div>
              </div>
              <a href="/product-detail" className="ao-so-mi-nam-basics-49">
                <span
                  className="day-dan-xanh-reu-4a"
                  onClick={() => {
                    if (window) {
                      window.location.href = '/product-detail';
                    }
                  }}
                >
                  Áo Sơ mi Nam Basics
                </span>
                <span className="price-4b">Dày dặn/ Xanh rêu</span>
                <span className="heart-4c">299.000đ</span>
              </a>
            </div>
            <div className="vector-4d">
              <div className="hover-product-ao-so-mi-4e" />
            </div>
          </div>
          <div className="mo-ta-4f">
            <div className="ao-so-mi-nam-basics-50">
              <span
                className="day-dan-xanh-reu-51"
                onClick={() => {
                  if (window) {
                    window.location.href = '/product-detail';
                  }
                }}
              >
                Áo Sơ mi Nam Basics
              </span>
              <span className="price-52">Dày dặn/ Xanh rêu</span>
              <span className="rectangle-53">299.000đ</span>
            </div>
            <div className="hover-product-ao-so-mi-54" />
            <div className="rectangle-55">
              <div className="image-56" />
              <div className="image-57" />
              <div className="tag-new-58" />
              <button className="new-59">
                <span className="rectangle-5a">New</span>
                <div className="rating-star-5b" />
              </button>
              <div className="star-5c">
                <span className="simple-5d">4</span>
                <div className="mobile-choose-color-ao-5e" />
              </div>
              <span className="flex-row-5f">Simple</span>
              <div className="choose-color-60">
                <div className="rectangle-61">
                  <div className="choose-color-62">
                    <div className="choose-color-63" />
                  </div>
                  <div className="rectangle-64" />
                  <div className="mo-ta-65">
                    <div className="ao-so-mi-nam-basics-66" />
                  </div>
                </div>
                <a href="/product-detail" className="day-dan-xanh-reu-67">
                  <span
                    className="price-68"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="heart-69">Dày dặn/ Xanh rêu</span>
                  <span className="vector-6a">299.000đ</span>
                </a>
              </div>
              <div className="section-17">
                <div className="pic-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="spham-moi">
          <div className="hover-san-pham-ao-so-mi">
            <div className="rectangle-6b" />
            <div className="image-6c" />
            <div className="sale-6d">
              <div className="flex-column-e">
                <button className="tag-new-6e">
                  <div className="sale-6f">
                    <span className="sale-70">Sale</span>
                    <div className="rectangle-71" />
                  </div>
                </button>
                <span className="sale-50">-50%</span>
              </div>
              <span className="text-2f">550.000đ</span>
            </div>
            <div className="tag-new-72">
              <span className="new-73">New</span>
              <div className="rectangle-74" />
            </div>
            <div className="danh-gia-sao">
              <span className="text-31">4</span>
              <div className="simple-75" />
            </div>
            <span className="mobile-chon-mau-ao">Simple</span>
            <div className="flex-row-fd">
              <div className="chon-mau">
                <div className="rectangle-76">
                  <div className="chon-mau-77" />
                </div>
                <div className="chon-mau-78" />
                <div className="rectangle-79">
                  <div className="mo-ta-7a" />
                </div>
              </div>
              <a href="/product-detail" className="ao-so-mi-nam-basics-7b">
                <span
                  className="day-dan-xanh-reu-7c"
                  onClick={() => {
                    if (window) {
                      window.location.href = '/product-detail';
                    }
                  }}
                >
                  Áo Sơ mi Nam Basics
                </span>
                <span className="text-34">Dày dặn/ Xanh rêu</span>
                <span className="heart-7d">299.000đ</span>
              </a>
            </div>
            <div className="vector-7e">
              <div className="hover-san-pham-ao-so-mi-7f" />
            </div>
          </div>
          <div className="mo-ta-80">
            <div className="ao-so-mi-nam-basics-81">
              <span
                className="day-dan-xanh-reu-82"
                onClick={() => {
                  if (window) {
                    window.location.href = '/product-detail';
                  }
                }}
              >
                Áo Sơ mi Nam Basics
              </span>
              <span className="text-37">Dày dặn/ Xanh rêu</span>
              <span className="rectangle-83">299.000đ</span>
            </div>
            <div className="hover-san-pham-ao-so-mi-84" />
            <div className="rectangle-85">
              <div className="image-86" />
              <div className="image-87" />
              <div className="tag-new-88" />
              <div className="new-89">
                <span className="rectangle-8a">New</span>
                <div className="danh-gia-sao-8b" />
              </div>
              <div className="wrapper-16">
                <span className="simple-8c">4</span>
                <div className="mobile-chon-mau-ao-8d" />
              </div>
              <span className="flex-row-f">Simple</span>
              <div className="chon-mau-8e">
                <div className="rectangle-8f">
                  <div className="chon-mau-90">
                    <div className="chon-mau-91" />
                  </div>
                  <div className="rectangle-92" />
                  <div className="mo-ta-93">
                    <div className="ao-so-mi-nam-basics-94" />
                  </div>
                </div>
                <a href="/product-detail" className="day-dan-xanh-reu-95">
                  <span
                    className="text-3c"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="heart-96">Dày dặn/ Xanh rêu</span>
                  <span className="vector-97">299.000đ</span>
                </a>
              </div>
              <div className="spham-moi-98">
                <div className="hover-san-pham-ao-so-mi-99" />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-9a">
          <div className="image-9b">
            <div className="tag-new-9c" />
            <div className="new-9d" />
            <div className="rectangle-9e">
              <span className="danh-gia-sao-9f">New</span>
              <div className="box-1e" />
            </div>
            <div className="simple-a0">
              <span className="mobile-chon-mau-ao-a1">4</span>
              <div className="flex-row-cfe" />
            </div>
            <span className="chon-mau-a2">Simple</span>
            <div className="rectangle-a3">
              <div className="chon-mau-a4">
                <div className="chon-mau-a5">
                  <div className="rectangle-a6" />
                </div>
                <div className="img-10" />
                <div className="box-1f">
                  <div className="wrapper-1b" />
                </div>
              </div>
              <div className="product-description">
                <span
                  className="product-name"
                  onClick={() => {
                    if (window) {
                      window.location.href = '/product-detail';
                    }
                  }}
                >
                  Áo Sơ mi Nam Basics
                </span>
                <span className="product-color">Dày dặn/ Xanh rêu</span>
                <span className="product-price">299.000đ</span>
              </div>
            </div>
            <div className="heart-icon">
              <div className="vector-icon" />
            </div>
          </div>
          <div className="product-hover">
            <div className="rectangle-a7" />
            <div className="product-image" />
            <div className="new-tag">
              <span className="new-label-a8">New</span>
              <div className="rectangle-a9" />
            </div>
            <div className="rating-stars-aa">
              <span className="star-icon">4</span>
              <div className="simple-label" />
            </div>
            <span className="color-selection">Simple</span>
            <div className="color-selection-ab" />
            <div className="rectangle-ac">
              <div className="color-selection-ad" />
            </div>
            <div className="rectangle-ae">
              <div className="product-description-af" />
            </div>
            <a href="/product-detail" className="product-name-b0">
              <span
                className="product-color-b1"
                onClick={() => {
                  if (window) {
                    window.location.href = '/product-detail';
                  }
                }}
              >
                Áo Sơ mi Nam Basics
              </span>
              <span className="product-price-b2">Dày dặn/ Xanh rêu</span>
              <span className="heart-icon-b3">299.000đ</span>
            </a>
            <div className="vector-icon-b4">
              <div className="sale-tag" />
            </div>
          </div>
          <div className="flex-column">
            <div className="new-tag-b5">
              <div className="sale-tag-b6">
                <div className="sale-label">
                  <span className="rectangle-b7">Sale</span>
                  <div className="sale-percentage" />
                </div>
              </div>
              <span className="sale-price">-50%</span>
            </div>
            <span className="line">550.000đ</span>
          </div>
        </div>
        <div className="rectangle-b8" />
        <div className="see-more">
          <span className="related-products">XEM THÊM</span>
        </div>
        <span className="flex-row-b9">Sản phẩm bạn có thể thích</span>
        <div className="new-products-ba">
          <div className="product-hover-bb">
            <div className="rectangle-bc">
              <div className="product-image-bd" />
              <div className="new-tag-be" />
              <button className="new-label-bf">
                <span className="rectangle-c0">New</span>
                <div className="rating-stars-c1" />
              </button>
              <div className="star-icon-c2">
                <span className="simple-label-c3">4</span>
                <div className="color-selection-c4" />
              </div>
              <span className="color-selection-c5">Simple</span>
              <div className="rectangle-c6">
                <div className="product-description-c7">
                  <div className="product-name-c8">
                    <div className="product-color-c9" />
                  </div>
                  <div className="product-price-ca" />
                  <div className="heart-icon-cb">
                    <div className="vector-icon-cc" />
                  </div>
                </div>
                <a href="/product-detail" className="product-hover-cd">
                  <span
                    className="rectangle-ce"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="product-image-cf">Dày dặn/ Xanh rêu</span>
                  <span className="new-tag-d0">299.000đ</span>
                </a>
              </div>
              <div className="new-label-d1">
                <div className="rectangle-d2" />
              </div>
            </div>
            <div className="rating-stars-d3">
              <div className="star-icon-d4" />
              <div className="simple-label-d5" />
              <div className="color-selection-d6">
                <span className="color-selection-d7">New</span>
                <div className="rectangle-d8" />
              </div>
              <div className="product-description-d9">
                <span className="product-name-da">4</span>
                <div className="product-color-db" />
              </div>
              <span className="product-price-dc">Simple</span>
              <div className="heart-icon-dd">
                <div className="vector-icon-de">
                  <div className="product-hover-df">
                    <div className="rectangle-e0" />
                  </div>
                  <div className="product-image-e1" />
                  <div className="new-tag-e2">
                    <div className="rectangle-e3" />
                  </div>
                </div>
                <a href="/product-detail" className="mo-ta-e4">
                  <span className="ao-so-mi-nam-basics-e5">
                    {' '}
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="day-dan-xanh-reu-e6">Dày dặn/ Xanh rêu</span>
                  <span className="price-e7">299.000đ</span>
                </a>
              </div>
              <div className="heart-e8">
                <div className="vector-e9" />
              </div>
            </div>
            <div className="hover-san-pham-ao-so-mi-ea">
              <div className="rectangle-eb" />
              <div className="image-ec" />
              <div className="tag-new-ed">
                <span className="new-ee">New</span>
                <div className="rectangle-ef" />
              </div>
              <div className="danh-gia-sao-f0">
                <span className="star-f1">4</span>
                <div className="simple-f2" />
              </div>
              <span className="mobile-chon-mau-ao-f3">Simple</span>
              <div className="flex-row-ebe">
                <div className="chon-mau-f4">
                  <div className="rectangle-f5">
                    <div className="chon-mau-f6" />
                  </div>
                  <div className="chon-mau-f7" />
                  <div className="rectangle-f8">
                    <div className="mo-ta-f9" />
                  </div>
                </div>
                <a href="/product-detail" className="ao-so-mi-nam-basics-fa">
                  <span
                    className="day-dan-xanh-reu-fb"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="price-fc">Dày dặn/ Xanh rêu</span>
                  <span className="heart-fd">299.000đ</span>
                </a>
              </div>
              <div className="vector-fe">
                <div className="hover-san-pham-ao-so-mi-ff" />
              </div>
            </div>
            <div className="rectangle-100">
              <div className="image-101" />
              <div className="tag-new-102" />
              <div className="new-103">
                <span className="rectangle-104">New</span>
                <div className="danh-gia-sao-105" />
              </div>
              <div className="star-106">
                <span className="simple-107">4</span>
                <div className="mobile-chon-mau-ao-108" />
              </div>
              <span className="flex-row-a">Simple</span>
              <div className="chon-mau-109">
                <div className="rectangle-10a">
                  <div className="chon-mau-10b">
                    <div className="chon-mau-10c" />
                  </div>
                  <div className="rectangle-10d" />
                  <div className="mo-ta-10e">
                    <div className="ao-so-mi-nam-basics-10f" />
                  </div>
                </div>
                <a href="/product-detail" className="day-dan-xanh-reu-110">
                  <span
                    className="price-111"
                    onClick={() => {
                      if (window) {
                        window.location.href = '/product-detail';
                      }
                    }}
                  >
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className="heart-112">Dày dặn/ Xanh rêu</span>
                  <span className="vector-113">299.000đ</span>
                </a>
              </div>
              <div className="hover-san-pham-ao-so-mi-114">
                <div className="rectangle-115" />
              </div>
            </div>
            <div className="image-116">
              <div className="sale-117" />
              <div className="flex-column-118" />
              <div className="tag-new-119">
                <div className="sale-11a">
                  <button className="sale-11b">
                    <div className="rectangle-11c">
                      <span className="discount-11d">Sale</span>
                      <div className="tag-new-11e" />
                    </div>
                  </button>
                  <span className="price-11f">-50%</span>
                </div>
                <span className="price-120">550.000đ</span>
              </div>
              <div className="tag-new-121">
                <span className="new-122">New</span>
                <div className="rectangle-123" />
              </div>
              <div className="danh-gia-sao-124">
                <span className="star-125">4</span>
                <div className="simple-126" />
              </div>
              <span className="chon-mau-127">Simple</span>
              <div className="chon-mau-128" />
              <div className="rectangle-129">
                <div className="chon-mau-12a" />
              </div>
              <div className="rectangle-12b">
                <div className="mo-ta-12c" />
              </div>
              <a href="/product-detail" className="ao-so-mi-nam-basics-12d">
                <span
                  className="day-dan-xanh-reu-12e"
                  onClick={() => {
                    if (window) {
                      window.location.href = '/product-detail';
                    }
                  }}
                >
                  Áo Sơ mi Nam Basics
                </span>
                <span className="price-12f">Dày dặn/ Xanh rêu</span>
                <span className="text-70">299.000đ</span>
              </a>
              <div className="heart-130">
                <div className="vector-131" />
              </div>
            </div>
          </div>
          <div className="previous" />
          <div className="ellipse-132" />
          <div className="ooui-next-ltr">
            <div className="vector-133" />
          </div>
        </div>
        <div className="rectangle-134">
          <div className="simple-chon-don-gian-song-de-dang">
            <span className="text-71">365 Simple </span>
            <span className="chon-don-gian-song-de-dang">
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className="chung-toi-luon-tran-trong">
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </span>
          <div className="rectangle-135">
            <span className="dong-gop-y-kien">Đóng góp ý kiến</span>
          </div>
          <div className="flex-row-ed">
            <span className="hotline">Hotline</span>
            <div className="phone-light">
              <div className="vector-136" />
            </div>
          </div>
          <span className="phone-number">1900-100023 - 027.918.2981</span>
          <span className="email">Email</span>
          <div className="mail-outline">
            <div className="vector-137" />
          </div>
          <span className="email-address">365simple@gmail.com</span>
          <div className="flex-row-fe">
            <div className="whatsapp" />
            <div className="facebook" />
            <div className="youtube" />
            <div className="ig" />
          </div>
          <span className="contact-address">Địa chỉ liên hệ</span>
          <div className="flex-row-ed-138">
            <div className="place">
              <div className="vector-139" />
            </div>
            <span className="address">
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="flex-row-13a">
            <div className="place-icon">
              <div className="vector-13b" />
            </div>
            <span className="address-13c">
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className="line-13d" />
          <span className="club">365 Club</span>
          <span className="register-member">Đăng ký thành viên</span>
          <span className="offers-exclusive">Ưu đãi & độc quyền</span>
          <span className="policy">Chính sách</span>
          <span className="terms-conditions">Điều khoản và điều kiện</span>
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
          <span className="simple-style-group">
            Group mặc đơn giản sống chất
          </span>
          <div className="line-13e" />
          <div className="flex-row-ed-13f">
            <div className="image-140" />
            <span className="copyright">Copyright © 365 Simple Viet Nam </span>
          </div>
          <span className="business-license">
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
        <div className="flex-row-fd-141">
          <div className="rectangle-142">
            <div className="rectangle-143">
              <div className="home" />
            </div>
            <div className="rectangle-144">
              <div className="archive" />
            </div>
            <div className="rectangle-145">
              <div className="clock" />
            </div>
            <div className="rectangle-146">
              <div className="heart-147">
                <div className="vector-148" />
              </div>
            </div>
            <div className="rectangle-149">
              <div className="phone">
                <div className="vector-14a" />
              </div>
            </div>
          </div>
          <div className="home-indicator-light">
            <div className="rectangle-14b" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
