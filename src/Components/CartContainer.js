import React from 'react';
import Cart from './Cart';

const CartItemContainer = (props) => {
    const { data } = props;
    return (
        <section className="cart-list-section">
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