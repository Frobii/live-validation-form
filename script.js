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

    emailField.addEventListener('input', (event) => {
      if (emailField.validity.valid) {
        console.log('valid')
      } else {console.log('invalid')}
    })
  }

  function liveValidation() {
    validateEmail()

    const submitButton = document.querySelector('.submit-button');
    const form = document.getElementById('signupForm')

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      form.reportValidity();
    })
  }

  return {
    setFormButton,
    liveValidation,
  };
};

formConfiguration().setFormButton();
formConfiguration().liveValidation();