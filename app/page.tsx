import React from 'react';
import styles from './home.module.scss';

export default function Home() {

    return (
        <div className={styles.container}>
            {'test'}
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}>{'Item 1'}</li>
                    <li className={styles.li}>{'Item 2'}</li>
                    <li className={styles.li}>{'Item 3'}</li>
                    <li className={styles.li}>{'Item 4'}</li>
                    <li className={styles.li}>{'Item 5'}</li>
                    <li className={styles.li}>{'Item 6'}</li>
                    <li className={styles.li}>{'Item 7'}</li>
                    <li className={styles.li}>{'Item 8'}</li>
                </ul>
            </div>
        </div>
    );
}
