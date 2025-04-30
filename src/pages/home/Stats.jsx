import React from "react";
import svg1 from "../../assets/home/svg1.webp";
import svg2 from "../../assets/home/svg2.webp";
import svg3 from "../../assets/home/svg3.webp";
import svg4 from "../../assets/home/svg4.webp";
import svg5 from "../../assets/home/svg5.webp";
import svg6 from "../../assets/home/sv6.webp";

import svg7 from "../../assets/home/svg7.webp";
import svg8 from "../../assets/home/svg8.webp";
import svg9 from "../../assets/home/svg9.webp";
import { useTranslation } from "react-i18next";
const Stats = () => {
  const { t } = useTranslation();
  const steps = [
    {
      id: 1,
      title: t("home.fifth.title1"),
      description: t("home.fifth.des1"),
      image: svg1,
    },
    {
      id: 2,
      title: t("home.fifth.title2"),
      description: t("home.fifth.des2"),
      image: svg2,
    },
    {
      id: 3,
      title: t("home.fifth.title3"),
      description: t("home.fifth.des3"),
      image: svg3,
    },
    {
      id: 4,
      title: t("home.fifth.title4"),
      description: t("home.fifth.des4"),
      image: svg4,
    },
    {
      id: 5,
      title: t("home.fifth.title5"),
      description: t("home.fifth.des5"),
      image: svg5,
    },
    {
      id: 6,
      title: t("home.fifth.title6"),
      description: t("home.fifth.des6"),
      image: svg6,
    },
    {
      id: 7,
      title: t("home.fifth.title7"),
      description: t("home.fifth.des7"),
      image: svg7,
    },
    {
      id: 8,
      title: t("home.fifth.title8"),
      description: t("home.fifth.des8"),
      image: svg8,
    },
    {
      id: 9,
      title: t("home.fifth.title9"),
      description: t("home.fifth.des9"),
      image: svg9,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

        <div className="space-y-16 pl-8 md:pl-0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="absolute left-0 md:left-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

              <div className="md:hidden ml-8">
                <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <span className="text-blue-500 font-bold">
                    Step {step.id}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Desktop layout (alternating image and text) */}
              <div
                className={`hidden md:flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Image container */}
                <div
                  className={`w-1/2 p-4 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Text container */}
                <div
                  className={`w-1/2 p-4 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-blue-500 font-bold">
                      Step {step.id}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-center text-3xl md:text-4xl font-quicksand font-bold pt-2">{t("home.fifth.headingbuttom")}</h1>
    </div>
  );
};

export default Stats;
