
Câu A1: 
1.
    Các bước (ngắn gọn, đúng thứ tự)
    DNS lookup → đổi shopee.vn → IP
    TCP connection → kết nối server
    TLS handshake → mã hóa HTTPS
    Gửi HTTP request (GET)
    Server trả về response (HTML)
    Tải thêm CSS, JS, ảnh
    Render trang (hiển thị)
2.
    Tab Network cho thấy gì
    Danh sách request (HTML, CSS, JS, ảnh…)
    Status Code (200, 404…)
    Thời gian tải (Time, Finish)
    Kích thước (Size)
    Loại tài nguyên (Type)

Câu A2:

    1. Dùng <div> thay cho thẻ semantic: <div class="header">...</div>
    -> Sửa thành: <header>...</header>

    2. Menu không dùng <nav>
        <div class="menu">
            <div><a href="/">Trang chủ</a></div>
        </div>
    -> Sửa thành: 
        <nav>
            <a href="/">Trang chủ</a>
        </nav>

    3. <div class="title">iPhone 16 Pro</div>
    -> Sửa thành: <h2>iPhone 16 Pro</h2>

    4.<img src="iphone.jpg">
    ->Sửa thành: img src="iphone.jpg" alt="iPhone 16 Pro">

    5. Sản phẩm không có cấu trúc semantic
    ->Sửa thành:<div class="product">...</div>
    ->Sửa thành:<article class="product">...</article>

    6. Footer không dùng thẻ semantic
    ->Sửa thành:<div class="footer">© 2026 ShopTLU</div>
    ->Sửa thành:<footer>© 2026 ShopTLU</footer>
Câu A3:
    1. Hộp 1
      → Là block nên hiển thị 1 dòng riêng
    2.Text A và Text B
      → Cả hai là inline nên nằm cùng dòng:
    3.Hộp 2
      → Lại là block nên xuống dòng riêng
    4.Text C và Text D
      → Đều là inline nên hiển thị cùng dòng
    5.Hộp 3
      → Là block nên hiển thị dòng riêng
Câu A4:
    1. Sự khác nhau giữa thead, tbody, tfoot:
    + thead
    -Chứa hàng tiêu đề của bảng
    -Thường dùng  (table header) bên trong
    -Giúp mô tả ý nghĩa các cột

    + <tbody> (Table Body – phần thân bảng)
    -Chứa dữ liệu chính của bảng
    -Gồm nhiều hàng <tr> và ô <td>
    -Đây là phần hiển thị nội dung quan trọng nhất

    + <tfoot> (Table Foot – phần cuối bảng)
    -Chứa thông tin tổng kết / ghi chú

    2.Không nên dùng table để tạo layout web vì:
    +Không đúng ngữ nghĩa (semantic)
    +Khó bảo trì và chỉnh sửa
    +Không responsive (khó hiển thị trên mobile)
    +Hiệu năng kém
    