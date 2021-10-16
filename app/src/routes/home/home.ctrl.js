"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["1234", "123"],
  pw: ["1234", "123"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;
    console.log(id, pw);

    if (users.id.includes(id)) {
      const idx = users.id.index0f(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
