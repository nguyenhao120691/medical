export const API_URL = 'http://localhost:1337'
export const SIGNIN_URL = API_URL + '/auth/signin'
export const CHECK_EMAIL_URL = API_URL + '/user/email/exist'

function checkEmailExist(email) {
  return new Promise((res, rej) => {
    $.ajax({
      url: CHECK_EMAIL_URL,
      type: 'POST',
      data: {
        email
      },
      success: res,
      error: rej
    })
  })
}

function signin(email, password) {
  return new Promise((res, rej) => {
    $.ajax({
      url: SIGNIN_URL,
      type: 'POST',
      data: {
        email,
        password
      },
      success: res,
      error: rej
    })
  })
}

export default {
  call: {
    auth: {
      signin: signin
    },
    user: {
      emailExist: checkEmailExist
    }
  }
}
