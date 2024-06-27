import React from 'react';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
    // const spiderman = 'https://dgbijzg00pxv8.cloudfront.net/a9aabf8a-00d2-48e9-a783-49f74989ed3f/000000-0000000000/79263197302037747243108283568996669137678034291548449945754562690773164230768/ITEM_PREVIEW1.gif'
    const spiderman = 'https://i.gifer.com/origin/1a/1afccc0cf29b779d08c9775b2f40c228_w200.gif'
    return (
        <div className={styles.container}>
            <div className={styles.text1}>
                404 || Not Found
            </div>
            <div className={styles.image}>
                <img src={spiderman} alt="shraadhhanand-oops-page" />
            </div>
        </div>
    )
}
