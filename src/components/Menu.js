import React from 'react';

class Menu extends React.Component {
  render() {
    const menuItems = Object.keys(this.props.data)
    return (
      <div className="component-menu">
      <h1>React Test</h1>
        <ul>
          {menuItems.map((entry)=>{
              return <li 
                  className={entry === this.props.selected ? "menu-item selected" : "menu-item"} 
                  data-testid = "__test-show-addresses"
                  key={entry} 
                  onClick={()=>{this.props.selector(entry)}
                }><div className="menu-item-text">
                {entry === "addresses" ? "Address Book" : "Home"}
                </div>
              </li>
          })}  
        </ul>
      </div>
      )
  }
}

export default Menu

