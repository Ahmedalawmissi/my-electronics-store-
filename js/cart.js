// js/cart.js

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    const totalPriceDiv = document.getElementById("total-price");
  
    if (cartItems.length === 0) {
      container.innerHTML = "<p>السلة فارغة 🫠</p>";
      totalPriceDiv.textContent = "";
      return;
    }
  
    let total = 0;
    container.innerHTML = "";
  
    cartItems.forEach(item => {
      const product = products.find(p => p.id === item.id);
      const itemTotal = product.price * item.quantity;
      total += itemTotal;
  
      const card = document.createElement("div");
      card.className = "cart-item";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="cart-details">
          <h3>${product.name}</h3>
          <p>السعر: ${product.price} ريال</p>
          <p>الكمية: 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)" />
          </p>
          <p>الإجمالي: ${itemTotal} ريال</p>
          <button onclick="removeItem(${item.id})">❌ إزالة</button>
        </div>
      `;
      container.appendChild(card);
    });
  
    totalPriceDiv.innerHTML = `<h3>الإجمالي الكلي: ${total} ريال</h3>`;
  });
  
  function updateQuantity(id, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === id);
    if (item) {
      item.quantity = parseInt(quantity);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload(); // نعيد تحميل الصفحة لتحديث السعر
    }
  }
  
  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
  
  function clearCart() {
    if (confirm("هل أنت متأكد من تفريغ السلة؟")) {
      localStorage.removeItem("cart");
      location.reload();
    }
  }
  