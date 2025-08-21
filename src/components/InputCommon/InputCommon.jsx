import { useState } from 'react';
import styles from './styles.module.scss';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function InputCommon({lable, type, isRequired = false}) {
    const {container, labelInput, boxInput, boxIcon} = styles;
    const isPassword = type === 'password'; //const isPassword = type === 'password' ? true : false;
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    return ( 
        <div className={container}>
            <div className={labelInput}>{lable} {isRequired && <span>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowTextPassword}/>
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                )}
            </div>
        </div>
     );
}

export default InputCommon;