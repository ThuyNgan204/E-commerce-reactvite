import InputCommon from "@components/InputCommon/InputCommon";
import styles from './styles.module.scss'; 
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register } from "@/apis/authService";

function Login() {
    const {container, title, boxRememberMe, lostPw} = styles;
    const [isRegister, setIsRegister] = useState(false);
    const {toast} = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values) => {
            if (isLoading) return;

            if(isRegister) {
                const {email: username, password} = values;

                setIsLoading(true);
                await register({username, password})
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    }

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon 
                    id='email' 
                    lable='Email' 
                    type='text' 
                    isRequired
                    formik={formik}
                />

                <InputCommon 
                    id='password' 
                    lable='Password' 
                    type='password' 
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon 
                        id='cfmpassword' 
                        lable='Confirm password' 
                        type='password' 
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox'/>
                        <span>Remember me</span>
                    </div>
                )}
                
                <Button 
                    content={isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'} 
                    isFullWidth={true} 
                    type='submit'
                    //onClick={() => toast.success('Success')}
                    />
            </form>
            
            <Button 
                    content = {isRegister 
                        ? 'Already have an account' 
                        : "Don't have an account?"
                    } 
                    isFullWidth={true} isPrimary={false} 
                    type='submit'
                    style={{marginTop: '10px'}}
                    onClick = {handleToggle}
                />

            {!isRegister && (
                <div className={lostPw}>Lost your password?</div>
            )}

        </div>
    );
}

export default Login;