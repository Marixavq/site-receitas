import { Link } from "react-router-dom";

interface CardProps {
    titulo: string;
    imagem: string;
    link: string;
}

const Card = ({ titulo, imagem, link }: CardProps) => {

    return (
        <>
            <div className="border border-black w-80 h-auto bg-gray-100 rounded shadow-md">
                <Link to={link}>
                    <img src={imagem} alt={titulo} className="w-96 h-60" />
                    <div className="p-4">
                        <h1 className="font-bold">{titulo}</h1>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Card