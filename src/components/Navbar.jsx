import { ShoppingBasket } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PanZano</Link>
                    <div className="d-flex align-items-center order-lg-2">
                        <button className="btn btn-success me-2" type="button">
                            <ShoppingBasket />
                        </button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse order-lg-1" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            <Link className="nav-link" to="/products">Productos</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar