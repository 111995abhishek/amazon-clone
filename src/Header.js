import React from 'react';
import logo from './Amazon1.png';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {

    const [{basket,user}] = useStateValue();
    console.log(basket);

    const login= () =>{
        auth.signOut();
    }

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

                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionlineone">Hello {user?.email}</span>
                        <span className="header_optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
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
                        <span className="header_optionlinetwo header_basketcount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
