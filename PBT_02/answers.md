
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
Câu A5:
    1. dùng Cách 1 khi:
    +ảnh chỉ có chức năng minh họa đơn giản
    +không cần chú thích riêng
    +ảnh không phải nội dung độc lập quan trọng
    VD:
    <img src="logo.png" alt="Logo ShopTLU">
    1. dùng Cách 2 khi:
    +ảnh là nội dung quan trọng
    +cần chú thích hoặc mô tả đi kèm
    +muốn semantic rõ ràng hơn
    VD:
    <figure>
        <img src="iphone16.jpg"
            alt="iPhone 16 Pro Max 256GB Titan">
        <figcaption>
            iPhone 16 Pro Max — 25.990.000đ
        </figcaption>
    </figure>
    Câu C1:
1. Lỗi 1: Dòng 2 — Input "Tên" không có <label for="">, vi phạm accessibility
    +Sửa:
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>

2. Lỗi 2: Dòng 2 — Input "Tên" thiếu thuộc tính name
    Nếu không có name, dữ liệu sẽ không được gửi khi submit form.
    +Sửa:
    <input type="text" id="name" name="name">

3. Lỗi 3: Dòng 4 — Input email không có <label>
    Placeholder không thay thế cho label vì screen reader hoạt động kém với placeholder.
    +Sửa:
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Email của bạn" required>

4. Lỗi 4: Dòng 6 — Password không có <label>
    +Sửa:
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required>

5. Lỗi 5: Dòng 7 — Ô nhập lại mật khẩu không có label và không phân biệt rõ với password chính
    +Sửa:
    <label for="confirm-password">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm-password" name="confirm_password" required>

6. Lỗi 6: Dòng 9 — Input số điện thoại dùng type="text" chưa phù hợp
    Nên dùng:
    type="tel"
    để hỗ trợ validation và mobile keyboard.
    +Sửa:
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" value="0901234567">

7. Lỗi 7: Dòng 11 — <select> không có label
    Sửa:
    <label for="city">Thành phố:</label>
    <select id="city" name="city">
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>

8. Lỗi 8: Dòng 16 — Checkbox điều khoản bị thiếu input checkbox
    Hiện tại chỉ có text trong <label> nhưng không có ô tick.
    +Sửa:
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">
        Tôi đồng ý điều khoản
    </label>
    Form hoàn chỉnh sau khi sửa
    <form>

        <label for="name">Tên:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email"
            id="email"
            name="email"
            placeholder="Email của bạn"
            required>

        <label for="password">Mật khẩu:</label>
        <input type="password"
            id="password"
            name="password"
            required>

        <label for="confirm-password">Nhập lại mật khẩu:</label>
        <input type="password"
            id="confirm-password"
            name="confirm_password"
            required>

        <label for="phone">Phone:</label>
        <input type="tel"
            id="phone"
            name="phone"
            value="0901234567">

        <label for="city">Thành phố:</label>
        <select id="city" name="city">
            <option>Hà Nội</option>
            <option>TP.HCM</option>
        </select>

        <input type="checkbox"
            id="terms"
            name="terms"
            required>

        <label for="terms">
            Tôi đồng ý điều khoản
        </label>

        <input type="submit" value="Gửi">

    </form>
