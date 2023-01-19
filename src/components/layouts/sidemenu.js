/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import {FaBars} from  "react-icons/fa"
import React, { useState } from 'react';
import '../assets/styles/sidemenu.scss';
import Vespalogo from './logo';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/user_reducer';
const SideMenu = ({ children }) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="s-layout">
            <div className="s-layout__sidebar">
                <a className="s-sidebar__trigger" href="#0">
                <i className="cc"><FaBars/></i>
                </a>
                
                <nav className="s-sidebar__nav">
                    <div className="nav-logo">
                    <Vespalogo/>
                    </div>
                    <ul>
                        <li></li>
                        <li>
                            <NavLink
                                to={'/'} className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-home"></i><em> Vehicles</em>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/AddVehicle'} className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-home"></i><em>Add Vehicle</em>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/deleteVehicle'} className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-home"></i><em>Delete Vehicle</em>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/reservations'} className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-home"></i><em>My Reservation</em>
                            </NavLink>
                        </li>
                        <li onClick={() => {
                            dispatch(logout()); navigate('/');
                        }}>
                            <a className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-user"></i><em>Logout</em>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
            <main className="s-layout__content">
                {children}
            </main>
        </div>
    );
};
SideMenu.propTypes = {
    children: PropTypes.any,
};
export default SideMenu;