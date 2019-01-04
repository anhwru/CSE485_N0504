import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Đây là trường bắt buộc!'),
});


const Views = ({history}) => (
    <div>
        <h3 className="text-center"> Sử dụng email đăng ký và mã đơn hàng để xem lại đơn hàng của bạn</h3>
        <Formik
            initialValues={{
                email: '',
                vcode: ''
            }}
            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting }) => {
                        history.push(`/yourinvoice?email=${values.email}&vcode=${values.vcode}`)
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="email" type="email"  placeholder="Email" autocomplete="off"/>
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Field name="vcode" placeholder="Mã đơn hàng" autocomplete="off"/>
                    {errors.vcode && touched.vcode ? (
                        <div>{errors.vcode}</div>
                    ) : null}
                    <button type="submit">Gửi đi</button>
                </Form>
            )}
        </Formik>
        <p className="text-center red" ><strong>Lưu ý:</strong> Sau khi thanh toán, khách hàng có thời hạn <strong>7 ngày</strong> để huỷ hoá đơn, sau <strong>7 ngày</strong> hoá đơn không thể huỷ!</p>
        <p className="text-center red">Số tiền trừ phí huỷ hoá đơn tính từ ngày tạo hoá đơn đến ngày huỷ hoá đơn hệ số với <strong>3%</strong> với tổng giá tiền dịch vụ </p>
        <p className="text-center red" > Tổng tiền trừ tối đa: <strong>20%</strong></p>
        <p className="text-center dsb" > Để có thể thực hiện dịch vụ, khách hàng vui lòng thanh toán qua số tài khoản của chúng tôi, duy nhất <strong className="red">1040 0327 9242</strong></p>
        <p className="text-center dsb" > <strong>Hosting</strong> và <strong>Template</strong> yêu cầu thanh toán trước <strong className="red">100%</strong> để sử dụng dịch vụ</p>
        <p className="text-center dsb" > Riêng đối với dịch vụ <strong>Seo</strong> thanh toán trước <strong className="red">50%</strong> </p>

    </div>
);
export default Views;