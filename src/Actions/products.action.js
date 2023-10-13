import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/products').then((response) => {
        dispatch({ type: GET_PRODUCTS, payload: response.data })
            })
        }
    }
