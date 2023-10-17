import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';

export const getProducts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/products').then((response) => {
        dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
        }
    }

export const addProducts = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3000/products', data).then((response) => {
        dispatch({ type: ADD_PRODUCTS, payload: data })
             })
        }
    }

export const deleteProducts = (productId) => {
    return (dispatch) => {
         return axios.delete(`http://localhost:3000/products/${productId}`).then((response) => {
        dispatch({ type: DELETE_PRODUCTS, payload: productId })
             })
        }
    }
    
