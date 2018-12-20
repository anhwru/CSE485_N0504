import React, {Component} from 'react';
import Miniaboutus from "./Miniaboutus";

class Aboutus extends Component {
    render() {
        return (
            <div className="container" data-aos="flip-up">
                <div className="row">
                    <Miniaboutus moreclass="offer-success" suptitle="big" moretitle="Nền tảng lớn mạnh" morecontent=" Chúng tôi là một công ty với 5 năm trong ngành phát triển dịch vụ web. Chúng tôi hiểu khách hàng cần gì cũng như đáp ứng học một cách hài lòng nhất. Chúng tôi luôn tạo các mối hợp tác để khách hàng có thể tận hưởng những dịch vụ chát lượng nhất nhưng cũng đơn giản nhất "/>
                    <Miniaboutus moreclass="offer-danger" suptitle="best" moretitle="Hỗ trợ tích cực" morecontent="Chúng tôi luôn coi khách hàng là số 1. Đơn giản vì chúng tôi được thành lập khách hàng. Những khách hàng khi sử dụng dịch vụ của chúng tôi sẽ được chúng tôi hỗ trợ hết sức có thể để họ hài lòng khi đã đặt sự tin tưởng vào chúng tôi. Không làm khách hàng thất vọng là kim chỉ nam của chúng tôi!"/>
                    <Miniaboutus moreclass="offer-danger" suptitle="best" moretitle="Hỗ trợ tích cực" morecontent="Chúng tôi luôn coi khách hàng là số 1. Đơn giản vì chúng tôi được thành lập khách hàng. Những khách hàng khi sử dụng dịch vụ của chúng tôi sẽ được chúng tôi hỗ trợ hết sức có thể để họ hài lòng khi đã đặt sự tin tưởng vào chúng tôi. Không làm khách hàng thất vọng là kim chỉ nam của chúng tôi!"/>
                    <Miniaboutus moreclass="offer-success" suptitle="big" moretitle="Nền tảng lớn mạnh" morecontent=" Chúng tôi là một công ty với 5 năm trong ngành phát triển dịch vụ web. Chúng tôi hiểu khách hàng cần gì cũng như đáp ứng học một cách hài lòng nhất. Chúng tôi luôn tạo các mối hợp tác để khách hàng có thể tận hưởng những dịch vụ chát lượng nhất nhưng cũng đơn giản nhất "/>
                </div>
            </div>
        );
    }
}

export default Aboutus;