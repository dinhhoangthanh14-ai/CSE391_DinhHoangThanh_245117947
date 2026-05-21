

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
