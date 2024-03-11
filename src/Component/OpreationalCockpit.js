import React from 'react';
import { Link } from 'react-router-dom';

export default function OpreationalCockpit() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark nav-mar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Opreational Cockpit</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark sidecollaps" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" data-bs-backdrop="false">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Opreational Cockpit</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle btndropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                            Performance Management
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a className="dropdown-item" href="/">Geo-Map</a></li>
                                            <li><a className="dropdown-item" href="/">Topology View</a></li>
                                            <li><a className="dropdown-item" href="/">Smart OSS Monitoring</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link to="/dataReadWrite">DataReadWrite</Link></li> 
                                </ul>
                                {/* <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
