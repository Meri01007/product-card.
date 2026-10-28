import { Form } from "./Form.js";
import { Modal } from "./Modal.js";

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

const modal = new Modal("modalid");

openModal.addEventListener("click", () => {
  modal.open();
});

const formShow = document.querySelector(".modal-showed");
const form = new Form("modal-form");
formShow.addEventListener("submit", (pass) => {
  pass.preventDefault();
  if (form.isValid()) {
    const data = form.getValues();
    data.created_on = new Date().toLocaleString();
    data.password = btoa(data.password);

    user = data;
    console.log(user);
    modalWindow.classList.remove("modal_active");
    form.reset();
  }
});

let user = null;
