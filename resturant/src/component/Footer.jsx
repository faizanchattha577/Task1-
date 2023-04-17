import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4  md:mb-0">
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <p>
              A team of developers working together to create web applications.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p>1234 Main Street, Anytown USA 12345</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-bold text-lg mb-4">Connect with Us</h4>
            <ul className="list-none">
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="text-center">
          <p>&copy; 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
