import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.componet'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItem}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
                {
                    cartItem.map(ci => (
                        <CartItem key={ci.id} item={ci}/>
                    ))
                }
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItem}}) => ({
    cartItem
})
export default connect(mapStateToProps)(CartDropdown);