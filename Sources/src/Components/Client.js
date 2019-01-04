import React, {Component} from 'react';

class Client extends Component {
    render() {
        return (

            <div className="container" data-aos="fade-left">
                <section className="customer-logos sliderlogo">
                    <div className="slide"><img src="img/cloudln.png" alt="clt" /></div>
                    <div className="slide"><img src="img/bootstrap.jpg" alt="clt" /></div>
                    <div className="slide"><img src="img/phalcon.png" alt="clt" /></div>
                    <div className="slide"><img src="img/codeignitorlogo.png" alt="clt" /></div>
                    <div className="slide"><img src="img/cisco.jpg" alt="clt" /></div>
                    <div className="slide"><img src="img/hp.jpg" alt="clt" /></div>
                    <div className="slide"><img src="img/laravel.png" alt="clt" /></div>
                    <div className="slide"><img src="img/node.jpg" alt="clt" /></div>
                </section>
            </div>

        );
    }
}

export default Client;