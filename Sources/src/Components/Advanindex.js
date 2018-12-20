import React, {Component} from 'react';

class Advanindex extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline5">
                            <div className="timeline" data-aos="fade-left">
                                <div className="timeline-icon"><span className="year"><i className="fas fa-shield-alt"></i></span></div>
                                <div className="timeline-content">
                                    <h3 className="title">An toàn &amp; Bảo mật</h3>
                                    <p className="description">
                                        Chúng tôi cam kết website của bạn được an toàn bởi các cuộc tấn công khi đăng kí hosting của chúng tôi
                                    </p>
                                </div>
                            </div>
                            <div className="timeline" data-aos="fade-right">
                                <div className="timeline-icon"><span className="year"><i className="fa fa-rocket"></i></span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Tối ưu tốc độ</h3>
                                    <p className="description">
                                        Công nghệ mới sử dụng Virtual DOM cho tốc độ tải trang nhanh nhất
                                    </p>
                                </div>
                            </div>
                            <div className="timeline" data-aos="fade-left">
                                <div className="timeline-icon"><span className="year"><i className="fas fa-cogs"></i></span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Cài đặt dễ dàng</h3>
                                    <p className="description">
                                        Mội quá trình vận hành trang web đều được rút ngắn thời gian, dễ dàng khi cần bảo trì nâng cấp
                                    </p>
                                </div>
                            </div>
                            <div className="timeline" data-aos="fade-right">
                                <div className="timeline-icon"><span className="year"><i className="fas fa-search"></i></span></div>
                                <div className="timeline-content">
                                    <h3 className="title">SEO hiệu quả</h3>
                                    <p className="description">
                                        Sử dụng hai hình thức SEO On-page và Off-page giúp trang web có được thứ hạng tốt
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Advanindex;