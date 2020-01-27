import React from 'react';

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})  => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nDhDxLsJmGLx3bY6Q2JIr7ni00V2yQ2vbg'

    const onToken = token => {
            console.log(token);
            alert('Weldone Bro');
        }
    return (
        <StripeCheckout
        lable='Pay Now'
        name= 'CRWN CLotthing ltd.'
        bilingAddress
        shippingAddress
        image ='https://sendeyo.com/up/d/f3eb2117da'
        description=  {`Your Total is $${price}`}
        amount='{priceForStripe}'
        panelLable='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    );

};

export default StripeCheckoutButton;