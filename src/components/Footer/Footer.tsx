import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-600 w-full flex justify-between px-20 py-8">
        <p className="my-auto">FrontReceitas</p>
        <nav className="flex flex-col bg-amber-400 justify-between">
          <Link to="/">Home</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/formreceitas">Form Receitas</Link>
          <Link to="/login">Login</Link>
        </nav>
        <div>
          <div className="p-1">
            <p>Mariana Xavier Quispe</p>
            <p>566357</p>
          </div>
          <div className="p-1">
            <p>Julia Tiziotto Buttler</p>
            <p>555555</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
