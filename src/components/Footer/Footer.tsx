import NavItem from "../NavItem/NavItem";

const Footer = () => {
  return (
    <>
    
      <footer className="bg-amber-100 flex flex-col text-center px-20 py-8 md:flex-row justify-between">
        <p className="font-serif text-orange-600 my-auto py-5 text-xl">FrontReceitas</p>
        <nav className="pb-5 flex flex-col justify-between">
          <NavItem to="/" label="Home" />
          <NavItem to="/categorias" label="Todas as receitas" />
          <NavItem to="/formreceitas" label="Envie suas receitas" />
          <NavItem to="/login" label="Login" />
        </nav>

        <div className="pb-5 md:text-lg">
          <div className="py-2">
            <p>Mariana Xavier Quispe</p>
            <p>566357</p>
          </div>
          <div>
            <p>Júlia Tiziotto Buttler</p>
            <p>564975</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
