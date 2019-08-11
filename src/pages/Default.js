import React from 'react';
import defaultBcg from '../images/page-images/images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function Default() {
    return(
        <React.Fragment>
            <Hero img={defaultBcg} title="404" max="true"> 
            <h2 className="text-uppercase">page not found</h2>
            <Link to="/" className="main-link" style={{marginTop: "2rem"}}>return home</Link>
            </Hero>
        </React.Fragment>
    )
}

export default Default;