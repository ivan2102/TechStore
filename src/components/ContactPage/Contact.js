import React from 'react';
import Title from '../Title';

function Contact() {
    return(
         <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                <Title title="contact us"/>
                    <form className="mt-5" action="https://iradisavljevic168@gmail.com" method="POST">

                        {/* your name*/}
                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="Ivan Nesic" className="form-control"></input>
                        </div>
                        {/*email*/}
                        <div className="form-group">
                            <input type="email" name="email" placeholder="your email" className="form-control"></input>
                        </div>
                        {/*subject*/}
                        <div className="form-group">
                        <input type="text" name="subject" placeholder="important!!!!" className="form-control"></input>
                        </div>
                        {/*message*/}
                        <div className="form-group">
                            <textarea name="message" rows="10" placeholder="hello there buddy" className="form-control"/>
                        </div>

                        {/* submit */}
                        <div className="form-group">
                            <input type="submit" value="Send" className="form-control bg-primary text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact;