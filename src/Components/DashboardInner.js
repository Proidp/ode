import React from 'react';
import { Link } from 'react-router-dom';


const DashboardInner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <div className="yrbl__wrap">
            <img alt="Friendly gerbil" className="yrbl" src="https://spee.ch/spaceman-happy:a.png?quality=85&amp;height=457&amp;width=457"/>
            <div>
                <div className="yrbl__content">
                <h2 className="section__title">You haven't created a channel yet, let's fix that!</h2>
                <div className="section__subtitle"></div>
                </div>
                <div className="section__actions">
                <Link className="button button--primary" aria-label="Create A Channel" to="/channel/new">
                    <span className="button__content">
                    <span dir="auto" className="button__label">Create A Channel</span>
                    </span>
                </Link>
                </div>
            </div>
            </div>
        </main>
        <footer className="footer">
            <ul className="navigation__tertiary footer__links">
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Community Guidelines">
                <span className="button__content">
                    <span dir="auto" className="button__label">Community Guidelines</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="FAQ">
                <span className="button__content">
                    <span dir="auto" className="button__label">FAQ</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Support">
                <span className="button__content">
                    <span dir="auto" className="button__label">Support</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Terms">
                <span className="button__content">
                    <span dir="auto" className="button__label">Terms</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Privacy Policy">
                <span className="button__content">
                    <span dir="auto" className="button__label">Privacy Policy</span>
                </span>
                </Link>
            </li>
            <li className="footer__link" id="gdprPrivacyFooter">
                <button aria-label="Cookie Settings" className="button button--no-style" type="button">
                <span className="button__content">
                    <span dir="auto" className="button__label">Cookie Settings</span>
                </span>
                </button>
            </li>
            </ul>
        </footer>
        </div>
      </>
  )
};

export default DashboardInner;
