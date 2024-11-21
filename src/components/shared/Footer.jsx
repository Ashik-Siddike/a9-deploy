import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Winter Donation</h3>
            <p className="text-gray-400">
              Helping people stay warm during winter through your generous donations.
              Together we can make a difference in the lives of those in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns" className="text-gray-400 hover:text-white">
                  Donation Campaigns
                </Link>
              </li>
              <li>
                <Link to="/how-to-help" className="text-gray-400 hover:text-white">
                  How to Help
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@winterdonation.com</p>
            <p className="text-gray-400">Phone: +880 1234-567890</p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://facebook.com" 
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Winter Donation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 