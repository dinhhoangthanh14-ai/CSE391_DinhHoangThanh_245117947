
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