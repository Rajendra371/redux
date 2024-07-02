import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILURE } from "../constant/productConstant";


const initialState = {
    products: [],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                error: null
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default productReducer
export const fetchSingleProduct = (state = { product: {}, error: null }, action) => {
    switch (action.type) {
        case FETCH_SINGLE_PRODUCT_REQUEST:
            return {
                ...state
            }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload

            }
        case FETCH_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state

    }
}

