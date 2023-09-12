import {Component} from "react"
import MonthlyCards  from "../MonthlyCards"
import Tabs from "../Tabs"

import "./index.css"

const CardsArray = [
    {
      popular:true,
      name : "Basic",
      heading: "FOR INDIVIDUALS AND SMALL BUSINESSES",
      description: "Everything you need to create your store, ship products, and process payments",
      price : "1,994",
      features: ["Basic reports",  "up to 1000 inventory locations" ,"2 staff accounts"],
      id: 1,
      category: "BASIC"
    },
    {
      popular:false,
      name : "Shopify",
      heading: "FOR SMALL BUSINESSES",
      description: "level up your business with professional reporting and more staff accounts",
      price : "7,447",
      features: ["Professional reports",  "up to 1000 inventory locations" ,"5 staff accounts"],
      id: 2,
      category: "SHOPIFY"
    },
    {
      popular:false,
      name : "Advanced",
      heading: "FOR MEDIUM TO LARGE BUSINESSES",
      description: "Get the best of shopify with custom reporting and our lowest transaction fees.",
      price : "30,164",
      features: ["Custom report builder",  "up to 1000 inventory locations" ,"15 staff accounts"],
      id: 3,
      category: "ADVANCED"
    }
  ]
  
  const tabsList = [
    {tabId: 'BASIC', displayText: 'Basic'},
    {tabId: 'SHOPIFY', displayText: 'Shopify'},
    {tabId: 'ADVANCED', displayText: 'Advanced'},
  ]
  

class Home extends Component{
    state = {cardsList: CardsArray, activeTabId : tabsList[0].tabId}


    clickTabItem = tabValue => {
        this.setState({activeTabId: tabValue})
      }
    
    filteredList = () => {
        const {activeTabId,} = this.state
        const filteredCards = CardsArray.filter((eachItem) => (
            eachItem.category === activeTabId
        ))
        return filteredCards
    }


    render(){
        const {activeTabId,cardsList} = this.state
        const filterCards = this.filteredList()
        return(
            <>
           <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <Tabs
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>
           <div className = "small-devices-cards">
           {filterCards.map((eachItem) => (
            <MonthlyCards key = {eachItem.id} eachCard = {eachItem}/>
           ))}
           </div>
         
           <div className = "large-devices-cards">
           {cardsList.map((eachItem) => (
            <MonthlyCards key = {eachItem.category} eachCard = {eachItem}/>
           ))}
           </div>
         

           
          </>
          )
    }
}

export default Home 