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

    ['focus', 'input'].forEach((action) => emailField.addEventListener(action, (event) => {
      if (emailRegex.test(emailField.value)) {
        emailField.style.borderColor = 'green';
        emailField.style.outlineColor = 'green';
      } else {
        emailField.style.borderColor = 'red';
        emailField.style.outlineColor = 'red';
      }
    }));
  }

  function validateCountry() {
    const countryField = document.getElementById('country');
    countryField.required = true;

    const countryRegex = /^[A-Z][A-Za-z]*(?: [A-Z][A-Za-z]*)*$/;

    ['focus', 'input'].forEach((action) => countryField.addEventListener(action, (event) => {
      if (countryRegex.test(countryField.value)) {
        countryField.style.borderColor = 'green';
        countryField.style.outlineColor = 'green';
      } else {
        countryField.style.borderColor = 'red';
        countryField.style.outlineColor = 'red';
      }
    }));
  }

  function validateZipcode() {
    const zipcodeField = document.getElementById('zipcode');
    zipcodeField.required = true;

    const zipCodeRegex = /^\d{5}(?:-\d{4})?|[A-Z]\d[A-Z] \d[A-Z]\d|\d{4}$/i;

    ['focus', 'input'].forEach((action) => zipcodeField.addEventListener(action, (event) => {
      if (zipCodeRegex.test(zipcodeField.value)) {
        zipcodeField.style.borderColor = 'green';
        zipcodeField.style.outlineColor = 'green';
      } else {
        zipcodeField.style.borderColor = 'red';
        zipcodeField.style.outlineColor = 'red';
      }
    }));
  }

  function liveValidation() {
    validateEmail();
    validateCountry();
    validateZipcode();
  }

  function submitValidation() {
    const submitButton = document.querySelector('.submit-button');
    const form = document.getElementById('signupForm');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
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
