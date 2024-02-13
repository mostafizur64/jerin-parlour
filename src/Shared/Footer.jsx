import React, { Component } from "react";
import Container from "../components/Container";
import {
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export class Footer extends Component {
  render() {
    return (
      <div className="bg-textColor md:py-12 py-4">
        <Container>
          <div className="md:flex gap-16">
            <div className="md:w-[40%] text-white font-semibold">
              <div className="flex items-center gap-4">
                <div>
                  <FaLocationDot className="text-white text-2xl" />
                </div>
                <div>
                  H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                  Bangladesh
                </div>
              </div>
            </div>
            <div className="md:w-[60%] w-full">
              <div className="md:flex justify-between text-white md:space-y-0 space-y-8">
                <ul className="space-y-3 md:mt-0 mt-4">
                  <li className="font-semibold text-xl">Company</li>
                  <li className="">About</li>
                  <li>Project</li>
                  <li>Our Team</li>
                  <li>Terms Conditions</li>
                  <li>Submit Listing</li>
                </ul>
                <ul className="space-y-3">
                  <li className="font-semibold text-xl">Quick Links</li>
                  <li className="">Quick Links</li>
                  <li>Rentals</li>
                  <li>Sales</li>
                  <li>Contact</li>
                  <li>Our blog</li>
                </ul>
                <ul className="space-y-3">
                  <li className="font-semibold text-xl">About</li>
                  <li className="w-[326px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus commodo ipsum duis laoreet maecenas. Feugiat
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-white w-[40px] h-[40px] text-textColor items-center justify-center flex rounded-full text-lg hover:scale-110 duration-700 cursor-pointer">
                      <FaFacebookF />
                    </div>
                    <div className="bg-white w-[40px] h-[40px] text-textColor items-center justify-center flex rounded-full text-lg hover:scale-110 duration-700 cursor-pointer">
                      <FaInstagram />
                    </div>
                    <div className="bg-white w-[40px] h-[40px] text-textColor items-center justify-center flex rounded-full text-lg hover:scale-110 duration-700 cursor-pointer">
                      <FaLinkedinIn />
                    </div>
                    <div className="bg-white w-[40px] h-[40px] text-textColor items-center justify-center flex rounded-full text-lg hover:scale-110 duration-700 cursor-pointer">
                      <FaYoutube />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
