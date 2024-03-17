import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import Logo from "../shared/Logo";
import Button from "../shared/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="navbar-container padding-container flex justify-between items-center">
        <div className="lg:mr-40 logo-container flex items-center">
          <Logo height={57} width={207} />
        </div>
        <div className="hidden lg:flex items-center gap-16">
          <ul className="flex gap-16">
            {NAV_LINKS.map((link) => (
              <Link
                to={link.href}
                key={link.key}
                className="text-white flex items-center cursor-pointer text-base font-normal leading-5"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Button
              type="button"
              title="Contact"
              variant="btn_nav"
            />
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <img src="/icons/view-list.svg" alt="icon" className="text-white"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
