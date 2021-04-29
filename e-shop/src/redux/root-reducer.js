//actual base reducer object that represents all of the state of our applicaiton 
//so this root reducer will end up being actual code that combines all our other states together
import {combineReducers} from 'redux'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})