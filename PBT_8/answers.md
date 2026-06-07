
Câu A1
1. Function Declaration

    function tinhThueBaoHiem(luong) {
        const thue = luong > 11000000 ? luong * 0.1 : 0;

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    }

    console.log(tinhThueBaoHiem(15000000));

2. Function Expression

    const tinhThueBaoHiem2 = function (luong) {
        const thue = luong > 11000000 ? luong * 0.1 : 0;

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };

    console.log(tinhThueBaoHiem2(15000000));

3. Arrow Function

    const tinhThueBaoHiem3 = (luong) => {
        const thue = luong > 11000000 ? luong * 0.1 : 0;

        return {
            thue: thue,
            thuc_nhan: luong - thue
        };
    };

    console.log(tinhThueBaoHiem3(15000000));

Bài A2
1. Dự đoán output đoạn 1:1 2 3 2 2
2. Dự đoán output đoạn 2:
    var: 3
    var: 3
    var: 3
    let: 0
    let: 1
    let: 2
3. Vì:
    +var tạo một biến dùng chung cho tất cả các lần lặp nên các callback đều nhận giá trị cuối cùng.
    +let tạo một biến mới cho mỗi lần lặp nên mỗi callback nhớ đúng giá trị tại thời điểm được tạo.
