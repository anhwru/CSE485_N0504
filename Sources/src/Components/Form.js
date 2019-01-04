import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import Host from "./Host";

const SignupSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(5, 'Vui lòng nhập tên thật!')
        .max(30, 'Vui nhập lại đúng tên!')
        .required('Đây là trường bắt buộc!'),
    address: Yup.string()
        .min(20, 'Vui lòng nhập địa chỉ cụ thể hơn!')
        .max(80, 'Đây không phải một địa chỉ hợp lệ!')
        .required('Đây là trường bắt buộc!'),
    phonenumber: Yup.number().required('Phone number is required!').integer().positive(),
    cre: Yup.number().required('Đây là trường bắt buộc !').integer().positive(),
    email: Yup.string()
        .email('Invalid email')
        .required('Đây là trường bắt buộc!'),
});


const Myform = () => (

    <div>
        <h3 className="text-center"> Vui lòng điền đầy đủ thông tin vào các trường sau </h3>
        <Formik
            initialValues={{
                fullname: '',
                address: '',
                phonenumber: '',
                email: '',
                cre : '',
            }}
            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting }) => {

                axios.post('http://localhost:3001/mail',values).then(() => this.setState({ redirect: true }));
                const { redirect } = this.state;

                if (redirect) {
                    return <Redirect to='/'/>;
                }

                return <Host/>
            }}
        >
            {({ errors, touched }) => (

                <Form>

                    <Field name="fullname" placeholder="Tên"/>
                    {errors.fullname && touched.fullname ? (
                        <div>{errors.fullname}</div>
                    ) : null}
                    <Field name="address"  placeholder=" Địa chỉ"  />
                    {errors.address && touched.address ? (
                        <div>{errors.address}</div>
                    ) : null}
                    <Field name="phonenumber"  placeholder=" Số điện thoại"  />
                    {errors.phonenumber && touched.phonenumber ? (
                        <div>{errors.phonenumber}</div>
                    ) : null}
                    <Field name="email" type="email"  placeholder="Email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Field name="cre"  placeholder=" Số TK"  />
                    {errors.cre && touched.cre ? (
                        <div>{errors.cre}</div>
                    ) : null}
                    <button  type="submit">Gửi đi</button>
                </Form>
            )}
        </Formik>
    </div>
);
export default Myform;