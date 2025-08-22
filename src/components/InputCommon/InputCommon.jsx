import { useState } from 'react';
import styles from './styles.module.scss';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function InputCommon({lable, type, isRequired = false, ...props }) {
    const {container, labelInput, boxInput, boxIcon, errMsg} = styles;
    const isPassword = type === 'password'; //const isPassword = type === 'password' ? true : false;
    const [showPassword, setShowPassword] = useState(false);
    const {formik, id} = props;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    return ( 
        <div className={container}>
            <div className={labelInput}>{lable} {isRequired && <span>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowTextPassword} {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                )}

                {isErr &&
                <div className={errMsg}>{messageErr}</div>
                }    
            </div>
        </div>
     );
}

export default InputCommon;