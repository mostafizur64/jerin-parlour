import React from "react";
import Container from "../../components/Container";
import img1 from "../../assets/image/Pservices/first.png";
import img2 from "../../assets/image/Pservices/second.png";
import img3 from "../../assets/image/Pservices/third.png";
const Services = () => {
  return (
    <div className=" p-2">
      <div className="bg-[#FFFFFF]">
        <Container>
          <div className="py-16">
            <div className="py-4">
              <h2 className="text-[32px] text-headingColor font-extrabold tracking-wider text-center">
                Our Awesome <span className="text-textColor"> Services</span>
              </h2>
            </div>
            <div className="md:flex items-center justify-center mt-12">
              <div className="flex flex-col items-center justify-center hover:shadow-lg p-4 rounded-lg">
                <div className="bg-[#f7e4e4] w-[72px] h-[72px] flex items-center justify-center rounded-full">
                  <img src={img1} alt="" />
                </div>
                <h2 className="text-headingColor text-xl font-bold py-2">
                  Anti Age Face Treatment
                </h2>
                <span className="text-textColor text-lg font-medium">$119</span>
                <p className="text-paragraphColor mt-2 text-center">
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center hover:shadow-lg p-4 rounded-lg">
                <div className="bg-[#f7e4e4] w-[72px] h-[72px] flex items-center justify-center rounded-full">
                  <img src={img2} alt="" />
                </div>
                <h2 className="text-headingColor text-xl font-bold py-2">
                  Hair Color & Styleing
                </h2>
                <span className="text-textColor text-lg font-medium">$99</span>
                <p className="text-paragraphColor mt-2 text-center">
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center hover:shadow-lg p-4 rounded-lg">
                <div className="bg-[#f7e4e4] w-[72px] h-[72px] flex items-center justify-center rounded-full">
                  <img src={img3} alt="" />
                </div>
                <h2 className="text-headingColor text-xl font-bold py-2">
                  Skin Care Treatment
                </h2>
                <span className="text-textColor text-lg font-medium">$229</span>
                <p className="text-paragraphColor mt-2 text-center">
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="btn">Explore more</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
