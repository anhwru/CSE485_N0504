import React, {Component} from 'react';

class MiniCount extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="counter">
                    <i className={this.props.count_icon +" fa-4x"} />
                    <div className='numscroller numscroller-big-bottom' data-slno='1000' data-min='0' data-max={this.props.maxvalues}
                         data-delay='30' data-increment="10">0
                    </div>
                    <p className="count-text client">{this.props.title_count}</p>
                </div>
            </div>
        );
    }
}

export default MiniCount;