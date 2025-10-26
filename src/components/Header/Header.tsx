import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-amber-100 w-full flex justify-between p-8 ">
                <p>FrontReceitas</p>
                <nav className="hidden md:flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/categorias">Todas as receitas</Link>
                    <Link to="/formreceitas">Envie suas receitas</Link>
                    <Link to="/login">Login</Link>
                </nav>

                <div className="absolute right-4 top-7 md:hidden">
                    {/* Mobile Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <img src="/imagens/menu.svg" alt="Menu" className="w-8 h-8" />
                        ) : (
                            <img src="/imagens/menu.svg" alt="Menu" className="w-8 h-8" />
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 right-0 w-48 bg-rose-200 p-6 md:hidden " id="mobile-menu">
                    <ul className="flex flex-col text-center">
                        <Link to="/">Home</Link>
                        <Link to="/categorias">Todas as receitas</Link>
                        <Link to="/formreceitas">Envie suas receitas</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </div>
            )}

        </>
    )
}

export default Header
