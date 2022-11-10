import './App.css';
import { useState, useEffect } from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  
  const [getSelected, setSelected] = useState("")
  const [getData, setData] = useState({})
  
  const selector = (menuItem) => {
    setSelected(menuItem)
  }
  
  useEffect(() => {
      fetch("http://localhost:3000/addresses")
            .then(res => res.json())
            .then((data) => setData({"addresses": data}))
    }, []);

  return (
    <div className="App">
      <Menu data={getData} selector={selector} selected={getSelected}/>
      {getSelected === "" ? null : <Content data={getData[getSelected]} />}
    </div>
  );
}

export default App;
