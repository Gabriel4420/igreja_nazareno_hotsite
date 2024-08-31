import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SobreNosProps } from "@/types/sobrenosprops";

const SobreNos: React.FC = ({ title, image }: SobreNosProps) => {
  return (
    <section className="bg-[#E27617] leading-10 h-full py-12" id="sobrenos">
      <h2 className="text-[32px] md:lg:text-[56px] text-center py-10 text-white font-bold antialiased text-shadow-lg ">
        {title ? title : " Um pouco sobre nos..."}
      </h2>

      <Image
        src={image ? image : "/images/foto google.png"}
        alt="arca da aliança"
        height="300"
        width="800"
        className="mx-auto drop-shadow-lg rounded-es-[90px] ltr "
      />

      <p className="text-[16px] md:lg:text-[16px] drop-shadow-lg px-10 py-10  text-white font-medium">
        A Igreja do Nazareno de Mirassol, fundada há seis anos, é uma comunidade
        de fé vibrante e acolhedora situada no coração da cidade. Desde sua
        fundação, a igreja tem se dedicado a cultivar um ambiente de adoração
        sincera e comunhão genuína, atraindo pessoas de diversas origens que
        buscam crescimento espiritual e uma conexão mais profunda com Deus. A
        estrutura moderna da igreja, combinada com um programa robusto de
        atividades semanais, torna-se um ponto de encontro central para os fiéis
        da região.
      </p>

      <p className="text-[16px] md:lg:text-[16px] drop-shadow-lg px-10  py-2  text-white font-medium">
        Com uma doutrina baseada na fé reformada e protestante, a Igreja do
        Nazareno de Mirassol enfatiza a soberania de Deus, a salvação pela graça
        através da fé em Jesus Cristo, e a autoridade das Escrituras. O ensino
        teológico é central nas pregações e estudos bíblicos, proporcionando aos
        membros uma compreensão sólida e profunda dos princípios cristãos. Além
        disso, a igreja promove um forte senso de missão e serviço, incentivando
        seus membros a viverem suas vidas de acordo com os ensinamentos de
        Cristo e a levarem o Evangelho a todas as esferas da sociedade.
      </p>

      <p className="text-[16px] md:lg:text-[16px] drop-shadow-lg px-10 py-2  text-white font-medium">
        A comunidade da Igreja do Nazareno de Mirassol é caracterizada por seu
        espírito acolhedor e de apoio mútuo. Atividades como grupos de oração,
        estudos bíblicos em pequenos grupos, e eventos comunitários são
        organizados regularmente para fortalecer os laços entre os membros e
        promover o crescimento espiritual individual e coletivo. A igreja também
        se envolve ativamente em projetos sociais e de caridade, buscando fazer
        a diferença na vida dos necessitados e refletir o amor de Cristo em
        ações concretas na comunidade de Mirassol.
      </p>

      <div className="flex items-center justify-center pt-10 ">
        <Link
          href="/about"
          className="text-white text-md text-center font-bold drop-shadow-sm bg-orange-800 p-2 w-[300px]   rounded-lg"
        >
          Vamos aprender mais de Deus
        </Link>
      </div>
    </section>
  );
};

export default SobreNos;
