import request from 'superagent'

const serverURL = `/api`

export function getHelloWorld() {
  return request.get(`${serverURL}/`).then((response) => response.body)
}

export function getProducts() {
  return request.get(`${serverURL}/products`).then((response) => response.body)
}
