export function validatePassword(password) {
  if (password.length > 7) {
    return true
  } else {
    return false
  }
}

export function validateFirstName(firstname) {
  if (firstname.length > 0) {
    return true
  } else {
    return false
  }
}

export function validateLastName(lastname) {
  if (lastname.length > 0) {
    return true
  } else {
    return false
  }
}

export function validateEmail(email) {
  if (email.length > 2 && email.includes("@")) {
    return true
  } else {
    return false
  }
}
