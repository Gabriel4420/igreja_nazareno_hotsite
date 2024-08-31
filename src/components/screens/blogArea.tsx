import React from "react";
import CardBlog from "../ui/cardBlog";

// import { Container } from './styles';

const BlogArea: React.FC = () => {
  return (
    <div className="w-full p-10 flex flex-col  items-center bg-slate-50">
      <h3 className="text-[#e67402] text-center text-[28px]  py-10 font-bold md:lg:text-[56px]">
        Nossas Histórias
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-7 lg:gap-7 px-10">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
};

export default BlogArea;
