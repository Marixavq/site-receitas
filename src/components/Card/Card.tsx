type CardProps = {
    children: React.ReactNode;
}
const Card = ( { children } : CardProps ) =>{

    return(
        <>
            <div className="border border-black w-96 h-96 bg-gray-100 p-4 rounded shadow-md">
                { children }
            </div>
        </>
    )
}
export default Card