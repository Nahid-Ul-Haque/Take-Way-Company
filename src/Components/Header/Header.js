import React from 'react';

const Header = () => {
    return (
        <section>
            <nav class="navbar navbar-light bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href='/Take Way Company'>Take Way Company</a>
                    <button class="navbar-toggler btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Welcome</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/Home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/About Us">About Us</a>
                                </li>

                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>


            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Project Budget: $100 million</a>
                </div>
            </nav>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Project Budget: $100 million</span>
                </div>
            </nav>
        </section>


    );
};

export default Header;