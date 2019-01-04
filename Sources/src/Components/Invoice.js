import React, {Component} from 'react';
import axios from "axios";
import queryString from 'query-string'
import moment from 'moment'
class Invoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    // lấy dữ liệu từ datahost
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        axios.get(`http://localhost:3001/hoadon?email=${values.email}&vcode=${values.vcode}`).then(res =>{
            this.setState({
                data:res.data
            });
            // console.log(this.state)
        });
    }
    render() {
        return (
            <div className="container">
                    {
                        this.state.data.map((value,key) => {

                            if (key<1) {
                                var date = value.ngaytao;
                                var crdate =moment(date).format('LLL');
                                console.log(crdate);

                                return (
                                    <div className="row">
                                        <h4 className="text-center hdct">Hoá Đơn Chi Tiết</h4>
                                    <table key={key}  idkh = {value.idkh} className="table table-hover" id="dev-table"  >
                                        <tbody>
                                        <tr>
                                            <th>Tên khách hàng:</th>
                                            <td>{value.tenkhach}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{value.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Số điện thoại:</th>
                                            <td>{value.sdtkh}</td>
                                        </tr>
                                        <tr>
                                            <th>Địa chỉ:</th>
                                            <td>{value.diachi}</td>
                                        </tr>
                                        <tr>
                                            <th>Số tài khoản:</th>
                                            <td>{value.sotkkh}</td>
                                        </tr>
                                        <tr>
                                            <th>Gói đăng ký:</th>
                                            <td>{value.tendv}</td>
                                        </tr>
                                        <tr>
                                            <th>Giá:</th>
                                            <td>{value.giadv} đồng</td>
                                        </tr>
                                        <tr>
                                            <th>Ngày đặt:</th>
                                            <td>{crdate}</td>
                                        </tr>
                                        <tr>
                                            <th>Trạng thái thanh toán:</th>
                                            <td>{value.ttthanhtoan}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                )
                            }
                        })
                    }

            </div>
        );

    }
}

export default Invoice;