
Câu B2
function createCart() {
    // Private data
    let items = [];
    
    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) { /* ... */ },
        
        // Xóa sản phẩm theo id
        removeItem(productId) { /* ... */ },
        
        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) { /* ... */ },
        
        // Tính tổng tiền
        getTotal() { /* ... */ },
        
        // Áp dụng mã giảm giá
        applyDiscount(code) { /* ... */ },
        // Codes: "SALE10" → -10%, "SALE20" → -20%, "FREESHIP" → -30000
        
        // In giỏ hàng dạng bảng
        printCart() { /* ... */ },
        
        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() { /* ... */ },
        
        // Xóa toàn bộ giỏ
        clearCart() { /* ... */ }
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();
// Kỳ vọng:
// ┌──────────────────────────────────────────────┐
// │ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │
// │ 1 │ iPhone 16      │  2 │ 25.990.000  │ 51.980.000  │
// │ 2 │ AirPods Pro    │  2 │  6.990.000  │ 13.980.000  │
// ├──────────────────────────────────────────────┤
// │ Tổng cộng:                       65.960.000đ │
// └──────────────────────────────────────────────┘

cart.applyDiscount("SALE10");
cart.printCart();
// → Tổng: 59.364.000đ (giảm 10%)

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2