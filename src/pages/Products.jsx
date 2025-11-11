import carrouselImg2 from '../assets/carrousel-im-2.png';
import productImg1 from '../assets/product-1.png';
import { BookA } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function Products() {
    return (
        <div>
            <div id="carousel" className="carousel slide w-100">
                <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                        <img
                            src={carrouselImg2}
                            className="d-block w-100"
                            alt="carousel"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="carousel-caption d-block text-center">
                            <h1 className="text-white my-0 fw-bold">
                                <BookA /> Catálogo
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 overflow-auto flex-nowrap">
                <ul className="nav nav-pills flex-nowrap">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Todos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Integral</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Vegano</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Especial</a>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2 d-flex flex-wrap justify-content-center gap-4 my-5" tabindex="0">
                <h4 id="scrollspyHeading1" className='fw-bold'>Todos los productos</h4>
                <ProductCard
                    img={productImg1}
                    title="Pan Integral"
                    price="5.990"
                    description="Delicioso pan integral hecho con harina integral, semillas de linaza, chia y frutos secos."
                />
                <ProductCard
                    img={productImg1}
                    title="Pan Integral"
                    price="5.990"
                    description="Delicioso pan integral hecho con harina integral, semillas de linaza, chia y frutos secos."
                />
                <h4 id="scrollspyHeading2" className='fw-bold'>Integrales</h4>
                <ProductCard
                    img={productImg1}
                    title="Pan Integral"
                    price="5.990"
                    description="Delicioso pan integral hecho con harina integral, semillas de linaza, chia y frutos secos."
                />
                <h4 id="scrollspyHeading3" className='fw-bold'>Veganos</h4>
                <ProductCard
                    img={productImg1}
                    title="Pan Integral"
                    price="5.990"
                    description="Delicioso pan integral hecho con harina integral, semillas de linaza, chia y frutos secos."
                />
                <h4 id="scrollspyHeading4" className='fw-bold'>Especiales</h4>
                <ProductCard
                    img={productImg1}
                    title="Pan Integral"
                    price="5.990"
                    description="Delicioso pan integral hecho con harina integral, semillas de linaza, chia y frutos secos."
                />
            </div>
        </div>
    );
}

export default Products;