import productReducer from './reducer/product.reducer';

const redux = require('redux');

const allReducer = redux.combineReducers({
    product: productReducer
})

var store = redux.createStore(allReducer);
store.subscribe(() => {
  console.log(store.getState());
})

export default store;