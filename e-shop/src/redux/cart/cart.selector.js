import {createSelector} from 'reselect'

//所谓的selector就是只取root reducer的state中的一部分
//在这里我们取出了cart这个reducer
const selectCart = state => state.cart;


//output selector需要用到createSelector函数，有两个参数
//第一个是一个数组，其中是一个reducer
//第二个是表示从第一个参数中指定的reducer中取出的对象，现在它就是一个memo selector了。返回的是一个值
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumalatedQuantity, ci) => accumalatedQuantity + ci.quantity, 
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumalatedQuantity, ci) => accumalatedQuantity + ci.quantity * ci.price, 
        0
    )
)