import React, {Component} from 'react';

class Title extends Component {
    render() {
        return (
                <div  data-aos="zoom-out-up" data-aos={this.props.kieucd}>
                    <h2 className={"tieude "+this.props.colr}>{this.props.tieude}</h2>
                </div>
        );
    }
}

export default Title;