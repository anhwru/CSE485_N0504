import React, {Component} from 'react';
import Step from "./Step";

class AllStep extends Component {
    render() {
        return (
            <div className="container" data-aos="fade-right" >
                <ul className="timelines">
                    <Step stepclass="danger" stepicon="fas fa-phone" steptitle="Liên hệ" smalldecription="" stepcontent="Khách hàng liên hệ với công ty để được bộ phận CSKH tư vấn và làm thủ tục tiến đến ký hợp đồng"/>
                    <Step stepclass="sign" stepicon="fas fa-scroll" steptitle="Ký hợp đồng" smalldecription="" stepcontent="Bạn sẽ được gặp trực tiếp công ty để ký hợp đồng và các giấy tờ pháp lý, mọi ý kiến của bạn về hợp đồng đều được chúng tôi tôn trọng"/>
                    <Step stepclass="success" stepicon="fas fa-check" steptitle="Kiểm tra sản phẩm" smalldecription="" stepcontent="Khi nhận được sản phẩm bạn có thể kiểm thử tuỳ ý nếu có lỗi chúng tôi cam đoan hoàn thiện không mất phí, sản phẩm luôn được bảo hành theo hợp đồng"/>
                    <Step stepclass="" stepicon="far fa-credit-card" steptitle="Thanh toán" smalldecription="Thanh toán trước hợp đồng 50%" stepcontent="Sau tất cả các công đoạn cảm thấy hoàn toàn hài lòng với chất lượng sản phẩm bạn có thể thanh toán qua thẻ hoặc tại văn phòng công ty"/>
                </ul>
            </div>
        );
    }
}

export default AllStep;