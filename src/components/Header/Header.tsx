import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <div className="bg-blue-400 w-full flex items-center justify-between p-6">
                <p>FrontReceitas</p>
                <nav className="flex gap-6 bg-amber-400">
                    <Link to="/home">Home</Link>
                    <Link to="/categorias">Categorias</Link>
                    <Link to="/formreceitas">Form Receitas</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </>
    )
}

export default Header
