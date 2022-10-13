import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import '../components/ScreenComponent.css';
import * as Yup from 'yup';

const SignUp = () => {

    const pageStyle = {
        height: '91vh',
        backgroundColor: 'rgba(0,0,0, 0.9)',
    }
    // const valSchema = Yup.object({
    //     Username: Yup.string()
    //         .max(15, 'Must be 15 characters or less')
    //         .min(5, 'Must be 5 characters or More')
    //         .required('Required'),
    //     Email: Yup.string()
    //         .email('Invalid email address')
    //         .required('Email Required'),
    //     Password: Yup.string()
    //         .max(25, 'Must be 25 characters or less')
    //         .min(8, 'Must be 8 characters or More')
    //         .required('Required'),
    //     ConfirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    // })

    const formik = useFormik({
        initialValues: {
            Username: "",
            Email: "",
            Password: "",
            ConfirmPassword: ""
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(5, 'Must be 5 characters or More')
                .required('Required'),
            Email: Yup.string()
                .email('Invalid email address')
                .required('Email Required'),
            Password: Yup.string()
                .max(25, 'Must be 25 characters or less')
                .min(8, 'Must be 8 characters or More')
                .required('Required'),
            ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            console.log(values);
        },
    })

    return (
        <div style={pageStyle} className="backGround">
            <div className='w-50 mx-auto pt-4 pb-2'>
                <form onSubmit={formik.handleSubmit} className='py-3 border border-secondary rounded-4'>
                    <h1 className='text-white text-center mb-2'>Sign Up 😉</h1>
                    <div className="mx-4 my-2 px-5 mx-auto">
                        <label htmlFor="Username" className='text-white mb-3'>Username</label>
                        <input
                            className='bg-dark text-white p-2 form-control'
                            type="text"
                            name="Username"
                            id="Username"
                            placeholder='Username'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Username}
                        />
                        {
                            formik.touched.Username && formik.errors.Username ?
                            (
                                <h6 className='text-danger m-2'>{formik.errors.Username}</h6>
                            )
                            :
                                null
                        }
                    </div>
                    <div className="mx-4 my-2 px-5 mx-auto">
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
                    <div className="mx-4 my-2 px-5 mx-auto">
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
                    <div className="mx-4 my-2 px-5 mx-auto">
                        <label htmlFor="ConfirmPassword" className='text-white mb-3'>ConfirmPassword</label>
                        <input
                            className='bg-dark text-white p-2 form-control'
                            type="password"
                            name="ConfirmPassword"
                            id="ConfirmPassword"
                            placeholder='ConfirmPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ConfirmPassword}
                        />
                        {
                            formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ?
                            (
                                <h6 className='text-danger m-2'>{formik.errors.ConfirmPassword}</h6>
                            )
                            :
                                null
                        }
                    </div>
                    <button type='submit' className="mx-5 mt-3 px-5 d-inline-block btn btn-dark">Sign In</button>
                    <h3 className='text-white text-center m-3'>Haven't Registered Yet ! <Link to="/SignIn" className='text-primary'>SignIn</Link></h3>
                </form>
            </div>
        </div>
    )
}

export default SignUp