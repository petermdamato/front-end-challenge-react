import React from 'react'
import Card from './Card'

class Content extends React.Component {
  render() {
    const cardData = this.props.data
    return (
    <div className="component-content">
        {cardData.map((item, index) =>{
          return <Card key={index} info={cardData[index]}/>
        } ) 
      }
    </div>
  )
  }
}

export default Content

