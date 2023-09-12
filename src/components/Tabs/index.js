

import "./index.css"

const Tabs = (props) => {
    const {tabDetails, clickTabItem, isActive} = props
    const {tabId, displayText} = tabDetails
    const onClickTabItem = () => {
      clickTabItem(tabId)
    }
  
    const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

    return(
        <li className = "tab-item">
            <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
        </li>
    )
}


export default Tabs