import React, { useState} from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const ThemeMode = () => {

    let clickedClass = "clicked"
    // const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme
    const modeTheme = document.getElementsByTagName("html")[0]
  
  
    if (localStorage) {
      theme = localStorage.getItem("theme")
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      modeTheme.classList.add(theme)
    } else {
      modeTheme.classList.add(lightTheme)
    }
  
    const switchTheme = e => {
      if (theme === darkTheme) {
        modeTheme.classList.replace(darkTheme, lightTheme)
        e.target.classList.remove(clickedClass)
        localStorage.setItem("theme", "light")
        localStorage.setItem("modetext", "Light")
        theme = lightTheme
        // textMode()
      } else {
        modeTheme.classList.replace(lightTheme, darkTheme)
        e.target.classList.add(clickedClass)
        localStorage.setItem("theme", "dark")
        localStorage.setItem("modetext", "Dark")
        theme = darkTheme
        // textMode()
      }
    };

  

   const [isActive, setActive] = useState("false");
  
   const handleToggle = () => {
     setActive(!isActive);
   };
   

  return (
      <>
      <Helmet>
        <html lang="en"/>
      </Helmet>
      {/* <button className={theme === "dark" ? clickedClass : ""} onClick={e => switchTheme(e)} >Click</button> */}
      <button
                  title="Notifications"
                  aria-label="Notifications"
                  className="button button--no-style header__navigationItem--icon"
                  type="button"
                >
                  <span className="button__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon--Bell"
                      
                    >
                      <g>
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <button
                  className="header__navigationItem--icon"
                  onClick={handleToggle}
                  aria-label="Settings"
                  data-reach-menu-button=""
                  aria-expanded="false"
                  aria-haspopup="menu"
                  type="button"
                  id="menu-button--1837"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon--Settings"
                    
                  >
                    <g>
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </g>
                  </svg>
                </button>
                {/* Dropdown Menu Start */}
      
                <div data-reach-popover="" data-reach-menu="" className={isActive ? "dropdown-submenu" : "dropdown-submenu dropdown-show"} data-reach-menu-popover="" style={{position: "absolute", top: "52px", visibility: "hidden", opacity:"0"}}>
                    <div className="menu__list--header" data-reach-menu-list="" data-reach-menu-items="" aria-labelledby="menu-button--1" role="menu" tabindex="-1">
                    <div role="none" tabindex="-1">
                        <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Settings" role="menuitem" tabindex="-1" to="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Settings" >
                            <g>
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </g>
                        </svg>Settings </Link>
                    </div>
                    <div role="none" tabindex="-1">
                        <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Help" role="menuitem" tabindex="-1" to="/help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--HelpCircle" >
                            <g>
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <line x1="12" y1="17" x2="12" y2="17"></line>
                            </g>
                        </svg>Help </Link>
                    </div>
                    <div className="menu__link">
                      <div id="modeText" className={theme === "dark" ? clickedClass : ""} onClick={e => switchTheme(e)} data-reach-menu-item="" data-valuetext="Dark" role="menuitem" tabindex="-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Moon" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>Light
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dropdown Menu End */}
      </>
  )
};

export default ThemeMode;
