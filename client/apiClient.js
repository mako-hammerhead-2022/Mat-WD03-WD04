import request from 'superagent'

const PORT = process.env.PORT || 3000

const serverURL = `http://localhost:${PORT}/api`

export function getHelloWorld() {
  return request.get(`${serverURL}/`).then((response) => response.body)
}
