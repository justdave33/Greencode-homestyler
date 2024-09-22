import React, { useState } from 'react';
import { MdVerified } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RiTwitterXLine } from "react-icons/ri";



const Profile = ({ name, profession, desc, skills1, skills2, skills3, images }) => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const socialLinks = [
        { id: 'github', icon: 'icon-tabler-brand-github' },
        { id: 'linkedin', icon: 'icon-tabler-brand-linkedin' },
        { id: 'x', icon: 'icon-tabler-brand-x' },

    ];

    return (
        <section className="profile">
            <header className="profile__header">
                <div className="profile__highlight__wrapper">
                    <div className="profile__highlight">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-school"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                        </svg>
                        1760
                    </div>
                    Students
                </div>
                <div className="profile__avatar">
                    <img src={images} />
                </div>
                <div className="profile__highlight__wrapper">
                    <div className="profile__highlight">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-coin"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                            <path d="M12 7v10" />
                        </svg>
                        149$
                    </div>
                    Hourly Rate
                </div>
            </header>
            <div className="profile__name">
                <h2>
                    {name}
                    <MdVerified className='verification-icon' />
                </h2>
                <p>{profession}</p>
            </div>
            <ul className="social-links">
                {socialLinks.map(link => (
                    <li key={link.id}>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`icon ${link.icon}`}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {<RiTwitterXLine />}
                            </svg>
                        </a>
                    </li>
                ))}
            </ul>
            <main>
                <div className="tabs-wrapper">
                    <ul className="tabs">
                        <li className={activeTab === 'about' ? 'active' : ''}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('about'); }}>About me</a>
                        </li>
                        <li className={activeTab === 'skills' ? 'active' : ''}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('skills'); }}>Skills</a>
                        </li>
                        <li className={activeTab === 'reviews' ? 'active' : ''}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('reviews'); }}>Reviews</a>
                        </li>
                    </ul>
                </div>
                <div id="about-content" className={`tab-content ${activeTab === 'about' ? 'tab-content--active' : ''}`}>
                    <p>
                        {desc}
                    </p>
                    <h3 className='help-with'>I can help with 🤝</h3>
                    <ul className="content-links">
                        <li><a href="#career">{skills1}</a></li>

                        <li><a href="#web-development">{skills2}</a></li>
                    </ul>
                </div>
                <div id="skills-content" className={`tab-content ${activeTab === 'skills' ? 'tab-content--active' : ''}`}>
                    <p>
                        My content is focused on the latest Interior designs and tools. Here is the overview 👨‍💻
                    </p>
                    <ul className="content-links">
                        <li><a href="#html-css">{skills1}</a></li>
                        <li><a href="#javascript">{skills2}</a></li>
                        <li><a href="#react-and-nextjs">{skills3}</a></li>

                    </ul>
                </div>
                <div id="reviews-content" className={`tab-content ${activeTab === 'reviews' ? 'tab-content--active' : ''}`}>
                    <p>Here are some of the reviews from my Clients </p>
                    <ul className="reviews">
                        <li>
                            <article className="review">
                                <div className="review__avatar">
                                    {/* <img src={require('./assets/imgcard1.jpg')} alt="Avatar" /> */}
                                </div>
                                <div className="review__content">
                                    <h4>Joe Doe</h4>
                                    <p>
                                        I'm absolutely thrilled with the interior design of my home! The decor is modern, elegant, and perfectly captures my personal style.
                                    </p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className="review">
                                <div className="review__avatar">
                                    {/* <img src={require('./assets/imgcard2.jpg')} alt="Avatar" /> */}
                                </div>
                                <div className="review__content">
                                    <h4>Jane Doe</h4>
                                    <p>
                                        I was blown away by the transformation of my living space! The interior decor is not only beautiful, but also functional and comfortable. The designer truly listened to my needs and preferences,
                                    </p>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </main>
            <Button className="btn btn--primary">Book Me</Button>
        </section>
    );
};

export default Profile;
