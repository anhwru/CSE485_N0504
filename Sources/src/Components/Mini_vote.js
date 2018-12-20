import React, {Component} from 'react';

class MiniVote extends Component {
    render() {
        return (

            <div className="col-sm-4">
                <div id="tb-testimonial" className={"testimonial "+ this.props.voteclass}>
                    <div className="testimonial-section">
                        {this.props.votecontent}
                    </div>
                    <div className="testimonial-desc">
                        <img src={this.props.voteimg} alt="voter" />
                        <div className="testimonial-writer">
                            <div className="testimonial-writer-name">{this.props.votename}</div>
                            <div className="testimonial-writer-designation">{this.props.voteposition}</div>
                            <a  className="testimonial-writer-company">{this.props.votecompany}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiniVote;