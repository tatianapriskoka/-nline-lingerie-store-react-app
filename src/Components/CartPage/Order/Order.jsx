import { ErrorMessage, Field, Formik, Form } from 'formik';
import Container from '../../Layout/Container/Container';
import s from './Order.module.scss';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';

const Order = ({ cartItems }) => {
    const handleSubmitOrder = (values) => {
        console.log({ cartItems, values });
    };

    const validationShema = Yup.object({
        fio: 'Max',
        address: '',
        phone: '',
        email: '',
        delivery: 'self',
    })

    const validationSchema = () => {

    }

    return (
        <section>
            <Container>
                <h2 className={s.title}>Оформление заказа</h2>
                <Formik
                    initialValues={{
                        fio: '',
                        address: '',
                        phone: '',
                        email: '',
                        delivery: '',
                    }}
                    onSubmit={handleSubmitOrder}
                    validationSchema={validationSchema}
                >
                    <Form className={s.form}>
                        <fieldset className={s.personal}>
                            <label className={s.label}>

                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='ФИО*'
                                    name='fio'
                                />
                                <ErrorMessage className={s.error} name='fio' component={'span'} />
                            </label>

                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='text'
                                    placeholder='Адрес доставки'
                                    name='address'
                                />
                                <ErrorMessage className={s.error} name='address' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    as={PatternFormat}
                                    className={s.input}
                                    format='+(###)-###-####'
                                    mask='_'
                                    placeholder='Номер телефона*'
                                    name='phone'
                                />
                                <ErrorMessage className={s.error} name='phone' component={'span'} />
                            </label>
                            <label className={s.label}>
                                <Field
                                    className={s.input}
                                    type='email'
                                    placeholder='Email*'
                                    name='email'
                                />
                                <ErrorMessage className={s.error} name='email' component={'span'} />
                            </label>
                        </fieldset>

                        <fieldset className={s.radioList}>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='delivery'
                                />
                                <span>Доставка</span>
                            </label>
                            <label className={s.radio}>
                                <Field
                                    className={s.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='self'
                                />
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage className={s.error} name='delivery' component={'span'} />
                        </fieldset>
                        <button className={s.submit} type='submit'>Оформить</button>
                    </Form >

                </Formik>
            </Container>
        </section>
    )
}

export default Order;