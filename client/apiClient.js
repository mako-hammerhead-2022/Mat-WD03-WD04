import request from 'superagent'

const PORT = process.env.PORT || 3000

const serverURL = `/api`

export function getHelloWorld() {
  return request.get(`${serverURL}/`).then((response) => response.body)
}
