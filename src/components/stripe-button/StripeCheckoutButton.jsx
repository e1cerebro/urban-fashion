import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const Publishable_key = 'pk_test_sj3ctl3L7864EDrVKrMy3TAI';

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name={'Urban Fashion'.toUpperCase()}
      shippingAddress
      billingAddress
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panel='Pay Now'
      token={onToken}
      stripeKey={Publishable_key}
    />
  );
};

export default StripeCheckoutButton;
