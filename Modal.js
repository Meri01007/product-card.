export class Modal {
  constructor(modalWindowID) {
    this.modalWindowID = document.getElementById(modalWindowID);
    this.event();
  }
  open() {
    this.modalWindowID.classList.add("modal_active");
  }
  close() {
    this.modalWindowID.classList.remove("modal_active");
  }
  isActive(){
    return this.modalWindowID.classList.contains("modal_active")
  }
  event(){
   const closeBtn = this.modalWindowID.querySelector(".modalclose")
   closeBtn.addEventListener("click", () => this.close())
  }
}
