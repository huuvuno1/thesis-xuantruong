import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function IntroResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

      <div className='main-container'>
        <div className='flex-row-ffcc'>
          <div className='rectangle'>
            <div className='back-to-school'>
              <span className='back-to-school-1'>
                Ra mắt 365 Simple Back to school!
              </span>
              <span className='buy-now'>Mua ngay</span>
              <span className='back-to-school-2'> {'->'}</span>
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
              <span className='number-5'>5</span>
            </div>
          </div>
          <span className='home'>Trang chủ</span>
          <span className='about'>/ Giới thiệu</span>
        </div>
        <div className='rectangle-9'>
          <div className='previous' />
          <div className='ellipse-a' />
          <div className='ooui-next-ltr'>
            <div className='vector-b' />
          </div>
        </div>
        <span className='simple-lai-ai'>365 Simple là ai?</span>
        <div className='rectangle-c' />
        <span className='neu-ban-thuong'>
          Nếu bạn thường xuyên khó khăn trong việc chọn lựa hay phối đồ, không
          biết mặc gì khi đi làm, đi chơi, hay dự tiệc...
          <br /> Đến với 365 Simple, chúng tôi sẽ giúp bạn phần còn lại
        </span>
        <span className='startup-trong-linh-vuc'>
          1 Startup trong lĩnh vực thời trang thành lập vào năm 2024. 365 Simple
          mang thông điệp thời trang đơn giản đến mức tối giản có thể mặc hàng
          ngày trong nhiều dịp khác nhau
          <br />
        </span>
        <span className='voi-muc-tieu-tao'>
          Với mục tiêu tạo ra không gian mua sắm trực tuyến tiện lợi và tiếp cận
          đa khách hàng, mang đậm dấu ấn và phản chiếu phong cách thời trang của
          {`"365 Simple"`}
        </span>
        <span className='simple-chon-don-gian'>
          365 Simple - Chọn đơn giản, Sống dễ dàng
        </span>
        <div className='rectangle-d'>
          <span className='phuong-cham-hoat-dong'>Phương châm hoạt động</span>
          <span className='tinh-te'>Tinh Tế</span>
          <span className='tu-te'>Tử Tế</span>
          <span className='tinh-te-trong-cong-viec'>
            Tinh tế trong công việc,
            <br />
            Tinh tế trong các vấn đề của khách hàng
          </span>
          <span className='tu-te-voi-khach-hang'>
            Tử tế với khách hàng,
            <br />
            với đồng nghiệp, với lãnh đạo
          </span>
          <span className='trach-nhiem'>Trách nhiệm</span>
          <span className='sang-tao'>Sáng tạo</span>
          <span className='trach-nhiem-voi-khach-hang'>
            Trách nhiệm với khách hàng,
            <br />
            trách nhiệm trong mọi lời nói của chúng tôi
          </span>
          <span className='luon-doi-moi'>
            Luôn đổi mới, sáng tạo
            <br />
            trong các sản phẩm của 365
          </span>
          <span className='het-minh'>Hết mình</span>
          <span className='san-sang'>Sẵn sàng</span>
          <span className='ready-for-all-tasks'>
            Sẵn sàng với mọi công việc,
            <br />
            đáp ưng mọi yêu cầu của khách hàng
          </span>
          <span className='dedicated-to-community'>
            Làm mọi việc luôn hết mình vì cộng đồng,
            <br />
            vì khách hàng và vì tương lai của 365
          </span>
        </div>
        <span className='customer-feedback'>Khách hàng nói gì về chúng tôi</span>
        <div className='flex-row-ace'>
          <div className='rectangle-e'>
            <span className='satisfied-customer-review'>
              Mình rất hài lòng khi trải nghiệm sản phẩm tại đây, trước đây mỗi
              ngày đều rất mất thời gian để chọn đồ, phối đồ. <br />
              Khi biết tới 365 Simple mình được tư vấn rất nhiệt tình, sản phẩm
              mua về cũng chất lượng. Nói chung là đáng để thử
            </span>
            <div className='review-date' />
            <div className='avatar' />
            <span className='customer-location'>Lê Đức - Hà Nội</span>
            <div className='star-rating' />
          </div>
          <div className='previous-arrow' />
          <div className='ellipse-f' />
          <div className='next-arrow'>
            <div className='vector-10' />
          </div>
        </div>
        <div className='rectangle-11'>
          <div className='simple-slogan'>
            <span className='simple-brand'>365 Simple </span>
            <span className='brand-slogan'>- Chọn đơn giản - Sống dễ dàng !</span>
          </div>
          <span className='customer-feedback-message'>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn
            nữa.
          </span>
          <div className='rectangle-12'>
            <span className='submit-feedback'>Đóng góp ý kiến</span>
          </div>
          <div className='flex-row-de'>
            <span className='hotline'>Hotline</span>
            <div className='phone-light'>
              <div className='vector-13' />
            </div>
          </div>
          <span className='phone-number'>1900-100023 - 027.918.2981</span>
          <span className='email'>Email</span>
          <div className='mail-outline'>
            <div className='vector-14' />
          </div>
          <span className='email-address'>365simple@gmail.com</span>
          <div className='flex-row-eac'>
            <div className='whatsapp' />
            <div className='facebook' />
            <div className='youtube' />
            <div className='ig' />
          </div>
          <span className='contact-address'>Địa chỉ liên hệ</span>
          <div className='flex-row-f'>
            <div className='place'>
              <div className='vector-15' />
            </div>
            <span className='address-1'>
              Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='flex-row-c'>
            <div className='place-16'>
              <div className='vector-17' />
            </div>
            <span className='address-2'>
              Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình, Thành
              phố Hà Nội
            </span>
          </div>
          <div className='line' />
          <span className='club'>365 Club</span>
          <span className='dang-ky-thanh-vien'>Đăng ký thành viên</span>
          <span className='uu-dai-doc-quyen'>Ưu đãi & độc quyền</span>
          <span className='chinh-sach'>Chính sách</span>
          <span className='dieu-khoan-dieu-kien'>Điều khoản và điều kiện</span>
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
          <span className='group-mac-don-gian'>Group mặc đơn giản sống chất</span>
          <div className='line-18' />
          <div className='flex-row-e'>
            <div className='image' />
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
