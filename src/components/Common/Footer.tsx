import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h2 className="text-lg">Concern</h2>
              <p>
                Empowering change through research and data-driven insights
                across Nepal.
              </p>
            </div>
            <ul>
              <li className="flex items-center justify-center gap-2">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </li>
            </ul>
            <div></div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
