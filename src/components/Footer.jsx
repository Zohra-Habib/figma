
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16">
      <div className="flex flex-col items-center gap-6">

        <div className="flex items-center gap-8 text-[#21243D] text-[30px]">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className="text-[14px] text-[#21243D] text-center">
          Copyright ©2020 All rights reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;
