import React from 'react';

const CartItem = (props) => {
    const { url, imgPath, title, text, linkData } = props;
    return (
        <a href={url}>
            <img src={imgPath} alt={title}/>
            <div className="img-text-container">
                <h3>{title}</h3>
                <p>{text}</p>
                {
                    linkData.map(e => (
                        <div className="cart-btn">
                            <span>{e.label}</span> 
                            <i className="fa fa-angle-right"/>
                        </div>
                    ))
                }
            </div>
        </a>
    )
}

export default CartItem;