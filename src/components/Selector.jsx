import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("Lorem ipsum");
  const [open, setOpen] = useState(false);
  const holaFranArray = new Array(10).fill("Lorem ipsum");

  return (
    <div className="w-50 font-medium h-10 z-50">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-[#1E1F24] p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-100"
        }`}
      >
        {selected}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter text"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {holaFranArray.map((holaFranItem, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-200 hover:text-white
            ${
              selected.toLowerCase() === "Lorem ipsum" &&
              "bg-sky-800 text-white"
            }
            ${
              selected.toLowerCase().startsWith(inputValue) ? "block" : "hidden"
            }
          `}
            onClick={() => {
              if (selected.toLowerCase() !== "Lorem ipsum") {
                setSelected("Lorem ipsum");
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {holaFranItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
