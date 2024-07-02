import { ADD_TO_CART } from "../constant/cartConstant";


export const addItemToCart = (id, quantity) => async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            category: data.category,
            quantity

        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItem))
}