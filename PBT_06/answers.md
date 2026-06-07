
\Câu A1:
1. var không báo lỗi
    console.log(x);
    var x = 5;

    output:
    undefined
2. let báo lỗi dù cũng được hoisting
    console.log(y);
    let y = 10;

    output:
    ReferenceError
3. const vẫn sửa được mảng
    const arr = [1,2,3];
    arr.push(4);

    out put:
    [1,2,3,4]

Câu A2:
    console.log(typeof null);              // "object"
    console.log(typeof undefined);         // "undefined"
    console.log(typeof NaN);               // "number"
    console.log("5" + 3);                 // "53"
    console.log("5" - 3);                 // 2
    console.log("5" * "3");              // 15
    console.log(true + true);            // 2
    console.log([] + []);                // ""
    console.log([] + {});                // "[object Object]"
    console.log({} + []);                // "[object Object]"
1. "5" + 3 và "5" - 3 cho kết quả khác nhau Vì:
    + "5" + 3 → "53" vì toán tử + gặp chuỗi sẽ ưu tiên nối chuỗi. Số 3 được chuyển thành chuỗi "3" rồi ghép lại:
                        "5" + 3
                        → "5" + "3"
                        → "53"
    + "5" - 3 → 2 vì toán tử - chỉ thực hiện phép toán số học. JavaScript tự chuyển chuỗi "5" thành số 5 rồi thực hiện phép trừ:
                            "5" - 3
                            → 5 - 3
                            → 2
Câu A3:
1. Dự đoán kết quả
    console.log(5 == "5");                // true
    console.log(5 === "5");               // false
    console.log(null == undefined);       // true
    console.log(null === undefined);      // false
    console.log(NaN == NaN);              // false
    console.log(0 == false);              // true
    console.log(0 === false);             // false
    console.log("" == false);             // true
2. Nên dùng === trong hầu hết các trường hợp.
- Vì:
    + Không ép kiểu ngầm → kết quả dễ dự đoán.
    + Tránh các lỗi khó phát hiện do JavaScript tự chuyển đổi kiểu dữ liệu.
    + Là quy tắc được khuyến nghị trong các dự án JavaScript hiện đại.
Câu A4:
1. Tất cả giá trị Falsy trong JavaScript
    Có 8 giá trị Falsy:

    false
    0
    -0
    0n
    ""
    null
    undefined
    NaN
2. Dự đoán kết quả
    if ("0") console.log("A");    // In A
    if ("") console.log("B");     // Không in
    if ([]) console.log("C");     // In C
    if ({}) console.log("D");     // In D
    if (null) console.log("E");   // Không in
    if (0) console.log("F");      // Không in
    if (-1) console.log("G");     // In G
    if (" ") console.log("H");    // In H

Câu A5:
1. Cách 1
    var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

2. Cách 2
    var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

3. Cách 3
    var html = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
    </div>
    `;

Câu C1
1. Các lỗi trong hàm tinhGiaGiamGia
    Lỗi 1: Sai so sánh (dùng = thay vì ===)
    if (giaSauGiam = 0)
    Vấn đề:
    = là gán giá trị, không phải so sánh
    luôn làm giaSauGiam = 0 → điều kiện luôn sai logic
    Sửa:
    if (giaSauGiam === 0)
    Lỗi 2: Thiếu xử lý kiểu dữ liệu giaBan là string
    const gia = tinhGiaGiamGia("100000", 20)
    Vấn đề:
    "100000" là string → phép toán có thể gây ép kiểu ngầm
    dễ bug nếu input không chuẩn
    Sửa:
    giaBan = Number(giaBan);
    Lỗi 3: Không xử lý trường hợp giá âm / NaN
    Vấn đề:
    nếu nhập sai → kết quả sai
    Sửa:
    if (isNaN(giaBan) || giaBan < 0) return "Giá không hợp lệ";
    Lỗi 4: Thiếu dấu ; (không bắt buộc nhưng chuẩn code)
    return "Phần trăm giảm không hợp lệ"
2. Lỗi trong test case
    Lỗi 5: nhập sai logic phần trăm
    tinhGiaGiamGia(50000, 110)
    OK về code, nhưng:
    cần bị chặn đúng (đã có check > 100)
3. Lỗi “ẩn” quan trọng nhất (var + setTimeout)
    Lỗi 6: var i trong vòng lặp async
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log("Item " + i)
        }, 1000)
    }
    ❌ Vấn đề:
    var có scope là function
    tất cả callback dùng chung 1 biến i
    khi chạy sau 1s → i = 5 hết

    Output sai:

    Item 5
    Item 5
    Item 5
    Item 5
    Item 5