import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AvandceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {

  const [ListProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);

  //console.log(ListProducts, 'ListProducts');

  //const { container } = styles;
  return (
    <div>
      <div> 
        {/* </div><div className={container}> */}
        <MyHeader />
        <Banner />
        <Info/>
        <AvandceHeading/>
        <HeadingListProduct data={ListProducts.slice(0,2)}/>
        <PopularProduct data={ListProducts.slice(2,10)}/>

      </div>
    </div>
  );
}

export default HomePage;
