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
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg" alt="Product's Picture" />
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg" alt="Product's Picture" className={showImgWhenHover}/>
        
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
        <div className={title}>10K Yellow Gold</div>
        <div className={priceItem}>$99.99</div>
    </div>
}

export default ProductItem;