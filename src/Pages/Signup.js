import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
      <>
      <div className='main-wrapper'>
      <header className="header header--minimal">
        <div className="header__navigation">
            <div className="header__menu--left">
            <button aria-label="Skip Navigation" className="button button--link skip-button" type="button">
                <span className="button__content">
                <span dir="auto" className="button__label">Skip Navigation</span>
                </span>
            </button>
            <Link className="button button--no-style header__navigationItem--logo" title="Home" aria-label="Home" to="/">
                <span className="button__content">
                <svg size="16" className="icon icon--OdyseeLogoDarkText header__logo"  data-name="Layer 1" id="Layer_1" stroke-width="0" viewBox="0 0 397 119.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>

                    <linearGradient id="linear-gradient" x1="45.6" y1="9.82" x2="88.36" y2="157.76" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ef1970"></stop>
                        <stop offset="0.14" stop-color="#f23b5c"></stop>
                        <stop offset="0.45" stop-color="#f77d35"></stop>
                        <stop offset="0.7" stop-color="#fcad18"></stop>
                        <stop offset="0.89" stop-color="#fecb07"></stop>
                        <stop offset="1" stop-color="#ffd600"></stop>
                    </linearGradient>
                    <clipPath id="clip-path">
                        <rect className="cls-1--darkLogo" x="8.45" y="8.03" width="103.05" height="103.05" rx="51.52"></rect>
                    </clipPath>
                    </defs>
                    <path d="M216,36.55A105.13,105.13,0,0,0,214.51,25c-.21-1.11-.45-2.47-.78-4.44s-.61-3.46-.83-4.51-.45-2-.68-2.85A5,5,0,0,0,211,10.74a4.62,4.62,0,0,0-1.61-1,6.27,6.27,0,0,0-2-.28c-.78,0-3.16,0-4.16,1.74-.39.67-.74,1.81-.74,5.57a14.41,14.41,0,0,0,.14,2.48l.14,1.12a40.39,40.39,0,0,0,.89,5.22,2.86,2.86,0,0,0,.12.35,11.3,11.3,0,0,0,.15,1.36,12.27,12.27,0,0,0,.56,2.47,6.14,6.14,0,0,1,.3,1.78c.48,5.45.35,6.88.3,7.28a1.07,1.07,0,0,1-.48.07c-1.4,0-15.06,4-18.61,6.36a22.12,22.12,0,0,0-7.78,8C176.52,56.48,176,74.82,176,75c-.09,4.22.64,6.82,2.27,8.14l.32.35a18.94,18.94,0,0,0,11.85,6.2,88.44,88.44,0,0,0,14.48.73c1.79,0,3.48,0,5.06,0h.3l7.36-2.4-.24-14C217.36,67.55,216.89,46.57,216,36.55ZM207.2,74.16c-.11.88-.2,1.55-.27,2a4.85,4.85,0,0,1-.28,1c-.07.17-.13.29-.14.33l-.24.1a2.82,2.82,0,0,1-.8.15c-.42,0-1,0-1.84,0a45.33,45.33,0,0,1-9.91-1.43,30.77,30.77,0,0,1-5.88-1.77h0c-.8-1.88,1.22-16,6.72-20.09s8.27-4.54,9.65-4.11c.38.12,1.54.48,2.33,3,.2,1,.41,7.6.52,11.15.08,2.47.14,4.51.19,5.14A22.23,22.23,0,0,1,207.2,74.16Z"></path>
                    <path d="M251.17,34.44A8.26,8.26,0,0,0,248.7,38l0,.06a41,41,0,0,1-2.6,5.89,10.94,10.94,0,0,0-1.38,4.79A4.41,4.41,0,0,1,244.4,50a5.3,5.3,0,0,1-.55,1.17l-.44-.28a26.83,26.83,0,0,1-2.5-2.09c-1-1-2.35-2.29-4-4-7.07-7.19-11.28-9.75-14.07-8.62-1.59.65-2.4,2.31-2.4,4.94,0,1.63.85,3.69,2.61,6.27a96.53,96.53,0,0,0,7.64,9.36c5.21,5.9,8.73,7.54,10.36,8.23a21.38,21.38,0,0,1-.37,4.4,45.35,45.35,0,0,1-1.89,5.06,42,42,0,0,0-2.5,6.39,20.24,20.24,0,0,0-1.06,5.49c0,2.11.3,3.41,1,4.22a3.19,3.19,0,0,0,2.57,1.06,5.87,5.87,0,0,0,1.21-.13,7.75,7.75,0,0,0,3-1.1,5.46,5.46,0,0,0,2.12-2.15c.18-.34.58-1.13,1.19-2.37s1-2.08,1.24-2.56a25,25,0,0,0,1.92-5.43c.7-2.58,1.34-5.32,1.88-8.11s1.44-6,2.48-9.67,2-6.73,2.85-9.09c1.16-3.07,2-5.52,2.56-7.5a19.84,19.84,0,0,0,.88-5.21,5.07,5.07,0,0,0-1.35-3.85C257,32.86,253.27,32.86,251.17,34.44Z"></path>
                    <path d="M296.7,35.06a3.39,3.39,0,0,0-1.31-.87A5.37,5.37,0,0,0,294,33.8c-.33,0-.87-.08-1.61-.12s-1.39-.06-2-.08-1.56,0-2.75,0c-6,0-10.18.83-12.84,2.55a17.31,17.31,0,0,0-7.18,8.16c-1.41,3.3-2.13,7.74-2.13,13.17l-.12,10.68,11,3.6c3.51,1.15,5.37,1.87,6.35,2.3a15.28,15.28,0,0,1-2.6.73,24.58,24.58,0,0,1-5.24.57,38,38,0,0,0-4.87.21A4.88,4.88,0,0,0,267,76.75a4,4,0,0,0-1,2.93A5.37,5.37,0,0,0,268.22,84a11.22,11.22,0,0,0,4.94,2,26.55,26.55,0,0,0,4.73.4l1.2,0a25.46,25.46,0,0,0,6.49-1.14,20.68,20.68,0,0,0,5.84-2.8,13.33,13.33,0,0,0,3.76-3.92,10.08,10.08,0,0,0,1.06-5,9,9,0,0,0-3.14-7.37c-1.87-1.5-5.33-3-10.56-4.44-5.54-1.67-6.51-2.49-6.7-2.71s-.7-1.29.68-4.65a23.14,23.14,0,0,1,5.14-7.64c2.55-2.54,3.78-3.27,4.28-3.48s1.66-.46,4.33-.08c1,.15,1.77.25,2.27.3a9.47,9.47,0,0,0,1.76,0,4.44,4.44,0,0,0,1.61-.37,2.83,2.83,0,0,0,1.24-1.33,4,4,0,0,0,.42-1.58c0-.35,0-.87,0-1.57V37.65a4,4,0,0,0-.26-1.4A3.59,3.59,0,0,0,296.7,35.06Z"></path>
                    <path d="M341.77,41.73a8.9,8.9,0,0,0-1-1.91,13,13,0,0,0-1.64-2l-1.61-1.68a19.65,19.65,0,0,0-5.45-4.2,16.56,16.56,0,0,0-6.49-1,19.81,19.81,0,0,0-11.31,3.24h0a30.8,30.8,0,0,0-6.52,5.73,17.93,17.93,0,0,0-3.4,6.7,45.67,45.67,0,0,0-1.29,9.6c-.57,10.37,1.22,18.06,5.31,22.88,3.78,4.44,9.71,6.69,17.69,6.69.81,0,1.64,0,2.49-.07l3.38-.25a21.33,21.33,0,0,0,2.43-.32,7.45,7.45,0,0,0,2-.56,3.81,3.81,0,0,0,1.33-1.14,3.5,3.5,0,0,0,.74-1.75,14.71,14.71,0,0,0,.07-1.59c0-1.39-.17-3.34-1.63-4.21-.67-.39-1.77-.68-5.28-.24a16.13,16.13,0,0,1-9-1.7,13.27,13.27,0,0,1-6.38-5.67l-.84-1.58,5.84-.64a34.24,34.24,0,0,0,8-1.56,27.41,27.41,0,0,0,6.56-3.33c1.4-1,2.42-1.75,3.07-2.31a8.54,8.54,0,0,0,2-2.56,9.49,9.49,0,0,0,1.05-3.07c.13-.87.26-2.23.37-4.08q.12-1.87.12-3a18.62,18.62,0,0,0-.15-2.37A11.51,11.51,0,0,0,341.77,41.73ZM316.33,53.11l-1.68-1.74,4.24-4.11A32,32,0,0,1,323,43.63a20.31,20.31,0,0,1,2-1.27,5,5,0,0,1,1.52.92,18.22,18.22,0,0,1,2.93,2.8l2.54,3-2.26,2a14.46,14.46,0,0,1-3.48,2.14,17.43,17.43,0,0,1-4,1.4,9.45,9.45,0,0,1-3.66.14A5.19,5.19,0,0,1,316.33,53.11Z"></path>
                    <path d="M387.35,46.9a10.38,10.38,0,0,0-.43-2,7.76,7.76,0,0,0-1-1.92,12.53,12.53,0,0,0-1.42-1.8l-1.82-1.91a19.86,19.86,0,0,0-5.46-4.2,16.66,16.66,0,0,0-6.48-1,19.84,19.84,0,0,0-11.32,3.24h0A31.34,31.34,0,0,0,352.91,43a18.23,18.23,0,0,0-3.4,6.7,45.1,45.1,0,0,0-1.28,9.6c-.57,10.37,1.21,18.07,5.31,22.88,3.77,4.44,9.71,6.69,17.68,6.69.81,0,1.64,0,2.49-.07l3.39-.25a19.3,19.3,0,0,0,2.43-.32,7.71,7.71,0,0,0,2-.55,3.82,3.82,0,0,0,1.34-1.14,3.54,3.54,0,0,0,.74-1.76,14.71,14.71,0,0,0,.07-1.59c0-1.39-.17-3.34-1.64-4.21-.67-.39-1.77-.68-5.27-.24a16.09,16.09,0,0,1-9-1.7,13.29,13.29,0,0,1-6.37-5.67l-.85-1.57,5.85-.65a34.15,34.15,0,0,0,8-1.56,27.23,27.23,0,0,0,6.56-3.33c1.4-1,2.43-1.75,3.07-2.3a8.82,8.82,0,0,0,2-2.56,9.87,9.87,0,0,0,1-3.08c.13-.87.26-2.23.37-4.08.08-1.25.11-2.24.11-3A18.62,18.62,0,0,0,387.35,46.9Zm-25.86,9.34-1.68-1.74L364,50.39a33.45,33.45,0,0,1,4.15-3.63,18.65,18.65,0,0,1,2-1.26,5,5,0,0,1,1.52.91,18.17,18.17,0,0,1,2.92,2.8l2.55,3-2.27,2a15.16,15.16,0,0,1-3.47,2.14,17.83,17.83,0,0,1-4,1.39,9.23,9.23,0,0,1-3.66.14A5.08,5.08,0,0,1,361.49,56.24Z"></path>
                    <path d="M135.65,41.29a21.51,21.51,0,0,1,5.44-1,82,82,0,0,1,8.25-.4c4.56,0,7.65.16,9.28.62A14.23,14.23,0,0,1,164.13,44a16.32,16.32,0,0,1,3.68,5.32,31.66,31.66,0,0,1,1.73,8.12,48.43,48.43,0,0,1-.46,15.29q-1.43,7.38-4.3,9a60,60,0,0,0-7.43,5.2,13.3,13.3,0,0,1-5,2.69,22.19,22.19,0,0,1-6.71-.09,23.84,23.84,0,0,1-7.13-2.26A28.75,28.75,0,0,1,132,82.05q-1.89-1.86-2.7-2.7a14.72,14.72,0,0,1-1.73-2.23A11.59,11.59,0,0,1,126.4,75a15.75,15.75,0,0,1-.56-2.61,22.94,22.94,0,0,1-.29-3.4V64.15Q125.55,45.13,135.65,41.29Zm20,8.79q-4.53-4.3-5.66-4.3c-1.62,0-3.68,1-6.19,2.83a25.06,25.06,0,0,0-6.07,6.2q-3.8,5.53-3.42,10t5.1,9.61l5.23,5.67,6.41-2.93A17.64,17.64,0,0,0,159.5,70a14.09,14.09,0,0,0,1.71-10A18.78,18.78,0,0,0,155.67,50.08Z"></path>
                    <rect className="cls-2--darkLogo" x="8.45" y="8.03" width="103.05" height="103.05" rx="51.52"></rect>
                    <g className="cls-3--darkLogo">
                    <path className="cls-4--darkLogo" d="M17.12,48.17a.9.9,0,0,0,.31-1.31,1,1,0,0,0-1.32-.3,1,1,0,0,0,1,1.61ZM73.24,23a.88.88,0,0,0,.3-1.32,1,1,0,0,0-1.31-.3,1,1,0,0,0-.3,1.31A1,1,0,0,0,73.24,23ZM85.17,59.4a1.09,1.09,0,1,0,1.32-.81A1.13,1.13,0,0,0,85.17,59.4ZM69.4,96.2c-.41-.2-.81.1-1,.61a.83.83,0,1,0,1-.61Zm-45.89-68a.51.51,0,1,0,.2-1c-.3,0-.61.1-.61.4A.45.45,0,0,0,23.51,28.19Zm3.22,50.12c-.41.1-.71.4-.61.81a.69.69,0,0,0,.81.6c.4,0,.61-.4.61-.81A.69.69,0,0,0,26.73,78.31ZM94,44l-.61,2.63L91,47.77l2.62.61,1.12,2.32.6-2.63L97.71,47l-2.63-.61ZM59.29,22.39a6,6,0,0,0-1-1.52,1.11,1.11,0,0,0-1.52,0,1.09,1.09,0,0,0,0,1.52,4.6,4.6,0,0,1,.61,1,1.18,1.18,0,0,0,1.51.51A1.15,1.15,0,0,0,59.29,22.39Zm.5,4.35a1,1,0,0,0-.6,1.41,4.59,4.59,0,0,1,.3,3,1.14,1.14,0,0,0,.91,1.31h.2a1,1,0,0,0,1-.91,6.14,6.14,0,0,0-.4-4.24A1,1,0,0,0,59.79,26.74Zm37.87,66.4a128,128,0,0,0-6-18.49C89.59,69.43,82.85,63,78.5,59.8A3.16,3.16,0,0,1,78.19,55C82.44,50.9,90,43,92.45,38.87c1.6-2.92,4.75-8.46,4.89-13.26.31-3.57-.18-7.7-4.91-9.59a6.9,6.9,0,0,0-7.14.92c-3,2.06-4,7.7-6.07,13.32-2.44,6.48-6.28,7.3-8.31,7.3s-.7-2.14-5.35-15.59-17-11-26.29-5.44c-11.83,7.07-6.58,22.14-3.64,31.85C34,50,27.74,51.21,22.08,54.24c-3.52,1.89-6.53,3.11-9.47,5.47-4.09,3.29-5.86,7-4.44,12.06a7.22,7.22,0,0,0,3.58,4.09c3.34,1.52,8.26-.69,15.79-6.35A46.19,46.19,0,0,1,39.47,64s4.55,7,8.8,15.27-4.56,11-5.47,11S28,88.92,31.18,100.65s19.92,7.48,28.51,1.82,6.47-24.16,6.47-24.16C74.55,77,77.18,85.89,78,90.44s-1,12.44,7.48,12.64a13.28,13.28,0,0,0,3.54-.51c4.58-1.06,7.23-3.36,8.32-5.81A5.84,5.84,0,0,0,97.66,93.14Zm-42.32-55c-8.59,3.24-12.74-1-13.24-8.79-.61-8.8,7.58-11,7.58-11,9.1-3,11.53,1.31,13.65,7.78S63.84,34.93,55.34,38.16Z"></path>
                    </g>
                </svg>
                </span>
            </Link>
            </div>
            <div className="header__menu--right">
            <Link title="Go Back" aria-label="Go Back" className="button button--alt" type="button" to='/'>
                <span className="button__content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--X" >
                    <g>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    </g>
                </svg>
                </span>
            </Link>
            </div>
        </div>
    </header>

    <div className="main-wrapper__inner main-wrapper__inner--auth">
  <div className="sidebar--pusher--filepage">
    <main id="main-content" className="main main--auth-page">
      <section className="main--contained">
        <div className="main__sign-up main__sign-up--graphic">
          <section className="card card__multi-pane">
            <div className="card__first-pane">
              <div className="card__header--between">
                <div className="card__title-section">
                  <div>
                    <h2 className="card__title">Join</h2>
                  </div>
                </div>
                <div className="card__title-actions-container"></div>
              </div>
              <div className="card__main-actions">
                <div className="">
                  <form novalidate="" className="section">
                    <fieldset-section>
                      <label for="sign_up_email">Email</label>
                      <input type="email" id="sign_up_email" placeholder="yourstruly@example.com" value=""/>
                    </fieldset-section>
                    <fieldset-section>
                      <label for="sign_in_password">Password</label>
                      <input type="password" id="sign_in_password" value=""/>
                    </fieldset-section>
                    <div className="checkbox">
                      <input id="youtube_sync_checkbox" type="checkbox"/>
                      <label for="youtube_sync_checkbox">Sync my YouTube channel</label>
                    </div>
                    <div className="section__actions">
                      <button aria-label="Sign Up" className="button button--primary button--disabled" disabled="" type="submit">
                        <span className="button__content">
                          <span dir="auto" className="button__label">Sign Up</span>
                        </span>
                      </button>
                      <Link to="/login" aria-label="Log In" className="button button--link" type="button">
                        <span className="button__content">
                          <span dir="auto" className="button__label">Log In</span>
                        </span>
                      </Link>
                    </div>
                    <p className="help--card-actions">By creating an account, you agree to our <Link target="_blank" rel="noopener noreferrer" to="" className="button button--link" aria-label="terms">
                        <span className="button__content">
                          <span dir="auto" className="button__label">terms</span>
                        </span>
                      </Link> and confirm you're over the age of 13. </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="card__second-pane">
              <div className="signup-image">
                <img alt="Odysee login" src="https://cdn.lbryplayer.xyz/speech/odysee-sign-up:d.png"/>
              </div>
            </div>
          </section>
        </div>
      </section>
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
          <Link target="_blank" rel="noopener noreferrer" to="https://odysee.com/@OdyseeHelp:b" className="button button--no-style" aria-label="FAQ">
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
</div>
    </div>
      </>
  )
};

export default Signup;
