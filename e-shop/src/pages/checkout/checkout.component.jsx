import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import './checkout.styles.scss'

const CheckoutPage = ({cartItem, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map(ci => 
                <CheckoutItem key={ci.id} cartItem={ci}></CheckoutItem>    
            )}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);