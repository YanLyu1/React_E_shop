import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import CustomButton from '../custom-button/custom-button.componet'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItem}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItem.map(ci => (
          <CartItem key={ci.id} item={ci} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );

// const mapStateToProps = ({cart: {cartItem}}) => ({
//     cartItem
// })

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);