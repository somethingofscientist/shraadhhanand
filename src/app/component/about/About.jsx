
import React from 'react'
import styles from './About.module.css';
import dp from '../../images/logo/dp.jpg'
import applore from '../../images/logo/applore.png'
import nxcar from '../../images/logo/nxcar.jpg'
import { Fade, Slide, Bounce } from 'react-awesome-reveal';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { Link } from 'react-router-dom';




export default function About() {
    return (
        <section id='about'>
            {/* EXPERIENCE */}
            <Fade>
                <div className={styles.heading}>
                    <span className={styles.first_letter_blue}>E</span>
                    xperience
                </div>
            </Fade>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Fade direction='left'>
                        <div className={styles.right}>
                            <div className={styles.card} id={styles.card_1} >
                                <div className={styles.company}>
                                    <div className={styles.company_logo}>
                                        <img src={applore} alt="" />
                                    </div>
                                    <div className={styles.company_name}>
                                        Applore Technologies
                                    </div>
                                </div>

                                <div className={styles.company_link}>
                                    <Link to='https://applore.in/' target='_blank'>
                                        Applore.in
                                    </Link>
                                </div>

                                <div className={styles.role_container}>
                                    <span className={styles.my_role}>My Role:</span>
                                    <div className={styles.role}>
                                        Full Stack Developer
                                    </div>
                                </div>
                                <div className={styles.time_container}>
                                    <span className={styles.my_role}>Time Period: </span>
                                    <div className={styles.role}>
                                        2 Years
                                    </div>
                                    <span className={styles.my_role}>2022 - 2024</span>
                                </div>
                                <div className={styles.company_description}>
                                    My journey in web development took Link significant leap when I embraced the MERN (MongoDB, Express.js, React.js, Node.js) tech stack. I specialize in crafting exceptional websites with ReactJS and NextJS, leveraging their capabilities to deliver dynamic and intuitive user experiences. Additionally, I've extended my expertise to backend development for mobile applications using technologies like Flutter and React Native, ensuring seamless integration and functionality. With Link passion for innovation and Link drive to push boundaries, I'm committed to creating impactful digital solutions that exceed expectations.
                                </div>
                            </div>
                        </div>
                    </Fade>

                    {/* <Fade direction='right'>
                        <div className={styles.card} id={styles.card_3}>
                            <div className={styles.company}>
                                <div className={styles.company_logo}>
                                    <Image src={nxcar} alt="" />
                                </div>
                                <div className={styles.company_name}>
                                    Nxcar
                                </div>
                            </div>

                            <div className={styles.company_link}>
                                <Link href='https://www.nxcar.in/' target='_blank'>
                                    nxcar.in
                                </Link>
                            </div>

                            <div className={styles.role_container}>
                                <span className={styles.my_role}>My Role:</span>
                                <div className={styles.role}>
                                    FrontEnd Developer
                                </div>
                            </div>
                            <div className={styles.company_description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo alias numquam ipsa repudiandae dolore doloribus quae dolores! Porro quas nisi animi sit necessitatibus suscipit quod consequatur aliquam praesentium expedita.
                            </div>
                        </div>
                    </Fade> */}
                </div>
                {/* /BLUE LINE */}
                <div className={styles.middle}>
                    <div className={styles.point1}></div>
                    <div className={styles.point2}></div>
                    {/* <div className={styles.point3}></div> */}
                </div>

                <Fade direction='right'>
                    <div className={styles.card2} id={styles.card_2}>
                        <div className={styles.company}>
                            <div className={styles.company_logo}>
                                <img src={dp} alt="" />
                            </div>
                            <div className={styles.company_name}>
                                Digital Panther
                            </div>
                        </div>

                        <div className={styles.company_link}>
                            <Link to='https://digitalpanther.in' target='_blank'>
                                DigitalPanther.in
                            </Link>
                        </div>

                        <div className={styles.role_container}>
                            <span className={styles.my_role}>My Role:</span>
                            <div className={styles.role}>
                                FrontEnd Developer
                            </div>
                        </div>
                        <div className={styles.time_container}>
                            <span className={styles.my_role}>Time Period: </span>
                            <div className={styles.role}>
                                1 Year
                            </div>
                            <span className={styles.my_role}>2021 - 2022</span>
                        </div>
                        <div className={styles.company_description}>
                            In my journey as Link frontend developer, I've delved deep into WordPress, learning and refining my skills alongside experienced mentors. My expertise extends to crafting custom components that elevate our clients' projects to new heights. From elegant static websites to dynamic interfaces, I'm well-versed in HTML, CSS, and JavaScript. Harnessing the power of jQuery, I enhance user experiences with seamless interactions. Beyond the frontend realm, my curiosity has led me to explore the intricacies of C++, broadening my understanding of software development. In essence, I'm driven by Link passion for innovation and Link commitment to delivering exceptional digital solutions.
                        </div>
                    </div>
                </Fade>
            </div>

            {/* SKILLS */}
            <Fade>
                <div className={styles.heading} id='about'>
                    <span className={styles.first_letter_blue}>S</span>
                    kills
                </div>
            </Fade>
            <div className={styles.skill_container}>
                <div className={styles.skills_left}>
                    <Slide direction='left'>
                        <div className={styles.skills_heading}>Frontend</div>
                        <div className={styles.skills_links}>
                            <div className={styles.skill_icons}>
                                <p style={{ color: `var(--blue)` }}> <FaReact /> </p>
                                <p style={{ color: `var(--dark)` }}> <TbBrandNextjs /> </p>
                                <p style={{ color: `#e34c26` }}> <ImHtmlFive2 /> </p>
                                <p style={{ color: `#2965f1` }}> <FaCss3 /> </p>
                                <p style={{ color: `rgb(0 143 50)` }}> <IoLogoJavascript /> </p>
                                <p style={{ color: `#764abc` }}> <SiRedux /> </p>
                                <p style={{ color: `green` }}> <SiGreensock /> </p>
                            </div>
                            <div className={styles.skill_names}>
                                <p>React JS</p>
                                <p>Next JS</p>
                                <p>HTML4</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                                <p>Redux Toolkit</p>
                                <p>GSAP</p>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className={styles.skills_left}>
                    <Slide direction='right'>
                        <div className={styles.skills_heading}>Backend</div>
                        <div className={styles.skills_links}>
                            <div className={styles.skill_icons}>
                                <p style={{ color: `green` }}> <FaNodeJs /> </p>
                                <p style={{ color: `green` }}> <SiMongodb /> </p>
                                <p style={{ color: `#A8986F` }}> <SiMongoose /> </p>
                                <p style={{ color: `#75D2F4` }}> <SiExpress /> </p>
                            </div>
                            <div className={styles.skill_names}>
                                <p>Node JS</p>
                                <p>MongoDB</p>
                                <p>Mongoose JS</p>
                                <p>Express JS</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}
