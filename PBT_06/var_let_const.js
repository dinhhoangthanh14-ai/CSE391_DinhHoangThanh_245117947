
Câu A1:
+So sánh sau khi chạy
    Khi chạy toàn bộ file, chương trình sẽ dừng ngay ở Đoạn 2 vì gặp lỗi:
    ReferenceError: Cannot access 'y' before initialization
    Do đó các đoạn phía sau sẽ không được thực hiện.
+Giải thích các kết quả bất ngờ
1. var cho kết quả undefined thay vì lỗi
2. let bị lỗi dù cũng được hoisting
3. const không cho gán lại giá trị
4. const vẫn sửa được mảng
5. let có phạm vi block