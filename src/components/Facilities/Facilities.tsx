import { FaCheckCircle } from "react-icons/fa"
import { FacilityImages, facilityTexts } from "../../constants"

function Facilities() {
  return (
    <section className="max-width-container" id='amenities'>
      <div className="main-width-container padding-container">
        <header className="text-start">
          <h3 className="section-header-text">Facilities</h3>
          <h1 className="section-topic-text">Enjoy completed and best quality facilities </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          {FacilityImages.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
          <div>
            <ul className="list-none font-[300] text-[32px] text-gray-400 font-[cormorant]">
              {facilityTexts.map((facility, index) => (
                <li key={index} className="flex items-center py-2">
                  <FaCheckCircle className="mr-2 text-gray-400 text-base " /> 
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities