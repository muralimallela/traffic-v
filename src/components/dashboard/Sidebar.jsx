import React, { useState, useEffect } from "react";
// import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Menus } from "./Menus";
// import { Menu } from "@mui/material";
import useDeviceType from "../../utils/useDeviceType";
const Sidebar = () => {
  const isMobile = useDeviceType();
  const [open, setOpen] = useState(!isMobile);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const location = useLocation();

  const handleMenuClick = (index) => {
    if (Menus[index].submenu) {
      setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
      !isMobile ? setOpen(true) : setOpen(true);
    } else {
      !isMobile ? setOpen(true) : setOpen(false);
    }
  };

  useEffect(() => {
    const closeSubmenu = () => {
      if (open === false) {
        setSubmenuOpenIndex(null);
      }
    };
    closeSubmenu();
  }, [open]);

  const isActive = (path) => location.pathname.endsWith(path || "#");
  const isSubActive = (submenu) =>
    location.pathname.split("/").includes(submenu);

  return (
    <div className="flex mt-14 -mb-16 fixed h-5/6 top-0 z-20">
      {open && (
        <div className="fixed inset-0 -z-1 transition-opacity">
          <div
            onClick={() => {
              !isMobile ? setOpen(true) : setOpen(!open);
              setSubmenuOpenIndex(null);
            }}
            className="absolute inset-0"
            tabIndex={0}
          ></div>
        </div>
      )}
      <div
        className={`${
          open ? "w-60" : "w-[67px]"
        } bg-black rounded-2xl ml-0.5 p-0 pt-2 relative duration-300 flex flex-col justify-between`}
      >
        <div>
          <img
            width={40}
            height={40}
            alt="Menu Arrow"
            src="/assets/menuarrow.svg"
            className={`absolute cursor-pointer right-2 top-[5px] w-8 transition-transform duration-500 z-40 ${
              open ? "rotate-180" : "rotate-0"
            } ${!isMobile && "hidden"}`}
            onClick={() => (!isMobile ? setOpen(true) : setOpen(!open))}
          />
          <div className={`flex gap-x-4 items-center ${!isMobile && "hidden"}`}>
            {/* <div>
              <IoMenu
                onClick={() => (!isMobile ? setOpen(true) : setOpen(!open))}
                className={`cursor-pointer ml-1 text-5xl -mt-3 text-white transition-transform duration-500 ${
                  open ? "rotate-[360deg]" : ""
                }`}
              />
            </div> */}

            {/* <h1
              className={`text-white origin-left font-medium -mt-3 text-3xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              RevRoad
            </h1> */}
          </div>
          <div className="h-6"></div>
          <ul className="pb-2 pl-3">
            {Menus.map((menu, index) => (
              <li key={index} className="relative">
                <Link to={menu.href || "#"}>
                  {(isActive(menu.href) ||
                    (isSubActive("report") && menu.submenu)) && (
                    <>
                      <b className="absolute transition-transition duration-500 top-[-20px] h-[20px] w-full bg-white -z-1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:rounded-br-[20px]"></b>
                      <b className="absolute transition-colors duration-500 bottom-[-20px] h-[20px] w-full bg-white -z-1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:rounded-tr-[20px]"></b>
                    </>
                  )}

                  <div
                    onClick={() => handleMenuClick(index)}
                    className={`flex items-center gap-x-4 p-2   ${
                      ""
                    }  cursor-pointer 
                       ${
                         isActive(menu.href)
                           ? " bg-white text-black "
                           : menu.submenu && isSubActive("report")
                           ? "bg-white text-black"
                           : "text-white"
                       }
                      ${menu.gap ? "mt-9" : "mt-3"}`}
                  >
                    <div>{menu.src}</div>
                    <span
                      className={`font-semibold origin-right duration-900 ${
                        !open && "hidden"
                      } `}
                    >
                      {menu.title}
                    </span>
                  </div>
                </Link>
                {menu.submenu && submenuOpenIndex === index && open && (
                  <ul
                    className={`pl-12 rounded-bl-3xl ${
                      isSubActive("report") ? "bg-white" : "text-white"
                    }`}
                  >
                    {menu.submenu.map((submenuItem, subIndex) => (
                      <Link key={subIndex} to={submenuItem.href}>
                        <li className="flex items-center pb-2 pl-3 cursor-pointer w-full">
                          <div
                            onClick={() =>
                              !isMobile ? setOpen(true) : setOpen(false)
                            }
                            className="flex items-center gap-x-4"
                          >
                            <div>{submenuItem.icon}</div>
                            <span>{submenuItem.title}</span>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`mb-6 flex ${open ? "ml-14" : "ml-3"}`}>
          <div>
            <FiLogOut className="text-3xl text-white" />
          </div>

          <p
            className={`text-gray-300 font-bold text-md ml-3 mt-0.5 ${
              !open && "hidden"
            }`}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
