import {BiChevronDown} from "react-icons/bi"
import {AiOutlineMenu} from "react-icons/ai"

import "./index.css"

const Header = () => ( 
    <div>
       <nav className = "navbar">
        <div className = "navbar-image-items">
            <div className = "logo-container">
                <img className = "logo" alt = "logo" src = "https://play-lh.googleusercontent.com/SSbec3HxizCZPUTr3H-rPTvQMwcoDC4ZXGvungU_-EShtlgiLYqMkdDfD1wvpJT-ZqKF=w600-h300-pc0xffffff-pd"/>
                <h1 className = "shopify">Shopify</h1>
            </div>
            <ul className = "list-items-container"> 
                <li className = "list-item display-flex">
                    <p>Solutions</p> 
                    <BiChevronDown/>
                    </li>
                <li className = "list-item">Pricing</li>
                <li className = "list-item display-flex">
                <p>Resources</p> 
                <BiChevronDown/>
                </li>
            </ul>
            
        </div>
        <div className = "buttons-container">
                <button type = "button" className = "login-btn">Log in</button>
                <button type = "button" className = "free-trail-btn">Start free trail</button>
            </div>
            <div className = "display-flex small-devices-menu">
                <p className = "free-trail">Start free trail</p>
                <AiOutlineMenu className = "menu"/>
            </div>
       </nav>
    </div>
)

export default Header 