import { Link } from "react-router-dom";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <li className="list-none">
      <Link 
        to={to} 
        className="hover:text-red-800 transition-colors duration-700 md:text-lg">
        {label}
      </Link>
    </li>
  );
}

export default NavItem;