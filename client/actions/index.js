import { getProducts } from '../apiClient'

export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  }
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    payload: products,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts())
    return getProducts()
      .then((res) => {
        dispatch(receiveProducts(res))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
