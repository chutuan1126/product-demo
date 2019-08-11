const productInitialState = []
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case 'getProduct':
            return state = action.getDataInDatabase;
        default:
            return state;
    }
}

export default productReducer;