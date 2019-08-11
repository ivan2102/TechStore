import React from 'react';
import Title from '../Title';
import CartList from '../CartPage/CartList';
import CartColumns from '../CartPage/CartColumns';
import CartTotals from '../CartPage/CartTotals';

function Cart({history}){
    return(
        <section className="py-5">
            <div className="container">
                <Title title="your cart items" center/>
            </div>
            <CartColumns/>
            <CartList/>
            <CartTotals history={history}/>

        </section>
    )
}

export default Cart;