import BlogArea from "@/components/blogArea";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Newsletter from "@/components/newsletter";
import SobreNos from "@/components/sobrenos";
import { file } from "@/helpers/banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel data={file} />
      <main className="flex min-h-screen flex-col items-center justify-between my-10 p-15 md:lg:p-24">
        <h1 className="text-[32px] py-5 md:lg:text-[56px] text-center text-[#E27617] drop-shadow-lg font-bold mb-20 antialiased">
          Venha cultuar conosco e se aproximar um pouco mais de Deus{" "}
        </h1>
        <Image
          src="/images/biblia.png"
          alt="arca da aliança"
          height="900"
          width="500"
          className="mx-auto drop-shadow-lg rounded-sm mb-20"
        />
      </main>
      <SobreNos />
      <BlogArea />
      <Newsletter />
    </>
  );
}
