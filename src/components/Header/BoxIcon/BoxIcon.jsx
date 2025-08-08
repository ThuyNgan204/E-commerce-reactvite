import styles from '../styles.module.scss';
import fbicon from '@icons/svgs/fbicon.svg';
import igicon from '@icons/svgs/igicon.svg';
import ytbicon from '@icons/svgs/ytbicon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const hadleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbicon;
      case 'ig':
        return igicon;
      case 'ytb':
        return ytbicon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={hadleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
