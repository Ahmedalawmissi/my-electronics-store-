// js/auth.js

function toggleForms(type) {
    document.getElementById("login-form").style.display = (type === "login") ? "block" : "none";
    document.getElementById("register-form").style.display = (type === "register") ? "block" : "none";
  }
  
  function registerUser(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
  
    if (!name || !email || !password) {
      alert("يرجى تعبئة جميع الحقول!");
      return;
    }
  
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("✅ تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.");
    toggleForms('login');
  }
  
  function loginUser(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      alert(`أهلاً بك يا ${user.name} 👋`);
      window.location.href = "index.html";
    } else {
      alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }
  }
  