
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
Câu A3
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

1. Lấy các số chẵn
    const evenNums = nums.filter(n => n % 2 === 0);
    [2, 4, 6, 8, 10]

2. Nhân mỗi số với 3
    const tripleNums = nums.map(n => n * 3);
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

3. Tính tổng tất cả
    const total = nums.reduce((sum, n) => sum + n, 0);
    55

4. Tìm số đầu tiên > 7
    const firstGreaterThan7 = nums.find(n => n > 7);
    8

5. Kiểm tra CÓ số > 10 không
    const hasGreaterThan10 = nums.some(n => n > 10);
    false

6. Kiểm tra TẤT CẢ đều > 0
    const allGreaterThan0 = nums.every(n => n > 0);
    true

7. Tạo mảng "Số X là [chẵn/lẻ]"
    const descriptions = nums.map(
        n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
    );

8. Đảo ngược mảng (không mutate gốc)
    const reversedNums = [...nums].reverse();
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

Câu A4
1. console.log(name, price, ram, color);
    // iPhone 16 25990000 8 Titan

2. console.log(specs);
    // ReferenceError: specs is not defined

3. console.log(updated.price);
    // 23990000

4. console.log(updated.sale);
    // true

5. console.log(product.price);
    // 25990000

5. console.log(product.specs.ram);
    // 16

Câu C1
    const processOrders = (orders) =>
        orders
            .filter(({ status, total }) => status === "completed" && total > 100000)
            .map(({ id, customer, total }) => ({
                id,
                customer,
                total,
                discount: total * 0.1,
                finalTotal: total * 0.9
            }))
            .sort((a, b) => b.finalTotal - a.finalTotal);

Cau C2
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let acc = initialValue;
        let startIndex = 0;

        if (initialValue === undefined) {
            acc = arr[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }

        return acc;
    }
};


// TEST
console.log(miniArray.map([1,2,3], x => x * 2)); 
// [2,4,6]

console.log(miniArray.filter([1,2,3,4], x => x > 2)); 
// [3,4]

console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); 
// 10