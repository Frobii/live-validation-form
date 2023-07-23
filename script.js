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

  return {
    setFormButton,
  };
};

formConfiguration().setFormButton();
