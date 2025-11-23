// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("new req rec");
// //   console.log(req.headers);
// console.log(req);

//   res.end("hello from server");
// });

// server.listen(8000, () => console.log("server Started"));

// +++++++++++++++++++++++++@@@@@@@+++++++++++++++++++++++++

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const log = `${Date.now()} : ${req.url} new req Received\n `;
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch ((req, res)) {
//       case "/":
//         res.end("this is home page");
//         break;
//       case "/about-us":
//         res.end("this is Nahid Khan");
//       default:
//         res.end("404 not found");
//     }
//     res.end("hello from server");
//   });
//   console.log("a new request Recv");
// });

// server.listen(8000, () => console.log("server started"));

const http = require("http");

const server = http.createServer((req, res) => {

  switch (req.url) {
    case "/":
      res.end("this is home page");
      break;
    case "/about":
      res.end("this is Nahid khan");
      break;
    case "/contact":
      res.end("this is contact page");
    default:
      res.end("404 not found");
  }
});
server.listen(8000, () => console.log("server on"));
