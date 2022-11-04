import React from 'react';

function Topbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <a className="nav-link" href="...">
                        <span className="mr-3" style={{ color: "#aaa" }}>ASHOK.C</span>
                        <img className="img-profile rounded-circle"
                            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" alt="profile" />
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Topbar