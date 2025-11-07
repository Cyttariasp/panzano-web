import { ShoppingBasket } from 'lucide-react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">PanZano</a>
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
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            <a className="nav-link" href="#">Productos</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar