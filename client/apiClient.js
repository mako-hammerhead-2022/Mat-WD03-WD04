import request from 'superagent'

const serverURL = `/api`

export function getHelloWorld() {
  return request.get(`${serverURL}/`).then((response) => response.body)
}
