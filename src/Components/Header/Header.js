import React from 'react';

const Header = () => {
    return (
        <section>
            <nav className="navbar navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href='/Take Way Company'>Take Way Company</a>
                    <button className="navbar-toggler btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Welcome</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/About Us">About Us</a>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>


            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Project">Project Budget: $100 million</a>
                </div>
            </nav>

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Project Budget: $100 million</span>
                </div>
            </nav>
        </section>


    );
};

export default Header;