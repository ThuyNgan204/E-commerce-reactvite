import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentSideBar/Login/Login';

function SideBar() {
    const {container, overlay, sideBar, slideSideBar, boxIcon} = styles;
    const {isOpen, setIsOpen} = useContext(SideBarContext);

    const hanleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={container}>
            <div 
                className={classNames({
                [overlay]: isOpen
                })}
                onClick={hanleToggle}
            />
            <div 
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={hanleToggle}>
                    <TfiClose />
                    </div>
                )}
                <Login/>
            </div>
        </div>
    );
}

export default SideBar;