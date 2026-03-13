const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  checkboxSelector: ".form__checkbox",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const showInputError = (form, inputElement, errorMessage, config) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (form, inputElement, config) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
};

const checkInputValidity = (form, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(form, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (form, config) => {
  const buttonElement = form.querySelector(config.submitButtonSelector);
  const inputList = Array.from(
    form.querySelectorAll(`${config.inputSelector},${config.checkboxSelector}`),
  );
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(form, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    inputList.forEach((inputElement) => {
      checkInputValidity(form, inputElement, config);
    });
    if (!hasInvalidInput(inputList)) {
      form.reset();
      toggleButtonState(inputList, buttonElement, config);
    }
  });
};

const enableValidation = (config) => {
  const formElement = document.querySelector(config.formSelector);
  setEventListeners(formElement, config);
};

enableValidation(settings);
