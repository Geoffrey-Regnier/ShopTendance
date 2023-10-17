import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const EDIT_PRODUCTS = 'EDIT_PRODUCTS';

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

    export const editProducts = (data) => {
        return (dispatch) => {
            return axios
            .put(`http://localhost:3000/products/${data.id}`, data)
            .then((res) => {
              dispatch({ type: EDIT_PRODUCTS, payload: data });
            });
        };
      };
      