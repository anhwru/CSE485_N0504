import React, {Component} from 'react';

class Client extends Component {
    render() {
        return (

            <div className="container" data-aos="fade-left">
                <section className="customer-logos sliderlogo">
                    <div className="slide"><img src="img/cloudln.png" /></div>
                    <div className="slide"><img src="img/bootstrap.jpg" /></div>
                    <div className="slide"><img src="img/phalcon.png" /></div>
                    <div className="slide"><img src="img/codeignitorlogo.png" /></div>
                    <div className="slide"><img src="img/cisco.jpg" /></div>
                    <div className="slide"><img src="img/hp.jpg" /></div>
                    <div className="slide"><img src="img/laravel.png" /></div>
                    <div className="slide"><img src="img/node.jpg" /></div>
                </section>
            </div>

        );
    }
}

export default Client;