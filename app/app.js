// const http = require("http");
// const app = http.createServer((req, res) => {
//   // req.url이 url 뒤에주소를 나타냄
//   console.log(req.url);
//   // 한글처리하기위해 필수
//   res.writeHead(200, {
//     "Content-Type": "text/HTMLAllCollection; charset=utf-8",
//   });

//   if (req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else {
//     res.end("루트 이외의 페이지 입니다.");
//   }
// });

// app.listen(3001, (res, req) => {
//   console.log("http로 가동된 서버입니다.");
// });

"use strict";
//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//url을 통해 전달되는 데이터에 한글 공백 같은 데이터가 문제되는것을 해결
app.use(express.urlencoded({ extended: true }));

app.use("/", home); // use = 미들웨어 등록 메서드

module.exports = app;
