// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-list");
  
    if (!container || typeof products === "undefined") return;
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price} ريال</strong></p>
        <button onclick="viewDetails(${product.id})">تفاصيل</button>
        <button onclick="addToCart(${product.id})">🛒 أضف للسلة</button>
      `;
  
      container.appendChild(card);
    });
  });
  
  function viewDetails(id) {
    localStorage.setItem("selectedProduct", id);
    window.location.href = "product.html";
  }
  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.id === id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ id, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت الإضافة إلى السلة!");
  }

  
