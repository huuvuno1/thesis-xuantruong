import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function RecentViewResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className='main-container'>
        <div className='flex-row-ca'>
          <div className='rectangle'>
            <div className='ra-mat'>
              <span className='ra-mat-simple-back'>
                Ra mắt 365 Simple Back to school!
              </span>
              <span className='mua-ngay'>Mua ngay</span>
              <span className='ra-mat-simple-back-1'> -></span>
            </div>
            <div className='rectangle-2'>
              <a href='/' className='asset' />
              <div className='align-left' onClick={() => setToggle(true)}>
                <div className='vector' />
                <div className='vector-3' />
                <div className='vector-4' />
              </div>
              <a href='/auth/login' className='account'>
                <div className='vector-5' />
              </a>
              <a href='/cart' className='cart'>
                <div className='vector-6' />
                <div className='vector-7' />
              </a>
              <div className='search' />
              <div className='ellipse' />
              <span className='number'>5</span>
            </div>
          </div>
          <span className='trang-chu'>Trang chủ</span>
          <span className='san-pham-vua-xem'>/ Sản phẩm vừa xem</span>
        </div>
        <div className='spham-moi'>
          <a href='/product-detail' className='hover-san-pham'>
            <div className='rectangle-8' />
            <div className='image' />
            <button className='tag-new'>
              <span className='new'>New</span>
              <div className='rectangle-9' />
            </button>
            <div className='danh-gia-sao'>
              <span className='number-a'>4</span>
              <div className='star' />
            </div>
            <span className='simple'>Simple</span>
            <div className='mobile-chon-mau'>
              <div className='flex-row-ba'>
                <div className='chon-mau'>
                  <div className='rectangle-b' />
                </div>
                <div className='chon-mau-c' />
                <div className='chon-mau-d'>
                  <div className='rectangle-e' />
                </div>
              </div>
              <div className='mo-ta'>
                <span className='ao-so-mi-nam'>Áo Sơ mi Nam Basics</span>
                <span className='day-dan-xanh-reu'>Dày dặn/ Xanh rêu</span>
                <span className='price'>299.000đ</span>
              </div>
            </div>
            <div className='heart'>
              <div className='vector-f' />
            </div>
          </a>
          <a href='/product-detail' className='hover-san-pham-10'>
            <span className='simple-11'>Simple</span>
            <div className='rectangle-12' />
            <div className='hover-san-pham-13'>
              <div className='rectangle-14' />
              <div className='image-15' />
              <div className='image-16' />
              <div className='sale'>
                <div className='flex-column'>
                  <div className='tag-new-17'>
                    <div className='sale-18'>
                      <span className='sale-19'>Sale</span>
                      <div className='rectangle-1a' />
                    </div>
                  </div>
                  <span className='percent'>-50%</span>
                </div>
                <span className='price-1b'>550.000đ</span>
              </div>
              <div className='tag-new-1c'>
                <span className='new-1d'>New</span>
                <div className='rectangle-1e' />
              </div>
              <div className='rating-star'>
                <span className='rating-number'>4</span>
                <div className='star-1f' />
              </div>
              <span className='simple-20'>Simple</span>
              <div className='color-selection-mobile'>
                <div className='flex-row'>
                  <div className='color-selection'>
                    <div className='rectangle-21' />
                  </div>
                  <div className='color-selection-22' />
                  <div className='color-selection-23'>
                    <div className='rectangle-24' />
                  </div>
                </div>
                <div className='description'>
                  <span className='product-name'>Áo Sơ mi Nam Basics</span>
                  <span className='product-details'>Dày dặn/ Xanh rêu</span>
                  <span className='product-price'>299.000đ</span>
                </div>
              </div>
              <div className='heart-25'>
                <div className='vector-26' />
              </div>
            </div>
            <div className='tag-new-27'>
              <button className='new-28' />
              <div className='rectangle-29' />
            </div>
            <div className='rating-star-2a'>
              <span className='rating-number-2b'>4</span>
              <div className='star-2c' />
            </div>
            <div className='color-selection-2d' />
            <div className='color-selection-2e'>
              <div className='rectangle-2f' />
            </div>
            <div className='color-selection-30'>
              <div className='rectangle-31' />
            </div>
            <div className='description-32'>
              <span className='product-name-33'>Áo Sơ mi Nam Basics</span>
              <span className='product-details-34'>Dày dặn/ Xanh rêu</span>
              <span className='product-price-35'>299.000đ</span>
            </div>
            <div className='heart-36'>
              <div className='vector-37' />
            </div>
          </a>
        </div>
        <div className='new-product'>
          <a href='/product-detail' className='hover-product'>
            <div className='rectangle-38' />
            <div className='image-39' />
            <div className='sale-3a'>
              <div className='column-layout'>
                <button className='tag-new-3b'>
                  <div className='sale-3c'>
                    <span className='sale-3d'>Sale</span>
                    <div className='rectangle-3e' />
                  </div>
                </button>
                <span className='percent-3f'>-50%</span>
              </div>
              <span className='price-40'>550.000đ</span>
            </div>
            <div className='tag-new-41'>
              <span className='new-42'>New</span>
              <div className='rectangle-43' />
            </div>
            <div className='rating-star-44'>
              <span className='rating-number-45'>4</span>
              <div className='star-46' />
            </div>
            <span className='simple-47'>Simple</span>
            <div className='mobile-choose-color'>
              <div className='flex-row-48'>
                <div className='choose-color'>
                  <div className='rectangle-49' />
                </div>
                <div className='choose-color-4a' />
                <div className='choose-color-4b'>
                  <div className='rectangle-4c' />
                </div>
              </div>
              <div className='description-4d'>
                <span className='ao-so-mi-nam-basics'>Áo Sơ mi Nam Basics</span>
                <span className='day-dan-xanh-reu-4e'>Dày dặn/ Xanh rêu</span>
                <span className='price-4f'>299.000đ</span>
              </div>
            </div>
            <div className='heart-50'>
              <div className='vector-51' />
            </div>
            <div className='heart-52'>
              <div className='vector-53' />
            </div>
          </a>
          <a href='/product-detail' className='hover-product-ao-so-mi'>
            <span className='simple-54'>Simple</span>
            <div className='rectangle-55' />
            <div className='hover-product-ao-so-mi-56'>
              <div className='rectangle-57' />
              <div className='image-58' />
              <div className='image-59' />
              <div className='tag-new-5a'>
                <span className='new-5b'>New</span>
                <div className='rectangle-5c' />
              </div>
              <div className='rating-stars'>
                <span className='text-26'>4</span>
                <div className='star-5d' />
              </div>
              <span className='simple-5e'>Simple</span>
              <div className='mobile-choose-color-5f'>
                <div className='flex-row-dd'>
                  <div className='choose-color-60'>
                    <div className='rectangle-61' />
                  </div>
                  <div className='choose-color-62' />
                  <div className='choose-color-63'>
                    <div className='rectangle-64' />
                  </div>
                </div>
                <div className='description-65'>
                  <span className='ao-so-mi-nam-basics-66'>
                    Áo Sơ mi Nam Basics
                  </span>
                  <span className='day-dan-xanh-reu-67'>Dày dặn/ Xanh rêu</span>
                  <span className='price-68'>299.000đ</span>
                </div>
              </div>
              <div className='heart-69'>
                <div className='vector-6a' />
              </div>
              <div className='heart-6b'>
                <div className='vector-6c' />
              </div>
            </div>
            <div className='tag-new-6d'>
              <span className='new-6e'>New</span>
              <div className='rectangle-6f' />
            </div>
            <div className='rating-stars-70'>
              <span className='text-2c'>4</span>
              <div className='star-71' />
            </div>
            <div className='choose-color-72' />
            <div className='choose-color-73'>
              <div className='rectangle-74' />
            </div>
            <div className='choose-color-75'>
              <div className='rectangle-76' />
            </div>
            <div className='description-77'>
              <span className='ao-so-mi-nam-basics-78'>Áo Sơ mi Nam Basics</span>
              <span className='day-dan-xanh-reu-79'>Dày dặn/ Xanh rêu</span>
              <span className='price-7a'>299.000đ</span>
            </div>
            <div className='heart-7b'>
              <div className='vector-7c' />
            </div>
          </a>
        </div>
        <div className='new-product-7d'>
          <a href='/product-detail' className='hover-product-ao-so-mi-7e'>
            <div className='rectangle-7f' />
            <div className='image-80' />
            <div className='sale-81'>
              <div className='flex-column-ed'>
                <div className='tag-new-82'>
                  <div className='sale-83'>
                    <span className='sale-84'>Sale</span>
                    <div className='rectangle-85' />
                  </div>
                </div>
                <span className='discount'>-50%</span>
              </div>
              <span className='price-86'>550.000đ</span>
            </div>
            <div className='tag-new-87'>
              <span className='new-88'>New</span>
              <div className='rectangle-89' />
            </div>
            <div className='rating-stars-8a'>
              <span className='rating'>4</span>
              <div className='star-8b' />
            </div>
            <span className='simple-8c'>Simple</span>
            <div className='mobile-color-selection'>
              <div className='color-selection-8d'>
                <div className='color-selection-8e'>
                  <div className='rectangle-8f' />
                </div>
                <div className='color-selection-90' />
                <div className='color-selection-91'>
                  <div className='rectangle-92' />
                </div>
              </div>
              <div className='description-93'>
                <span className='ao-so-mi-nam-basics-94'>
                  Áo Sơ mi Nam Basics
                </span>
                <span className='day-dan-xanh-reu-95'>Dày dặn/ Xanh rêu</span>
                <span className='price-96'>299.000đ</span>
              </div>
            </div>
            <div className='heart-97'>
              <div className='vector-98' />
            </div>
          </a>
          <a href='/product-detail' className='hover-product-ao-so-mi-99'>
            <div className='rectangle-9a' />
            <div className='image-9b' />
            <div className='tag-new-9c'>
              <span className='new-9d'>New</span>
              <div className='rectangle-9e' />
            </div>
            <div className='rating-stars-9f'>
              <span className='rating-a0'>4</span>
              <div className='star-a1' />
            </div>
            <span className='simple-a2'>Simple</span>
            <div className='color-selection-a3' />
            <div className='color-selection-a4'>
              <div className='rectangle-a5' />
            </div>
            <div className='color-selection-a6'>
              <div className='rectangle-a7' />
            </div>
            <div className='description-a8'>
              <span className='ao-so-mi-nam-basics-a9'>Áo Sơ mi Nam Basics</span>
              <span className='day-dan-xanh-reu-aa'>Dày dặn/ Xanh rêu</span>
              <span className='price-ab'>299.000đ</span>
            </div>
            <div className='heart-ac'>
              <div className='vector-ad' />
            </div>
          </a>
        </div>
        <div className='line' />
        <div className='rectangle-ae'>
          <span className='xem-them'>XEM THÊM</span>
        </div>
        <div className='rectangle-af'>
          <div className='simple-chon-don-gian-song-de-dang'>
            <span className='text-40'>365 Simple </span>
            <span className='chon-don-gian-song-de-dang'>
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className='feedback'>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
            nữa.
          </span>
          <div className='rectangle-b0'>
            <span className='danh-gop-y-kien'>Đóng góp ý kiến</span>
          </div>
          <div className='flex-row-b1'>
            <span className='hotline'>Hotline</span>
            <div className='phone-light'>
              <div className='vector-b2' />
            </div>
          </div>
          <span className='hotline-number'>1900-100023 - 027.918.2981</span>
          <span className='email'>Email</span>
          <div className='mail-outline'>
            <div className='vector-b3' />
          </div>
          <span className='email-address'>365simple@gmail.com</span>
          <div className='flex-row-ac'>
            <div className='whatsapp' />
            <div className='facebook' />
            <div className='youtube' />
            <div className='ig' />
          </div>
          <span className='dia-chi-lien-he'>Địa chỉ liên hệ</span>
          <div className='flex-row-f'>
            <div className='place-icon'>
              <div className='vector-b4' />
            </div>
            <span className='address-1'>
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='flex-row-b5'>
            <div className='place-icon-b6'>
              <div className='vector-b7' />
            </div>
            <span className='address-2'>
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='line-b8' />
          <span className='text-4b'>365 Club</span>
          <span className='dang-ky-thanh-vien'>Đăng ký thành viên</span>
          <span className='uu-dai-doc-quyen'>Ưu đãi & độc quyền</span>
          <span className='chinh-sach'>Chính sách</span>
          <span className='dieu-khoan-va-dieu-kien'>Điều khoản và điều kiện</span>
          <span className='chinh-sach-khuyen-mai'>Chính sách khuyến mãi</span>
          <span className='chinh-sach-bao-mat'>Chính sách bảo mật</span>
          <span className='chinh-sach-giao-hang'>Chính sách giao hàng</span>
          <span className='cham-soc-khach-hang'>Chăm sóc khách hàng</span>
          <span className='trai-nghiem-mua-sam'>
            Trải nghiệm mua sắm 100% hài lòng
          </span>
          <span className='hoi-dap-faqs'>Hỏi đáp - FAQs</span>
          <span className='kien-thuc-mac-dep'>Kiến thức mặc đẹp</span>
          <span className='huong-dan-chon-size'>Hướng dẫn chọn size</span>
          <span className='blog'>Blog</span>
          <span className='group-mac-don-gian-song-chat'>
            Group mặc đơn giản sống chất
          </span>
          <div className='line-b9' />
          <div className='flex-row-ba'>
            <div className='image-bb' />
            <span className='copyright'>Copyright © 365 Simple Viet Nam </span>
          </div>
          <span className='giay-phep-kinh-doanh'>
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
