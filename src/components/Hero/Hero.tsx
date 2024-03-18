import HeroImage from "/images/HeroImg.png";
import { HERO } from "../../constants";
import Selector from "../shared/Selector";


function Hero() {
  const { title, description } = HERO[0];
  
  const handleSearch = (searchData) => {
    console.log("Search data:", searchData);
  };

  return (
    <section className="max-width-container bg-cover bg-center relative hero-img-container" id="hero" >
      <div className="w-full">
        <img
          src={HeroImage}
          alt="hero-bg-img"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-[150px] 2xl:top-[300px] 2xl:left-[16%] left-[10%] text-white md:w-[700px] 2xl:w-[825px] text-left">
        <h1 className="hero-text-main">{title}</h1>
        <p className="hero-text-description">{description}</p>
      </div>
      <div className="absolute top-[450px] 2xl:top-[750px]">
        <Selector onSearch={handleSearch} />
      </div>
    </section>
  )
}

export default Hero