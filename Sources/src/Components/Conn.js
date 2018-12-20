import React, {Component} from 'react';

class Conn extends Component {
    render() {
        return (
            <li className={this.props.connclass}>
                <div className="timeline-image" style={this.props.style} >
                </div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.conntitle}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">
                            {this.props.conncontent}
                        </p>
                    </div>
                </div>
                <div className={this.props.line} />
            </li>
        );
    }
}

export default Conn;