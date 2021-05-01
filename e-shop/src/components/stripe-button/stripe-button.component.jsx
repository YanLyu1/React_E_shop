import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ImOrFIHBRvRsZFqd5fwvNZFEdXtV1EWUBriuK2QwAf2K6ltGFR79X5qMYtVMud05xJSBXWHipI2cGeatwCRmLMU00QpEFg1lI';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }
    return (
        <div>
            <StripeCheckout
                lable='Pay Now' 
                name='E-SHOP Company' 
                billingAddresss 
                shippingAddress 
                image='https://svgshare.com/i/CUz.svg' 
                description={`Your total is $${price}`} 
                amount={priceForStripe}
                panelLabel='Pay Now' 
                token={onToken} 
                stripeKey={publishableKey}
            />
        </div>
    );
}

export default StripeCheckoutButton;
