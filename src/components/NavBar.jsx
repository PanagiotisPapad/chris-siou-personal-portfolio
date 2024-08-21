/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import chrisLogo from "../assets/chrisLogo.svg";
import menuButton from "../assets/menu/menuButton.svg";
import { AnimatePresence, motion } from "framer-motion";
import home from "../assets/menu/home.svg";
import projects from "../assets/menu/projects.svg";
import contact from "../assets/menu/contact.svg";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { image: home, href: "/" },
  { image: projects, href: "/projects" },
  { image: contact, href: "mailto:c.siountas@gmail.com" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <div className="flex flex-row justify-between items-center mt-12 mx-10 md:mx-36">
      <div>
        <Link to="/">
          <img
            src={chrisLogo}
            className="w-3/5"
            alt="Chris Siountas graphic designers"
          />
        </Link>
      </div>

      <div className="hidden sm:flex flex-row items-center space-x-8">
        <ul className="flex flex-row text-lg space-x-12">
          <li className="hover:text-gray">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <button className="hidden sm:block bg-white rounded text-black hover:bg-gray hover:text-white px-4 py-1">
          <a href="mailto:c.siountas@gmail.com" className="text-lg">
            Contact
          </a>
        </button>
      </div>

      <div
        className="sm:hidden cursor-pointer hover:text-gray"
        onClick={toggleMenu}
      >
        <img src={menuButton} className="w-10" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed w-full h-screen top-0 left-0 origin-top bg-black p-12 z-20 text-white flex flex-col justify-between"
          >
            <div className="flex flex-row-reverse">
              <img
                src={menuButton}
                className="w-10 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center text-8xl space-y-12"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <MobileNavLink
                    image={link.image}
                    href={link.href}
                    toggleMenu={toggleMenu}
                  />
                </div>
              ))}
            </motion.div>
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: "0",
    transition: {
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ image, href, toggleMenu }) => {
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <motion.div variants={mobileLinkVars}>
      <Link to={href} onClick={handleClick}>
        <img src={image} className="w-full" />
      </Link>
    </motion.div>
  );
};
