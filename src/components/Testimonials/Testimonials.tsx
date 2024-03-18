import { FEEDBACKS } from "../../constants"
import Rating from "../shared/Rating"


function Testimonials() {
  return (
    <section className="max-width-container">
      <div className="main-feedback-container py-20">
        <header className="text-center">
          <h3 className="section-header-text pb-20">Testimonials</h3>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEEDBACKS.map((feedback, index) => (
            <div key={index} className="shadow-md p-8 rounded-t-[40px] rounded-r-[40px] border-[4px] border-pink-500">
              <div className="flex flex-col items-center">
                <img src={feedback.src} alt={feedback.alt} className="w-16 h-16 rounded-full" />
                <p className="text-gray-500 mb-2 mt-4">{feedback.comment}</p>
                <div className="flex items-center">
                  <Rating maxRating={5} rating={feedback.rating} size="3rem" readOnly={true} />
                </div>
                <p className="font-semibold text-[26px]">{feedback.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
