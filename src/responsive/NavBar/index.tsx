import { Drawer } from 'antd';
import './index.css';

export default function NavBar({ open = false, onClose = () => { } }) {
  return (
    <Drawer open={open} closeIcon={false} placement='left' width={303} onClose={onClose}>
      <div className="main-containerr">
        <div className="rectangle-boxx">
          <a href="/products" className="rectangle-box-11">
            <div className="line-dividerr" />
            <span className="productt">Sản phẩm</span>
          </a>
          <a href="/news" className="rectanglee">
            <span className="tin-tucc">Tin Tức</span>
          </a>
          <a href="/intro" className="rectanglee">
            <span className="tin-tucc">Giới thiệu</span>
          </a>
          <a href="/contacts" className="rectangle-3333">
            <span className="lien-hee">Liên hệ</span>
          </a>
          <div className="linee" />
          <div className="groupp" />
          <a href="/auth/login" className="dang-nhapp">
            Đăng nhập
          </a>
        </div>
      </div>
    </Drawer>

  );
}
