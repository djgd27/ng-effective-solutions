import React from "react";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="mb-4 mb-md-0">
              <img src={logo} alt="Company Logo" className="w-auto h-20 mb-3" />
              <p>Providing top-notch handyman and home repair services.</p>
            </div>
            <div className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <b>Contact Info</b>
              </h5>
              <br />
              <ul className="list-unstyled">
                <li>Ossining, NY United States</li>
                <br />
                <li>
                  <a href="tel:9142239710" className="hover:text-cyan-400">
                    (914) 223-9710
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ngeffectivesolutions@gmail.com"
                    className="hover:text-cyan-400"
                  >
                    ngeffectivesolutions@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <b>Referral Program</b>
              </h5>
              <br />
              <ul className="list-unstyled">
                <li>Join our referral program</li>
                <li>Earn discounts and rewards</li>
              </ul>
            </div>
            <div className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <b>Quick Links</b>
              </h5>
              <br />
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="hover:text-cyan-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-cyan-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-cyan-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-cyan-400">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/estimate" className="hover:text-cyan-400">
                    Request Estimate
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <b>Information</b>
              </h5>
              <br />
              <p>
                We are dedicated to providing the best services to our
                customers.
                <br />
                Contact us for more information and special offers.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="container mx-auto px-4 bg-black bg-dark text-white py-3">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; Copyright {new Date().getFullYear()} - NG Effective Solutions
          </p>
          <div className="text-sm">
            <a
              href="https://www.linkedin.com/in/davidgaldel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              By David Galindo Delgado BS IT 27
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* 
const FooterTest = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            NG Effective Solutions &copy; {new Date().getFullYear()}
          </p>
          <div>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              By David Galindo Delgado BS IT 27
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
*/
}

export default Footer;
