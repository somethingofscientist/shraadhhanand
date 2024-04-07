import React from 'react'
import styles from '../../../App.module.css';
import { IoLogoWhatsapp } from "react-icons/io";

export default function Whatsapp() {
    const phone = '+918920892992';
    const text = 'Hi, Shraadhhanand just saw your Resume, Portfolio. Can we have a quick chat ?';

    const whatsappUrl = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(text)}`;

    return (
        <a href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
            <div className={styles.fixed}>
                <IoLogoWhatsapp />
            </div>
        </a>
    );
}
