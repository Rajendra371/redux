import { combineReducers } from "redux";
import testReducer from "./reducers/testReducer";
import studentReducer from "./reducers/studentReducer";
import { legacy_createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import productReducer from "./reducers/peoductReducer";
import { fetchSingleProduct } from "./action/productAction";
import { cartReducer } from "./reducers/cartReducer";




const reducer=combineReducers({
    test:testReducer,
    student:studentReducer,
    productData:productReducer,
    products:fetchSingleProduct,
    cart:cartReducer

})

const store= legacy_createStore(reducer, applyMiddleware(thunk))



export default store