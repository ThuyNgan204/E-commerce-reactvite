import HeaderSideBar from "@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from './styles.module.scss';  
import Button from "@components/Button/Button";

function Wishlist() {
    const {container, boxBtn} = styles;
    return <div className={container}>
        <div>
            <HeaderSideBar icon={<IoMdHeartEmpty style={{fontSize: '25px', color: '#555'}}/>} title={'WISHLIST'}/>
            <ItemProduct/>
        </div>

        <div className={boxBtn}>
            <Button content={'VIEW WISHLISH'} isFullWidth={true} />
            <Button content={'ADD ALL TO CART'} isPrimary={false} isFullWidth={true} />
        </div>
    </div>;
}

export default Wishlist;