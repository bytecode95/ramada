import Button from "../shared/Button"


function Deliver() {
  return (
    <section className="max-width-container" id="delivery">
      <div className="main-width-container padding-container">
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-full 2xl:w-1/2">
            <h4 className="section-header-text">Delivery & Takeaway service</h4>
            <h1 className="section-topic-text">Giving your hunger a safer, faster and better alternative</h1>
            <p className="section-desc-text text-start mt-4">
              users can pay directly through our website with Visa or MasterCard or opt for cash or card payment on delivery! Our website is extremely user friendly and offers a stress-free ordering experience with the option to schedule a delivery on a particular date or time. Our delivery radius will be from Colombo 1-15 and will include areas in Mount Lavinia, Nawala, Nugegoda, Kohuwala, Dehiwala, Rajagiriya, Welikada, Wellampitiya, Ethul Kotte, Kolonnawa, Sri Jayawardenapura Kotte, Pelawatta, Kotikawatta, Battaramulla, Pita Kotte, Attidiya, Mirihana, Koswatta.If you reside in any of the above locations, orders will be delivered subjected to a delivery charge.
            </p>
            <p className="my-4 font-bold">Delivery times are between 10 am to 10 pm. </p>
            <p className="my-4 font-bold">For more information contact us on (+94) 112 422 001, Ext. 399 or (+94) 777 864 864. </p>
            <div className="mt-10">
              <Button
                type="button"
                title="Order Now"
                variant="btn_Buy_Now"
              />
            </div>
          </div>
          <div className="mt-5 mx-auto 2xl:mt-0 2xl:mx-0">
            <img
              src='/images/Delivery.png'
              width={560}
              height={620}
              alt="helping-img"
              className="mobile-img-container"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deliver