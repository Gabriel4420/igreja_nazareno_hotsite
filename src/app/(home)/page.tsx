import BlogArea from "@/components/screens/blogArea";
import Carousel from "@/components/ui/carousel/carousel";
import SobreNos from "@/components/screens/sobrenos";
import { data } from "@/helpers/banner";
import Image from "next/image";
import NewsletterModal from "@/components/screens/newsletter";
import Header from "@/components/ui/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <NewsletterModal />
      <Carousel data={data} />
      <main className="flex min-h-screen bg-white flex-col items-center justify-between p-15 md:p-24 lg:p-24">
        <h1 className="text-[32px] pt-16 md:pt-0 md:lg:text-[56px] text-center text-[#E27617] drop-shadow-lg font-bold antialiased">
          Venha cultuar conosco e se aproximar um pouco mais de Deus{" "}
        </h1>
        <Image
          src="/images/biblia.png"
          alt="biblia"
          height="900"
          width="500"
          className="mx-auto drop-shadow-lg rounded-sm mb-20"
        />
      </main>
      <SobreNos />
      <BlogArea />
    </>
  );
}
