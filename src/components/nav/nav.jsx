import React from 'react';

const Nav = ({ changeTab, tab, count }) => {
    return (
        <div>
           <ul className="nav nav-tabs">
            <li className="nav-item">
                <a onClick={changeTab.bind(null, "Products")} className={`nav-link ${tab === "Products" ? "active disabled" : ""}`} href="#">Products</a>
            </li>
            <li className="nav-item">
                <a onClick={changeTab.bind(null, "Cart")} className={`nav-link ${tab === "Cart" ? "active disabled" : ""}`} href="#">Cart</a>
            </li>  
            </ul>
            <div>
                <span className="badge badge-pill badge-info" style={{marginLeft: "94%"}}>Selected: {count}</span>
            </div>
        </div>
    );
}

export default Nav;