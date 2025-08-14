import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss'
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/Productitem";

function HeadingListProduct({data}) {
    const {container, containerItem} = styles;

    //console.log(data);
    return <MainLayout>
        <div className={container}>
            <CountdownBanner/>
            <div className={containerItem}>
                {data.map((item) => (
                    <ProductItem key={item.id} 
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </MainLayout>;
}

export default HeadingListProduct;