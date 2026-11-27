export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    const currentModal = this;
    this.closeByOverlay = function () {
      currentModal.close();
    };

    this.#initOpen(buttonId);
    this.#initClose();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.closeByOverlay);
    }
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener("click", this.closeByOverlay);
    }
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    const currentModal = this;

    button.addEventListener("click", function () {
      currentModal.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector("#modal-close-button");
    const currentModal = this;

    closeButton.addEventListener("click", function () {
      currentModal.close();
    });
  }
}
