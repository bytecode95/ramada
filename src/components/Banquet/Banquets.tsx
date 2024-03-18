import { BsArrowRight } from "react-icons/bs";
import { BANQUETS } from "../../constants";
import Button from "../shared/Button";

function Banquets() {
  return (
    <section className="max-width-container">
      <div className="main-width-container padding-container">
        <header>
          <h4 className="section-header-text">Banqueting</h4>
          <h1 className="section-topic-text">explore more about us</h1>
        </header>
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
          {BANQUETS.map((diner, index) => (
            <div key={index} className="shadow-md flex flex-col justify-between">
              <img src={diner.src} alt={diner.alt} width={448} height={305} />
              <div className="flex flex-col justify-between p-4">
                <div>
                  <h1 className="text-center text-[36px] font-bold py-4">{diner.title}</h1>
                  <p>{diner.text}</p>
                </div>
                <div className="flex justify-center">
                  <Button type="button" title="Learn More" variant="btn_Learn_More" icon={<BsArrowRight />} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banquets;
