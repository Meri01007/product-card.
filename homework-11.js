const emailForm = document.querySelector(".footer__Subscribe-form");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

const openModal = document.querySelector(".header__button");
const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".modalclose");

openModal.addEventListener("click", () => {
  modalWindow.classList.add("modal_active");
});

modalClose.addEventListener("click", () => {
  modalWindow.classList.remove("modal_active");
});

const formShow = document.querySelector(".modal-showed");
formShow.addEventListener("submit", (pass) => {
  pass.preventDefault();
  const form = pass.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.created_on = new Date().toLocaleString();
  if (data.password !== data.password_confirm) {
    alert("Пароли не совпадают");
  } else {
    modalWindow.classList.remove("modal_active");
    data.password = btoa(data.password);
    user = data;
    console.log(user);
  }
});

let user = null;
