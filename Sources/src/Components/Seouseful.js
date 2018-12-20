import React, {Component} from 'react';

class Seouseful extends Component {
    render() {
        return (
            <div className="container" id="useful" data-aos="fade-up">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="box">
                            <div className="box-icon">
                                <span className=" fa-4x fas fa-search-dollar"></span>
                            </div>
                            <div className="info">
                                <h4 className="text-center">Tăng lợi nhuận</h4>
                                <p>Việc nhiều người biết đến dịch vụ hay sản phẩm của bạn sẽ thúc đấy doanh số của bạn.
                                    Còn gì thuận lợi hơn khi bạn là điều đầu tiên họ tìm thấy trên google! Không chỉ một
                                    mà rất nhiều người khi cần sẽ thấy thứ họ cần từ bạn đầu tiên. Kinh doanh chưa bao
                                    giờ dễ đến thế</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="box">
                            <div className="box-icon">
                                <span className="fa-4x fas fa-handshake"></span>
                            </div>
                            <div className="info">
                                <h4 className="text-center">Hợp tác</h4>
                                <p> Bạn được biết đến không những tăng doanh thu mà còn tạo cơ hội cho bạn mở rộng thị
                                    trường của mình nhờ vào sự hợp tác. Những doanh nghiệp phù hợp đang tìm kiếm những
                                    thứ như bạn tạo ra sẽ dễ dàng liên kết với bạn. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seouseful;