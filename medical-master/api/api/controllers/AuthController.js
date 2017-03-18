/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
const response = require('../exeptions/response')

module.exports = {
  signin: function (req, res) {
    var email = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(400, {message: "Đăng nhập thất bại", desc: "bạn chưa nhập email hoặc mật khẩu."});
    }

    User.findOne({email: email}, function (err, user) {
      if (!user) {
        return res.json(401, {message: "Email này chưa đăng ký", desc: "vui lòng kiểm tra lại địa chỉ email hoặc đang ký tài koản mới.", errors: { name: 'validation error', email: true}});
      }

      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {message: "Email hoặc mật khẩu không chính xác", desc: 'vui lòng kiểm tra lại tgoong tin đăng nhập.', errors: err});
        }

        if (!valid) {
          return res.json(401, {message: "Mật khẩy không chính xác.", desc: "vui lòng kiểm tra lại mật khẩu của bạn.", errors: { name: 'validation error', password: true}});
        } else {
          res.json(200, {
            user: user,
            token: jwToken.issue({id : user.id })
          });
        }
      });
    })
  }
};