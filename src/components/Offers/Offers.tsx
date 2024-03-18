import Button from "../shared/Button";

function Offers() {
  return (
    <section className="max-width-container relative">
      <div className="main-width-container padding-container">
        <div className="custom-shadow bg-white shadow-pink-500 relative">
          {/* Diagonal Line */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-3/4 -left-3/4 w-full h-full bg-pink-500 transform -rotate-45 origin-top-left"></div>
          </div>

          <header className="text-center relative z-10">
            <h3 className="section-header-text py-10">Offers</h3>
            <h1 className="text-gray-700 font-bold text-[64px] mb-10">75% Off Now</h1>
            <h5 className="section-desc-text py-10 w-1/2 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h5>
            <div className="py-10 pb-28">
              <Button
                type="button"
                title="Buy Now"
                variant="btn_Buy_Now"
              />
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}

export default Offers;
