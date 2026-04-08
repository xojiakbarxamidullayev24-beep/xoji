const loginInp = document.getElementById("login");
const parolInp = document.getElementById("parol");
const btn = document.getElementById("btn");

let user = {
  spaceId: "144481",
  password: "141",
};

localStorage.setItem("user", JSON.stringify(user));

btn.addEventListener("click", () => {
  const spaceId = loginInp.value.trim();
  const password = parolInp.value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("User mavjud emas!");
    return;
  }

  if (spaceId === storedUser.spaceId && password === storedUser.password) {
    alert("Login parol to'g'ri");
    window.location.href = "dashboard.html";
  } else {
    alert("Login yoki parol noto'g'ri, qaytadan urinib ko'ring!");
  }
});
