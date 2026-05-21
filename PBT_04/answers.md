

Câu A1:
1. position: static
    +Đây là giá trị mặc định của mọi phần tử HTML.
    +Phần tử vẫn nằm trong normal flow của trang.
    +Không dùng được top, left, right, bottom.
    +Khi cuộn trang → nó cuộn bình thường theo trang.
    +Use case: dùng cho các phần tử thông thường như p, div, section không cần định vị đặc biệt.

2. position: relative
    +Phần tử vẫn chiếm chỗ trong normal flow.
    +Nếu dùng top, left, right, bottom thì nó sẽ di chuyển so với vị trí ban đầu của chính nó.
    +Khi cuộn trang → vẫn cuộn bình thường
    +Use case:Dịch chuyển nhẹ một phần tử.Thường dùng để làm mốc cho phần tử con absolute.
3. position: absolute
    +Phần tử không còn chiếm chỗ trong normal flow.
    +Nó được định vị theo nearest positioned ancestor (phần tử cha gần nhất có position khác static).
    +Nếu không có cha nào thỏa mãn → nó tham chiếu theo body hoặc viewport ban đầu.
    +hi cuộn trang → nó cuộn theo trang.
    +Use case:Dropdown menu,Tooltip,Badge góc sản phẩm,Popup nhỏ

4. position: fixed
    +Phần tử không chiếm chỗ trong normal flow.
    +Nó luôn tham chiếu theo viewport (màn hình trình duyệt).
    +Khi cuộn trang → nó không di chuyển, luôn đứng yên.
    +Use case:Nút back to top,Chat button,Thanh menu cố định

5. position: sticky
    +Ban đầu phần tử vẫn nằm trong normal flow.
    +Nó hoạt động giống relative trước.
    +Khi cuộn đến ngưỡng (top, left...) → nó hoạt động giống fixed.
    +Vì vậy nó sẽ dính lại khi cuộn tới vị trí chỉ định.
    +Use case:Header sticky,Menu sidebar,Thanh danh mục sản phẩm
6. absolute tham chiếu body khi:
    +Khi tất cả phần tử cha đều có:position: static Lúc đó absolute sẽ lấy body (hoặc viewport gốc) làm mốc.
7. absolute tham chiếu parent khi:
    -Khi phần tử cha gần nhất có:
    +relative
    +absolute
    +fixed
    +sticky
8. Nearest positioned ancestor là: Là phần tử cha gần nhất có thuộc tính position khác static.

Câu A2:
1. Trường hợp 1:
    .container {
        display: flex;
    }
    .item {
        flex: 1;
    }
Bố cục:
    -----------------------------------
    | item1 | item2 | item3 | item4 |
    -----------------------------------
2. Trường hợp 2:
    .container {
        display:flex;
        flex-wrap:wrap;
    }
    .item {
        width:45%;
        margin:2.5%;
    }
Bố cuc:
    -------------------
    | item1 | item2 |
    -------------------
    | item3 | item4 |
    -------------------
    | item5 | item6 |
    -------------------
