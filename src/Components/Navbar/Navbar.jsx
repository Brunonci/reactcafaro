import { NavLink,Link } from "react-router-dom";
import Proptypes from 'prop-types';
import Cardwidget from '../Cartwidget';
import Climaapi from "../ClimaAPI/Climaapi";


import { useState,useEffect } from 'react';
import axios from 'axios';

const Navbar = ({}) => {
    return (
        <div className="navbar">
            <div className='navbar__izquierda'>
                <div className="navbar__logo">
                    <Link to="/">
                        <a>
                            <img src="data:image/png;base64,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" alt="logo" />
                            <p>BrunoMarket.gg</p>
                        </a>
                    </Link>
                </div>
                <div className="navbar__menu">
                    <NavLink to="divisas" ><a>Divisas</a></NavLink>
                    <NavLink to="cuentas" ><a>Cuentas</a></NavLink>
                    <NavLink to="items" ><a>Items</a></NavLink>
                    <NavLink to="boosteo" ><a>Boosteo</a></NavLink>
                </div>
            </div>
            <div className='navbar__derecha'>
                <Cardwidget/>
                {/* <Climaapi/>  */}
            </div>
            
        </div>
        
    )
}



export default Navbar;