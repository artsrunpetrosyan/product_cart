import React from 'react';

const Card = ({ item, classes, cardClick, btnName }) => {
    return (
        <div className={classes.cardClass}>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className={classes.priceClass}>{`$${item.price}`}</h6>
            <a onClick={() => cardClick(item)} href="#" className={classes.aClass}>{btnName}</a>
        </div>
        </div>

    );
}

export default Card;
