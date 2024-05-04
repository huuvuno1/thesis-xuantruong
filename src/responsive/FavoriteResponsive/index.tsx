import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function FavoriteResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className='main-container'>
        <div className='flex-row-d'>
          <div className='rectangle'>
            <div className='ra-mat'>
              <span className='ra-mat-simple'>
                Ra mắt 365 Simple Back to school!
              </span>
              <span className='mua-ngay'>Mua ngay</span>
              <span className='ra-mat-simple-1'> -></span>
            </div>
            <div className='rectangle-2'>
              <div className='asset' />
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
          <span className='san-pham-yeu-thich'>/ Sản phẩm yêu thích</span>
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
              <div className='flex-row-e'>
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
                <div className='flex-column-dd'>
                  <div className='tag-new-17'>
                    <div className='sale-18'>
                      <button className='button' />
                      <div className='rectangle-19' />
                    </div>
                  </div>
                  <span className='minus-fifty-percent'>-50%</span>
                </div>
                <span className='price-1a'>550.000đ</span>
              </div>
              <div className='review-stars'>
                <span className='rating'>4</span>
                <div className='star-1b' />
              </div>
              <span className='simple-1c'>Simple</span>
              <div className='select-shirt-color'>
                <div className='flex-row'>
                  <div className='select-color'>
                    <div className='rectangle-1d' />
                  </div>
                  <div className='select-color-1e' />
                  <div className='select-color-1f'>
                    <div className='rectangle-20' />
                  </div>
                </div>
                <div className='description'>
                  <span className='shirt-name'>Áo Sơ mi Nam Basics</span>
                  <span className='thick-green'>Dày dặn/ Xanh rêu</span>
                  <span className='price-21'>299.000đ</span>
                </div>
              </div>
              <div className='heart-22'>
                <div className='vector-23' />
              </div>
            </div>
            <div className='tag-new-24'>
              <span className='new-25'>New</span>
              <div className='rectangle-26' />
            </div>
            <div className='review-stars-27'>
              <span className='rating-28'>4</span>
              <div className='star-29' />
            </div>
            <div className='select-color-2a' />
            <div className='select-color-2b'>
              <div className='rectangle-2c' />
            </div>
            <div className='select-color-2d'>
              <div className='rectangle-2e' />
            </div>
            <div className='description-2f'>
              <span className='shirt-name-30'>Áo Sơ mi Nam Basics</span>
              <span className='thick-green-31'>Dày dặn/ Xanh rêu</span>
              <span className='price-32'>299.000đ</span>
            </div>
            <div className='heart-33'>
              <div className='vector-34' />
            </div>
            <div className='heart-35'>
              <div className='vector-36' />
            </div>
          </a>
        </div>
        <div className='new-product'>
          <a href='/product-detail' className='hover-shirt'>
            <div className='rectangle-37' />
            <div className='image-38' />
            <div className='sale-39'>
              <div className='flex-column'>
                <button className='tag-new-3a'>
                  <div className='sale-3b'>
                    <span className='sale-3c'>Sale</span>
                    <div className='rectangle-3d' />
                  </div>
                </button>
                <span className='minus-fifty-percent-3e'>-50%</span>
              </div>
              <span className='price-3f'>550.000đ</span>
            </div>
            <div className='tag-new-40'>
              <span className='new-41'>New</span>
              <div className='rectangle-42' />
            </div>
            <div className='review-stars-43'>
              <span className='rating-44'>4</span>
              <div className='star-45' />
            </div>
            <span className='simple-46'>Simple</span>
            <div className='select-shirt-color-47'>
              <div className='flex-row-ca'>
                <div className='select-color-48'>
                  <div className='rectangle-49' />
                </div>
                <div className='choose-color' />
                <div className='choose-color-4a'>
                  <div className='rectangle-4b' />
                </div>
              </div>
              <div className='description-4c'>
                <span className='basic-shirt'>Áo Sơ mi Nam Basics</span>
                <span className='thick-green-4d'>Dày dặn/ Xanh rêu</span>
                <span className='price-4e'>299.000đ</span>
              </div>
            </div>
            <div className='heart-4f'>
              <div className='vector-50' />
            </div>
            <div className='heart-51'>
              <div className='vector-52' />
            </div>
          </a>
          <a href='/product-detail' className='product-hover'>
            <span className='simple-53'>Simple</span>
            <div className='rectangle-54' />
            <div className='product-hover-55'>
              <div className='rectangle-56' />
              <div className='image-57' />
              <div className='image-58' />
              <div className='sale-59'>
                <div className='column-flex'>
                  <div className='tag-new-5a'>
                    <div className='sale-5b'>
                      <span className='sale-text'>Sale</span>
                      <div className='rectangle-5c' />
                    </div>
                  </div>
                  <span className='discount'>-50%</span>
                </div>
                <span className='price-5d'>550.000đ</span>
              </div>
              <div className='tag-new-5e'>
                <span className='new-tag'>New</span>
                <div className='rectangle-5f' />
              </div>
              <div className='rating-stars'>
                <span className='star-60'>4</span>
                <div className='simple-61' />
              </div>
              <span className='mobile-color-selection'>Simple</span>
              <div className='row-flex'>
                <div className='choose-color-62'>
                  <div className='rectangle-63'>
                    <div className='choose-color-64' />
                  </div>
                  <div className='choose-color-65' />
                  <div className='rectangle-66'>
                    <div className='description-67' />
                  </div>
                </div>
                <div className='basic-shirt-68'>
                  <span className='thick-green-69'>Áo Sơ mi Nam Basics</span>
                  <span className='price-6a'>Dày dặn/ Xanh rêu</span>
                  <span className='heart-6b'>299.000đ</span>
                </div>
              </div>
              <div className='vector-6c'>
                <div className='heart-6d' />
              </div>
              <div className='vector-6e'>
                <div className='tag-new-6f' />
              </div>
            </div>
            <div className='new-tag-70'>
              <span className='rectangle-71'>New</span>
              <div className='rating-stars-72' />
            </div>
            <div className='star-73'>
              <span className='choose-color-74'>4</span>
              <div className='choose-color-75' />
            </div>
            <div className='rectangle-76' />
            <div className='choose-color-77'>
              <div className='rectangle-78' />
            </div>
            <div className='section-18'>
              <div className='box-17' />
            </div>
            <div className='description-79'>
              <span className='ao-so-mi-nam-basics'>Áo Sơ mi Nam Basics</span>
              <span className='day-dan-xanh-reu-7a'>Dày dặn/ Xanh rêu</span>
              <span className='price-7b'>299.000đ</span>
            </div>
            <div className='heart-7c'>
              <div className='vector-7d' />
            </div>
            <div className='heart-7e'>
              <div className='vector-7f' />
            </div>
          </a>
        </div>
        <div className='new-product-80'>
          <a href='/product-detail' className='hover-product-shirt'>
            <div className='rectangle-81' />
            <div className='image-82' />
            <div className='sale-83'>
              <div className='flex-column-dc'>
                <div className='tag-new-84'>
                  <div className='sale-85'>
                    <span className='sale-86'>Sale</span>
                    <div className='rectangle-87' />
                  </div>
                </div>
                <span className='discount-88'>-50%</span>
              </div>
              <span className='price-89'>550.000đ</span>
            </div>
            <div className='tag-new-8a'>
              <span className='new-8b'>New</span>
              <div className='rectangle-8c' />
            </div>
            <div className='rating-stars-8d'>
              <span className='star-8e'>4</span>
              <div className='simple-8f' />
            </div>
            <span className='mobile-choose-shirt-color'>Simple</span>
            <div className='flex-row-bc'>
              <div className='choose-color-90'>
                <div className='rectangle-91'>
                  <div className='choose-color-92' />
                </div>
                <div className='choose-color-93' />
                <div className='rectangle-94'>
                  <div className='description-95' />
                </div>
              </div>
              <div className='ao-so-mi-nam-basics-96'>
                <span className='day-dan-xanh-reu-97'>Áo Sơ mi Nam Basics</span>
                <span className='price-98'>Dày dặn/ Xanh rêu</span>
                <span className='heart-99'>299.000đ</span>
              </div>
            </div>
            <div className='vector-9a'>
              <div className='heart-9b' />
            </div>
            <div className='vector-9c'>
              <div className='hover-product-shirt-9d' />
            </div>
          </a>
          <a href='/product-detail' className='rectangle-9e'>
            <div className='image-9f' />
            <div className='tag-new-a0' />
            <div className='new-a1'>
              <span className='rectangle-a2'>New</span>
              <div className='rating-stars-a3' />
            </div>
            <div className='star-a4'>
              <span className='simple-a5'>4</span>
              <div className='choose-color-a6' />
            </div>
            <span className='choose-color-a7'>Simple</span>
            <div className='rectangle-a8' />
            <div className='choose-color-a9'>
              <div className='rectangle-aa' />
            </div>
            <div className='description-ab'>
              <div className='ao-so-mi-nam-basics-ac' />
            </div>
            <div className='day-dan-xanh-reu-ad'>
              <span className='text-3e'>Áo Sơ mi Nam Basics</span>
              <span className='text-3f'>Dày dặn/ Xanh rêu</span>
              <span className='price-tag'>299.000đ</span>
            </div>
            <div className='heart-ae'>
              <div className='vector-af' />
            </div>
            <div className='heart-b0'>
              <div className='vector-b1' />
            </div>
          </a>
        </div>
        <div className='line' />
        <div className='rectangle-b2'>
          <span className='see-more'>XEM THÊM</span>
        </div>
        <div className='rectangle-b3'>
          <div className='simple-choice'>
            <span className='text-42'>365 Simple </span>
            <span className='simple-choice-b4'>
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className='feedback'>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
            nữa.
          </span>
          <div className='rectangle-b5'>
            <span className='feedback-btn'>Đóng góp ý kiến</span>
          </div>
          <div className='flex-row-bb'>
            <span className='hotline'>Hotline</span>
            <div className='phone-light'>
              <div className='vector-b6' />
            </div>
          </div>
          <span className='phone-number'>1900-100023 - 027.918.2981</span>
          <span className='email'>Email</span>
          <div className='mail-outline'>
            <div className='vector-b7' />
          </div>
          <span className='email-address'>365simple@gmail.com</span>
          <div className='flex-row-a'>
            <div className='whatsapp' />
            <div className='facebook' />
            <div className='youtube' />
            <div className='ig' />
          </div>
          <span className='contact-address'>Địa chỉ liên hệ</span>
          <div className='flex-row-dd'>
            <div className='place-icon'>
              <div className='vector-b8' />
            </div>
            <span className='address-1'>
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='flex-row-dbf'>
            <div className='place-icon-b9'>
              <div className='vector-ba' />
            </div>
            <span className='address-2'>
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='line-bb' />
          <span className='text-4d'>365 Club</span>
          <span className='register-member'>Đăng ký thành viên</span>
          <span className='exclusive-offers'>Ưu đãi & độc quyền</span>
          <span className='policy'>Chính sách</span>
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
          <span className='simple-style-group'>Group mặc đơn giản sống chất</span>
          <div className='line-bc' />
          <div className='flex-row-bd'>
            <div className='image-be' />
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
