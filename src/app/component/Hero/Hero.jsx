
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css';
import TextTransition, { presets } from 'react-text-transition';


export default function Hero() {
    const phone = '+918920892992';
    const text = 'Hi, Shraadhhanand just saw your Resume, Portfolio. Can we have a quick chat ?';
    const whatsappUrl = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(text)}`;

    const TEXTS = [
        "Enter the Codeverse: Where ReactJS Wizards and MERN Magicians Converge.",
        "Unleashing Code Magic: Transforming Pixels into Possibilities.",
        "Just as gods shape worlds, developers shape digital landscapes.",
    ];
    const TEXTS2 = [
        "Full Stack Developer",
        "Full Stack Developer",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={styles.container} id='home'>
            <div className={styles.left}>
                <div className={styles.tagline0}>
                    Hi, I Am
                    <TextTransition
                        direction='down'
                        style={{ color: `var(--blue)` }}
                        springConfig={presets.wobbly}>
                        {TEXTS2[index % TEXTS2.length]}
                    </TextTransition>
                </div>
                <div className={styles.tagline1}>
                    Shr<span className={styles.blue_text}>aa</span>dhh<span className={styles.blue_text}>a</span> n<span className={styles.blue_text}>a</span>nd
                </div>

                <div className={styles.tagline2}>
                    <TextTransition
                        direction='down'
                        springConfig={presets.molasses}>
                        {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                </div>

                <a href={whatsappUrl} target='_blank'>
                    <div className={styles.cta}>
                        Let's Talk
                    </div>
                </a>
            </div>
          
        </div>
    )
}
