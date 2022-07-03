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

export function addNewProduct(name, description, price) {
  return request
    .post(`${serverURL}/product`)
    .send({ name, description, price })
    .then((response) => response.body)
}
