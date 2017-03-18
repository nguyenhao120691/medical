/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

const errors = require('../exeptions/errors')

module.exports = {
  create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {
        err: 'Password doesn\'t match, What a shame!'
      });
    }

    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {
          err: err
        });
      }
      // If user created successfuly we return user and token as response
      if (user) {
        // NOTE: payload is { id: user.id}
        res.json(200, {
          user: user,
          token: jwToken.issue({
            id: user.id
          })
        });
      }
    });
  },
  checkEmailExist: function (req, res) {
    if (!req.body.email) {
      res.json(400, {
        message: "không thể kiểm tra email tồn tại hay chưa!",
        desc: "máy chủ không thể xử lý yêu cầu này do không đủ tham số yêu cầu.",
        errors: [errors.bad_request]
      })
      return
    }
    User.findOne({
        email: req.body.email
      })
      .catch((err) => {
        res.json(200, {
          exist: false,
          email: req.body.email,
          message: "email chưa được sử dụng",
          desc: "bạn có thể sử dụng email này"
        })
      })
      .then((user) => {
        res.json(200, {
          exist: true,
          email: user.email,
          message: "email đã được sử dụng",
          desc: "bạn có thể thử đăng ký một email khác hoặc lấy lại mật khẩu nếu vô tình quên."
        })
      })
      
  }
};
