
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