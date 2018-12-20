import React, {Component} from 'react';

class Miniaboutus extends Component {
    render() {
        return (
            <div className=" col-md-6">
                <div className={"offer "+this.props.moreclass}>
                    <div className="shape">
                        <div className="shape-text">
                            {this.props.suptitle}
                        </div>
                    </div>
                    <div className="offer-content">
                        <h3 className="lead">
                            {this.props.moretitle}
                        </h3>
                        <p>
                            {this.props.morecontent}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Miniaboutus;