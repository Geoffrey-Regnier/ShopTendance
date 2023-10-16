import { GET_PRODUCTS } from "../Actions/products.action";
import { ADD_PRODUCTS } from "../Actions/products.action";



const initialState = {};


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case ADD_PRODUCTS:
            return [action.payload, ...state];
        default : return state;
    }
}