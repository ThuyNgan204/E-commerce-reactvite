import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.webp';
import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import useScrollHandling from '@/hook/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SidebarProvider';

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader
  } = styles;

  const {scrollPosition} = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const {setIsOpen, setType} = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  }

  useEffect(() => {
    setFixedPosition(scrollPosition > 80 ? true : false)
  },[scrollPosition]);

  return (
    <div className={classNames(container, topHeader, {
      [fixedHeader]: fixedPosition
    })}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt='Logo'
            style={{ width: '153px', height: '53px' }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href}/>
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload 
              style={{
                fontSize: '19px' 
              }} 
              onClick={() => handleOpenSideBar('compare')}
            />
            <IoMdHeartEmpty 
              style={{
                fontSize: '23px' 
              }}
              onClick={() => handleOpenSideBar('wishlist')} 
            />
            <PiShoppingCart 
              style={{
                fontSize: '23px' 
              }}
              onClick={() => handleOpenSideBar('cart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
