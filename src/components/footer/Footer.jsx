import React from 'react';
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hitesh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <div className="footer__social">
                        <a href="www.instagram.com" className="footer__social-link" target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>

                        <a href="www.dribbble.com" className="footer__social-link" target="_blank">
                            <i class="bx bxl-dribbble"></i>
                        </a>

                        <a href="www.github.com" className="footer__social-link" target="_blank">
                            <i class="bx bxl-github"></i>
                        </a>
                    </div>
                </div>

                <span className="footer__copy">&#169; Hiteshthakur. All rights reserved</span>

            </div>
        </footer>
    )
}