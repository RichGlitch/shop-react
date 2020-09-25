import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const pricerForStripe = price * 100;
    const publishableKey = 'pk_test_51HSaklI2pvDRL9FEmnisnYEhjppxTm7dIRmSPW4BDa2i16vS84XXtG6ByCzhzTJI847DXbGoPBUyXOCNRm0bFUlz00XuPRgy5d';
    const onToken = token => {
        console.log(token);
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Shopping my store'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={pricerForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;