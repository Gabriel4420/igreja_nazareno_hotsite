import React from "react";

// import { Container } from './styles';

const Newsletter: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 my-5 align-text-center w-full  bg-[#e27617]">
      <h3 className="text-[28px] py-3 md:lg:text-[58px]   font-bold text-center text-white">
        Fique por dentro !
      </h3>

      <p className="md:lg:text-[26px] text-[16px] py-5 font-medium text-center text-white">
        Assine nossa newsletter para receber artigos e noticias da nossa
        comunidade
      </p>

      <label
        htmlFor="email"
        className="flex flex-col lg:w-[1350px] justify-start items-center text-[16px] md:lg:text-[26px] font-medium text-center "
      >
      
        <input
          title="email"
          id="email"
          className="text-orange-500 rounded-lg flex-col w-[400px] md:w-[750px] lg:w-full  max-w-full px-5 mb-10  py-1  bg-white placeholder:text-orange-500"
          placeholder="E-mail"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        />
      </label>
      <div className="flex justify-center items-center">
        <button type="submit" className="w-full px-5  py-3 rounded-[9px] bg-white  hover:bg-orange-800 flex-shrink-0 md:lg:text-[26px] text-center font-bold  hover:text-white text-[#e27617]">
          Assinar já
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
