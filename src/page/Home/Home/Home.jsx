
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import Professional from "../Professional/Professional";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Jerin Parlour | Home</title>
      </Helmet>
      <Banner />
      <Services />
      <Professional />
      <Testimonial/>
      <Contact/>
      
    </div>
  );
};

export default Home;
