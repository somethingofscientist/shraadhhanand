import React, { useState } from 'react'
import styles from './Contact.module.css'
import { toast } from 'react-toastify';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { IoSendSharp } from "react-icons/io5";
import { SiAxios } from 'react-icons/si';
import axios from 'axios';

export default function Contact() {
    // const VITE_BACKEND_URL = 'http://localhost:3002/api/v1'
    const VITE_BACKEND_URL = 'https://portfolio-backend-beryl-two.vercel.app/api/v1'
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${VITE_BACKEND_URL}/send-mail`, formData);
            if (response.data.message == 'successful') {
                toast.dismiss();
                toast('✅ Message Sent', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    theme: "light"
                });
                // setFormData({
                //     name: "",
                //     email: "",
                //     message: ""
                // });
            } else {
                toast.error('❌ Failed to send message', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    theme: "light"
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('❌ Failed to send message', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "light"
            });
        }
    }

    return (
        <>
            <div className={styles.container} id='contact'>
                <Fade>
                    <div className={styles.heading}>
                        <span className={styles.first_letter_blue}>C</span>ontact
                        <span className={styles.first_letter_blue}> M</span>e
                    </div>
                </Fade>
                <div className={styles.main_container}>
                    <form onSubmit={handleSubmit}>
                        <Slide direction='up'>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                name='name'
                                className={styles.input_field}
                                placeholder='Enter Name *' />
                            {/* <div className={styles.error}>Name is required</div> */}
                        </Slide>
                        <Slide direction='up'>
                            <input
                                type="email"
                                required
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input_field}
                                placeholder='Enter Email *' />
                            {/* <div className={styles.error}>Email is required</div> */}
                        </Slide>
                        <Slide direction='up'>
                            <input
                                type="text"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.input_field}
                                placeholder='Any Message For Me' />
                        </Slide>
                        <Slide direction='right'>
                            <button
                                type='submit'
                                className={styles.submit_button}>
                                Send Message <IoSendSharp className={styles.send_button} />
                            </button>
                        </Slide>
                    </form>
                </div>
            </div>
        </>
    )
}
