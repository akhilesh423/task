
import  Home from "./components/Home"
import Header from "./components/Header"

import "./App.css"

const App = () => (
  <>
  <Header/>
  <div className = "main-home-container">
    <div className = "pay-monthly-container">
      <button type = "button" className = "pay-monthly-btn">pay Monthly</button>
      <p className = "pay-monthly-text">pay yearly (save 25%)</p>
    </div>
   <Home/>
  </div>
  </>
  
  
)

export default App;

