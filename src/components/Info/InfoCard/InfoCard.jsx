import styles from '../styles.module.scss';
import truckicon from '@icons/svgs/truckicon.svg';

function InfoCard({ title, description, src }) {
  const { containerCard, containerContent, titles, des } = styles;

  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt='TruckIcon' />
      <div className={containerContent}>
        <div className={titles}>{title}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
