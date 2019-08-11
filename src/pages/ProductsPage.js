import React from 'react';
import OurProducts from '../components/ProductsPage/OurProducts';
import Hero from '../components/Hero';
import productsBcg from '../images/page-images/images/productsBcg.jpeg';

function ProductsPage() {
    return(
        <React.Fragment>
            <Hero img={productsBcg}/>
            <OurProducts/>
        </React.Fragment>
    )
}

export default ProductsPage;