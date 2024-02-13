import Container from "../../../components/Container";
import ProfessionalImg from "../../../assets/image/professionally/professional.png";
const Professional = () => {
  return (
    <Container>
      <div className="md:flex items-center justify-between md:mt-20 mt-4 md:mb-8 md:space-y-0 space-y-4">
        <div className="md:w-2/3 w-full">
          <img src={ProfessionalImg} alt="ProfessionalImg" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <h2 className="text-[32px] text-headingColor font-extrabold tracking-wider">
            Let us handle your screen
            <span className="text-textColor"> Professionally</span>
          </h2>
          <p className="text-paragraphColor text-[20px]">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>

          <div className="md:flex items-center gap-20 md:space-y-0 space-y-4">
            <div className="flex flex-col md:items-start items-center md:border-none border border-dashed border-white md:p-0 p-4">
              <h2 className="text-3xl text-textColor font-bold">500+</h2>
              <p className="text-headingColor text-[15px] mt-2">
                Happy Customer
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center md:border-none border border-dashed border-white md:p-0 p-4">
              <h2 className="text-3xl text-textColor font-bold">500+</h2>
              <p className="text-headingColor text-[15px] mt-2">
                Happy Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Professional;
