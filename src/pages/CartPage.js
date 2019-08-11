import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartBcg from '../images/page-images/images/storeBcg.jpeg';

function CartPage(props) {
    return(
        <React.Fragment>
            <Hero img={cartBcg}/>
            <CartSection history={props.history}/>
           </React.Fragment>
    )
}

export default CartPage;