export class Form {
  constructor(formID) {
    this.form = document.getElementById(formID);
  }
  getValues() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    return data;
  }
  isValid() {
    const isHtmlValid = this.form.checkValidity();
    const data = this.getValues();
    if (isHtmlValid && data.password === data.password_confirm) {
      return true;
    } else {
      if (data.password !== data.password_confirm) {
        alert("Пароли не совпадают");
      }
      return false;
    }
  }
  reset(){
    this.form.reset();
  }
}
