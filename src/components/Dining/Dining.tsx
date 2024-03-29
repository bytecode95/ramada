import { DINERS } from "../../constants";
import { BsArrowRight } from "react-icons/bs";

function Dining() {
  return (
    <section className="max-width-container" id="restaurants">
      <div className="main-width-container padding-container ">
        <header className="text-start">
          <h3 className="section-header-text">Wine & Dine</h3>
          <h1 className="section-topic-text">Ramada Colombo Restaurants</h1>
        </header>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-8 mt-8">
            {DINERS.map((diner, index) => (
              <div key={index} className="relative shadow-2xl rounded-lg" >
                <img src={diner.src} alt={diner.alt} width={448} height={305} style={{ width: '100%', height: '100%' }} />
                <div className="absolute bottom-0 w-full">
                  <div className="flex bg-pink-500 text-white py-4 justify-center items-center rounded-b-lg">
                    <p className="text-[20px] font-[cormorant]">{diner.text}</p>
                    <BsArrowRight className="ml-2 text-[20px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Dining;
