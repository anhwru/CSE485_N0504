import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Topsell extends Component {
    constructor(props){
        super(props)
    }

    sendId(){
        this.props.handleClick()
    }
    render() {
        return (
            <div>
                <div className={"card "+this.props.nen}>
                    <div className="box-img">
                        <img src={this.props.anhweb} alt="anh" />
                    </div>
                    <div className="card-nd">
                        <h2 className="webname">{this.props.tentrang}</h2>
                        <p> {this.props.motaweb} </p>
                        <strong>Giá: </strong><span>{this.props.giaweb}</span>
                        <div className="btn-db">
                            <a className="dm" href={this.props.demo} target="_blank"><i className="fab fa-react"></i>Demo</a>
                            <Link to="/pay"><a className="buy" onClick={this.sendId.bind(this)}><i className="fas fa-shopping-cart" />Mua</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topsell;


