import HeroImage from "/images/HeroImg.png";
import { HERO } from "../../constants";
import Navbar from "../Navbar/Navbar";

function Hero() {
  const { title, description } = HERO[0];

  return (
    <section className="max-width-container bg-cover bg-center relative hero-img-container">
      <div className="w-full bg-black">
        <img
          src={HeroImage}
          alt="hero-bg-img"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0">
        <Navbar />
      </div>
      <div className="absolute top-[300px] lg:left-[16%] left-[10%] text-white xl:w-[825px] text-left">
        <h1 className="hero-text-main">{title}</h1>
        <p className="hero-text-description">{description}</p>
      </div>
    </section>
  )
}

export default Hero