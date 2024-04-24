const membershipForm = document.querySelector(".membership-form");
const membershipInput = document.querySelector(".membership-input");
const membershipInputContainer = document.querySelector(
  ".membership-input-container"
);
const membershipInputLabel = document.querySelector(".membership-placeholder");
const membershipInputMessage = document.querySelector(
  ".membership-input-message"
);

const accordionQuestionEls = document.querySelectorAll('.accordion-question');

const ON_FOCUS = "on-focus"; // Use a consistent naming convention for constants
const FOCUS_IN = "focusin"; // 'focus-in' isn't a standard event, changed to 'focusin'

const validateEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const handleFocus = (e) => {
  const {
    target: { value },
    type,
  } = e;

  if (value) return; // Do nothing if there's a value already, no explicit 'true' needed

  if (type === FOCUS_IN) {
    membershipInputContainer.classList.add(ON_FOCUS);
  } else {
    membershipInputContainer.classList.remove(ON_FOCUS);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const { value } = membershipInput;
  const validEmail = validateEmail(value);

  if (validEmail) {
    membershipInputMessage.innerText = "Thank you for subscribing!";
    membershipInput.value = "";
    membershipInputContainer.classList.remove(ON_FOCUS);
  } else {
    membershipInputMessage.innerText = "Please enter a valid email";
  }

  setTimeout(() => {
    membershipInputMessage.innerText = "";
  }, 3000);
};

membershipInput.addEventListener(FOCUS_IN, handleFocus);
membershipInput.addEventListener("focusout", handleFocus);
membershipForm.addEventListener("submit", handleSubmit);

accordionQuestionEls.forEach(element =>)
