import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-georgian-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Discover Georgia</h4>
            <p className="text-gray-300 mb-4">
              Your guide to experiencing the heart of the Caucasus region with its rich history, 
              diverse landscapes, and legendary hospitality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-accent transition duration-150"
                aria-label="Facebook"
              >
                <span className="material-icons">facebook</span>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition duration-150"
                aria-label="Instagram"
              >
                <span className="material-icons">camera_alt</span>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition duration-150"
                aria-label="Email"
              >
                <span className="material-icons">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white transition duration-150">
                    About the Country
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-gray-300 hover:text-white transition duration-150">
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resorts">
                  <a className="text-gray-300 hover:text-white transition duration-150">
                    Resorts
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cuisine">
                  <a className="text-gray-300 hover:text-white transition duration-150">
                    Cuisine
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/traditions">
                  <a className="text-gray-300 hover:text-white transition duration-150">
                    Traditions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-150">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-150">
                  Visa Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-150">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-150">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-150">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Tourism Information Center</p>
              <p className="mb-2">Freedom Square, Tbilisi</p>
              <p className="mb-2">Georgia</p>
            </address>
            <p className="text-gray-300 mt-4">
              <span className="material-icons text-sm align-middle mr-1">email</span> 
              info@discovergeorgia.ge
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Discover Georgia. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition duration-150">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition duration-150">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
