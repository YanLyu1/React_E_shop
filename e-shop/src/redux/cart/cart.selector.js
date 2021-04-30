import {createSelector} from 'reselect'

//所谓的selector就是只取root reducer的state中的一部分
//在这里我们取出了cart这个reducer
const selectCart = state => state.cart;


//output selector需要用到createSelector函数，有两个参数
//第一个是一个数组，第二个表示从selector中取出的对象，现在它就是一个memo selector了
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumalatedQuantity, ci) => accumalatedQuantity + ci.quantity, 
        0
    )
);