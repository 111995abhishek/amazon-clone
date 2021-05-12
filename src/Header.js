import React from 'react';
import logo from './Amazon1.png';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">

            <Link to="/">
                <img className="header_logo" src={logo}/>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchinput"/>
                <SearchIcon className="header_searchicon"/>
            </div>

            <div className="header_nav">

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionlineone">Hello Abhishek</span>
                        <span className="header_optionlinetwo">Sign In</span>
                    </div>
                </Link>    

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionlineone">Returns</span>
                        <span className="header_optionlinetwo">& orders</span>
                    </div>
                </Link>    

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionlineone">your</span>
                        <span className="header_optionlinetwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionbasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionlinetwo header_basketcount">0</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
