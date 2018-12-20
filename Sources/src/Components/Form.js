import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
// import Cards from 'react-credit-cards';
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// import { formatPhoneNumber } from 'react-phone-number-input'


const minname = (value) => {
    if (value.trim().length < 3) {
        return <small className="form-text text-danger">Tên của bạn không hợp lệ!</small>;
    }
};
const maxname = (value) => {
    if (value.trim().length >40) {
        return <small className="form-text text-danger">Tên của bạn không hợp lệ!</small>;
    }
};
const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">Đây là trường bắt buộc!</small>;
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Bạn nhập không đúng định dạng!</small>;
    }
};

const minaddress = (value) => {
    if (value.trim().length < 30) {
        return <small className="form-text text-danger">Vui lòng mô tả địa chỉ chi tiết hơn</small>;
    }
};

const minvalue = (value) => {
    if (value.trim().length < 12) {
        return <small className="form-text text-danger">Bạn nhập thiếu số TK. Vui lòng xem lại!</small>;
    }
};
const maxvalue = (value) => {
    if (value.trim().length > 15) {
        return <small className="form-text text-danger">Số tài khoản không chính xác!</small>;
    }
};
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            yourname : '',
            email : '',
            address : '',
        };

    }

    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();

        if ( this.checkBtn.context._errors.length === 0 ) {
            alert('Check mail để lấy mã xác nhận');
        }
    }
    // if (value) {
    //     // `format` can be "National" or "International".
    //     formatPhoneNumber(value, "International")
    // }
    render() {
        const {value}= this.state;
        return (
            <div className="container ctnform">
                <h2 className="text-center">Vui lòng điền đầy đủ và chính xác các thông tin về bạn!</h2>
                <div className="login-container">
                    <div id="output"></div>
                    <div className="avatar"></div>
                    <div className="form-box">
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <Input
                                name="yourname"
                                onChange={this.onChangeHandler}
                                type="text"
                                placeholder="Tên đầy đủ"
                                className="form-control"
                                validations={[required,minname, maxname]}
                            />
                            <Input
                                name="email"
                                onChange={this.onChangeHandler}
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                validations={[required, email]}
                            />
                            <PhoneInput
                                placeholder="Số điện thoại"
                                value={value }
                                onChange={ value => this.setState({ value }) }
                                error={ value ? (isValidPhoneNumber(value) ? undefined : 'Số điện thoại không đúng!') : 'Đây là trường bắt buộc!' }/>

                            {/*Is valid: { value && isValidPhoneNumber(value) ? 'true' : 'false' }*/}
                            {/*National: { value && formatPhoneNumber(value, 'National') }*/}
                            {/*International: { value && formatPhoneNumber(value, 'International') }*/}

                            <Input
                            name="address"
                            onChange={this.onChangeHandler}
                            type="text"
                            placeholder="Địa chỉ"
                            className="form-control"
                            validations={[required, minaddress]}
                        />
                            <Input
                                name="atm"
                                onChange={this.onChangeHandler}
                                type="text"
                                placeholder="Số tài khoản"
                                className="form-control"
                                validations={[required, minvalue, maxvalue]}
                            />
                            <button className="btn btn-info btn-block login" type="submit">Gửi đi</button>
                            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;