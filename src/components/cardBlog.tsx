import React from "react";

const CardBlog: React.FC = () => {
  return (
    <>
      <div
        className=" flex flex-col justify-center items-center w-[300px] md:w-[340px] lg:w-full  rounded-[23px] bg-white"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        <img
          src="/images/card blog.jpg"
          className="rounded-t-lg"
          alt="santa ceia"
        />
        <h3 className="text-2xl pt-7 font-semibold   text-center text-[#e27617]">
          Santa Ceia
        </h3>
        <p className="text-xs w-[340px] py-2 px-10 md:px-10  lg:px-0 md:py-5 lg:py-2 text-left text-black">
          A Igreja do Nazareno de Mirassol, fundada há seis anos, é uma
          comunidade de fé vibrante e acolhedora situada no coração da cidade.
          Desde sua fundação, a igreja tem se dedicado a cultivar um ambiente de
          adoração sincera e comunhão....
        </p>

        <button
          className="flex justify-center items-center  gap-2.5 px-[9px] my-5 py-3 rounded-[9px] bg-[#e27617] flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25);" }}
        >
          Continuar leitura
        </button>
      </div>
    </>
  );
};

export default CardBlog;
