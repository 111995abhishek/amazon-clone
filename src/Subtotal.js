import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import {useStateValue} from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </> 
                )}
                decimalScale ={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'₹'}
            /><br/>
           <button>Proceed to checkout</button> 
        </div>
    )
}

export default Subtotal 

