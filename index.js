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

// +++++++++++++++++++++++++@@@@@@@+++++++++++++++++++++++++

// const http = require("http");

// const server = http.createServer((req, res) => {

//   switch (req.url) {
//     case "/":
//       res.end("this is home page");
//       break;
//     case "/about":
//       res.end("this is Nahid khan");
//       break;
//     case "/contact":
//       res.end("this is contact page");
//     default:
//       res.end("404 not found");
//   }
// });
// server.listen(8000, () => console.log("server on"));

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()} :New req Received :${req.url} \n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, () => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("This is Homepage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hi, ${username}`);
//         break;
//       case "/contact-us":
//         res.end("Contact us");
//       default:
//         "404 not found";
//     }
//   });
// });
// server.listen(8000, () => console.log("server started"));

// +++++++++++++++++++++++++@@@@@@@+++++++++++++++++++++++++

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.url === "favicon.ico") return res.end();
//   const log = `${Date.now()},: new req Received, ${req.url} \n`;
// const url=url.parse(req.url,true);
// console.log(url);

//   console.log("http server req rec");
//   fs.appendFile("log.txt", log, () => {
//     switch (req.pathname) {
//       case "/":
//         res.end("this is home page");
//         break;
//       case "/about":
//         res.end("this is Nahid Khan");
//         break;
//       case "/contact":
//         res.end("this is contact page");
//         break;
//       default:
//         res.end("404 not found");
//     }
//   });
// });

// server.listen(8000, () => console.log("server is responding"));

// +++++++++++++++++++++++++@@@@@@@+++++++++++++++++++++++++

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.url} : ${req.method} Rec a new req \n`;
  const clintUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (clintUrl.pathname) {
      case "/":if(req.method==="GET")
        res.end("this is home page");
        break;

      case "/about":
        const username = clintUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;

      case "/contact-us":
        res.end("this is contact-us page");
        break;

      case "/search":
        const search = clintUrl.query.search_query;
        res.end("this is your result" + search);
        break;

      case "/signup":
        if (req.method === "GET") res.end("this is a signup form");
        else if (req.method === "POST") {
          //DB Query
          res.end("success");
        }

        break;

      default:
        "404 Not Found";
        break;
    }
  });
});
server.listen(8000, () => console.log("serve completed"));


// +++++++++++++++++++++++++@@@@@@@+++++++++++++++++++++++++

