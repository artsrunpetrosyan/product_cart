import React, {useState, useEffect} from 'react';
import Card from '../card/card';

const Products = ({ addCard }) => {

    const [data, setData] = useState([]);
    const classes = {
        cardClass: "card bg-light mb-3",
        priceClass: "card-subtitle mb-2 text-muted",
        aClass: "card-link text-info"
    }

    useEffect(() => {
        fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    return (
        <div className="container">
            {data.map(item => {
                return <Card btnName={"Add to Cart"} classes={classes} cardClick={addCard} key={item.id} item={item}/>
            })}
        </div>
    );
}

export default Products;
