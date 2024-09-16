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
