import request from 'superagent'

const serverURL = `/api`

export function getProducts() {
  return request.get(`${serverURL}/products`).then((response) => response.body)
}

export function getProductById(id) {
  return request
    .get(`${serverURL}/product/${id}`)
    .then((response) => response.body)
}
