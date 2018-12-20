import React, {Component} from 'react';

class Seo extends Component {
    render() {
        return (
            <section className={this.props.class}>
                <div className="container">
                    <div className={"row featurette "+ this.props.skew}>
                        <div className={"col-md-7 " + this.props.vtnoidung}>
                            <h2 className="featurette-heading">{this.props.titleseo}</h2>
                            <p className="lead">{this.props.ndseo}</p>
                        </div>
                        <div className={"col-md-5 "+this.props.vtanh }>
                            <img className={"featurette-image img-fluid mx-auto "+ this.props.vtimg} src={this.props.anhseo} alt="Generic placeholder image" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Seo;