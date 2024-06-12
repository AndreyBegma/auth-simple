const formFields = ["name", "password"];

const patterns = {
  username: /^[a-zA-Z0-9._]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

const formEl = {
  name: document.querySelector("#inputName"),
  password: document.querySelector("#inputPassword"),
  confirm: document.querySelector("#inputConfirm"),
  btn: document.querySelector("#btnSignUp")
};

formEl.btn.addEventListener("click", () => {
  const candidate = {};
  let error = 0;

  formFields.forEach(fieldName => {
    if (fieldName === "name") {
      if (patterns.username.test(formEl.name.value) || patterns.email.test(formEl.name.value)) {
        candidate.name = formEl.name.value;
        formEl.name.style.borderColor = "#5577FF";
      } else {
        formEl.name.style.borderColor = "#B8302E";
        error += 1;
      }
    }

    if (fieldName === "password") {
      if (formEl.password.value.length > 6) {
        candidate.password = formEl.password.value;
        formEl.password.style.borderColor = "#5577FF";
      } else {
        error += 1;
        formEl.password.style.borderColor = "#B8302E";
      }
    }
  });

  if (formEl.password.value === formEl.confirm.value && formEl.password.value.length !== 0 ) {
    console.log(candidate);
    if (error === 0) {
      window.location.href = "/complete.html"
    }
  } else {
    formEl.confirm.style.borderColor = "#B8302E";
  }

});
