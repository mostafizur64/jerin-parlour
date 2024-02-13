import React from "react";
import Container from "../../../components/Container";

const Contact = () => {
  return (
    <Container>
      <div className="py-16">
        <div className="md:w-[410px] w-full mx-auto">
          <h2 className="text-[32px] text-headingColor font-extrabold tracking-wider text-center md:mb-20 mb-4">
            Let us handle your project, <span>professionally.</span>
          </h2>
        </div>
        <div className="md:px-[120px] md:mt-0 mt-12">
          <form
            action=""
            className="md:flex flex-col gap-8 md:space-y-0 space-y-4"
          >
            <div className="md:flex items-center gap-8 md:space-y-0 space-y-4">
              <div className="form-control w-full ">
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className="w-full  p-4 rounded-lg focus:outline-none text-paragraphColor"
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className="w-full  p-4 rounded-lg focus:outline-none text-paragraphColor"
                />
              </div>
            </div>
            <div className="md:flex items-center gap-8 md:space-y-0 space-y-4">
              <div className="form-control w-full ">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full  p-4 rounded-lg focus:outline-none text-paragraphColor"
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full  p-4 rounded-lg focus:outline-none text-paragraphColor"
                />
              </div>
            </div>
            <div className="form-control w-full ">
              <textarea
                type="text"
                cols={6}
                rows={6}
                name="message"
                placeholder="Your Message"
                className="w-full  p-4 rounded-lg focus:outline-none text-paragraphColor"
              />
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="btn  md:mt-0 mt-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
