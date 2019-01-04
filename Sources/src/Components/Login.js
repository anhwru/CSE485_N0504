import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Đây là trường bắt buộc!'),
});


const Login = () => (
    <div>
        <h3 className="text-center"> Administrator </h3>
        <Formik
            initialValues={{

                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting }) => {
                axios.post('http://localhost:3001/login',values).then(function (result) {
                    if(values !==0){
                        window.alert('Insert thành công')
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });

            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="email" type="email"  placeholder="Username"/>
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Field name="password" type="password" placeholder="Mật khẩu"/>
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    <button type="submit">Gửi đi</button>
                </Form>
            )}
        </Formik>
    </div>
);
export default Login;