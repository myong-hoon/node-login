"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#password"),
  loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("");
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인중 에러 발생");
    });
}
