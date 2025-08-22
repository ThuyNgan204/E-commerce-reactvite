import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true, isFullWidth = false, ...props }) {
  const { btn, primaryBtn, secondaryBtn, fullWidthBtn } = styles;
  
  return <button className={classNames(btn, {
    [primaryBtn] : isPrimary,
    [secondaryBtn]: !isPrimary,
    [fullWidthBtn]: isFullWidth
    })}
    {...props}
  >
    {content}
    </button>;
}

export default Button;