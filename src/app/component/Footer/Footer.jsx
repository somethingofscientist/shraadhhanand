import React from 'react'
import styles from './Footer.module.css';

import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";



export default function Footer() {
    const phone = '+918920892992';
    const text = 'Hi, Shraadhhanand just saw your Resume, Portfolio. Can we have a quick chat ?';
    const whatsappUrl = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(text)}`;


    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.left}>
                    Shraadhhanand
                </div> */}
                <div className={styles.right}>
                    <div className={styles.links}>
                        <a
                            href="#home"
                        >
                            <div className={styles.link}>Home</div>
                        </a>
                        <a
                            href="#about"
                        >
                            <div className={styles.link}>About</div>
                        </a>
                        <a
                            href="#project"
                        >
                            <div className={styles.link}>Projects</div>
                        </a>
                        <a
                            href="#contact"
                        >
                            <div className={styles.link}>Contact</div>
                        </a>
                    </div>
                    <div className={styles.links_icon}>
                        <a href='https://www.linkedin.com/in/shraadhha-nand-98933b237/' target='_blank'>
                            <div className={styles.link_icons}><TfiLinkedin /></div>
                        </a>
                        <a href={whatsappUrl} target='_blank'>
                            <div className={styles.link_icons}><IoLogoWhatsapp /></div>
                        </a>
                        <a href='https://github.com/somethingofscientist' target='_blank'>
                            <div className={styles.link_icons}><FaGithub /></div>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=1shraddhanand@gmail.com" target='_blank'>
                            <div className={styles.link_icons}><SiGmail /></div>
                        </a>
                    </div>
                    <div className={styles.tagline}>
                        Copyright © 2024 Shraadhha nand Inc. All rights reserved
                    </div>
                </div>
            </div>
        </>
    )
}
