import Badges from "./Badges";

function ProductCard(props) {
    return (
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt={props.title} style={{ height: '180px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <div>
                    <Badges />
                </div>
                <p className="card-text flex-grow-1 small">{props.description}</p>
                <p className="text-muted fw-bold">$ {props.price}</p>
                <button className="btn btn-success mt-auto">Comprar</button>
            </div>
        </div>
    )
}

export default ProductCard;