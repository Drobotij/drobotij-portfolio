import React from "react";
import logo_ from "../public/logo.png";
import Link from "next/link";
import yo_ from "../public/yo.png";
import Image from "next/image";
import linkedin_ from "../public/linkedin.svg";
import github_ from "../public/github.svg";
import email_ from "../public/email.svg";
import wasap_ from "../public/wasap.svg";
const Menu = ({ openMenu }) => {
  return (
    <div className="p-5" id="menu">
      <Link
        className="text-start w-fit flex items-center gap-3"
        href={{ pathname: "/" }}
      >
        <Image src={logo_} alt="Drobotij Leandro Nahuel" />
        <div>
          <p className="">
            drobotij <span className="font-bold">LEANDRO</span>
          </p>
          <p className="text-sm text-primary">diseñador y desarrollador web</p>
        </div>
      </Link>
      <Image
        width={150}
        style={{ borderRadius: "9999px" }}
        src={yo_}
        className="w-fit mx-auto pt-3"
        alt="Drobotij Leandro Nahuel"
      />
      <div className="flex w-fit mx-auto mt-5 gap-5 items-center">
        <a
          href="https://www.linkedin.com/in/leandro-drobotij-095b31167/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={35} src={linkedin_} alt="Drobotij Leandro Nahuel" />
        </a>
        <a
          href="https://github.com/Drobotij"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={35} src={github_} alt="Drobotij Leandro Nahuel" />
        </a>
      </div>
      <div className="flex gap-1 mt-3 items-center">
        <Image src={wasap_} alt="Número de telefono" width={19} />
        <span className="text-secondary ">+54 11 37991823</span>
      </div>
      <div className="flex  gap-1 items-center">
        <Image src={email_} alt="Email" width={19} />
        <span className="text-secondary lowercase">
          drobotij.leandro.n@gmail.com
        </span>
      </div>
      <p className="mt-5 text-grisesito pb-2">Navegación</p>
      <nav>
        <ul>
          <li className="pb-1">
            <a
              onClick={openMenu}
              className="hover:text-primary transition-all"
              href="#about"
            >
              Acerca de
            </a>
          </li>
          <li className="pb-1">
            <a
              onClick={openMenu}
              className="hover:text-primary transition-all"
              href="#trabajos"
            >
              Trabajos
            </a>
          </li>
          <li className="pb-1">
            <a
              onClick={openMenu}
              className="hover:text-primary transition-all"
              href="#contacto"
            >
              contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
