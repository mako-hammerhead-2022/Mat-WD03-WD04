import request from 'superagent'

const PORT = 3000

const serverURL = `http://localhost:${PORT}/api`

export function getHelloWorld() {
  return request.get(`${serverURL}/`).then((response) => response.body)
}
