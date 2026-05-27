
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

Câu B3
    Lỗi 1: Dòng 1 — Khai báo DOCTYPE sai cú pháp (`<!DOCTYPE>`) — Sửa thành `<!DOCTYPE html>`.

    Lỗi 2: Dòng 5 — Thẻ `<title>` chưa đóng — Sửa thành `<title>Trang web</title>`.

    Lỗi 3: Dòng 6 — Charset viết sai (`utf8`) — Sửa thành `UTF-8`.

    Lỗi 4: Dòng 10 — Thẻ `<h1>` đóng sai (`<h1>` thay vì `</h1>`) — Thay bằng `</h1>`.

    Lỗi 5: Dòng 14 — Thẻ `<a>` đầu tiên chưa đóng — Sửa thành `</a>`.

    Lỗi 6: Dòng 21 — Thuộc tính src của ảnh không có dấu ngoặc kép — Sửa thành `src="iphone.jpg"`.

    Lỗi 7: Dòng 21 — Thẻ `<img>` thiếu thuộc tính `alt` — Thêm `alt="iPhone 16 Pro"`.

    Lỗi 8: Dòng 23 — Thẻ `<b>` và `<p>` lồng sai thứ tự — Đổi thành `<p>Giá: <b>25.990.000đ</b></p>`.

    Lỗi 9: Dòng 18 và 27 — Dùng `<h3>` không hợp semantic vì chưa có `<h2>` trước đó — Đổi thành `<h2>`.

    Lỗi 10: Dòng 41 — Sử dụng thêm một thẻ `<main>` thứ hai là sai semantic HTML — Đổi thành `<aside>`.

    Lỗi 11: Dòng 46 — Thẻ `<p>` trong footer chưa đóng — Thêm `</p>`.

    Lỗi 12: Bảng thiếu semantic structure — Thêm `<thead>` và `<tbody>`.

    Lỗi 13: Dòng 31 và 32 — Dùng `<td>` cho tiêu đề bảng chưa đúng semantic — Đổi thành `<th>`.

    Lỗi 14: Thẻ `<html>` thiếu thuộc tính ngôn ngữ — Thêm `lang="vi"`.

    Lỗi 15: Thiếu thẻ meta viewport để responsive — Thêm:
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

 BÀI B4 — PHÂN TÍCH TRANG WEB SHOPEE.VN

    ## Website được chọn
    https://shopee.vn

1. Phân tích semantic HTML5

     Screenshot
    Xem file:
    - screenshots/elements-semantic.png

     3 thẻ semantic HTML5 được sử dụng

     Thẻ 1: <header>
    - Vị trí: Phần đầu trang web Shopee
    - Chức năng:
    Chứa logo, thanh tìm kiếm, menu điều hướng.

     Thẻ 2: <nav>
    - Vị trí: Thanh menu điều hướng phía trên.
    - Chức năng:
    Điều hướng đến các danh mục sản phẩm.

     Thẻ 3: <main>
    - Vị trí: Khu vực nội dung chính của trang.
    - Chức năng:
    Hiển thị banner, sản phẩm và nội dung chính.

    ---

2. Các thẻ dùng chưa đúng semantic

     Lỗi semantic 1
    - Shopee sử dụng quá nhiều thẻ <div> thay cho:
    - <section>
    - <article>
    - <aside>

    => Làm giảm tính semantic của HTML.

     Lỗi semantic 2
    - Một số nút chức năng được tạo bằng:
    <div> hoặc <span>
    thay vì dùng:
    <button>

    => Không tối ưu accessibility.

    ---

3. Phân tích table

     Screenshot
    Xem file:
    - screenshots/table.png

     Nội dung table
    Table hiển thị:
    - Danh sách sản phẩm
    hoặc
    - Thông tin đơn hàng / giá / số lượng.

     Có sử dụng thead và tbody không?
    - Có sử dụng:
    - <thead>
    - <tbody>

    => Giúp phân chia rõ phần tiêu đề và dữ liệu bảng.

    ---

4. Phân tích form tìm kiếm

     Screenshot
    Xem file:
    - screenshots/form-search.png

     Form đó có action và method gì?

     action
    Ví dụ:
    ```html
    action="/search"
Câu C2
    Semantic HTML không chỉ là “học thêm vài thẻ mới”, mà còn giúp website hoạt động tốt hơn về mặt kỹ thuật. Nếu dùng <div> cho mọi thứ thì trình duyệt, công cụ tìm kiếm và các thiết bị hỗ trợ người khuyết tật sẽ khó hiểu cấu trúc thực sự của trang web. 

    Lý do đầu tiên là SEO. Các công cụ tìm kiếm như Google ưu tiên những trang có cấu trúc rõ ràng. Khi sử dụng các thẻ như <header>, <nav>, <main>, <article> hay <footer>, bot tìm kiếm sẽ dễ xác định đâu là nội dung chính, đâu là menu điều hướng hoặc bài viết. Điều này giúp website được index chính xác hơn và cải thiện thứ hạng tìm kiếm. Nếu tất cả đều là <div>, bot phải đoán cấu trúc thông qua class hoặc CSS, kém hiệu quả hơn.

    Lý do thứ hai là accessibility. Người dùng sử dụng screen reader sẽ dựa vào semantic HTML để điều hướng trang. Ví dụ, thẻ <nav> giúp họ chuyển nhanh đến menu, còn <main> giúp bỏ qua phần header để đọc nội dung chính. Nếu chỉ dùng <div>, trải nghiệm của người khiếm thị sẽ khó khăn hơn nhiều.

    Ví dụ thực tế: một trang bán hàng dùng <article> cho mỗi sản phẩm sẽ giúp cả SEO lẫn screen reader hiểu rằng mỗi block là một nội dung độc lập. Điều này tốt hơn việc dùng hàng loạt <div class="product">.

    Tuy nhiên, <div> vẫn rất cần thiết trong các trường hợp chỉ phục vụ layout hoặc styling, ví dụ tạo grid sản phẩm, flexbox container hoặc wrapper cho animation. Vì vậy, semantic HTML không thay thế hoàn toàn <div>, mà nên kết hợp cả hai để website vừa đúng cấu trúc vừa dễ phát triển.