import * as http from "http";
import template from "./lib";

// tslint:disable-next-line: no-console
console.log(`Hello ${template.hello}! Try echo server: \n` +
    "curl -d 'echo test' -X POST http://localhost:8080");

http.createServer((req, res) => {
    req.pipe(res);
}).listen(8080);