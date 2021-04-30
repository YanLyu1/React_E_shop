import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.componet'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItem, history, dispatch}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
        cartItem.length ? 
        cartItem.map(ci => (
          <CartItem key={ci.id} item={ci} />
        ))
        :
        <span className='empty-message'>Your Cart is Empty</span>
      }
      </div>
      <CustomButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
          }}> GO TO CHECKOUT </CustomButton>
    </div>
  );

// const mapStateToProps = ({cart: {cartItem}}) => ({
//     cartItem
// })

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));