import { useState } from "react";
import NavItem from "../NavItem/NavItem";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <div className="bg-amber-100 w-full flex justify-between p-8 ">
                    <p className="font-serif text-orange-600 text-xl">FrontReceitas</p>
                    <nav className="hidden md:flex gap-8">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/categorias" label="Todas as receitas" />
                        <NavItem to="/formreceitas" label="Envie suas receitas" />
                        <NavItem to="/login" label="Login" />
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
                    <div className="bg-amber-100 absolute top-20 right-0 w-48 p-6 md:hidden " id="mobile-menu">
                        <ul className="flex flex-col text-center">
                            <NavItem to="/" label="Home" />
                            <NavItem to="/categorias" label="Todas as receitas" />
                            <NavItem to="/formreceitas" label="Envie suas receitas" />
                            <NavItem to="/login" label="Login" />
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header
