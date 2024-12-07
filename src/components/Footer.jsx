import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#128C7E] text-white p-8">
      <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        {/* Slogan Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Connect with Ease</h3>
          <p>Effortlessly share messages on WhatsApp with the right format.</p>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/vivalafreak1/waformatter"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/arieftaufikrahman"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center md:text-right md:mt-0">
          <p>
            &copy; {currentYear} WhatsApp Message Converter. <br />
            Created by Arief Taufik Rahman.
          </p>
        </div>
      </div>
    </footer>
  );
}
