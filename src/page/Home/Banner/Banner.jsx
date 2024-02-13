import React from "react";
import Container from "../../../components/Container";
import bannerImg from "../../../assets/image/banner/banner.png";
const Banner = () => {
  return (
    <Container>
      <div className="md:flex items-center gap-52 h-full md:space-y-0 space-y-4">
        {/* ======================left side */}
        <div className="md:w-[468px] w-full">
          <h2 className="text-headingColor uppercase text-[30px] font-[800]">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h2>
          <p className="text-paragraphColor md:py-6 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <button className="btn md:w-[229px] w-full h-[50px] ">
            Get an Appointment
          </button>
        </div>
        {/* right side ====================== */}
        <div>
            {/* todo number */}
          <img src={bannerImg} alt="bannerImg" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
