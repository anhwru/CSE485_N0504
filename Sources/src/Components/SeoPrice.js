import React, {Component} from 'react';
import {
    Link,

} from 'react-router-dom'


class SeoPrice extends Component {
    constructor(props){
        super(props)
    }

    sendId(){
        this.props.handleClick()
    }
    render() {
        return (
            <div className="col-sm-4">
                <div className="card text-center cardhost">
                    <div className="titlehost">
                        <i className={"fas "+this.props.icongoi} />
                        <h2>{this.props.tengoiseo}</h2>
                    </div>
                    <div className="price">
                        <h4>{this.props.giaseo}<sup>đ</sup></h4>
                    </div>
                    <div className="option">
                        <ul>
                            <li><i className="fas fa-broadcast-tower"/> Quy mô : <span>{this.props.quymoseo}</span></li>
                            <li><i className="fas fa-briefcase-medical"/> Bảo hành : <span>{this.props.tg}</span></li>
                        </ul>
                    </div>
                    <Link to="/pay"onClick={this.sendId.bind(this)}>Đặt</Link>
                </div>
            </div>
        );
    }
}

export default SeoPrice;