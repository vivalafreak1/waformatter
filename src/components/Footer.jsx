import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#128C7E] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Slogan Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Connect with Ease</h3>
          <p>Effortlessly share messages on WhatsApp with the right format.</p>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p>&copy; 2024 WhatsApp Message Converter. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
