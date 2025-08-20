import React, { useRef } from 'react';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateX from '@components/SaleHomepage/translateXImage';

function SaleHomepage() {
    // Create a ref for the main container
    const containerRef = useRef(null);
    
    // Pass the ref to your custom hook
    const { translateXPosition } = useTranslateX(containerRef);

    return (
        // Attach the ref to the container div
        <div className={styles.container} ref={containerRef}>
                <div
                className={styles.boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>

            <div className={styles.textSection}>
                <h2 className={styles.title}>Sale Of The Year</h2>
                <p className={styles.des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <div className={styles.boxBtn}>
                    <Button content={'Read more'} isPrimary={false}/>
                </div>
            </div>
                <div
                className={styles.boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
    );
}

export default SaleHomepage;