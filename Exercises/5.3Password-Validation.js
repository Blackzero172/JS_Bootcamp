function simplePassword1(password) {
  if (password.length > 7) {
    return "Strong Password";
  } else {
    return "Weak Password";
  }
}
function simplePassword2(password) {
  let passwordStrength =
    password.length > 7 ? "Strong Password" : "Weak Password";
  return passwordStrength;
}
function simplePassword3(password) {
  if (password.length >= 7 || password.length > 0) {
    return "Strong Password";
  } else {
    return "Weak Password";
  }
}
function advancedPassword(password) {
  let capRegEx = /[A-Z]/g;
  let passwordStrength =
    password.length >= 7 && capRegEx.test(password)
      ? "Very Strong Password"
      : password.length >= 7
      ? "Strong Password"
      : "Weak Password";
  return passwordStrength;
}
console.log(simplePassword1("12345678"));
console.log(simplePassword2("123456"));
console.log(simplePassword3("1234567"));
console.log(advancedPassword("12345672A"));
console.log(advancedPassword("1234567"));
console.log(advancedPassword("123A"));
