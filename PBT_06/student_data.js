
Bài B2
const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// ===== 1. TÍNH ĐIỂM TB + XẾP LOẠI =====
let result = [];

for (let i = 0; i < students.length; i++) {
    let s = students[i];

    let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

    let rank = "";
    if (avg >= 8.0) {
        rank = "Giỏi";
    } else if (avg >= 6.5) {
        rank = "Khá";
    } else if (avg >= 5.0) {
        rank = "Trung bình";
    } else {
        rank = "Yếu";
    }

    result.push({
        name: s.name,
        avg: avg,
        rank: rank
    });
}

// ===== 2. IN BẢNG =====
console.log("| STT | Tên   | TB   | Xếp loại |");
console.log("|-----|------|------|----------|");

for (let i = 0; i < result.length; i++) {
    console.log(
        `| ${i + 1} | ${result[i].name} | ${result[i].avg.toFixed(1)} | ${result[i].rank} |`
    );
}

// ===== 3. ĐẾM SỐ SV MỖI LOẠI =====
let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;

for (let i = 0; i < result.length; i++) {
    if (result[i].rank === "Giỏi") countGioi++;
    else if (result[i].rank === "Khá") countKha++;
    else if (result[i].rank === "Trung bình") countTB++;
    else countYeu++;
}

console.log("\n=== THỐNG KÊ XẾP LOẠI ===");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTB);
console.log("Yếu:", countYeu);

// ===== 4. SV CAO NHẤT + THẤP NHẤT =====
let max = result[0];
let min = result[0];

for (let i = 1; i < result.length; i++) {
    if (result[i].avg > max.avg) max = result[i];
    if (result[i].avg < min.avg) min = result[i];
}

console.log("\n=== CAO NHẤT / THẤP NHẤT ===");
console.log("Cao nhất:", max.name, max.avg.toFixed(1));
console.log("Thấp nhất:", min.name, min.avg.toFixed(1));

// ===== 5. TB TOÀN LỚP THEO MÔN =====
let sumMath = 0, sumPhysics = 0, sumCS = 0;

for (let i = 0; i < students.length; i++) {
    sumMath += students[i].math;
    sumPhysics += students[i].physics;
    sumCS += students[i].cs;
}

console.log("\n=== ĐIỂM TB THEO MÔN ===");
console.log("Math:", (sumMath / students.length).toFixed(2));
console.log("Physics:", (sumPhysics / students.length).toFixed(2));
console.log("CS:", (sumCS / students.length).toFixed(2));

// ===== 6. BONUS: TB THEO GIỚI TÍNH =====
let sumMale = 0, countMale = 0;
let sumFemale = 0, countFemale = 0;

for (let i = 0; i < students.length; i++) {
    let avg = students[i].math * 0.4 + students[i].physics * 0.3 + students[i].cs * 0.3;

    if (students[i].gender === "M") {
        sumMale += avg;
        countMale++;
    } else {
        sumFemale += avg;
        countFemale++;
    }
}

console.log("\n=== TB THEO GIỚI TÍNH ===");
console.log("Nam:", (sumMale / countMale).toFixed(2));
console.log("Nữ:", (sumFemale / countFemale).toFixed(2));