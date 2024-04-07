import React, { useState } from 'react';
import styles from './Header.module.css';
import { Slide } from 'react-awesome-reveal';

export default function Header() {
    // State to keep track of active link
    const [activeLink, setActiveLink] = useState('#home');

    // Function to handle click on a link
    const handleLinkClick = (href) => {
        setActiveLink(href);
    };

    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <Slide direction='down'>
                    <a href='#home' onClick={() => handleLinkClick('#home')}>
                        <div className={`${styles.link} ${activeLink === '#home' ? styles.active : ''}`}>
                            Home
                            {activeLink === '#home' && <div className={styles.line}></div>}
                        </div>
                    </a>
                </Slide>
                <Slide direction='down'>
                    <a href="#about" onClick={() => handleLinkClick('#about')}>
                        <div className={`${styles.link} ${activeLink === '#about' ? styles.active : ''}`}>
                            about
                            {activeLink === '#about' && <div className={styles.line}></div>}
                        </div>
                    </a>
                </Slide>
                <Slide direction='down'>
                    <a href='#project' onClick={() => handleLinkClick('#project')}>
                        <div className={`${styles.link} ${activeLink === '#project' ? styles.active : ''}`}>
                            Projects
                            {activeLink === '#project' && <div className={styles.line}></div>}
                        </div>
                    </a>
                </Slide>
                <Slide direction='down'>
                    <a href='#contact' onClick={() => handleLinkClick('#contact')}>
                        <div className={`${styles.link} ${activeLink === '#contact' ? styles.active : ''}`}>
                            contact
                            {activeLink === '#contact' && <div className={styles.line}></div>}
                        </div>
                    </a>
                </Slide>
            </div>
        </div>
    );
}
