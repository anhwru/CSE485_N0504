import React, {Component} from 'react';

class Team extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid"
                                            src={this.props.memimg}
                                            alt="member"/></p>
                                    <h4 className="card-title">{this.props.memname}</h4>
                                    <p className="card-text">{this.props.memposition}</p>
                                    <a  className="btn btn-info">More</a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">{this.props.memname}</h4>
                                    <p className="card-text">{this.props.memdecription}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href={this.props.linkfb}>
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href={this.props.linktw}>
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href={this.props.linklk}>
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href={this.props.linkgg}>
                                                <i className="fa fa-google"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Team;