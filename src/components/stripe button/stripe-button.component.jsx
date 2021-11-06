import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JsHl1Gpdgt37SmliMH94ymBwxRE9ZXbIBydCWTSXCKDlcCTIz5X0YQtt1dkXBKNHVNhhAVR0KRFyFM9P68OAG3W00Ld3BY0Ak';
    const onToken = token => {
        alert('Payment Succesful');
    }
    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
};
export default StripeCheckoutButton;

