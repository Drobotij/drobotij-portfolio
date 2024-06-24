"use client";
import Link from "next/link";
import linkedin_ from "../public/linkedin.svg";
import github_ from "../public/github.svg";
import email_ from "../public/email.svg";
import wasap_ from "../public/wasap.svg";
import diseno_logos from "../public/hero_decoration_2.svg";
import Image from "next/image";
import paginas_web_ from "../public/paginas_web.svg";
import Carousel from "nuka-carousel";
import right_arrow_ from "../public/right_arrow.svg";
import left_arrow_ from "../public/left_arrow.svg";
import yo_ from "../public/yo_.png";
import foto_pag_nati_ from "../public/foto_pag_nati.png";
import foto_pag_sac_ from "../public/foto_pag_sac.png";
import foto_pag_lafirma_ from "../public/foto_pag_lafirma.jpeg";
import lafirma_logo_ from "../public/logo_lafirma.svg";
import sac_futbol_logo_ from "../public/sac_futbol_logo.svg";
import pasteleria_natalie_logo_ from "../public/pasteleria_natalie_logo.svg";
import digital_system_logo_ from "../public/digital_system_logo.svg";
import logo from "../public/logo.png";
import wasap_verde_ from "../public/wasap_verde.svg";
import hamburger_ from "../public/hamburger.svg";
import Menu from "./Menu";

