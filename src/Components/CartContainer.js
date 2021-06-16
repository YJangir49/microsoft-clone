import React from 'react';
import Cart from './Cart';

const CartItemContainer = (props) => {
    const { data, title } = props;
    return (
        <section className="cart-list-section">
            {title && <h2 style={{"margin-bottom": "1em"}}>{title}</h2>}
            <ul className="cart-item-list">
                {
                    data.map(e => 
                        <li>
                            <Cart 
                                key={e.id} 
                                title={e.title} 
                                url={e.url} 
                                imgPath={e.imgPath}
                                text={e.text} 
                                linkData={e.linkData}
                            />
                        </li>
                    )
                }
            </ul>
        </section>

    )
}

export default CartItemContainer;