import {BsCheck2} from "react-icons/bs"

import "./index.css"

const MonthlyCards = (props) => { 
   const {eachCard } = props 
   const {name,heading,description,price,features,popular} = eachCard
   const border = popular ? "card" : "card-light"
   return(
    <div className = "card-main-div">
   
   {popular ? <div className = "most-popular">
       Most Popular
   </div> : ""}
   <div className = {border}>
       <div className = "card-upper-text-container">
        <h1 className = "card-name">{name}</h1>
        <p className = "heading">{heading}</p>
        <p className = "description">{description}</p>
        <p className = "large-price">₹‎{price} <span className = "span-large">INR/mo</span></p>
       </div>
       <p className = "small-devices-price">₹‎{price} <span className = "span-large">INR/mo</span></p>
       <div className = "buy-static">
        <p className = "buy-static-text">Get your first 3 months for ₹‎20/mo</p>
       </div>
       <div className = "card-bottom-container">
       <ul className = "features-list-container">
        <p className = "features-heading">What's included on {name}</p>
        {features.map((eachItem) => (
            <li className = "features-list-item">
                <BsCheck2 className = "check-icon"/>
                <p className = "feature-text">{eachItem}</p>
            </li>
        ))}
       </ul>
       <button className = "free-button">Try for free</button>

       </div>
       
   </div>
   </div>
   )
   
   
}

export default  MonthlyCards