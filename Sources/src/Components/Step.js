import React, {Component} from 'react';

class Step extends Component {
    render() {
        return (
            <li>
                <div className={"timeline-badge "+this.props.stepclass}><i className={this.props.stepicon} /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="timeline-title">{this.props.steptitle}</h4>
                        <p><small className="text-muted">{this.props.smalldecription}</small></p>
                    </div>
                    <div className="timeline-body">
                        <p>{this.props.stepcontent}</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Step;