3. Trường Hợp 3:
    .container {
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
Bố cục:
    -----------------------------------------
    | item1      item2              item3   |
    |          (căn giữa dọc)              |
    -----------------------------------------
4. Trường Hợp 4:
    .container {
        display:grid;
        grid-template-columns: 200px 1fr 200px;
        gap:20px;
    }
Bố cục:
    --------------------------------------------------
    | item1 |         item2          | item3 |
    | 200px |      phần còn lại      | 200px |
    --------------------------------------------------
5. Trường Hợp 5:
    .container {
        display:grid;
        grid-template-columns: repeat(3,1fr);
        gap:10px;
    }
Bố cục:
    -------------------------
    | item1 | item2 | item3 |
    -------------------------
    | item4 | item5 | item6 |
    -------------------------
    | item7 |       |       |
    -------------------------
Câu C1:

1. Navigation bar ngang (logo + menu + buttons)
=> Dùng: Flexbox

Giải thích:
Navbar là layout 1 chiều theo hàng ngang.
Flexbox rất phù hợp để:
- căn trái/phải
- căn giữa
- align-items: center
- spacing giữa các item


2. Lưới ảnh Instagram
(3 cột đều nhau, số ảnh không biết trước)

=> Dùng: Grid
Giải thích:
Đây là layout 2 chiều (hàng + cột).
CSS Grid giúp:
- chia cột đều
- tự xuống hàng
- kiểm soát khoảng cách dễ dàng

3. Layout blog:
(main content + sidebar)

=> Dùng: Grid

Giải thích:
Layout có nhiều vùng rõ ràng:
- content
- sidebar
Grid phù hợp để chia bố cục tổng thể theo cột.

4. Footer với 4 cột thông tin
(Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)

=> Dùng: Flexbox hoặc Grid
(tốt nhất: Grid)

Giải thích:
Footer gồm nhiều cột đều nhau.
Grid giúp chia cột dễ và cân đối hơn.

5. Card sản phẩm
(ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

=> Dùng: Flexbox

Giải thích:
Bên trong card là layout 1 chiều theo cột:
- ảnh
- text
- button

Flexbox phù hợp với direction column.
Dùng:
display: flex;
flex-direction: column;margin-top: auto;để nút luôn dính đáy card.

Câu C2:

1. Lỗi 1
    Cards không đều chiều cao
    Nút "Mua" bị nhảy lên/xuống

    CODE BỊ LỖI

    .card-container {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        width: 30%;
        margin: 1.5%;
    }

    .card img {
        width: 100%;
    }

    .card h3 {
        font-size: 18px;
    }

    .card .btn {
        padding: 10px;
    }
    NGUYÊN NHÂN

    Các card có lượng text khác nhau
    => chiều cao card khác nhau

    Nút .btn nằm ngay sau nội dung
    => card dài thì nút xuống thấp
    => card ngắn thì nút nằm cao hơn

    Kết quả:
    các nút không thẳng hàng

    CÁCH SỬA


    Cho card dùng Flexbox theo chiều dọc:

    - display: flex
    - flex-direction: column

    Và cho nút:
    margin-top: auto;

    => nút luôn bị đẩy xuống đáy card


    CODE SỬA


    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        width: 30%;

        display: flex;
        flex-direction: column;

        border: 1px solid #ccc;
        padding: 15px;
    }

    .card img {
        width: 100%;
    }

    .card h3 {
        font-size: 18px;
    }

    .card .btn {
        padding: 10px;

        margin-top: auto;
    }


2. LỖI 2
    Item không nằm giữa màn hình
    CODE BỊ LỖI

    .hero {
        height: 100vh;
        display: flex;
    }

    .hero-content {
        text-align: center;
    }

    NGUYÊN NHÂN

    display: flex chỉ bật Flexbox
    nhưng chưa căn giữa

    Mặc định:
    - justify-content: flex-start
    - align-items: stretch

    => item vẫn nằm góc trái trên

    CÁCH SỬA

    Dùng:
    - justify-content: center
    - align-items: center

    => căn giữa ngang + dọc

    CODE SỬA
    .hero {
        height: 100vh;

        display: flex;

        justify-content: center;
        align-items: center;
    }

    .hero-content {
        text-align: center;
    }

2. LỖI 3
    Sidebar bị co lại khi content quá dài

    CODE BỊ LỖI

    .layout {
        display: flex;
    }

    .sidebar {
        width: 250px;
    }

    .content {
        flex: 1;
    }

    NGUYÊN NHÂN

    Trong Flexbox:

    flex-shrink mặc định = 1

    => sidebar được phép co lại
    khi content quá dài

    Nên:
    sidebar nhỏ hơn 250px

    CÁCH SỬA


    Tắt co sidebar bằng:

    flex-shrink: 0;

    CODE SỬA

    .layout {
        display: flex;
    }

    .sidebar {
        width: 250px;

        flex-shrink: 0;
    }

    .content {
        flex: 1;
    }
