import { Link } from "react-router-dom"
import { FOOTER_LINKS, FOOTER_SOCIAL } from "../../constants"
import Logo from "../shared/Logo"
import FormField from "../shared/FormField"
import FOOTERIMG1 from '/images/wyndham.png'
import FOOTERIMG2 from '/images/wyndham2.png'
import FOOTERIMG3 from '/images/wyndham3.png'
import SocialButton from "../shared/SocialButton"


function Footer() {
  const handleSubscribe = (email: string) => {
    console.log('Subscribing with email:', email);
  };

  return (
    <section className="max-width-container bg-black">
      <div className="main-width-container footer-container">
        <footer>
          <div className="flex justify-center">
            <Logo height={94} width={334} />
          </div>
          <FormField onSubmit={handleSubscribe} />
          <div className="flex justify-between mt-10">
            <div className="w-[60%] flex justify-between">
              {FOOTER_LINKS.map((value, index) => (
                <article key={index}>
                  <div className="flex items-center mb-2">
                    <p className="footer-text-2">{value.title}</p>
                  </div>
                  <div className="footer-text-3">
                    {value.title === 'RAMADA BY WYNDHAM COLOMBO' && (
                      <div>
                        <div className="mb-4 lg:w-3/4 flex flex-col justify-between">
                          <p className="footer-text-3">
                            Owned and managed by Alhambra HotelsLtd, under license from Ramada Worldwide
                          </p>
                          <p>30, Sir Mohamed Macan Markar Mawatha, Colombo 03, Sri Lanka</p>
                        </div>
                      </div>
                    )}
                    {value.title === 'Links' && (
                      <ul className="list-disc ml-4 mb-2">
                        {value.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.type === 'email' ? (
                              <Link to={link.url}>{link.name}</Link>
                            ) : link.type === 'tel' ? (
                              <Link to={link.url}>{link.name}</Link>
                            ) : typeof link === 'string' ? (
                              link
                            ) : link.type === 'internal' ? (
                              <Link to={link.url}>{link.name}</Link>
                            ) : link.type === 'external' && (
                              <Link to={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {value.title !== 'Links' && value.title !== 'links' && (
                      value.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="mb-2">
                          {link.type === 'email' ? (
                            <Link to={link.url}>{link.name}</Link>
                          ) : link.type === 'tel' ? (
                            <Link to={link.url}>{link.name}</Link>
                          ) : typeof link === 'string' ? (
                            link
                          ) : link.type === 'internal' ? (
                            <Link to={link.url}>{link.name}</Link>
                          ) : link.type === 'external' && (
                            <Link to={link.url} target="_blank" rel="noopener noreferrer">
                              {link.name}
                            </Link>
                          )}
                        </div>
                      ))
                    )}
                    {value.title === 'RAMADA BY WYNDHAM COLOMBO' && (
                      <div>
                        <div className="mb-4 lg:w-3/4 flex flex-col justify-between">
                          <div className="mt-4">
                            {FOOTER_SOCIAL.map((social, index) => (
                              <div key={index} className="flex items-center">
                                {social.links.map((link, linkIndex) => (
                                  <SocialButton key={linkIndex} name={link.name} url={link.url} />
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="flex items-center justify-between">
                <img src={FOOTERIMG3} width={188} className="mx-4" />
                <img src={FOOTERIMG2} width={188} className="mx-4" />
              </div>
              <img src={FOOTERIMG1} className="my-4" />
            </div>
          </div>
          <div className="footer-text-4 flex mt-5 items-center justify-center">
            <p className="mx-8">Support</p>
            <p className="mx-8">Privacy Policy</p>
            <p className="mx-8">Terms and Conditions</p>
          </div>
          <hr className="mt-5 border-t-[0.5px] border-white" />
          <div className="flex justify-center items-center mt-5">
            <div>
              <p className="footer-text-4 text-center">
                © 2023{" "}
                <Link to="https://www.thecodedesk.com/" className="text-white" target="_blank" rel="noopener noreferrer">
                  Code Desk
                </Link>
                All rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer