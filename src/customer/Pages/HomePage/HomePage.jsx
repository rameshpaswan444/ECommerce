import React from "react";
import MainCarousel from "../../components/Navigation/HomeCarousel/MainCarousel";
import HomeSectionCarouse from "../../components/HomeSectionCarousel/HomeSectionCarouse";
import { mens_kurta } from "../../../Data/mens_kurta";
import {mens_jeans} from "../../../Data/mens_jeans";
import { mens_shirt } from "../../../Data/mens_shirt";
import { womens_dress } from "../../../Data/womens_dress";


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarouse data={mens_kurta} sectionName={"Mens's Kurta"} />
        <HomeSectionCarouse data={mens_jeans} sectionName={"Men's Jeans"}/>
        <HomeSectionCarouse data={mens_shirt}  sectionName={"Men's Shirt"}/>
        <HomeSectionCarouse data={mens_kurta}  sectionName={"Women's Shoes"}/>
        <HomeSectionCarouse data={mens_kurta}  sectionName={"Women's Saree"}/>
        <HomeSectionCarouse data={womens_dress}  sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
