import React from 'react';
import Card from  '../card/card';

const Cart = ({selected, removeCard}) => {
  const classes = {
    cardClass: "card text-white bg-secondary mb-3",
    priceClass: "card-subtitle mb-2 text-white-50",
    aClass: "card-link text-danger"
}
return (
  <div className="container">
      {selected.length === 0 ? 
          <div className="alert alert-secondary" role="alert">No Selected Items in Cart</div> : 
          selected.map(item => {
              return <Card key={`selected-${item.id}`} cardClick={removeCard} classes={classes} btnName={"Remove"} item={item}/>
          })
      }
  </div>
);
};

export default Cart;