export default function Home() {
  const openMenu = () => {
    document.querySelector("#menu").classList.toggle("open");
    document.querySelector("#modal_menu").classList.toggle("open");
  };
  return (
    <>
      <div className="px-5">
        <header className="flex py-2 justify-between items-center ">
          <Link
            className="text-start w-fit flex items-center gap-3"
            href={{ pathname: "/" }}
          >
            <Image src={logo} alt="Drobotij Leandro Nahuel" />
            <div>
              <p className="text-3xl hidden md:block">
                drobotij <span className="font-bold">LEANDRO</span>
              </p>
              <p className="text-primary hidden md:block">
                diseñador y desarrollador web
              </p>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-5 items-center">
              <li>
                <a className="hover:text-primary transition-all" href="#about">
                  Acerca de
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all"
                  href="#trabajos"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all"
                  href="#contacto"
                >
                  contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex flex-col gap-1 items-end">
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <Image src={wasap_} alt="Número de telefono" />
                <span className="text-secondary text-xs">+54 11 37991823</span>
              </div>
              <p className="text-secondary text-xs">|</p>
              <div className="flex gap-1 items-center">
                <Image src={email_} alt="Email" />
                <span className="text-secondary text-xs lowercase">
                  drobotij.leandro.n@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <a
                href="https://www.linkedin.com/in/leandro-drobotij-095b31167/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin_} alt="Drobotij Leandro Nahuel" />
              </a>
              <a
                href="https://github.com/Drobotij"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={github_} alt="Drobotij Leandro Nahuel" />
              </a>
              <a
                className="py-1 px-3 border transition-all border-spacing-2 text-sm hover:text-white hover:bg-primary text-primary border-primary rounded-3xl"
                href="#contacto"
              >
                Contactar
              </a>
            </div>
          </div>
          <button
            onClick={() => openMenu()}
            type="button"
            className="block lg:hidden"
          >
            <Image src={hamburger_} width={38} alt="Abrir menu" />
          </button>
          <button
            id="modal_menu"
            onClick={() => openMenu()}
            type="button"
          ></button>
        </header>
        <Menu openMenu={openMenu}/>
        <Carousel
        renderBottomCenterControls={false}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="hover:bg-gray-100 transition-all p-2"
              onClick={previousSlide}
            >
              <Image src={left_arrow_} alt="Izquierda" />
            </button>
          )}
          wrapAround={true}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="hover:bg-gray-100 transition-all p-2"
              onClick={nextSlide}
            >
              <Image src={right_arrow_} alt="derecha" />
            </button>
          )}
        >
          <div className="flex flex-col lg:flex-row relative h-screen gap-20  w-fit mx-auto items-center">
            <div>
              <p className="text-secondary pb-2">Diseño y desarrollo</p>
              <h2 className="text-black-t text-5xl font-bold">Páginas web</h2>
              <p className="text-secondary pt-2">
                SIMPLES, COMPLEJAS, AUTOGESTIONABLES O ECOMMERCE
              </p>
              <a
                className="py-1 block w-fit mt-5 px-3 border transition-all border-spacing-2 text-sm hover:text-white hover:bg-primary text-primary border-primary rounded-3xl"
                href="#trabajos"
              >
                Ver más
              </a>
            </div>
            <div>
              <Image src={paginas_web_} alt="Desarrollo de Paginas web" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row relative h-screen gap-20  w-fit mx-auto items-center">
            <div>
              <p className="text-secondary pb-2">CREAMOS UNA IDENTIDAD</p>
              <h2 className="text-black-t text-5xl font-bold">
                DISEÑO DE LOGOS
              </h2>
              <p className="text-secondary pt-2">
                diseños 100% personalizables
              </p>
              <a
                className="py-1 block w-fit mt-5 px-3 border transition-all border-spacing-2 text-sm hover:text-white hover:bg-primary text-primary border-primary rounded-3xl"
                href="#logos"
              >
                Ver más
              </a>
            </div>
            <div >
              <Image src={diseno_logos} alt="Diseño de logos" />
            </div>
          </div>
        </Carousel>

        <div
          id="about"
          className="flex flex-col lg:flex-row gap-10 py-10 items-center"
        >
          <div className="lg:w-1/2 bg-slate-200 relative">
            <div className="text-xl text-center lg:text-start lg:text-3xl absolute bottom-0 right-0 lg:w-12/12 p-2 lg:p-5  bg-black bg-opacity-60 ">
              <p className="text-primary font-bold">DROBOTIJ LEANDRO</p>
              <p className=" text-slate-50">DISEÑADOR Y DESARROLLADOR WEB</p>
            </div>
            <Image src={yo_} alt="Drobotij leandro nahuel" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-black-t text-center pb-3 lg:text-start text-2xl lg:text-3xl font-bold">
              EN BÚSQUEDA DE NUEVOS RETOS Y OPORTUNIDADES
            </h2>
            <p className="text-secondary">
              DESARROLADOR Y DISEÑADOR WEB, DISEÑADOR DE LOGOTIPOS Y ESTUDIANTE
              DE LICENCIATURA EN SISTEMAS EN LA UNIVERSIDAD NACIONAL GENERAL
              SARMIENTO
            </p>
          </div>
        </div>
      </div>
      <div id="trabajos" className="text-center pt-10 pb-5 font-bold">
        <p className="text-primary text-sm pb-2">
          diseño, desarrollo y mantenimiento
        </p>
        <h3 className="text-black-t text-4xl lg:text-5xl">páginas web</h3>
      </div>
      <div className="bg-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-10">
          <div className="bg-white">
            <Image src={foto_pag_nati_} alt="Pastelería Natalie" />
            <p className=" mt-5 text-primary w-11/12 mx-auto">
              DISEÑO + PANEL ADMINISTRADOR + CATALOGO WEB + LOGO
            </p>
            <a
              className="text-sm mt-5 text-secondary lowercase w-11/12 mx-auto block pb-5 hover:text-black-t transition-all"
              href="https://pastelerianatalie.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pastelerianatalie.netlify.app
            </a>
          </div>
          <div className="bg-white">
            <Image src={foto_pag_sac_} alt="SAC - Fútbol" />
            <p className=" mt-5 text-primary w-11/12 mx-auto">
              DISEÑO + PANEL ADMINISTRADOR + LOGO
            </p>
            <a
              className="text-sm mt-5 text-secondary lowercase w-11/12 mx-auto block pb-5 hover:text-black-t transition-all"
              href="https://sac-futbol.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sac-futbol.netlify.app
            </a>
          </div>
          <div className="bg-white">
            <Image src={foto_pag_lafirma_} alt="Pastelería Natalie" />
            <p className=" mt-5 text-primary w-11/12 mx-auto">
              diseño + página corporativa + LOGO
            </p>
            <a
              className="text-sm mt-5 text-secondary lowercase w-11/12 mx-auto block pb-5 hover:text-black-t transition-all"
              href="https://lafirmaconsultores.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://lafirmaconsultores.com.ar
            </a>
          </div>
        </div>
      </div>
      <div id="logos" className="text-center pt-10 pb-5 font-bold">
        <p className="text-primary text-sm pb-2">Diseño</p>
        <h3 className="text-black-t text-4xl lg:text-5xl ">LOGOS</h3>
      </div>
      <div className="bg-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-10">
          <div className="bg-[#19284C] h-80 p-10 justify-center flex items-center">
            <Image src={lafirma_logo_} alt="La firma asociados" />
          </div>
          <div className=" p-10 justify-center h-80 flex items-center bg-white">
            <Image src={sac_futbol_logo_} alt="SAC - Fútbol" />
          </div>
          <div className=" p-10 justify-center h-80 flex items-center bg-[#FFA8A8]">
            <Image src={pasteleria_natalie_logo_} alt="Pasteleria Natalie" />
          </div>
          <div className=" p-10 justify-center h-80 flex items-center bg-[#1F1F1F]">
            <Image src={digital_system_logo_} alt="Digital System DA" />
          </div>
        </div>
      </div>
      <footer id="contacto" className="text-center py-10">
        <Link
          className="text-start w-fit mx-auto flex items-center gap-3"
          href={{ pathname: "/" }}
        >
          <Image src={logo} alt="Drobotij Leandro Nahuel" />
          <div>
            <p className="text-3xl hidden md:block">
              drobotij <span className="font-bold">LEANDRO</span>
            </p>
            <p className="text-primary hidden md:block">
              diseñador y desarrollador web
            </p>
          </div>
        </Link>
        <p className="text-2xl lg:text-4xl my-5 font-bold text-black-t">
          ¡TU CONSULTA NO MOLESTA!
        </p>
        <div className="flex gap-1 w-fit mx-auto items-center">
          <Image src={wasap_} alt="Número de telefono" width={19} />
          <span className="text-secondary ">+54 11 37991823</span>
        </div>
        <div className="flex  gap-1 w-fit mx-auto items-center">
          <Image src={email_} alt="Email" width={19} />
          <span className="text-secondary lowercase">
            drobotij.leandro.n@gmail.com
          </span>
        </div>
        <div className="flex w-fit mx-auto mt-5 gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/leandro-drobotij-095b31167/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={40} src={linkedin_} alt="Drobotij Leandro Nahuel" />
          </a>
          <a
            href="https://github.com/Drobotij"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={40} src={github_} alt="Drobotij Leandro Nahuel" />
          </a>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send?phone=5491137991823"
        target="_blank"
        className="block fixed bottom-5 right-5"
        rel="noopener noreferrer"
      >
        <Image width={40} src={wasap_verde_} alt="Contactar por whatsapp" />
      </a>
    </>
  );
}
