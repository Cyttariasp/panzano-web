import carrouselImg1 from '../assets/carrousel-img-1.png'
import carrouselImg2 from '../assets/carrousel-im-2.png'
import React from 'react'
import ProductCard from '../components/ProductCard'
import productImg1 from '../assets/product-1.png'

function Home() {
    return (
        <div className='px-0'>
            {/* Carousel */}
            <div id="carousel" className="carousel slide w-100">
                <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                        <img src={carrouselImg1} className="d-block w-100" alt="Imagen del carrusel 1" />
                        <div className="carousel-caption d-block">
                            <h1>Bienvenido a Panzano!</h1>
                            <h5>Pan artesanal, amor en cada miga, arte en cada bocado!</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrouselImg2} className="d-block w-100" alt="Imagen del carrusel 2" />
                        <div className="carousel-caption d-block text-center top-0 start-0 mt-3 ms-5">
                            <p className='text-dark my-0 fs-1 fw-bold'>Conoce nuestros productos!</p>
                            <button className="btn btn-success mt-5 ">Catalogo</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Quienes somos */}
            <div>
                <h2 className="my-3 fw-bold">Quienes somos</h2>
                <p>En <strong>PanZano</strong> elaboramos pan artesanal con recetas inovadoras y amor por cada detalle.</p>
            </div>

            {/* Productos destacados */}
            <div className="container my-5">
                <h3 className="text-center mb-4 fw-bold">Productos destacados</h3>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    <ProductCard
                        img={productImg1}
                        title="Pan Integral"
                        description="Delicioso pan integral hecho con ingredientes naturales."
                    />
                    <ProductCard
                        img={productImg1}
                        title="Pan Integral"
                        description="Delicioso pan integral hecho con ingredientes naturales."
                    />
                    <ProductCard
                        img={productImg1}
                        title="Pan Integral"
                        description="Delicioso pan integral hecho con ingredientes naturales."
                    />
                    <ProductCard
                        img={productImg1}
                        title="Pan Integral"
                        description="Delicioso pan integral hecho con ingredientes naturales."
                    />
                </div>

            </div>
        </div>
    )
}

export default Home