const formConfiguration = () => {
  function setFormButton() {
    const formButton = document.querySelector('.open-form-button');
    const form = document.getElementById('signupForm');
    const backdrop = document.querySelector('.back-drop');

    formButton.addEventListener('click', () => {
      form.style.display = 'flex';
      backdrop.style.display = 'flex';
    });

    backdrop.addEventListener('click', () => {
      form.style.display = 'none';
      backdrop.style.display = 'none';
    });
  }

  function validateEmail() {
    const emailField = document.getElementById('email');
    emailField.required = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    ['focus', 'input'].forEach((action) => emailField.addEventListener(action, () => {
      if (emailRegex.test(emailField.value)) {
        emailField.setCustomValidity('');
      } else {
        emailField.setCustomValidity('Use the correct email format i.e. "user@example.com"');
      }
      emailField.classList.add('checked');
    }));
  }

  function validateCountry() {
    const countryField = document.getElementById('country');
    countryField.required = true;
    const countryRegex = /^[A-Z][A-Za-z]*(?: [A-Z][A-Za-z]*)*$/;

    ['focus', 'input'].forEach((action) => countryField.addEventListener(action, () => {
      if (countryRegex.test(countryField.value)) {
        countryField.setCustomValidity('');
      } else {
        countryField.setCustomValidity('Countries must begin with a capital letter & cannot end with a space i.e. "United States"');
      }
      countryField.classList.add('checked');
    }));
  }

  function validateZipcode() {
    const zipcodeField = document.getElementById('zipcode');
    zipcodeField.required = true;

    const zipCodeRegex = /^\d{5}(?:-\d{4})?|[A-Z]\d[A-Z] \d[A-Z]\d|\d{4}$/i;

    ['focus', 'input'].forEach((action) => zipcodeField.addEventListener(action, () => {
      if (zipCodeRegex.test(zipcodeField.value)) {
        zipcodeField.setCustomValidity('');
      } else {
        zipcodeField.setCustomValidity('Accepted Zip Codes: \n United States "12345" \n US ZIP + 4 "12345-6789" \n Canada "A1A 1A1" \n Australia "4000"');
      }
      zipcodeField.classList.add('checked');
    }));
  }

  function validatePassword() {
    const passwordField = document.getElementById('password');
    passwordField.required = true;

    const passwordRegex = /^(?=.*[!@#$_%^&*()|~`+[{}\]:"'<>,.?\/-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{9,}$/;

    ['focus', 'input'].forEach((action) => passwordField.addEventListener(action, () => {
      if (passwordRegex.test(passwordField.value)) {
        passwordField.setCustomValidity('');
      } else {
        passwordField.setCustomValidity('Passwords must contain: \n A Special Character (i.e. !@#$%^&*_) \n A Number \n An Uppercase Letter \n A Lowercase Letter.');
      }
      passwordField.classList.add('checked');
    }));
  }

  function matchPasswords() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    confirmPasswordField.required = true;

    ['focus', 'input'].forEach((action) => confirmPasswordField.addEventListener(action, () => {
      if (passwordField.value === confirmPasswordField.value && passwordField.checkValidity()) {
        confirmPasswordField.setCustomValidity('');
      } else {
        confirmPasswordField.setCustomValidity('Passwords must match');
      }
      confirmPasswordField.classList.add('checked');
    }));
  }

  function liveValidation() {
    validateEmail();
    validateCountry();
    validateZipcode();
    validatePassword();
    matchPasswords();
  }

  function submitValidation() {
    const submitButton = document.querySelector('.submit-button');
    const form = document.getElementById('signupForm');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      form.reportValidity();
    });
  }

  return {
    setFormButton,
    liveValidation,
    submitValidation,
  };
};

formConfiguration().setFormButton();
formConfiguration().liveValidation();
formConfiguration().submitValidation();
