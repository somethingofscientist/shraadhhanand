
import React from 'react';
import styles from './Header.module.css';
import { Slide } from 'react-awesome-reveal';

export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <Slide direction='down'>
                    <a href='#home'>
                        <div className={styles.link}>Home</div>
                    </a>
                </Slide>
                <Slide direction='down' >
                    <a href="#about">
                        <div className={styles.link}>
                            about
                        </div>
                    </a>
                </Slide>
                <Slide direction='down'>
                    <a href='#project'>
                        <div className={styles.link}>Projects</div>
                    </a>
                </Slide>
                <Slide direction='down'>
                    <a href='#contact'>
                        <div className={styles.link}>contact </div>
                    </a>
                </Slide>
            </div>
        </div>
    );
}
