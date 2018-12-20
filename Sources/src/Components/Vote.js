import React, {Component} from 'react';
import MiniVote from "./Mini_vote";

class Vote extends Component {
    render() {
        return (
            <div className="container" data-aos="flip-left">
                <div className="row">
                    <MiniVote voteclass="testimonial-info-filled" votecontent="Giá cả rất hợp lý, chất lượng tốt. Thái độ phục vụ cũng không thệ chút nào!" voteimg="../img/voteimgmk.jpg" votename="Chị Hương" voteposition="Marketing" votecompany="NaNoQ Inc"/>
                    <MiniVote voteclass="testimonial-success-filled" votecontent="Tôi tin tưởng RNode cho các dự án của công ty tôi, đây là một đối tác rất uy tín" voteimg="../img/voteimggd.jpg" votename="Đặng Văn Nam" voteposition="Giám đốc" votecompany="TechPost"/>
                    <MiniVote voteclass="testimonial-warning-filled" votecontent="Thiết kế web rất chuyên nghiệp rất đúng ý tôi, giá SEO cũng khá rẻ" voteimg="../img/voteimgkh.jpg" votename="Anh Hùng" voteposition="Khách Hàng" votecompany=""/>
                </div>
            </div>
        );
    }
}

export default Vote;