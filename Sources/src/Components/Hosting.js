import React, {Component} from 'react';
import {
    Link,

} from 'react-router-dom'
class Hosting extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="card text-center cardhost">
                    <div className="titlehost">
                        <i className={"fas "+this.props.icongoi} />
                        <h2>{this.props.tengoi}</h2>
                    </div>
                    <div className="price">
                        <h4>{this.props.giahost}<sup>đ</sup></h4>
                    </div>
                    <div className="option">
                        <ul>
                            <li><i className="fas fa-check-circle" /> Băng thông <span>{this.props.bt}</span></li>
                            <li><i className="fas fa-check-circle" /> Data Base <span>{this.props.db}</span></li>
                            <li><i className="fas fa-check-circle" /> Email <span>{this.props.email}</span></li>
                            <li><i className="fas fa-check-circle" /> Up time <span>{this.props.uptime}</span></li>
                            <li><i className={"fas "+ this.props.hotro} /> Live Support</li>
                        </ul>
                    </div>
                    <Link to="/clientinfo">Buy</Link>
                </div>
            </div>
        );
    }
}

export default Hosting;