import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../actions'

function products(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_PRODUCTS:
      return payload
    case RECEIVE_PRODUCT:
      return payload
    default:
      return state
  }
}

export default products
