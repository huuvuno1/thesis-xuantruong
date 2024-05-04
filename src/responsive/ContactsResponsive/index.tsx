import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function ContactsResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className='main-container'>
        <div className='rectangle'>
          <div className='back-to-school'>
            <span className='back-to-school-1'>
              Ra mắt 365 Simple Back to school!
            </span>
            <span className='buy-now'>Mua ngay</span>
            <span className='back-to-school-2'> -></span>
          </div>
          <div className='rectangle-3'>
            <a href='/' className='asset' />
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
            <span className='span-5'>5</span>
          </div>
        </div>
        <div className='div-flex-row-c'>
          <span className='span-trang-chu'>Trang chủ</span>
          <span className='span-lien-he'>/ Liên hệ</span>
        </div>
        <div className='div-rectangle' />
        <span className='span-365-simple-co-the-giup-gi-cho-ban'>
          365 SIMPLE CÓ THỂ GIÚP GÌ CHO BẠN ?
        </span>
        <div className='div-rectangle-9'>
          <span className='span-cho-chung-minh-biet-cau-hoi-cua-ban'>
            Cho chúng mình biết câu hỏi của bạn...
          </span>
        </div>
        <div className='div-rectangle-a'>
          <span className='span-danh-muc'>Danh mục</span>
          <div className='div-rectangle-b'>
            <span className='span-chinh-sach-mua-hang'>Chính sách mua hàng</span>
          </div>
          <div className='div-rectangle-c'>
            <input className='input-chinh-sach-mua-hang_input' style={{
              fontSize: 17,
              padding: '0 12px',
              color: "#012755"
            }} value={'Chính sách đổi trả'} />
          </div>
          <div className='div-rectangle-d'>
            <input className='input-chinh-sach-mua-hang_input-e' style={{
              fontSize: 17,
              padding: '0 12px',
              color: "#012755"
            }} value={'Chính sách giao hàng'} />
          </div>
          <div className='div-rectangle-f'>
            <input className='policy-input' style={{
              fontSize: 17,
              padding: '0 12px',
              color: "#012755"
            }} value={'Khác...'} />
          </div>
        </div>
        <span className='contact-us'>
          Nếu còn bất kỳ câu hỏi nào, bạn hãy liên hệ trực tiếp với chúng mình
        </span>
        <div className='rectangle-10'>
          <span className='contact-directly'>Liên hệ trực tiếp</span>
        </div>
        <div className='rectangle-11' />
        <div className='rectangle-12'>
          <div className='simple-living'>
            <span className='text-10'>365 Simple </span>
            <span className='simple-living-message'>
              - Chọn đơn giản - Sống dễ dàng !
            </span>
          </div>
          <span className='customer-feedback'>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
            nữa.
          </span>
          <div className='rectangle-13'>
            <span className='feedback'>Đóng góp ý kiến</span>
          </div>
          <div className='flex-row'>
            <span className='hotline'>Hotline</span>
            <div className='phone-light'>
              <div className='vector-14' />
            </div>
          </div>
          <span className='phone-number'>1900-100023 - 027.918.2981</span>
          <span className='email'>Email</span>
          <div className='mail-outline'>
            <div className='vector-15' />
          </div>
          <span className='simple-email'>365simple@gmail.com</span>
          <div className='flex-row-cc'>
            <div className='whatsapp' />
            <div className='facebook' />
            <div className='youtube' />
            <div className='ig' />
          </div>
          <span className='contact-address'>Địa chỉ liên hệ</span>
          <div className='flex-row-fb'>
            <div className='baseline-place'>
              <div className='vector-16' />
            </div>
            <span className='address-1'>
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='flex-row-aa'>
            <div className='baseline-place-17'>
              <div className='vector-18' />
            </div>
            <span className='address-2'>
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='line' />
          <span className='club'>365 Club</span>
          <span className='register-member'>Đăng ký thành viên</span>
          <span className='exclusive-offers'>Ưu đãi & độc quyền</span>
          <span className='policies'>Chính sách</span>
          <span className='terms-conditions'>Điều khoản và điều kiện</span>
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
          <div className='line-19' />
          <div className='flex-row-bc'>
            <div className='image' />
            <span className='copyright'>Copyright © 365 Simple Viet Nam </span>
          </div>
          <span className='international-tourism-business-license'>
            Giấy phép kinh doanh lữ hành quốc tế số: 01-1761/2023/TCDL-GP LHQT
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
