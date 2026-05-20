
Câu A1
    VD:
    <p style="color:red; font-size:20px;">
        Xin chào
    </p>
    -Ưu điểm:
    +Nhanh
    +Dễ test nhanh một phần tử
    +Nhược điểm:
    +Khó bảo trì
    +Code bị rối
    +Không tái sử dụng được
    -Khi nên dùng:
    +Test nhanh
    +Chỉnh tạm một phần tử nhỏ
2. Internal CSS
    VD:
    <head>
        <style>
            p{
                color: blue;
                font-size: 18px;
            }
        </style>
    </head>
    -Ưu điểm:
    +Dễ quản lý hơn inline
    +Không cần file riêng
    +Nhược điểm:
    +Chỉ dùng cho 1 trang
    +Không tái sử dụng nhiều trang
    -Khi nên dùng:
    +Website nhỏ
    +Bài tập đơn giản
    +Demo nhanh
3. External CSS
    VD:
    <link rel="stylesheet" href="style.css">
    p{
        color: green;
        font-size: 18px;
    }
    -Ưu điểm:
    +Dễ bảo trì
    +Tái sử dụng nhiều trang
    +Code sạch hơn
    -Nhược điểm:
    +Cần tạo thêm file CSS
    +Khi nên dùng:
    +Website lớn
    +Dự án thực tế
    +Nhiều trang web
Câu A2:
Bài A2
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ and 45.990.000đ
3. #app header                  → Chọn: header chứa ShopTLU, Home, Products, About
4. nav a:first-child            → Chọn: Home
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: 25.990.000đ
                                        Mô tả sản phẩm...
                                        45.990.000đ
                                        Mô tả sản phẩm...
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1             → Chọn: ShopTLU
Câu A3:
1.Trường hợp 1
    Công thức chiều rộng hiển thị:

                        total width=content+padding+border

    Padding trái + phải:

                        20+20=40px

    Border trái + phải:

                        5+5=10px

    Chiều rộng hiển thị:

                        400+40+10=450px
    → Chiều rộng hiển thị = 450px

    Không gian chiếm trên trang = width hiển thị + margin trái phải

    Margin:
            10+10=20px
            450+20=470px
    → Không gian chiếm trên trang = 470px
2.Trường hợp 2:
    Kích thước content thực tế:
                                400−padding−border

    Padding:
                                20+20=40

    Border:
                                5+5=10
                                400−40−10=350px
    → Kích thước content thực tế = 350px

    Không gian chiếm trên trang: 
                                400+10+10=420px
    → Không gian chiếm trên trang = 420px
3.Trường hợp 3:
    Thông thường dễ nghĩ:
                            25+40=65px
    Nhưng thực tế CSS xảy ra margin collapse

    Browser chỉ lấy margin lớn hơn:
                            max(25,40)=40px
    → Khoảng cách giữa box-a và box-b = 40px