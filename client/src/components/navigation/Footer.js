import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="footer__icons">
            <a href="" target="_blank"><i className="fab fa-youtube footer__icons__icon"></i></a>
            <a href="" target="_blank"><i className="fab fa-twitter footer__icons__icon"></i></a>
            <a href="" target="_blank"><i className="fab fa-github footer__icons__icon"></i></a>
            <a href="" target="_blank"><i className="fab fa-linkedin footer__icons__icon"></i></a>
        </div>

        <ul className="footer__list">
            <li className="footer__list__item"><a href="" className="footer__list__item__link">skills</a></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><a href="" className="footer__list__item__link">work history</a></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><a href="" className="footer__list__item__link">projects</a></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><a href="" className="footer__list__item__link">YouTube</a></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><a href="" className="footer__list__item__link">contact</a></li>
        </ul>
    </div>
);

export default Footer;