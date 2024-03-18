import ABOUTIMAGE from "/images/About.png"
import Button from "../shared/Button"
import { BsArrowRight } from "react-icons/bs";


function About() {
  return (
    <section className="max-width-container" id="about">
      <div className="main-width-container padding-container">
        <div className="flex justify-between items-stretch flex-wrap-reverse">
          <div className="w-full 2xl:w-1/2">
            <h4 className="section-header-text">About us</h4>
            <h1 className="section-topic-text">explore more about us</h1>
            <p className="section-desc-text text-start mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .
            </p>
            <p className="section-desc-text text-start mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <Button type="button" title="Learn More" variant="btn_Learn_More" icon={<BsArrowRight />} />
          </div>
          <div className="mx-auto mt-5 md:mx-0">
            <img
              src={ABOUTIMAGE}
              width={500}
              height={500}
              loading="lazy"
              alt="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About