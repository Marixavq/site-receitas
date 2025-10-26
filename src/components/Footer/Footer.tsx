import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-amber-100 flex flex-col text-center px-20 py-8 md:flex-row justify-between">
        <p className="my-auto py-5">FrontReceitas</p>

        <nav className="pb-5 flex flex-col justify-between">
          <Link to="/" className="hover:text-red-800 hover:transition-all duration-700">Home</Link>
          <Link to="/categorias" className="hover:text-red-800 hover:transition-all duration-700">Todas as receitas</Link>
          <Link to="/formreceitas" className="hover:text-red-800 hover:transition-all duration-700">Envie suas receitas</Link>
          <Link to="/login" className="hover:text-red-800 hover:transition-all duration-700">Login</Link>
        </nav>

        <div className="pb-5">
          <div className="py-2">
            <p>Mariana Xavier Quispe</p>
            <p>566357</p>
          </div>
          <div>
            <p>Júlia Tiziotto Buttler</p>
            <p>564975</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
