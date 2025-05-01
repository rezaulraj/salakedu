import React, { useState } from "react";
import frontImg from "../../assets/home/frontimg.webp";
import subfront from "../../assets/home/subimage.webp";
import img1 from "../../assets/home/Group_1.webp";
import img2 from "../../assets/home/Group_2.webp";
import img3 from "../../assets/home/Group_3.webp";
import img4 from "../../assets/home/Group_4.webp";
import img5 from "../../assets/home/Group_5.webp";

import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import Stats from "./Stats";
import Objective from "./Objective";
import Universitys from "./Universitys";
const HomePage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");
  const imgs = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];

  return (
    <div className="bg-white my-6">
      <section
        className="bg-cover bg-center py-16 px-2 h-auto md:min-h-[80vh] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${frontImg})` }}
      >
        <div className="absolute inset-0 bg-gray-800/20"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto text-left w-full px-4 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            {t("home.frontText.textpri")}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            {t("home.frontText.textsec")}
          </h2>
          <button className="before:ease relative h-12 w-auto overflow-hidden border border-[#d01c1f] bg-[#d01c1f] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
            <span relative="relative z-10 ">{t("home.frontText.btn")}</span>
          </button>
        </div>
      </section>

      <section className="my-10 max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={subfront}
            alt="subimg"
            className=" w-full shadow rounded-2xl"
          />
          <div className="flex flex-col items-start justify-center space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 font-quicksand">
              {t("home.second.texth")}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186 17"
              fill="none"
              width={"300px"}
              height={"6px"}
              className="bg-[#d01c1f]"
            >
              <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
            </svg>
            <p className="text-lg font-medium text-gray-900 font-quicksand">
              {t("home.second.textp1")}
            </p>
            <p className="text-lg font-medium text-gray-900 font-quicksand">
              {t("home.second.textp2")}
            </p>
            <button className="before:ease relative h-12 w-[200px] overflow-hidden border border-[#d01c1f] bg-[#d01c1f] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
              <span relative="relative z-10 ">{t("home.second.btn")}</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="my-10 max-w-screen-lg mx-auto p-4 space-y-10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 font-quicksand text-center">
              {t("home.third.texth")}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186 17"
              fill="none"
              width={"300px"}
              height={"6px"}
              className="bg-[#d01c1f]"
            >
              <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
            </svg>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <button
              className={`before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
                activeTab === "tab1"
                  ? "bg-[#d01c1f] border-[#d01c1f]"
                  : "bg-[#d4ba97] border-[#d4ba97] hover:text-gray-800/90"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              {t("home.third.btn1")}
            </button>
            <button
              className={`flex items-center gap-2 before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-2 py-3 tracking-wider cursor-pointer font-bold ${
                activeTab === "tab2"
                  ? "bg-[#d01c1f] border-[#d01c1f]"
                  : "bg-[#d4ba97] border-[#d4ba97] hover:text-gray-800/90"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              <BiSearch />
              {t("home.third.btn2")}
            </button>
            <button
              className={`before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
                activeTab === "tab3"
                  ? "bg-[#d01c1f] border-[#d01c1f]"
                  : "bg-[#d4ba97] border-[#d4ba97] hover:text-gray-800/90"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              {t("home.third.btn3")}
            </button>
          </div>

          {/* Tabs Content */}
          <div className="max-w-screen-lg ">
            <div className="max-w-screen-lg">
              {activeTab === "tab1" && (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white font-poppins p-4">
                  {imgs.map((item, inx) => (
                    <div
                      key={inx}
                      className={` hover:scale-105 transition-transform duration-500
            ${
              inx < 3 ? "lg:col-span-2" : ""
            }  // First 3 items take 2 columns each in lg view
            ${
              inx >= 3 && inx < 5 ? "lg:col-span-3" : ""
            }  // Next 2 items take 3 columns each
            ${inx >= 5 ? "lg:col-span-6" : ""}  // Last item takes full width
          `}
                    >
                      <img
                        src={item.img}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {activeTab === "tab2" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4"></div>
            )}
            {activeTab === "tab3" && (
              <div className="relative py-12 px-4 sm:px-6 lg:px-8">
                <Stats />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#ecdecc]">
        <h2 className="text-2xl text-gray-900 font-semibold text-center font-quicksand max-w-screen-md mx-auto pt-6">
          {t("home.objective.heading")}
        </h2>
        <Objective />
      </section>

      <section>
        <Universitys />
      </section>
    </div>
  );
};

export default HomePage;
