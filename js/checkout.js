// js/checkout.js

document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderSection = document.getElementById("order-summary");
  
    if (cart.length === 0) {
      orderSection.innerHTML = "<p>❌ لا يوجد منتجات في السلة.</p>";
      document.getElementById("checkout-form").style.display = "none";
      return;
    }
  
    let total = 0;
    let summaryHTML = `<h2>ملخص الطلب:</h2><ul>`;
  
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      const itemTotal = product.price * item.quantity;
      total += itemTotal;
      summaryHTML += `<li>${product.name} × ${item.quantity} = ${itemTotal} ريال</li>`;
    });
  
    summaryHTML += `</ul><p><strong>الإجمالي الكلي: ${total} ريال</strong></p>`;
    orderSection.innerHTML = summaryHTML;
  });
  
  document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // بيانات الزبون
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;
  
    if (!name || !address || !payment) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }
  
    // تفريغ السلة
    localStorage.removeItem("cart");
  
    // رسالة تأكيد
    alert(`✅ شكرًا لك يا ${name}! تم تأكيد طلبك. سيتم الشحن إلى: ${address}`);
    window.location.href = "index.html";
  });
  