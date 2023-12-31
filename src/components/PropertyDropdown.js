import React, { useContext, useState } from "react";

// import icon
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import hadless ui
import { Menu } from "@headlessui/react";
//import House context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

 

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading">{property}</div>
          <div className="text-[13px]">Select yuor place</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu ">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as="li"
              key={index}
              className="
              cursor-pointer
               hover:text-violet-700
              transition
              "
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>

    </Menu>
  );
};

export default PropertyDropdown;
