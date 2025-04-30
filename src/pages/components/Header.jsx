import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo_salaked.avif";
import { BiWorld } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const location = useLocation();
  // Initialize language from localStorage or i18n
  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  const languages = [
    { code: "en", name: "English" },
    { code: "id", name: "Indonesia" },
  ];

  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/services" },
    { title: t("menu.contact"), path: "/contact" },
  ];

  const changeLanguage = async (lng) => {
    setIsChangingLanguage(true);
    try {
      await i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
      localStorage.setItem("userLanguage", lng);
      await i18n.reloadResources(lng);
    } catch (error) {
      console.error("Language change failed:", error);
      // Fallback to English if error occurs
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
    } finally {
      setIsChangingLanguage(false);
      setIsLanguageDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-white w-full">
      <div className="hidden md:block bg-gradient-to-l from-[#d01c1f] to-[#d4ba97] w-full">
        <p className="py-2 font-medium text-white text-center">
          {t("banner.btext")}
        </p>
      </div>
      <div className="flex items-center justify-between max-w-screen-xl mx-auto py-4 px-4">
        <button
          className="inline-flex md:hidden text-gray-800 hover:text-red-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <HiMiniBars3CenterLeft className="w-8 h-8" />
          )}
        </button>
        <Link to="/" className="flex items-center justify-center">
          <img src={Logo} alt="sakaled" className="h-12" />
        </Link>
        <div className="relative hidden sm:block ">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            disabled={isChangingLanguage}
          >
            <BiWorld className="text-gray-500" />
            <span>
              {languages.find((lang) => lang.code === currentLanguage)?.name ||
                "English"}
            </span>
            {isChangingLanguage ? (
              <span className="animate-spin">↻</span>
            ) : isLanguageDropdownOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </button>

          {isLanguageDropdownOpen && (
            <div className="absolute right-0 top-8 z-10 bg-white shadow-md rounded-md p-2 min-w-[120px]">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`block w-full text-left px-2 py-1 hover:bg-gray-100 rounded ${
                    currentLanguage === language.code
                      ? "font-bold text-red-600"
                      : ""
                  }`}
                  onClick={() => changeLanguage(language.code)}
                  disabled={isChangingLanguage}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto border-t-[2px] border-[#ece7df]">
        {/* Desktop Navigation */}
        <div className="hidden md:block my-2">
          <ul className="flex flex-wrap items-center justify-center space-x-4">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`text-lg font-medium text-[16px] transition-colors tracking-widest font-quicksand${
                    location.pathname === item.path
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-gray-800 hover:text-gray-600 hover:border-b-2 hover:border-red-500 duration-300"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile screen */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-black/50 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="absolute left-0 top-0 h-full w-6/12 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full relative">
                {/* <Link to="/">
                  <img src={Logo} className="h-16" alt="Company Logo" />
                </Link> */}
                {/* Menu Header */}

                <button
                  className="text-white bg-gray-400 hover:text-gray-800 absolute top-1 -right-8 bg-blue-dark text rounded-full p-1 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaTimes className="w-8 h-8" />
                </button>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2 divide-y divide-gray-300">
                    {navigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.link}
                          className="block px-4 py-2 text-lg font-medium text-blue-dark rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
