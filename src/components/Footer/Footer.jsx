import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';

function MyFooter() {
const {container, boxNav, img} = styles;

  return <div className={container}>
    <div>
      <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" 
      alt="" 
      width={160}
      height={55}
      />
    </div>

    <div className={boxNav}>
      {dataMenu.map((item) => (
        <div>{item.content}</div>
      ))}
    </div>

    <div>
      <p>Guaranteed safe ckeckout</p>
    </div>

    <div className={img}>
      <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" 
      alt=""
      width={270}
      height={29}
      />
    </div>

    <div>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</div>
  </div>;
}

export default MyFooter;
