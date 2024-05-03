import { useState } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.css';

export default function IntroResponsive() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar open={toggle} onClose={() => setToggle(false)} />

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
        <div className="frame">
          <div className="link">
            <span className="introduction">/ Giới thiệu</span>
            <span className="home">Trang chủ</span>
          </div>
          <div className="image">
            <div className="rectangle-9" />
            <div className="previous" />
            <div className="previous-a">
              <div className="ooui-next-ltr">
                <div className="vector-b" />
              </div>
              <div className="ellipse-c" />
            </div>
          </div>
          <span className="text-8">365 Simple là ai?</span>
          <div className="rectangle-d" />
          <span className="text-9">
            Nếu bạn thường xuyên khó khăn trong việc chọn lựa hay phối đồ, không
            biết mặc gì khi đi làm, đi chơi, hay dự tiệc...
            <br /> Đến với 365 Simple, chúng tôi sẽ giúp bạn phần còn lại
          </span>
          <span className="text-a">
            1 Startup trong lĩnh vực thời trang thành lập vào năm 2024. 365
            Simple mang thông điệp thời trang đơn giản đến mức tối giản có thể
            mặc hàng ngày trong nhiều dịp khác nhau
            <br />
          </span>
          <span className="text-b">
            {
              'Với mục tiêu tạo ra không gian mua sắm trực tuyến tiện lợi và tiếp cận đa khách hàng, mang đậm dấu ấn và phản chiếu phong cách thời trang của "365 Simple"'
            }
          </span>
          <span className="text-c">
            365 Simple - Chọn đơn giản, Sống dễ dàng
          </span>
          <div className="section-5">
            <div className="section-6">
              <span className="text-d">Phương châm hoạt động</span>
            </div>
            <div className="rectangle-e" />
            <div className="section-7">
              <div className="section-8">
                <span className="text-e">Tử Tế</span>
              </div>
              <span className="text-f">
                Tử tế với khách hàng,
                <br />
                với đồng nghiệp, với lãnh đạo
              </span>
            </div>
            <div className="section-9">
              <span className="text-10">Tinh Tế</span>
              <span className="text-11">
                Tinh tế trong công việc,
                <br />
                Tinh tế trong các vấn đề của khách hàng
              </span>
            </div>
            <div className="wrapper-5">
              <span className="text-12">Sáng tạo</span>
              <span className="text-13">
                Luôn đổi mới, sáng tạo
                <br />
                trong các sản phẩm của 365
              </span>
            </div>
            <div className="box-4">
              <span className="text-14">Trách nhiệm</span>
              <span className="text-15">
                Trách nhiệm với khách hàng,
                <br />
                trách nhiệm trong mọi lời nói của chúng tôi
              </span>
            </div>
            <div className="section-a">
              <span className="text-16">Hết mình</span>
              <span className="text-17">
                Làm mọi việc luôn hết mình vì cộng đồng,
                <br />
                vì khách hàng và vì tương lai của 365
              </span>
            </div>
            <div className="group-4">
              <span className="text-18">Sẵn sàng</span>
              <span className="text-19">
                Sẵn sàng với mọi công việc,
                <br />
                đáp ưng mọi yêu cầu của khách hàng
              </span>
            </div>
          </div>
          <span className="text-1a">Khách hàng nói gì về chúng tôi</span>
          <div className="group-5">
            <div className="group-6">
              <span className="text-1b">18 ngày trước</span>
              <div className="group-7" />
              <div className="pic-d" />
              <div className="pic-e" />
            </div>
            <span className="text-1c">Lê Đức - Hà Nội</span>
            <span className="text-1d">
              Mình rất hài lòng khi trải nghiệm sản phẩm tại đây, trước đây mỗi
              ngày đều rất mất thời gian để chọn đồ, phối đồ. <br />
              Khi biết tới 365 Simple mình được tư vấn rất nhiệt tình, sản phẩm
              mua về cũng chất lượng. Nói chung là đáng để thử
            </span>
            <div className="section-b">
              <div className="wrapper-6">
                <div className="section-c">
                  <div className="pic-f" />
                </div>
                <div className="pic-10" />
              </div>
              <div className="pic-11" />
            </div>
          </div>
          <div className="section-d">
            <div className="wrapper-7">
              <div className="group-8">
                <div className="box-5">
                  <span className="text-1e">365 Simple </span>
                  <span className="text-1f">
                    - Chọn đơn giản - Sống dễ dàng !
                  </span>
                </div>
                <span className="text-20">
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                  đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ
                  và sản phẩm tốt hơn nữa.
                </span>
              </div>
              <div className="group-9">
                <span className="text-21">Đóng góp ý kiến</span>
                <div className="box-6" />
              </div>
              <div className="wrapper-8">
                <div className="box-7">
                  <span className="text-22">Hotline</span>
                  <span className="text-23">1900-100023 - 027.918.2981</span>
                </div>
                <div className="group-a">
                  <div className="img-4" />
                </div>
              </div>
              <div className="section-e">
                <div className="flex-column-ed">
                  <span className="email">Email</span>
                  <span className="simple-gmail-com">365simple@gmail.com</span>
                </div>
                <div className="material-symbols-mail-outline">
                  <div className="vector-f" />
                </div>
              </div>
              <div className="lien-he">
                <div className="ig" />
                <div className="youtube" />
                <div className="whatsapp" />
                <div className="facebook" />
              </div>
              <div className="rectangle-10" />
              <div className="footer">
                <div className="ndung-footer">
                  <span className="dia-chi-lien-he">Địa chỉ liên hệ</span>
                  <div className="line" />
                  <div className="club">
                    <span className="text-27">365 Club</span>
                    <span className="dang-ky-thanh-vien">
                      Đăng ký thành viên
                    </span>
                    <span className="uu-dai-doc-quyen">Ưu đãi & độc quyền</span>
                  </div>
                  <div className="chinh-sach">
                    <span className="dieu-khoan-va-dieu-kien">Chính sách</span>
                    <span className="chinh-sach-khuyen-mai">
                      Điều khoản và điều kiện
                    </span>
                    <span className="chinh-sach-bao-mat">
                      Chính sách khuyến mãi
                    </span>
                    <span className="chinh-sach-giao-hang">
                      Chính sách bảo mật
                    </span>
                    <span className="cham-soc-khach-hang">
                      Chính sách giao hàng
                    </span>
                  </div>
                  <div className="cham-soc-khach-hang-11">
                    <span className="trai-nghiem-mua-sam-100-hai-long">
                      Chăm sóc khách hàng
                    </span>
                    <span className="hoi-dap-faqs">
                      Trải nghiệm mua sắm 100% hài lòng
                    </span>
                    <span className="kien-thuc-mac-dep">Hỏi đáp - FAQs</span>
                  </div>
                  <div className="kien-thuc-mac-dep-12">
                    <span className="huong-dan-chon-size">
                      Kiến thức mặc đẹp
                    </span>
                    <span className="text-33">Hướng dẫn chọn size</span>
                    <span className="blog">Blog</span>
                    <span className="group-mac-don-gian-sung-chat">
                      Group mặc đơn giản sống chất
                    </span>
                  </div>
                </div>
                <div className="group">
                  <div className="line-13" />
                  <span className="giay-phep-kinh-doanh">
                    Giấy phép kinh doanh lữ hành quốc tế số:
                    01-1761/2023/TCDL-GP LHQT
                  </span>
                  <div className="image-14" />
                  <span className="copyright">
                    Copyright © 365 Simple Viet Nam
                  </span>
                </div>
              </div>
              <div className="co-so">
                <span className="co-so-15">
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
                <div className="ic-baseline-place">
                  <div className="vector-16" />
                </div>
              </div>
              <div className="co-so-17">
                <div className="ic-baseline-place-18">
                  <div className="vector-19" />
                </div>
                <span className="co-so-1a">
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-1b">
          <div className="rectangle-1c">
            <div className="home-1d" />
          </div>
          <div className="rectangle-1e">
            <div className="archive" />
          </div>
          <div className="rectangle-1f">
            <div className="clock" />
          </div>
          <div className="rectangle-20">
            <div className="heart">
              <div className="vector-21" />
            </div>
          </div>
          <div className="rectangle-22">
            <div className="phone">
              <div className="vector-23" />
            </div>
          </div>
        </div>
        <div className="home-indicator-on-light">
          <div className="rectangle-24" />
        </div>
      </div>

      <Footer />
    </>
  );
}
