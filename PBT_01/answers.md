
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