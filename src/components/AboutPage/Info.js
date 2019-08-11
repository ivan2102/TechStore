import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/page-images/images/aboutBcg.jpeg';

function Info() {
    return(
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className=" img-fluid img-thumbnail" style={{background: "var(--darkGrey)"}} alt=""/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about us"/>
                    <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue enim ut justo tempus,
                         nec facilisis ante tempor. Vestibulum at risus odio. Quisque eget ultricies dolor.
                          Donec vel enim elit. Mauris eget iaculis purus, sit amet vestibulum magna.
                           Donec id pulvinar metus, fermentum ultricies mauris.
                            Curabitur id enim eu metus fermentum laoreet.
                             Nulla rutrum bibendum mauris, sit amet interdum nulla congue a.
                              In venenatis fermentum mi nec pharetra.
                               Nulla arcu mauris, venenatis placerat magna vel, sodales tincidunt eros.
                                Aliquam faucibus, turpis ut imperdiet volutpat, orci enim dapibus lacus, 
                                vitae mollis ex arcu tempor elit. 
                                Quisque tincidunt lectus quam, quis facilisis ex rhoncus sed. 
                                Sed sed leo eleifend, pretium enim quis, feugiat ante. 
                                Maecenas vitae eros ut dolor suscipit posuere.
                                Etiam a ligula non neque eleifend facilisis sed id nibh.</p> 

                                <button className="main-link" type="button" style={{marginTop: "2rem"}}>more info</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Info;