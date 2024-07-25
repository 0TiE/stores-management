import React, { useEffect } from 'react';
import './SideNavBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Tooltip } from 'bootstrap'; // Import Tooltip from Bootstrap
import { Link } from 'react-router-dom';

 const SideNavBar = () => {

    useEffect(() => {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new Tooltip(tooltipTriggerEl); // Use Tooltip directly
        });
    }, []);

    return (
        <div className="navbar-container ">
            {/* bg-primary-subtle */}
            <div className="vertical-navbar d-flex flex-column flex-shrink-0 p-3 bg-primary-subtle">
              <div className='  '>  <i className="bi bi-list p-2  h2" data-bs-toggle="tooltip" data-bs-placement="right" title="Menu"></i>
              
            {/* <img src={connex} alt=""  height="50" className=" ms-5  mt-2 fixed-top connex" /> */}
              </div>
                <hr  />
              
                <ul className="nav nav-pills flex-column mb-auto">

                <li>
                    {/* Dashboard */}
                        <a href="/" id="Credits" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard">
                            <i className="bi bi-house-door"></i><span className="nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li>
                     {/* PRODUCT */}
                        <a href="/" id="Debitors" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="PRODUCT">
                        <i class="bi bi-boxes"></i><span className="nav-text">PRODUCT</span>
                        </a>
                    </li>
                    {/* ORDERS */}
                    <li>
                        <a href="/" id="ORDERS" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="ORDERS">
                            <i className="bi bi-cart"></i> <span className="nav-text">ORDERS</span>
                        </a>
                    </li>
                     {/* DELIVERY TRACKING*/}
                     <li>
                        <a href="/" id="DELIVERY TRACKING" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="DELIVERY TRACKING">
                            <i className="bi bi-truck"></i> <span className="nav-text">DELIVERY TRACKING</span>
                        </a>
                    </li>
                    {/* STOCK MANAGE*/}
                    <li>
                        <a href="/" id="STOCK MANAGE" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="STOCK MANAGE">
                            <i className="bi bi-clipboard2-data-fill"></i> <span className="nav-text">STOCK MANAGE</span>
                        </a>
                    </li>
                     {/* GRN ENTRY*/}
                     <li>
                        <a href="/" id="GRN ENTRY" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="GRN ENTRY">
                            <i className="bi bi-card-checklist"></i> <span className="nav-text">GRN ENTRY</span>
                        </a>
                    </li>
                     {/* TRACKING*/}
                     <li>
                        <a href="/" id="TRACKING" className="nav-link text-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="TRACKING">
                            <i className="bi bi-geo-alt-fill"></i> <span className="nav-text">TRACKING</span>
                        </a>
                    </li>
                  
                   
                </ul>
                <hr />
                <div className="dropdown position-relative "> 
                    <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* <img src={""} alt="" width="50" height="50" className="rounded-circle me-2" /> */}
           
                        <i class="bi bi-person-badge ms-3 "></i>
                        <strong className='UserProfile ms-5'>User</strong>

                    </a>
                    <ul className="dropdown-menu text-small  border-0" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                 </div>
            </div>
        </div>
    );
}
export default SideNavBar