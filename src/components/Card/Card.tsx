import { Link } from "react-router-dom";

interface CardProps {
    titulo: string;
    imagem: string;
    link: string;
}

const Card = ({ titulo, imagem, link }: CardProps) => {

    return (
        <>
            <div className="border border-black m-auto rounded-sm mb-10">
                <Link to={link}>
                    <img src={imagem} alt={titulo} className="w-48 rounded md:w-56 lg:w-72" />
                    <div className="p-3">
                        <h1 className="font-bold text-center">{titulo}</h1>
                    </div>
                </Link>
            </div>
        </> 
    )
}
export default Card