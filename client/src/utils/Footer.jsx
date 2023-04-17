import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Spring City
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Products
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/login" className=" hover:underline">
                  Login
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/dashboard" className=" hover:underline">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/sshatil"
                  target="_blank"
                  className=" hover:underline"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="www.linkedin.com/in/sshatil"
                  target="_blank"
                  className=" hover:underline"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://shatil.vercel.app"
                  className=" hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Terms & Condition
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Terms &amp; Condition
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  IOS
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 Spring City™. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="https://fb.com/ssshatil"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <p>
                <FaFacebook />
              </p>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://github.com/sshatil"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <BsGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://linkedin.com/in/sshatil"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <BsLinkedin />
              <span className="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
