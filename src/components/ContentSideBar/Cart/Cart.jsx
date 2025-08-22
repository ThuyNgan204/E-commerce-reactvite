import HeaderSideBar from "@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { PiShoppingCart } from "react-icons/pi";
import styles from './styles.module.scss';  
import Button from "@components/Button/Button";

function Wishlist() {
    const {container, boxBtn, price} = styles;
    return <div className={container}>
        <div>
            <HeaderSideBar icon={<PiShoppingCart style={{fontSize: '25px', color: '#555'}}/>} title={'CART'}/>
            <ItemProduct/>
        </div>

        <div className={boxBtn}>
            <div className={price}>
                <p>Subtotal:</p>
                <p>$119.99</p>
            </div>

            <Button content={'VIEW CART'} isFullWidth={true} />
            <Button content={'CHECKOUT'} isPrimary={false} isFullWidth={true} />
        </div>
    </div>;
}

export default Wishlist;