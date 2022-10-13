import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import '../components/ScreenComponent.css';
import * as Yup from 'yup';

const SignIn = () => {
    const navigate = useNavigate()
    const pageStyle = {
        height: '81.7vh',
    }

    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .email('Invalid email address')
                .required('Email Required'),
            Password: Yup.string()
                .max(25, 'Must be 25 characters or less')
                .min(8, 'Must be 8 characters or More')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    })


    return (
        <div style={pageStyle} className="backGround">
            <div className='w-50 mx-auto py-5'>
                <form onSubmit={ formik.handleSubmit } className='py-3 border border-secondary rounded-4'>
                    <h1 className='text-white text-center mb-3'>Sign In 🎥</h1>
                    <div className="m-4 px-5 mx-auto">
                        <label htmlFor="Email" className='text-white mb-3'>Email</label>
                        <input
                            className='bg-dark text-white p-2 form-control'
                            type="text"
                            name="Email"
                            id="Email"
                            placeholder='Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                        />
                        {
                            formik.touched.Email && formik.errors.Email ?
                            (
                                <h6 className='text-danger m-2'>{formik.errors.Email}</h6>
                            )
                            :
                                null
                        }
                    </div>
                    <div className="m-4 px-5 mx-auto">
                        <label htmlFor="Password" className='text-white mb-3'>Password</label>
                        <input
                            className='bg-dark text-white p-2 form-control'
                            type="password"
                            name="Password"
                            id="Password"
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                        />
                        {
                            formik.touched.Password && formik.errors.Password ?
                            (
                                <h6 className='text-danger m-2'>{formik.errors.Password}</h6>
                            )
                            :
                                null
                        }
                    </div>
                    <button type='submit'
                        className="mx-5 my-2 px-5 d-inline-block btn btn-dark"
                        onClick={() => setTimeout(()=> {navigate('/')}, 2000)}
                    >Sign In</button>
                    <h3 className='text-white text-center m-2'>Haven't Registered Yet ! <Link to="/signUp" className='text-primary'>SignUp</Link></h3>
                </form>
            </div>
        </div>
    )
}

export default SignIn