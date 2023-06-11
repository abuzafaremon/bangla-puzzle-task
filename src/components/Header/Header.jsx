import line from "../../assets/images/logo/line.png";
import { FaChevronDown } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNavVisible = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header className="p-5 bg-[#115c8f] shadow sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            className="text-white"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center gap-1">
              <div className="w-6">
                <img className="w-full" src={line} alt="line" />
              </div>
              <div className="text-xl font-bold">
                <h1>Zafar</h1>
                <h1>Emon</h1>
              </div>
              <div className="text-sm font-mono">
                <p>Frontend</p>
                <p>Developer</p>
              </div>
            </div>
          </a>
          <nav className="z-50">
            <ul
              className={`absolute lg:relative top-full left-0 right-0 bg-[#115c8f] lg:bg-transparent lg:flex lg:flex-row items-center gap-3 h-[90vh] lg:h-auto ${
                isNavVisible ? "flex flex-col" : "hidden"
              }`}
            >
              <li className="px-1 py-1">
                <span className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all flex items-center gap-1 relative group">
                  <span>About Zafar</span>
                  <FaChevronDown />
                  <ul className="absolute top-6 w-36 bg-gray-700 text-white p-4 rounded cursor-default hidden group-hover:block">
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Biography
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Achievement
                      </a>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="px-1 py-1">
                <a
                  className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Event
                </a>
              </li>
              <li className="px-1 py-1">
                <a
                  className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  News
                </a>
              </li>
              <li className="px-1 py-1">
                <span className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all flex items-center gap-1 relative group">
                  <span>Media</span>
                  <FaChevronDown />
                  <ul className="absolute top-6 w-36 bg-gray-700 text-white p-4 rounded cursor-default hidden group-hover:block z-10">
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quotes
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-normal normaltext-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Speeches
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Interview
                      </a>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="px-1 py-1">
                <span className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all flex items-center gap-1 relative group">
                  <span>Gallery</span>
                  <FaChevronDown />
                  <ul className="absolute top-6 w-36 bg-gray-700 text-white p-4 rounded cursor-default hidden group-hover:block">
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Photo Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white font-normal text-base hover:text-[#15E0FB] transition-all"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video Gallery
                      </a>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="px-1 py-1">
                <a
                  className="text-white font-medium text-lg hover:text-[#15E0FB] transition-all"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Publication
                </a>
              </li>
              <li>
                <a
                  className="text-white font-medium text-lg border-2 border-white p-1 hover:bg-white hover:text-black transition-all"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button onClick={handleNavVisible} className="lg:hidden">
              {isNavVisible ? (
                <VscChromeClose className="text-3xl text-white" />
              ) : (
                <CgMenuRightAlt className="text-3xl text-white" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
