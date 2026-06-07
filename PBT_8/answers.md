
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