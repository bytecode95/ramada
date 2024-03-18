import { ACCOMMODATION } from "../../constants"
import Button from "../shared/Button"


function Accommodation() {
  return (
    <section className="max-width-container" id="accommodation">
      <div className="main-width-container padding-container">
        <div className=''>
          <header className="text-start">
            <h3 className="section-header-text">Accommodation</h3>
            <h1 className="section-topic-text">Comfortable Rooms Just For You </h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2 md:gap-3 2xl:gap-4 mt-8 ">
            {ACCOMMODATION.map((value, index) => (
              <article key={index} className="justify-self-center">
                <div className="w-full p-4 bg-white custom-shadow-card rounded-md">
                  <div className="rounded-2xl shadow-lg">
                    <img
                      src={value.image}
                      alt='images'
                      width={305}
                      height={210}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <h1 className="font-[cormorant] font-bold text-center text-[22px] leading-6 py-4">{value.title}</h1>
                  <ul className="list-disc list-inside font-[300] text-base mb-4">
                    {value.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                  <Button type="button" title="Explore" variant="btn_Explore" />
                  <Button type="button" title="Book Now" variant="btn_Book_Now"/>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodation