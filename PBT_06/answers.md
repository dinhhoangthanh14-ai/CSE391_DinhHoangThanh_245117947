
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