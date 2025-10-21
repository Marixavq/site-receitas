interface CardProps {
    title: string;
    imagemUrl: string;
}

const Card = ({ title, imagemUrl }: CardProps) => {

    return (
        <>
            <div className="border border-black w-80 h-auto bg-gray-100 rounded shadow-md">
                <img src={imagemUrl} alt={title} className="w-96 h-60" />
                <div className="p-4">
                    <h1 className="font-bold">{title}</h1>
                </div>
            </div>
        </>
    )
}
export default Card