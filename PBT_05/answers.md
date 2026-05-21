
Câu A1:

1. THẺ META VIEWPORT CHUẨN

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    +GIẢI THÍCH:
    name="viewport"
    => khai báo cho trình duyệt biết:
    thiết lập viewport cho thiết bị di động
    width=device-width
    => chiều rộng viewport
    bằng đúng chiều rộng màn hình thiết bị

    Ví dụ:
    - iPhone thật rộng 390px
    - viewport cũng = 390px
    initial-scale=1.0
    => mức zoom ban đầu = 100%
    Trang web hiển thị đúng kích thước thật
    không tự zoom in/out

2. NẾU THIẾU META VIEWPORT

    iPhone/Safari sẽ giả lập trang web
    giống màn hình desktop khoảng 980px

    Kết quả:
    - website bị thu nhỏ
    - chữ rất nhỏ
    - phải zoom tay
    - responsive hoạt động sai
    - media query mobile có thể không đúng

Ví dụ:
Layout desktop vẫn xuất hiện trên điện thoại.

3. MOBILE-FIRST vs DESKTOP-FIRST

    MOBILE-FIRST
    Viết CSS cho mobile trước
    sau đó dùng:
    @media (min-width: ...)
    để mở rộng cho tablet/desktop

    VÍ DỤ MOBILE-FIRST


    .card {
        width: 100%;
    }

    @media (min-width: 768px) {

        .card {
            width: 50%;
        }

    }


    +Ý NGHĨA:

    - Mobile:
    card = 100%
    - Từ 768px trở lên:
    card = 50%

    DESKTOP-FIRST

    Viết CSS cho desktop trước
    sau đó dùng:

    @media (max-width: ...)

    để thu nhỏ cho mobile

    VÍ DỤ DESKTOP-FIRST

    .card {
        width: 50%;
    }

    @media (max-width: 768px) {

        .card {
            width: 100%;
        }

    }

    Ý NGHĨA

    - Desktop:
    card = 50%

    - Nhỏ hơn 768px:
    card = 100%

4. TẠI SAO MOBILE-FIRST ĐƯỢC KHUYÊN DÙNG?

    +Lý do 1

    Hiện nay đa số người dùng dùng điện thoại

    => ưu tiên mobile trước

    +Lý do 2

    CSS gọn và dễ mở rộng hơn

    Mobile trước:
    - đơn giản trước
    - thêm tính năng sau

    +Lý do 3

    Tối ưu performance
    Thiết bị mobile yếu hơn desktop
    => nên tải layout nhẹ trước

    +Lý do 4

    Responsive dễ quản lý hơn

    Dùng:
    @media (min-width)

    thường dễ đọc và dễ maintain hơn
Câu A2:
xs:
- < 576px
- Điện thoại nhỏ
- Grid sản phẩm: 1 cột

sm:
- ≥ 576px
- Điện thoại lớn
- Grid sản phẩm: 2 cột

md:
- ≥ 768px
- Tablet
- Grid sản phẩm: 2–3 cột

lg:
- ≥ 992px
- Laptop/Desktop nhỏ
- Grid sản phẩm: 3–4 cột

xl:
- ≥ 1200px
- Desktop lớn
- Grid sản phẩm: 4 cột

xxl:
- ≥ 1400px
- Màn hình rất lớn
- Grid sản phẩm: 5–6 cột

Câu A3:

    375px (iPhone SE)
    → width: 100%

    600px
    → width: 540px

    800px
    → width: 720px

    1000px
    → width: 960px

    1400px
    → width: 1140px

Câu A4:
    1. Variables

    Dùng biến để lưu giá trị dùng nhiều lần.

    Ví dụ:

    $primary-color: blue;

    button {
        background: $primary-color;
    }


2. Nesting
    Cho phép viết CSS lồng nhau giống cấu trúc HTML.

    Ví dụ:

    .navbar {

        ul {
            display: flex;
        }

        a {
            color: white;
        }

    }


3. Mixins
    Tạo đoạn CSS tái sử dụng.

    @mixin:
    khai báo
    @include:
    gọi lại

    Ví dụ:

    @mixin center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box {
        @include center;
    }


4. @extend / Inheritance

    Cho class kế thừa CSS của class khác.

    Ví dụ:

    .button {
        padding: 10px;
        border-radius: 5px;
    }

    .primary-btn {
        @extend .button;
        background: blue;
    }


    Trình duyệt không đọc được file .scss
    vì SCSS không phải CSS chuẩn.

    SCSS cần được compile/transpile
    thành file .css trước.

    Ví dụ:

    style.scss
    ↓
    compile
    ↓
    style.css

Có thể dùng:
- Sass CLI
- VS Code Live Sass Compiler
- Webpack/Vite