import { headerLogo } from "../assets/images";
import { navLinks } from "../constant";
import NavMobile from "./NavMobile";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg font-medium"
            >
              Sign up/ Explore now
            </a>
          </li>
        </ul>

        <NavMobile />
      </nav>
    </header>
  );
};

export default Nav;
