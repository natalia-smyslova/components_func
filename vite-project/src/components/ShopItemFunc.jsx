//import React from 'react';
import PropTypes from 'prop-types';

function ShopItemFunc(props) {
    const {item} = props;

    //Соответственно название производителя необходимо подставить в h2, название товара в h1, 
    // краткое описание в h3, подробное описание в div.description, цену и валюту в div.price. 
    // При этом символ валюты должен следовать перед ценой, 
    // а цена должна быть представлена с двумя числами после запятой.

    return (
        <div className="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
                {item.descriptionFull}
            </div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.currency}{item.price.toFixed(2)}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.object,
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string
}

export default ShopItemFunc;