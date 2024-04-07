
import React from 'react';
import styles from './Project.module.css';
import nirantara from '../../images/projects/nira.png'
import nxcar from '../../images/projects/nxcar.png'
import soulsync from '../../images/projects/soul.png'
import benz from '../../images/projects/benz.png'
import happnow from '../../images/projects/happnow.png'
import hiddenindia from '../../images/projects/hiddenindia.png'
import raretalent from '../../images/projects/raretalent.png'
import cart from '../../images/projects/cart.png'
import shraadhhanand from '../../images/projects/shraadhhanand.png'
import { Fade, Zoom } from 'react-awesome-reveal';
import { Parallax } from 'react-parallax';

export default function Projects() {
    const links = [
        {
            heading: "Nxcar",
            img: nxcar,
            desc: 'Financial solutions for used car buyers and dealers, aiming to make the buying experience as transparent and enjoyable as purchasing a new car. We offer online loans for both direct and dealer purchases, along with services like inspections, extended warranties, insurance, and RC transfers.',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://www.nxcar.in",
        },
        {
            heading: "Nirantara",
            img: nirantara,
            desc: 'Nirantara offers the much-needed empowerment in sustainability thinking, strategy and practice. Sustainability / ESG agendas are growing strong across the world today, and at the same time.',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://www.nirantara.solutions/",
        },
        {
            heading: "Soul Sync",
            img: soulsync,
            desc: 'Transforming the quest for love, we"re dedicated to guiding you to your soulmate journey. With a blend of personalized expertise and data-driven precision, our team at SoulSync ensures every step of your search is joyful and effective. Trust us to match you with your best fit, as we merge the power of data with the personalized touch of our seasoned SoulSyncers',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://thesoulsync.com/",
        },
        {
            heading: "BENZ-packaging",
            img: benz,
            desc: "BENZ-packaging Indulge In The Luxurious Comfort Of Private Villas Nestled Along The Enchanting Goa Coastline And Set Sail On A Private Yachts, Navigating The Azure Waters Of Goa's Coastline, With The Sea Breeze Whispering Tales Of Exploration And Relaxation. Embark On A Journey That Promises To Awaken Your Sense Of Adventure And Unveil The Captivating Mysteries Of India's Diverse Landscapes.",
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://www.benz-packaging.com/",
        },
        {
            heading: "Hidden India",
            img: hiddenindia,
            desc: "Indulge In The Luxurious Comfort Of Private Villas Nestled Along The Enchanting Goa Coastline And Set Sail On A Private Yachts, Navigating The Azure Waters Of Goa's Coastline, With The Sea Breeze Whispering Tales Of Exploration And Relaxation. Embark On A Journey That Promises To Awaken Your Sense Of Adventure And Unveil The Captivating Mysteries Of India's Diverse Landscapes.",
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://hidden-india.vercel.app",
        },
        {
            heading: "Rare Talent",
            img: raretalent,
            desc: 'Developed a pioneering project centered around identifying and nurturing rare talent, defining job roles with precision and foresight. Through meticulous research and innovative methodologies, this initiative aimed to revolutionize traditional hiring practices, ensuring organizations connect with exceptional candidates uniquely suited to their needs.',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://dev.raretalent.ai",
        },
        {
            heading: "Shraadhhanand",
            img: shraadhhanand,
            desc: 'My Portfolio / Resume in NextJS',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://shraadhhanand.vercel.app",
        },
        {
            heading: "Happ Now",
            img: happnow,
            desc: 'HappNow is your Bali passport to adventure! Download now for FREE access to discover experiences happening now with the hottest spots, latest events, coolest sights and best deals in Bali!',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://happnow.com/",
        },
        {
            heading: "E-Commerce",
            img: cart,
            desc: 'E-Commerce - With a cart and other functionality like Amazon and Flipkart with simple stripe [Demo Account]',
            github_link: "https://github.com/somethingofscientist",
            project_link: "https://e-commerce-next-js-pied.vercel.app/",
        },
    ];

    return (
        <>
            <div className={styles.container1} id='project'>
                <Fade>
                    <div className={styles.heading}>
                        A
                        <span className={styles.first_letter_blue}> G</span>limpse
                        <span className={styles.first_letter_blue}> O</span>f
                        <span className={styles.first_letter_blue}> M</span>y
                        <span className={styles.first_letter_blue}> P</span>roject
                    </div>
                </Fade>
                <div className={styles.main_container}>
                    <Parallax
                        className={styles.paralle}
                        bgImage='https://www.polytechnique-insights.com/wp-content/uploads/2022/11/adobestock_402438380-scaled.jpeg'
                        bgImageAlt="software-engineer"
                        strength={200}
                    />
                    <Parallax
                        style={{ width: '100%', height: '50vh' }}
                        bgImage='https://www.polytechnique-insights.com/wp-content/uploads/2022/11/adobestock_402438380-scaled.jpeg'
                        bgImageAlt="software-engineer"
                        strength={200}
                        className={styles.mirror}
                    />
                </div>

            </div>
            <div className={styles.container}>
                <Fade>
                    <div className={styles.heading}>
                        <span className={styles.first_letter_blue}>M</span>y
                        <span className={styles.first_letter_blue}> P</span>rojects
                    </div>
                </Fade>
                <div className={styles.main_container}>
                    {links.map((link, index) => (
                        <div key={index} className={styles.card}>
                            <Zoom>
                                <div className={styles.card_image}>
                                    <img src={link.img} alt="" />
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.card_heading}>{link.heading}</div>
                                    <div className={styles.card_desc}>{link.desc}</div>
                                    <div className={styles.card_link}>
                                        <a href={link.github_link} target='_blank'>
                                            <div className={styles.github_code}>Repo / Code</div>
                                        </a>    
                                        <a href={link.project_link} target='_blank'>
                                            <div className={styles.deloyed_link}>See Live</div>
                                        </a>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
