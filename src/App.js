import React, {useState} from 'react';
import Nav from './components/nav/nav';
import Products from './components/product/product';
import Cart from './components/cart/cart';

function App() {
  const [tab, setTab] = useState({tab: "Products"})
  const [selected, setSelected] = useState([])
  
  const changeTab = (tab) => {
    setTab({tab: tab})
  }

  const addCard = (item) => {
    if(!selected.some(product => product.id === item.id)) { 
      setSelected([...selected, item]);
    }
  }

  const removeCard = (item) => {
    setSelected(selected.filter(elem => elem.id !== item.id))
  }

  return (
    <div className="App">
      <Nav count={selected.length} tab={tab.tab} changeTab={changeTab}/>
      {(tab.tab === "Products") ? <Products addCard={addCard}/> : <Cart removeCard={removeCard} selected={selected}/>}
    </div>
  );
}

export default App;