import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function CartResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className='main-container'>
        <div className='rectangle'>

          <div className='ra-mat-simple-back-to-school'>
            <span className='ra-mat-simple-back-to-school-1'>
              Ra mắt 365 Simple Back to school!
            </span>
            <span className='mua-ngay'>Mua ngay</span>
            <span className='ra-mat-simple-back-to-school-2'> {'->'}</span>
          </div>
          <div className='rectangle-3'>
            <div className='asset' />
            <div className='align-left' onClick={() => setToggle(true)}>
              <div className='vector' />
              <div className='vector-4' />
              <div className='vector-5' />
            </div>
            <a href='/auth/login' className='account'>
              <div className='vector-6' />
            </a>
            <a href='/cart' className='cart'>
              <div className='vector-7' />
              <div className='vector-8' />
            </a>
            <div className='search' />
            <div className='ellipse' />
            <span className='number'>5</span>
          </div>
        </div>
        <div className='flex-row-d'>
          <span className='gio-hang'>Giỏ hàng</span>
          <span className='thanh-toan'>Thanh toán</span>
          <span className='hoan-tat'>Hoàn tất</span>
          <div className='vector-9' />
          <div className='vector-a' />
        </div>
        <div className='trang-chu-gio-hang'>
          <span className='trang-chu'>Trang chủ</span>
          <span className='gio-hang-b'>/ Giỏ hàng</span>
        </div>
        <div className='flex-row-dd'>
          <div className='rectangle-c' />
          <span className='ao-khoac-long-s'>Áo khoác lông S2</span>
          <span className='price'>1.799.000</span>
          <div className='rectangle-d'>
            <span className='den'>Be</span>
            <div className='vector-e' />
          </div>
          <div className='rectangle-f'>
            <span className='size-s'>S</span>
            <div className='vector-10' />
          </div>
          <div className='ph-x' />
          <div className='vector-11' />
          <div className='rectangle-12'>
            <div className='group' />
            <div className='rectangle-13'>
              <div className='mdi-add-bold'>
                <div className='vector-14' />
              </div>
            </div>
            <span className='number-15'>1</span>
          </div>
        </div>
        <div className='flex-row-c'>
          <div className='rectangle-16' />
          <span className='quan-tay-nam-sitetab-v'>Quần tây nam SiteTab v2</span>
          <span className='price-17'>1.799.000</span>
          <div className='rectangle-18'>
            <span className='den-19'>Đen</span>
            <div className='vector-1a' />
          </div>
          <div className='rectangle-1b'>
            <span className='size-s-1c'>S</span>
            <div className='vector-1d' />
          </div>
          <div className='ph-x-1e' />
          <div className='vector-1f' />
          <div className='rectangle-20'>
            <div className='group-21' />
            <div className='rectangle-22'>
              <div className='mdi-add-bold-23'>
                <div className='vector-24' />
              </div>
            </div>
            <span className='number-25'>1</span>
          </div>
        </div>
        <div className='flex-row-dcc'>
          <div className='rectangle-26'>
            <div className='rectangle-27' />
          </div>
          <span className='quan-jeans-slimfit'>Quần Jeans Slimfit</span>
          <span className='price-28'>1.799.000</span>
          <div className='rectangle-29'>
            <span className='den-2a'>Đen</span>
            <div className='vector-2b' />
          </div>
          <div className='rectangle-2c'>
            <span className='s'>S</span>
            <div className='vector-2d' />
          </div>
          <div className='ph-x-2e' />
          <div className='vector-2f' />
          <div className='rectangle-30'>
            <div className='group-31' />
            <div className='rectangle-32'>
              <div className='mdi-add-bold-33'>
                <div className='vector-34' />
              </div>
            </div>
            <span className='number-35'>1</span>
          </div>
        </div>
        <div className='line' />
        <div className='buy-more-products'>
          <span className='buy-more-products-36'>Mua thêm sản phẩm</span>
          <span className='buy-more-products-37'> {'>>>'}</span>
        </div>
        <div className='rectangle-38'>
          <span className='order-summary'>TÓM TẮT ĐƠN HÀNG</span>
          <span className='shipping-fee-not-included'>
            Chưa bao gồm phí vận chuyển
          </span>
          <a href='/cart-payment' className='rectangle-39'>
            <span className='place-order'>Tiến hành đặt hàng</span>
          </a>
          <span className='total-price'>1,647,000</span>
          <span className='total-price-label'>Tổng tiền:</span>
        </div>
        <span className='recommended-products'>Sản phẩm bạn có thể thích</span>
        <div className='flex-row-df'>
          <div className='new-products'>
            <a href='/product-detail' className='hover-shirt-product'>
              <div className='rectangle-3a' />
              <div className='image' />
              <button className='new-tag'>
                <span className='new-tag-3b'>New</span>
                <div className='rectangle-3c' />
              </button>
              <div className='rating-stars'>
                <span className='rating-number'>4</span>
                <div className='star' />
              </div>
              <span className='simple'>Simple</span>
              <div className='select-shirt-color-mobile'>
                <div className='flex-row-eb'>
                  <div className='select-color'>
                    <div className='rectangle-3d' />
                  </div>
                  <div className='select-color-3e' />
                  <div className='select-color-3f'>
                    <div className='rectangle-40' />
                  </div>
                </div>
                <div className='description'>
                  <span className='shirt-basics'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green'>Dày dặn/ Xanh rêu</span>
                  <span className='price-41'>299.000đ</span>
                </div>
              </div>
              <div className='heart'>
                <div className='vector-42' />
              </div>
            </a>
            <a href='/product-detail' className='hover-shirt-product-43'>
              <div className='rectangle-44' />
              <div className='image-45' />
              <div className='new-tag-46'>
                <span className='new-tag-47'>New</span>
                <div className='rectangle-48' />
              </div>
              <div className='rating-stars-49'>
                <span className='rating-number-4a'>4</span>
                <div className='star-4b' />
              </div>
              <span className='simple-4c'>Simple</span>
              <div className='select-shirt-color-mobile-4d'>
                <div className='flex-row-cac'>
                  <div className='select-color-4e'>
                    <div className='rectangle-4f' />
                  </div>
                  <div className='select-color-50' />
                  <div className='select-color-51'>
                    <div className='rectangle-52' />
                  </div>
                </div>
                <div className='description-53'>
                  <span className='shirt-basics-54'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green-55'>Dày dặn/ Xanh rêu</span>
                  <span className='price-56'>299.000đ</span>
                </div>
              </div>
              <div className='heart-57'>
                <div className='vector-58' />
              </div>
            </a>
            <a href='/product-detail' className='hover-shirt-product-59'>
              <div className='rectangle-5a' />
              <div className='image-5b' />
              <div className='new-tag-5c'>
                <span className='new-tag-5d'>New</span>
                <div className='rectangle-5e' />
              </div>
              <div className='rating-stars-5f'>
                <span className='rating-number-60'>4</span>
                <div className='star-61' />
              </div>
              <span className='simple-62'>Simple</span>
              <div className='mobile-chon-mau-ao'>
                <div className='flex-row'>
                  <div className='chon-mau'>
                    <div className='rectangle-63' />
                  </div>
                  <div className='chon-mau-64' />
                  <div className='chon-mau-65'>
                    <div className='rectangle-66' />
                  </div>
                </div>
                <div className='mo-ta'>
                  <span className='ao-so-mi-nam-basics'>Áo Sơ mi Nam Basics</span>
                  <span className='day-dan-xanh-reu'>Dày dặn/ Xanh rêu</span>
                  <span className='price-67'>299.000đ</span>
                </div>
              </div>
              <div className='heart-68'>
                <div className='vector-69' />
              </div>
            </a>
            <a href='/product-detail' className='hover-san-pham-ao-so-mi'>
              <div className='rectangle-6a' />
              <div className='image-6b' />
              <div className='tag-new'>
                <span className='new'>New</span>
                <div className='rectangle-6c' />
              </div>
              <div className='danh-gia-sao'>
                <span className='rating'>4</span>
                <div className='star-6d' />
              </div>
              <span className='simple-6e'>Simple</span>
              <div className='mobile-chon-mau-ao-6f'>
                <div className='flex-row-fa'>
                  <div className='chon-mau-70'>
                    <div className='rectangle-71' />
                  </div>
                  <div className='chon-mau-72' />
                  <div className='chon-mau-73'>
                    <div className='rectangle-74' />
                  </div>
                </div>
                <div className='mo-ta-75'>
                  <span className='ao-so-mi-nam-basics-76'>
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className='day-dan-xanh-reu-77'>Dày dặn/ Xanh rêu</span>
                  <span className='price-78'>299.000đ</span>
                </div>
              </div>
              <div className='heart-79'>
                <div className='vector-7a' />
              </div>
            </a>
            <a href='/product-detail' className='hover-san-pham-ao-so-mi-7b'>
              <div className='rectangle-7c' />
              <div className='image-7d' />
              <button className='tag-new-7e'>
                <span className='new-7f'>New</span>
                <div className='rectangle-80' />
              </button>
              <div className='danh-gia-sao-81'>
                <span className='rating-82'>4</span>
                <div className='star-83' />
              </div>
              <span className='simple-84'>Simple</span>
              <div className='chon-mau-85' />
              <div className='chon-mau-86'>
                <div className='rectangle-87' />
              </div>
              <div className='chon-mau-88'>
                <div className='rectangle-89' />
              </div>
              <div className='mo-ta-8a'>
                <span className='ao-so-mi-nam-basics-8b'>
                  Áo Sơ mi Nam Basics
                </span>
                <span className='day-dan-xanh-reu-8c'>Dày dặn/ Xanh rêu</span>
                <span className='price-8d'>299.000đ</span>
              </div>
              <div className='heart-8e'>
                <div className='vector-8f' />
              </div>
            </a>
          </div>
          <div className='previous' />
          <div className='ellipse-90' />
          <div className='ooui-next-ltr'>
            <div className='vector-91' />
          </div>
        </div>
        <span className='san-pham-ban-vua-xem'>Sản phẩm bạn vừa xem</span>
        <div className='flex-row-d-92'>
          <div className='spham-moi'>
            <div className='hover-san-pham-ao-so-mi-93'>
              <div className='rectangle-94' />
              <div className='image-95' />
              <button className='tag-new-96'>
                <span className='new-97'>New</span>
                <div className='rectangle-98' />
              </button>
              <div className='danh-gia-sao-99'>
                <span className='rating-9a'>4</span>
                <div className='star-9b' />
              </div>
              <span className='simple-9c'>Simple</span>
              <div className='mobile-chon-mau-ao-9d'>
                <div className='flex-row-ce'>
                  <div className='choose-color'>
                    <div className='rectangle-9e' />
                  </div>
                  <div className='choose-color-9f' />
                  <div className='choose-color-a0'>
                    <div className='rectangle-a1' />
                  </div>
                </div>
                <div className='description-a2'>
                  <span className='basic-shirt'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green-a3'>Dày dặn/ Xanh rêu</span>
                  <span className='price-a4'>299.000đ</span>
                </div>
              </div>
              <div className='heart-a5'>
                <div className='vector-a6' />
              </div>
            </div>
            <div className='hover-product'>
              <div className='rectangle-a7' />
              <div className='image-a8' />
              <div className='tag-new-a9'>
                <span className='new-aa'>New</span>
                <div className='rectangle-ab' />
              </div>
              <div className='rating-stars-ac'>
                <span className='rating-number-ad'>4</span>
                <div className='star-ae' />
              </div>
              <span className='simple-af'>Simple</span>
              <div className='mobile-color-selection'>
                <div className='flex-row-bd'>
                  <div className='choose-color-b0'>
                    <div className='rectangle-b1' />
                  </div>
                  <div className='choose-color-b2' />
                  <div className='choose-color-b3'>
                    <div className='rectangle-b4' />
                  </div>
                </div>
                <div className='description-b5'>
                  <span className='basic-shirt-b6'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green-b7'>Dày dặn/ Xanh rêu</span>
                  <span className='price-b8'>299.000đ</span>
                </div>
              </div>
              <div className='heart-b9'>
                <div className='vector-ba' />
              </div>
            </div>
            <div className='hover-product-bb'>
              <div className='rectangle-bc' />
              <div className='image-bd' />
              <div className='tag-new-be'>
                <span className='new-bf'>New</span>
                <div className='rectangle-c0' />
              </div>
              <div className='rating-stars-c1'>
                <span className='rating-number-c2'>4</span>
                <div className='star-c3' />
              </div>
              <span className='simple-c4'>Simple</span>
              <div className='mobile-color-selection-c5'>
                <div className='flex-row-dab'>
                  <div className='choose-color-c6'>
                    <div className='rectangle-c7' />
                  </div>
                  <div className='choose-color-c8' />
                  <div className='choose-color-c9'>
                    <div className='rectangle-ca' />
                  </div>
                </div>
                <div className='description-cb'>
                  <span className='basic-shirt-cc'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green-cd'>Dày dặn/ Xanh rêu</span>
                  <span className='price-ce'>299.000đ</span>
                </div>
              </div>
              <div className='heart-cf'>
                <div className='vector-d0' />
              </div>
            </div>
            <div className='hover-product-d1'>
              <div className='rectangle-d2' />
              <div className='image-d3' />
              <div className='tag-new-d4'>
                <span className='new-d5'>New</span>
                <div className='rectangle-d6' />
              </div>
              <div className='rating-stars-d7'>
                <span className='rating-number-d8'>4</span>
                <div className='star-d9' />
              </div>
              <span className='simple-da'>Simple</span>
              <div className='mobile-color-selection-db'>
                <div className='flex-row-bfd'>
                  <div className='choose-color-dc'>
                    <div className='rectangle-dd' />
                  </div>
                  <div className='choose-color-de' />
                  <div className='choose-color-df'>
                    <div className='rectangle-e0' />
                  </div>
                </div>
                <div className='description-e1'>
                  <span className='basic-shirt-e2'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green-e3'>Dày dặn/ Xanh rêu</span>
                  <span className='price-e4'>299.000đ</span>
                </div>
              </div>
              <div className='heart-e5'>
                <div className='vector-e6' />
              </div>
            </div>
            <div className='hover-san-pham-ao-so-mi-e7'>
              <div className='rectangle-e8' />
              <div className='image-e9' />
              <button className='tag-new-ea'>
                <span className='new-eb'>New</span>
                <div className='rectangle-ec' />
              </button>
              <div className='danh-gia-sao-ed'>
                <span className='simple-ee'>4</span>
                <div className='star-ef' />
              </div>
              <span className='simple-f0'>Simple</span>
              <div className='chon-mau-f1' />
              <div className='chon-mau-f2'>
                <div className='rectangle-f3' />
              </div>
              <div className='chon-mau-f4'>
                <div className='rectangle-f5' />
              </div>
              <div className='mo-ta-f6'>
                <span className='ao-so-mi-nam-basics-f7'>
                  Áo Sơ mi Nam Basics
                </span>
                <span className='day-dan-xanh-reu-f8'>Dày dặn/ Xanh rêu</span>
                <span className='price-f9'>299.000đ</span>
              </div>
              <div className='heart-fa'>
                <div className='vector-fb' />
              </div>
            </div>
          </div>
          <div className='previous-fc' />
          <div className='ellipse-fd' />
          <div className='ooui-next-ltr-fe'>
            <div className='vector-ff' />
          </div>
        </div>
        <div className='rectangle-100'>
          <div className='simple-chon-don-gian-song-de-dang'>
            <span className='simple-101'>365 Simple </span>
            <span className='chon-don-gian-song-de-dang'>
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className='feedback'>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
            nữa.
          </span>
          <div className='rectangle-102'>
            <span className='danh-gia-y-kien'>Đóng góp ý kiến</span>
          </div>
          <div className='flex-row-ab'>
            <span className='hotline'>Hotline</span>
            <div className='ph-phone-light'>
              <div className='vector-103' />
            </div>
          </div>
          <span className='phone-number'>1900-100023 - 027.918.2981</span>
          <span className='email'>Email</span>
          <div className='material-symbols-mail-outline'>
            <div className='vector-104' />
          </div>
          <span className='email-address'>365simple@gmail.com</span>
          <div className='flex-row-d-105'>
            <div className='whatsapp' />
            <div className='facebook' />
            <div className='youtube' />
            <div className='ig' />
          </div>
          <span className='contact-address'>Địa chỉ liên hệ</span>
          <div className='flex-row-ce-106'>
            <div className='ic-baseline-place'>
              <div className='vector-107' />
            </div>
            <span className='address-1'>
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='flex-row-dd-108'>
            <div className='ic-baseline-place-109'>
              <div className='vector-10a' />
            </div>
            <span className='address-2'>
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='line-10b' />
          <span className='club'>365 Club</span>
          <span className='register-member'>Đăng ký thành viên</span>
          <span className='exclusive-offers'>Ưu đãi & độc quyền</span>
          <span className='policies'>Chính sách</span>
          <span className='terms-and-conditions'>Điều khoản và điều kiện</span>
          <span className='promotion-policy'>Chính sách khuyến mãi</span>
          <span className='privacy-policy'>Chính sách bảo mật</span>
          <span className='delivery-policy'>Chính sách giao hàng</span>
          <span className='customer-care'>Chăm sóc khách hàng</span>
          <span className='satisfactory-shopping-experience'>
            Trải nghiệm mua sắm 100% hài lòng
          </span>
          <span className='faqs'>Hỏi đáp - FAQs</span>
          <span className='fashion-knowledge'>Kiến thức mặc đẹp</span>
          <span className='size-guide'>Hướng dẫn chọn size</span>
          <span className='blog'>Blog</span>
          <span className='simple-fashion-lifestyle-group'>
            Group mặc đơn giản sống chất
          </span>
          <div className='line-10c' />
          <div className='flex-row-a'>
            <div className='image-10d' />
            <span className='copyright'>Copyright © 365 Simple Viet Nam </span>
          </div>
          <span className='business-license'>
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
