import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiSchoolBag, GiTeacher } from "react-icons/gi";
import { MdCrisisAlert } from "react-icons/md";
import logo from "../../assets/logo_salaked.avif";

const Objective = () => {
  const { t } = useTranslation();
  const features = [
    {
      text: t("home.objective.icon1"),
      icon: <MdCrisisAlert className="text-2xl" />,
    },
    {
      text: t("home.objective.icon2"),
      icon: <BsFillHandThumbsUpFill className="text-2xl" />,
    },
    {
      text: t("home.objective.icon3"),
      icon: <FaMapLocationDot className="text-2xl" />,
    },
    {
      text: t("home.objective.icon4"),
      icon: <GiTeacher className="text-2xl" />,
    },
    {
      text: t("home.objective.icon5"),
      icon: <FaGraduationCap className="text-2xl" />,
    },
    {
      text: t("home.objective.icon6"),
      icon: <GiSchoolBag className="text-2xl" />,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column - Why SALAK ED */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start md:sticky md:top-4 md:self-start">
          <h2 className="font-bold text-4xl md:text-5xl font-quicksand mb-4 text-gray-900">
            WHY
          </h2>
          <img
            src={logo}
            alt="SALAK ED logo"
            className="h-auto w-48 md:w-64 object-contain"
          />
        </div>

        {/* Right Column - Features Grid */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300 border-l-4 border-[#d01c1f] "
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#d01c1f] rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <p className="text-lg font-medium text-gray-800 font-poppins mt-1">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
