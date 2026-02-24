const { signin, registerEmployee, signout, sendOtp, verifyOtp, forgetPassword, chnagePassword } = require('../contoller/auth.controller.js')

const router = require('express').Router()

router
    .post('/signin', signin)
    .post('/registerEmployee', registerEmployee)
    .post('/signout', signout)
    .post('/send-otp', sendOtp)
    .post('/verify-otp', verifyOtp)
    .post('/forget-password', forgetPassword)
    .post('/chnage-password', chnagePassword)

module.exports = router
