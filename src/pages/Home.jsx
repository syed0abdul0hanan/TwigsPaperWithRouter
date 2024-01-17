import React from "react";
import Maintop from "../components/layout/main/Maintop";
import ShopOurBestSeller from "../components/layout/main/ShopOurBestSeller";
import GreenerAndHealthierDiv from "../components/layout/main/GreenerAndHealthierDiv";
import EcoBookSection from "../components/layout/main/EcoBookSection";
import EcofriendlyProducts from "../components/layout/main/EcofriendlyProducts";
import IndependentArtist from "../components/layout/main/IndependentArtist";
import ArticleSection from "../components/layout/main/ArticleSection";
import OurPromisesSection from "../components/layout/main/OurPromisesSection";


function Home() {
  return (
    <>
      <Maintop />
      <ShopOurBestSeller />
      <GreenerAndHealthierDiv />
      <EcoBookSection />
      <EcofriendlyProducts />
      <IndependentArtist />
      <ArticleSection />
      <OurPromisesSection />
    </>
  );
}
export default Home;
