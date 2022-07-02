import { getProducts } from '../apiClient'
import { getProductById } from '../apiClient'

export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_ALL_PRODUCTS = 'REQUEST_ALL_PRODUCTS'
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

export function requestAllProducts() {
  return {
    type: REQUEST_ALL_PRODUCTS,
  }
}

export function receiveAllProducts(products) {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    payload: products,
  }
}

export function requestProduct() {
  return {
    type: REQUEST_PRODUCT,
  }
}

export function receiveProduct(product) {
  return {
    type: RECEIVE_PRODUCT,
    payload: product,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchAllProducts() {
  return (dispatch) => {
    dispatch(requestAllProducts())
    return getProducts()
      .then((res) => {
        dispatch(receiveAllProducts(res))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchProductById(id) {
  return (dispatch) => {
    dispatch(requestProduct())
    return getProductById(id)
      .then((res) => {
        dispatch(receiveProduct(res))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
