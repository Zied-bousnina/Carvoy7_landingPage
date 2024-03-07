import React from "react";

const FleetManagementPlatformHero = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row lg:pl-40 lg:pr-12  px-8 pt-12 items-center bg-gray-200">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-[#0085db] md:mb-6 md:text-lg xl:text-xl">
          Very proud to introduce
        </p>

        <h1 className=" text-4xl font-bold text-black sm:text-5xl md:text-6xl">
          La plateforme de gestion de flotte pour les collecteurs de déchets
        </h1>
        <p className="mb-8 text-xl text-black sm:text-2xl md:mb-12 md:text-3xl">
          350.00 TND
        </p>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          La solution de gestion de flotte ultime pour toute taille de flotte.
          Capable de tirer parti des données et des analyses puissantes de votre
          opération actuelle de gestion des déchets et de transformer vos
          itinéraires programmés manuellement en itinéraires entièrement
          optimisés à l’aide d’algorithmes d’apprentissage automatique. Cela
          signifie que vos opérations ne seront pas seulement optimisées
          instantanément, elles continueront à devenir plus efficaces au fil du
          temps !
        </p>



      </div>

      <div className="sm:h-auto h-48 overflow-hidden  lg:h-auto xl:w-5/12">
        <img
          src="/images/pages/landingpage/about/phone-application.png"
          loading="lazy"
          alt="img"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default FleetManagementPlatformHero;
