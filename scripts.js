// Função para manipular o cadastro
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });

// Função para manipular o login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o comportamento padrão de submissão do formulário

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Recuperar dados do localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login bem-sucedido!");
    // Redirecionar para a página inicial ou dashboard
    window.location.href = "index.html";
  } else {
    alert("E-mail ou senha incorretos!");
  }
});

// Add items to cart
function addToCart(itemId, itemName, itemPrice) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find((item) => item.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Função para manipular o login de usuário
document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;

    // Recuperar dados do localStorage
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (
      registeredUser &&
      registeredUser.email === loginEmail &&
      registeredUser.password === loginPassword
    ) {
      alert("Login bem-sucedido!");
      window.location.href = "home.html";
    } else {
      alert("E-mail ou senha incorretos!");
    }
  });

function addItemToCart(productId, productName, productPrice) {
  const shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = shoppingCart.find(
    (product) => product.id === productId
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    shoppingCart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(shoppingCart));

  // Update cart icon count
  const cartCount = shoppingCart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  document.getElementById("cart-count").textContent = cartCount;

  alert("Item adicionado ao carrinho!");
}
