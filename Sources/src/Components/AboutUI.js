import React, {Component} from 'react';


class AboutUi extends Component {
    render() {
        return (
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline3">
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <span className="year">Cheap</span>
                                    <h3 className="title">Giá cả hấp dẫn</h3>
                                    <p className="description">
                                        Chúng tôi cam kết rằng những mẫu giao diện của chúng tôi có mức giá ưu đãi nhất trên thị trường hiện nay!
                                    </p>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <span className="year">Response</span>
                                    <h3 className="title">Tương thích mọi thiết bị</h3>
                                    <p className="description">
                                        Tất cả trang web đều dược thiết kế để cho mọi loại thiết bị có thể sử dụng dễ dàng mà vẫn giữ được bố cục
                                    </p>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <span className="year">Beautiful</span>
                                    <h3 className="title">Thiết kế bắt mắt</h3>
                                    <p className="description">
                                        Những template được thiết kế theo xu hưóng mới nhất trên thế giới, dảm bảo người dùng sẽ ấn tượng từ lần sử dụng đầu tiên
                                    </p>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <span className="year">Support</span>
                                    <h3 className="title">Hỗ trợ đến hết</h3>
                                    <p className="description">
                                        Chúng tôi đảm bảo hỗ trợ việc cài đặt và sử dụng của khách hàng cho đến khi trang được sử dụng chính thức.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutUi;