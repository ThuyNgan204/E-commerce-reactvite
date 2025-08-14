import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

function ProductItem({
    src,
    prevSrc,
    name,
    price
}) {
    const {boxImg, showImgWhenHover, showFncWhenHover, boxIcon, title, priceItem} = styles;
    return <div>
        <div className={boxImg}>
            <img src={src} alt="Product's Picture" />
            <img src={prevSrc} alt="Product's Picture" className={showImgWhenHover}/>
        
        <div className={showFncWhenHover}>
            <div className={boxIcon}>
                <img src={cartIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={heartIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={reLoadIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={cartIcon} alt="" />
            </div>
        </div>
        </div>
        <div className={title}>{name}</div>
        <div className={priceItem}>{price}</div>
    </div>
}

export default ProductItem;