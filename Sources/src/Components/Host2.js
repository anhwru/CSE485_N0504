import React, {Component} from 'react';

class Host2 extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="host-icon"><i className={this.props.classicon} /></div>
                <h2>{this.props.tieude}</h2>
                <p>{this.props.mota}</p>
            </div>
        );
    }
}

export default Host2;