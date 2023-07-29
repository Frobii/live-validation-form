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

    ['focus', 'input'].forEach((evt) => emailField.addEventListener(evt, (event) => {
      if (emailRegex.test(emailField.value)) {
        emailField.style.borderColor = 'green';
        emailField.style.outlineColor = 'green';
      } else {
        emailField.style.borderColor = 'red';
        emailField.style.outlineColor = 'red';
      }
    }));
  }

  function liveValidation() {
    validateEmail();

    const submitButton = document.querySelector('.submit-button');
    const form = document.getElementById('signupForm');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }

  return {
    setFormButton,
    liveValidation,
  };
};

formConfiguration().setFormButton();
formConfiguration().liveValidation();
