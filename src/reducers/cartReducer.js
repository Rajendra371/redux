import { ADD_TO_CART } from "../constant/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const isItemExist = state.cartItems.find(i => i.id === item.id)


            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => i.id === isItemExist ? item : i)
                }
            }

            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
    }
}