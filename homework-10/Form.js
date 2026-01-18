export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const data = new FormData(this.form);
    return Object.fromEntries(data.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

  validateInput(input) {
    if (input.hasAttribute("required") && !input.value.trim()) {
      this.setError(input, "Поле обязательно");
    }
    if (input.type === "email" && input.value.trim()) {
      const emailRegex = /^\S+@\S+.\S+$/;
      if (!emailRegex.test(input.value)) {
        this.setError(input, "Неверный email");
      }
    }
  }
}
