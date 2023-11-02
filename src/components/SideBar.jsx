import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  RiHome4Fill,
  RiQuestionMark,
  RiArrowDownSFill,
  RiContactsBookFill,
  RiBuilding2Fill,
  RiTeamLine,
  RiCloseLine,
} from "react-icons/ri";
import Selector from "./Selector";

const Sidebar = () => {
  const [selectorVisible, setSelectorVisible] = useState(false);

  return (
    <sideBar
      className={`
     lg:left-0 top-0 flex flex-col justify-between transition-all z-50`}
    >
      {/* MENU */}
      <div>
        {/* LOGO */}
        <div className="bg-custom-blue font-inter font-semibold text-2xl leading-10 tracking-wide  p-6 rounded-tr-xl ">
          <Link to="/" className="flex text-white items-center gap-2">
            <img
              src="https://img.freepik.com/vector-gratis/hombre-lindo-obtener-idea-dibujos-animados-vecto-icono-ilustracion-concepto-icono-negocio-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-4064.jpg?w=826&t=st=1698894498~exp=1698895098~hmac=95685789c044bdb20158ee4d1bf5f39263c54af6e15c345cb02f8daba426f5ef"
              className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
            />
            Hirefy
            <RiCloseLine className="fixed right-4 bottom" />
          </Link>
        </div>
        {/* NAV */}
        <nav className="bg-[#c0c2ca] p-6 rounded-br-xl">
          <Link to="/" className="flex items-center gap-4 text-gray-800 py-2">
            <RiHome4Fill className="text-custom-blue" /> Home
          </Link>
          <Link to="/" className="flex flex-col gap-4 text-gray-200 py-2">
            <span className="flex items-center gap-4">
              <RiQuestionMark className="text-gray-800" />
              <div className="flex-1 flex items-center justify-between text-gray-800">
                How it works
              </div>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-4 text-gray-800 py-2 ">
            <RiTeamLine /> Marketplace
          </Link>
          <Link to="/" className="flex items-center gap-4 text-gray-800 py-2 ">
            <RiContactsBookFill /> For Talents
          </Link>

          <div
            onClick={() => setSelectorVisible(!selectorVisible)}
            className="flex items-center gap-4 text-gray-800 py-2 leading-[19.07px] font-sans "
          >
            <RiBuilding2Fill className=" text-green-500" />
            Categories
            <RiArrowDownSFill
              className={`text-custom-blue text-lg font-semibold leading-6 font-open-sans ml-auto ${
                selectorVisible ? "rotate-180" : ""
              }`}
            />
            <span className="flex-1 flex items-center justify-between gap-4 "></span>
          </div>
          {selectorVisible && <Selector />}
          <Link
            to="/"
            className=" flex items-center gap-4 text-custom-blue hover:text-gray-200 transition-colors pt-[518px]"
          >
            Terms Privacy Security Version
          </Link>
          <div className="pt-6">© 2023 Hirefy, LCC.</div>
        </nav>

        {/* LOGOUT */}
      </div>
    </sideBar>
  );
};

export default Sidebar;
