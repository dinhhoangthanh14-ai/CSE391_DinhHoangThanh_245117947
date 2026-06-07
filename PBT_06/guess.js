Bài B3:
// Random số từ 1 - 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 7;
const guessedNumbers = [];

while (attempts < maxAttempts) {
    let input = prompt(`Nhập số (1-100) - Lần ${attempts + 1}/${maxAttempts}:`);

    // Nếu bấm Cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    // Validate: không phải số
    if (isNaN(guess)) {
        alert("❌ Vui lòng nhập một số hợp lệ!");
        continue;
    }

    // Validate: trong khoảng 1-100
    if (guess < 1 || guess > 100) {
        alert("❌ Chỉ nhập số từ 1 đến 100!");
        continue;
    }

    // Check trùng số
    if (guessedNumbers.includes(guess)) {
        alert("⚠️ Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);
    attempts++;

    // So sánh
    if (guess === secretNumber) {
        alert(`🎉 Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    } else if (guess < secretNumber) {
        alert("📈 Cao hơn!");
    } else {
        alert("📉 Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxAttempts) {
        alert(`💀 Hết lượt! Bạn thua rồi. Đáp án là: ${secretNumber}`);
    }
}