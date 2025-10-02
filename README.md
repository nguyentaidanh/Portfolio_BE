# 📌 Backend - Portfolio Contact API

Dự án backend này được xây dựng bằng **Node.js + Express** để xử lý **form contact** từ portfolio (React frontend).  
Chức năng chính: nhận thông tin từ người dùng (tên, email, message) và gửi email qua **SMTP (ví dụ Gmail)** bằng Nodemailer.  
Ngoài ra API có tích hợp **chống spam (rate limiting)** để tránh abuse.

---

## 🚀 Công nghệ sử dụng

- **Node.js** (Express)
- **Nodemailer** (SMTP email)
- **dotenv** (biến môi trường)
- **express-rate-limit** (chống spam)
- **cors** (kết nối frontend)

---

## 📂 Cấu trúc thư mục

---

## 📂 Cấu trúc thư mục

backend/
├── src/
│ ├── app.js # khởi chạy server
│ ├── config/
│ │ └── mailer.js # cấu hình SMTP cho Nodemailer
│ ├── controllers/
│ │ └── emailController.js # xử lý logic gửi email
│ └── routes/
│ └── emailRoutes.js # định nghĩa API route
├── .env # biến môi trường
├── package.json

---

## ⚙️ Cài đặt

### 1. Cài dependencies

```bash
cd backend
npm install
```

### 2. Tạo file .env

Dựa vào file example.env để tạo .env

Lưu ý:

Nếu dùng Gmail → cần bật 2FA và tạo App Password (không dùng mật khẩu Gmail thông thường).

TO_EMAIL = email đích bạn muốn nhận thư từ portfolio.

### ▶️ Chạy server

npm start

Server sẽ chạy tại:
http://localhost:5000

### 📡 API Endpoints

POST /api/send-email

- **Request Body (JSON)**

```bash
{
  "user_name": "Danh",
  "user_email": "test@gmail.com",
  "message": "Xin chào, đây là email test từ portfolio."
}
```

- **Response (Success)**

```bash
{
  "success": true,
  "message": "Email sent successfully!"
}
```

- **Response (Error)**

```bash
{
  "success": false,
  "message": "Failed to send email",
  "error": "Error details"
}
```

### 🛡 Chống Spam

API được bảo vệ bằng express-rate-limit:

Tối đa 5 email / 15 phút / 1 IP

Nếu vượt quá → trả về:

```bash
{
  "message": "Too many requests, please try again later."
}
```

- **🛠 Test API**

1. Postman

POST → http://localhost:5000/api/send-email

Body → raw → JSON:

```bash
{
  "user_name": "Danh",
  "user_email": "sender@gmail.com",
  "message": "Xin chào!"
}
```

2. cURL

```bash
   curl -X POST http://localhost:5000/api/send-email \
    -H "Content-Type: application/json" \
    -d '{"user_name":"Danh","user_email":"sender@gmail.com","message":"Xin chào!"}'
```

### 📦 Deploy

Có thể deploy backend này lên:

Render

Railway

Heroku

Hoặc VPS riêng (Ubuntu + PM2 + Nginx)

### 📌 Ghi chú bảo mật

Không commit file .env lên GitHub.

Sử dụng App Password thay vì mật khẩu Gmail thật.

Có thể tích hợp thêm Google reCAPTCHA ở frontend để chống bot tốt hơn.

✅ Backend đã sẵn sàng để kết nối với frontend React Portfolio của bạn.
