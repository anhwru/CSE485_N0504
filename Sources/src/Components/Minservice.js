import React, {Component} from 'react';

class Minservice extends Component {
    render() {
        return (
            <div className="col-lg-4 dv">
                <div className="big-icon">
                    <i className={this.props.sericon} />
                </div>
                <div className="decript"><h2>{this.props.ttser}</h2></div>
                <div className="dv-content">
                    <p>{this.props.sercontent}</p>
                </div>
            </div>
        );
    }
}

export default Minservice;