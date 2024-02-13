import React from "react";
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// img ===============
import img1 from "../../../assets/image/testimonial/first.png";
import img2 from "../../../assets/image/testimonial/second.png";
import img3 from "../../../assets/image/testimonial/third.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="bg-[#fff] md:py-12 py-4">
      <Container>
        <div>
          <h2 className="text-[32px] text-headingColor font-extrabold tracking-wider text-center md:mb-20 mb-4">
            Testimonials
          </h2>
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper mb-12"
        >
          <SwiperSlide className="mb-12">
            <div className="md:flex items-center justify-center md:space-y-0 space-y-4">
              {/* first div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img1} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Nash Patrik
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* second  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="md:flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img2} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Miriam Barron
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* third  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img3} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Bria Malone
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="md:flex items-center justify-center md:space-y-0 space-y-4">
              {/* first div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img1} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Nash Patrik
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* second  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img2} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Miriam Barron
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* third  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img3} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Bria Malone
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="md:flex items-center justify-center md:space-y-0 space-y-4">
              {/* first div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img1} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Nash Patrik
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* second  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img2} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Miriam Barron
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
              {/* third  div =================== */}
              <div className="md:border-none border-dashed border md:p-0 p-5 rounded-md ">
                <div className="flex items-center gap-4">
                  <img className="w-[64px] h-[64px]" src={img3} alt="img" />
                  <div>
                    <h2 className="text-headingColor font-bold text-2xl">
                      Bria Malone
                    </h2>
                    <h3 className="text-headingColor font-semibold  text-[18px]">
                      CEO, Manpol
                    </h3>
                  </div>
                </div>
                <p className="text-headingColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
                </p>
                <div>
                  <p>
                    <Rating
                      className="text-yellow-500 text-2xl mt-6"
                      placeholderRating={2}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
