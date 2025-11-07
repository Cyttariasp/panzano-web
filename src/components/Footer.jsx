import { Instagram } from 'lucide-react';


function Footer() {
    return (
        <div>
            <div className="container bg-body-secondary"> 
                <footer className="py-3 my-4"> 
                    <h2>PanZano</h2>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Productos</a></li> 
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contacto</a></li> 
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> 
                    </ul> 
                    <Instagram /> <a href="https://www.instagram.com/panzanonatural/">PanZano</a>
                    <p className="text-center text-body-secondary">&copy; {new Date().getFullYear()} PanZano.</p> 
                </footer> 
            </div>
        </div>
    )
}

export default Footer;