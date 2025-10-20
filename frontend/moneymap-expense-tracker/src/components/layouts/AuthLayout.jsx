import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* left */}
      <div className="w-screen h-screen md:w-[50vw] px-12 pt-8 pb-12">
        <div className="flex items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">Money Map</h2>
        </div>
        <div className="w-full flex justify-center items-center mt-24">
          {children}
        </div>
      </div>

      {/* right */}
      <div className="hidden md:block w-[50vw] h-screen overflow-hidden p-8 relative">
        {/* --- Blurred Background Layer --- */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-100 to-yellow-100 opacity-70 blur-[100px]"></div>

        {/* --- Decorative elements (non-blurred, separate layer) --- */}
        <div className="absolute inset-0">
          <div className="w-48 h-48 rounded-[40px] bg-orange-500 absolute -top-7 left-5 opacity-80"></div>
          <div className="w-48 h-56 rounded-[40px] bg-purple-300 absolute top-[30%] -right-20"></div>
          <div className="w-48 h-48 rounded-[40px] bg-yellow-400 absolute -bottom-7 left-50 opacity-80"></div>
        </div>

        {/* --- Blur Overlay (applies blur to the *background layers* behind it) --- */}
        <div className="absolute inset-0 backdrop-blur-2xl z-10"></div>

        {/* --- Foreground Content (text stays sharp) --- */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
            Welcome to{" "}
            <span className="text-orange-600 text-4xl lg:text-6xl">
              MoneyMap
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-800 font-semibold max-w-sm mb-8">
            Take control of your financial journey with our powerful tracking
            tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  // Default to orange if no color is provided to match landing page theme
  const bgColor = color || "bg-orange-500";

  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-orange-400/10 border border-gray-200/50 z-10 hover:shadow-lg transition-shadow duration-300">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${bgColor} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px] font-medium text-gray-900">${value}</span>
      </div>
    </div>
  );
};
