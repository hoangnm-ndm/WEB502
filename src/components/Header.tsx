import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Đến trang đăng nhập</Link>
          </li>
          <li>
            <Link to="/register">Đến trang đăng ký</Link>
          </li>
          {/* Thêm các liên kết khác vào đây nếu cần */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
