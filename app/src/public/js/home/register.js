"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  comfirmPw = document.querySelector("#comfirm-pw"),
  registerBtn = document.querySelector("#register-btn");
registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해 주십시오");
  if (pw.value !== comfirmPw.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };
  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
