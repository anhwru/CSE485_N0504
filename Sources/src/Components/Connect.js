import React, {Component} from 'react';
import Conn from "./Conn";

class Connect extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgimg : [
                {img: '../img/design.jpg',
                    connclass: "",
                    conntitle:"Design" ,
                    conncontent:"Thiết kế web theo đúng yêu cầu, hỗ trợ responsive. Hoàn thành trong thời gian ngắn nhất luôn đảm bảo hợp đồng. Tuỳ chỉnh thiết kế theo ý khách hàng trong thời gian hợp đồng" ,
                    line:"line"},
                {img: '../img/build.png',
                    connclass: "timeline-inverted",
                    conntitle:"Building",
                    conncontent:"Xây dựng nhanh, hỗ trợ các công nghê mới nhất đảm bảo chất lượng trang web cả về giao diện lẫn cấu trúc",
                    line:"line",

                },
                { img:'../img/domain.png',
                    connclass: "",
                    conntitle:"Domain",
                    conncontent:"Cung cấp các gói tên miền giá rẻ nhất cho bạn tuỳ ý lựa chọn, tư vấn miễn phí với khách hàng về domain" ,
                    line:"line"
                },
                { img:'../img/host.jpg',
                    connclass: "timeline-inverted",
                    conntitle:"Hosting",
                    conncontent:"Dịch vụ hosting hàng đầu đảm bảo cho trang web của bạn up time với thời gian gần như tuyệt đối" ,
                    line:"line"
                },
                { img:'../img/seotop.jpg',
                    connclass: "",
                    conntitle:"SEO",
                    conncontent:"Với kinh nghiệm của các chuyên gia về SEO chúng tôi cam kết mang lại cho bạn những vị trí cao trên goodle tìm kiếm với giá hợp lý nhất" ,
                    line:"",
                },

            ]
        }
    }
    render() {
        return (

            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            {
                                // console.log(this.state)
                                this.state.bgimg.map(e=>{
                                    const style = {
                                        backgroundImage: 'url("'+e.img+'")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                    };
                                    return(
                                        <Conn style={style}  connclass={e.connclass} conntitle={e.conntitle} conncontent={e.conncontent} line={e.line}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Connect;