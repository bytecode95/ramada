import { BsArrowRight } from "react-icons/bs"
import Button from "../shared/Button"


function Explore() {
  return (
    <section className="max-width-container" id="explore">
      <div className="main-width-container padding-container">
        <h4 className="section-header-text">High Tea</h4>
        <div className="flex justify-between items-center flex-wrap-reverse">
          <div className="mt-5 mx-auto 2xl:mt-0 2xl:mx-0">
            <img
              src='/images/ExploreHighTea.png'
              width={688}
              height={500}
              alt="helping-img"
              className="mobile-img-container"
            />
          </div>
          <div className="w-full 2xl:w-1/2">
            <h1 className="section-topic-text">The Ramada Colombo's high tea buffe</h1>
            <p className="section-desc-text text-start mt-4">
            The ambience at the Ramada lobby is no less than what you’d expect from a real classy high tea. You can listen to classical instrumentals of your favorite songs from live violin and piano music. The guests were in awe at how this instrumental duo filled the whole atmosphere with their tunes, while they indulged in buffet delicacies.
            </p>
            <Button type="button" title="Explore Ramada High tea" variant="btn_Learn_More" icon={<BsArrowRight />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore