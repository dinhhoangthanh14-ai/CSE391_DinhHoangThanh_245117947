
Câu A1:
    1.type="text" → Ô nhập văn bản một dòng thông thường → Không có validation tự động đặc biệt → Dùng để nhập tên sản phẩm, họ tên khách hàng, địa chỉ giao hàng.

    2.type="email" → Ô nhập text, trình duyệt tự kiểm tra có đúng định dạng email (phải có @) → Validation email tự động → Dùng cho đăng ký tài khoản, nhập email nhận hóa đơn.

    2.type="password" → Ô nhập mật khẩu, ký tự hiển thị dạng dấu chấm/* → Có thể kết hợp required, minlength → Dùng cho đăng nhập tài khoản khách hàng.

    3.type="number" → Ô nhập số, có nút tăng/giảm → Chỉ cho nhập số → Dùng để nhập số lượng sản phẩm cần mua.

    4.type="tel" → Ô nhập số điện thoại → Không kiểm tra chặt nhưng hỗ trợ bàn phím số trên điện thoại → Dùng để nhập số điện thoại người nhận hàng.


    5.type="date" → Hiển thị lịch chọn ngày → Kiểm tra định dạng ngày hợp lệ → Dùng để chọn ngày giao hàng mong muốn.

    6.type="file" → Nút chọn file từ máy tính → Kiểm tra loại file nếu dùng accept → Dùng để upload ảnh đánh giá sản phẩm hoặc ảnh khiếu nại đơn hàng.

    7.type="checkbox" → Ô vuông tích chọn nhiều lựa chọn → Không có validation riêng (có thể dùng required) → Dùng để chọn đồng ý điều khoản, chọn nhiều sở thích sản phẩm.

    8.type="radio" → Các nút tròn, chỉ chọn một trong nhiều lựa chọn → Validation khi dùng required → Dùng để chọn phương thức thanh toán (COD, Visa, Momo...).

    9.type="search" → Ô tìm kiếm có giao diện giống thanh search → Không validation đặc biệt → Dùng cho thanh tìm kiếm sản phẩm trên website thương mại điện tử.
Câu A3:
1. <label for="email"> quan trọng cho người dùng screen reader vì:
    Thẻ <label> giúp liên kết mô tả với ô nhập liệu (input)
    Khi dùng:
    <label for="email">Email</label>
    <input type="email" id="email">
    screen reader sẽ đọc: Email, edit text
    để người khiếm thị biết ô đó dùng để nhập gì.
    Nếu không có <label>, screen reader có thể chỉ đọc:edit text
    người dùng sẽ không biết cần nhập email, mật khẩu hay thông tin nào khác
    Ngoài accessibility, <label> còn giúp UX tốt hơn vì khi click vào chữ “Email” thì con trỏ sẽ tự focus vào ô input.
2. Khi nào dùng <fieldset> + <legend>:
    Dùng khi cần nhóm các input có liên quan với nhau trong form.
    +<fieldset>: nhóm các trường dữ liệu
    +<legend>: tiêu đề của nhóm đó
3. aria-label dùng khi nào:
    +aria-label dùng khi phần tử không có text hiển thị nhưng vẫn cần mô tả cho screen reader
4. Không nên dùng aria-label khi đã có <label> vì:
    -Nếu đã có <label> thì không cần aria-label nữa vì:
    +<label> là semantic HTML chuẩn
    +dễ bảo trì hơn
    +được trình duyệt và screen reader hỗ trợ tự nhiên
Câu A4:
1. loading="lazy" cải thiện:
    +Tăng tốc độ tải trang
    +Tiết kiệm băng thông
    +Cải thiện hiệu năng và SEO
    -KHÔNG nên dùng loading="lazy"khi:
    +ảnh logo
    +banner đầu trang
    +ảnh hero quan trọng
2. nên cung cấp nhiều <source> trong <video> vì:
    Mỗi trình duyệt hỗ trợ codec/video format khác nhau.
    Cung cấp nhiều <source> giúp:
    +tăng khả năng tương thích
    +video chạy được trên nhiều trình duyệt và thiết bị
    Trình duyệt sẽ tự chọn format mà nó hỗ trợ.
    -3format video web phổ biến
    +MP4
    +WebM
    +OGG/OGV
3. Thuộc tính alt trên <img> dùng để:
lt cung cấp mô tả văn bản cho ảnh.
Nó được dùng khi:
+ảnh lỗi không tải được
+người dùng sử dụng screen reader
+hỗ trợ SEO

+Ảnh sản phẩm iPhone 16
<img src="iphone16.jpg"
     alt="iPhone 16 Pro Max màu titan đen mặt trước và mặt sau">

+Ảnh trang trí (decorative)
<img src="decor-line.png" alt="">

+Ảnh biểu đồ doanh thu Q1/2026
<img src="chart-q1.png"
     alt="Biểu đồ doanh thu quý 1 năm 2026 tăng từ tháng 1 đến tháng 3">
     
