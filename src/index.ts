import * as http from 'http'

// Workaround for ctrl-c when running in Docker
process.on('SIGINT', () => process.exit(1))

// eslint-disable-next-line no-console
console.log(`Hello world! Try echo server: \ncurl -d 'echo test' -X POST http://localhost:8080`)

const Server = http
  .createServer((req, res) => {
    req.pipe(res)
  })
  .listen(8080)

export default Server