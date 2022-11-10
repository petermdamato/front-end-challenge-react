import React from 'react'

class Card extends React.Component {
  render() {
    const info = this.props.info
    const labels = Object.keys(info).filter((entry)=>{
      return entry !== "id" && entry !== "name" 
    })

    const namer = function(name) {
      if (name === "streetAddress") {
        return "Street"
      } else if (name === "zipCode") {
        return "Zip Code"
      } else {
        return name[0].toUpperCase() + name.slice(1)
      }
    }

    return (
    <div className="component-card" role="li">
      <h1 className="component-card-header">{info.name}</h1>
        {labels.map((entry)=>{
          return ( 
          <div className="component-card-info-row" key={entry}>
              <div className="component-card-info-label component-card-info-cell">{namer(entry)}</div>
              <div className="component-card-info-cell">{info[entry]}</div>
            </div> 
            )  
        })
      }
      </div>
  )
  }
}

export default Card

