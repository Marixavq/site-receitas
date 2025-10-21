import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <div className="bg-blue-400 w-full flex justify-between p-8 ">
                <p>FrontReceitas</p>
                <nav className="flex gap-6 bg-amber-400">
                    <Link to="/">Home</Link>
                    <Link to="/categorias">Categorias</Link>
                    <Link to="/formreceitas">Form Receitas</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </>
    )
}

export default Header
