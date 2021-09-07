import {ADD_TO_BAG, SET_PRODUCTS} from "../action-types";

const initialState = {
    users: null,
    products: null,
    bag: []
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_PRODUCTS: {
            return  {
                ...state,
                products: payload
            }
        }
        case ADD_TO_BAG: {
            const item = state.products.find((product) => product.id === payload.id);
            item.amount = payload.amount;
            return  {
                ...state,
                bag: [
                    ...state.bag,
                    item
                ]
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;