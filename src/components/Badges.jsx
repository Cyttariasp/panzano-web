import { Vegan, Leaf, Sparkles } from 'lucide-react';

function Badges() {
    return (
        <div>
            <span className="badge rounded-pill text-bg-warning m-1"><Sparkles />Nuevo</span>
            <span className="badge rounded-pill text-bg-success m-1"><Vegan />Integral</span>
            <span className="badge rounded-pill text-bg-success m-1"><Leaf /> Vegan</span>
        </div>
    )
}

export default Badges;