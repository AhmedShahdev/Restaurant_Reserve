import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi'
const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">ABOUT US</h1>
                            <p>The only thing we're serious about is food.</p>
                        </div>
                        <p className="mid">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque natus illum, aliquid neque consectetur obcaecati, eos harum totam voluptatibus voluptate reprehenderit sit placeat consequatur, dignissimos corporis adipisci magni cupiditate In qui sed quas natus! Harum error similique eaque? Illum repudiandae dolor culpa maxime facilis quaerat voluptatibus cumque, 
                        </p>
                    </div>
                    <div className="banner">
                        <img src="about.png" alt="about" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About