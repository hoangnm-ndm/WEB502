import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu đăng ký qua API ở đây, sử dụng axios hoặc fetch.
    const { username, email, password, rePassword } = formData;
    const dataToSend = { username, email, password, rePassword };

    try {
      const response = await fetch("URL_API_CUA_BAN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Đăng ký thành công, thực hiện các xử lý tiếp theo ở đây.
        // Ví dụ: Điều hướng đến trang đăng nhập.
      } else {
        // Xử lý lỗi đăng ký ở đây.
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error("Lỗi kết nối đến API:", error);
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Tên người dùng"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="rePassword"
          placeholder="Nhập lại mật khẩu"
          value={formData.rePassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
