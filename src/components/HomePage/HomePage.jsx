import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AvandceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';

function HomePage() {

  useEffect(() => {
    getProducts();
  }, [])
  const { container } = styles;
  return (
    <div>
      <div> 
        {/* </div><div className={container}> */}
        <MyHeader />
        <Banner />
        <Info/>
        <AvandceHeading/>
        <HeadingListProduct/>

      </div>
    </div>
  );
}

export default HomePage;
