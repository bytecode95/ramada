import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from "../../constants";
import Logo from "../shared/Logo";
import Button from "../shared/Button";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
  
      const heroOffsetTop = heroSection.offsetTop;
      const heroOffsetBottom = heroOffsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > heroOffsetBottom) {
        setScrolled(true);
      } else if (scrollPosition >= heroOffsetTop && scrollPosition <= heroOffsetBottom - windowHeight) {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={`max-width-container sticky top-0 z-50 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="main-width-container navbar-container flex justify-between items-center">
        <div className="logo-container flex items-center">
          <Logo height={57} width={207} />
        </div>
        <div className="hidden 2xl:flex items-center md:gap-8 2xl:gap-12">
          <ul className="flex md:gap-8 2xl:gap-12">
            {NAV_LINKS.map((link) => (
              <HashLink
                to={link.href}
                key={link.key}
                scroll={(element) => element.scrollIntoView({ behavior: 'smooth'})}
                className="text-white flex items-center cursor-pointer text-xs md:text-sm 2xl:text-base font-normal leading-5"
              >
                {link.label}
              </HashLink>
            ))}
          </ul>
          <div className="hidden 2xl:flex">
            <Button
              type="button"
              title="Contact"
              variant="btn_nav"
              handleClick={scrollToFooter} 
            />
          </div>
        </div>
        <div className="2xl:hidden flex items-center">
          <img src="/images/menu-white.png" alt="icon" width={40} height={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
