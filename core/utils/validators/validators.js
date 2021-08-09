export function validateEmailValue(text) {
  let reg = /^[a-zA-Z0-9]{2,25}$/;
  return reg.test(text);
}

export function validatePasswordValue(text, setPasswordTextInputValue) {
  let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return reg.test(text);
}
