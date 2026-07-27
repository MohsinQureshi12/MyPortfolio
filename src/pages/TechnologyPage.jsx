import technologyBg from "../../public/assets/image/portofolioDataBG.svg";
import ReactImage from "../../public/assets/image/react.jpg";
import AngularImage from "../../public/assets/image/angular-js-final-zobi.png";
import VueImage from "../../public/assets/image/vue-1024x430.png";
import JSImage from "../../public/assets/image/js-1024x536.png";
import NodeJSImage from "../../public/assets/image/node-1024x538.png";
import RORImage from "../../public/assets/image/ruby-1024x538.jpg";
import PhpImage from "../../public/assets/image/php-2048x1365.jpg";
import LaraveImage from "../../public/assets/image/laravel-1024x569.png";
import pythonImage from "../../public/assets/image/paython.jpg";
import flutterImage from "../../public/assets/image/fluter.jpeg";
import ReactnativeImage from "../../public/assets/image/native.png";
import shopifyImage from "../../public/assets/image/shopify-1024x538.jpg";
import WooCommerceImage from "../../public/assets/image/wocommerce.svg";
import wordpressImage from "../../public/assets/image/wordpress.jpg";
import AWSImage from "../../public/assets/image/aws-1024x576.jpg";
import MongoDbImage from "../../public/assets/image/mongo.jpg";
import PostgressImage from "../../public/assets/image/Postgre_SQL.svg";
import MysqlImage from "../../public/assets/image/mysql.svg";
import TechnologyPageProps from "./TechnologyPageProps";

const TechnologyPage = () => {
  return (
    <section>
      {/* <div
        className="w-full min-h-[600px] flex items-center justify-center relative mb-[20px]"
        style={{
          backgroundImage: `url(${technologyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 text-white text-[50px] font-bold "
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          Technologies
        </div>
      </div> */}
      <div
        className="w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center relative mb-5 px-4 text-center"
        style={{
          backgroundImage: `url(${technologyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          Technologies
        </div>
      </div>

      <div className="flex min-h-screen">
        <div className="container px-4 mx-auto">
          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              Front<span className="text-primary">End</span>
            </h1>
          </div>

          <TechnologyPageProps
            title="React"
            highlightedText="JS"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={ReactImage}
            reverseOrder={false}
          />
          <TechnologyPageProps
            title="Angular"
            highlightedText="JS"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={AngularImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Vue"
            highlightedText="JS"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={VueImage}
            reverseOrder={false}
          />
          <TechnologyPageProps
            title="Java"
            highlightedText="Script"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={JSImage}
            reverseOrder={true}
          />

          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              Back<span className="text-primary">End</span>
            </h1>
          </div>

          <TechnologyPageProps
            title="Node"
            highlightedText="JS"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={NodeJSImage}
            reverseOrder={false}
          />
          <TechnologyPageProps
            title="Ruby On"
            highlightedText="Rails"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={RORImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Lara"
            highlightedText="Vel"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={LaraveImage}
            reverseOrder={false}
          />

          <TechnologyPageProps
            title="P"
            highlightedText="H"
            tittleShade="P"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={PhpImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Py"
            highlightedText="th"
            tittleShade="on"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
         ReactJS is only concerned with providing information to the DOM and thus enabling React applications
          generally require the use of additional libraries to declare the board and controlling.
           It has a wide range of possibilities in the design and development of applications.
            It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={pythonImage}
            reverseOrder={false}
          />

          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              Mobile<span className="text-primary">Appication</span>
            </h1>
          </div>

          <TechnologyPageProps
            title="React"
            highlightedText="Native"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={ReactnativeImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Flut"
            highlightedText="ter"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={flutterImage}
            reverseOrder={false}
          />

          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              C<span className="text-primary">M</span>S
            </h1>
          </div>

          <TechnologyPageProps
            title="Shopify"
            highlightedText="Services"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={shopifyImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Woo"
            highlightedText="Commerce"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={WooCommerceImage}
            reverseOrder={false}
          />

          <TechnologyPageProps
            title="Word"
            highlightedText="Press"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={wordpressImage}
            reverseOrder={true}
          />

          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              Web<span className="text-primary">Services</span>
            </h1>
          </div>

          <TechnologyPageProps
            title="A"
            highlightedText="W"
            tittleShade="S"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={AWSImage}
            reverseOrder={false}
          />

          <div className=" border border-gray-150 shadow-sl p-4 text-center md:mb-10 mb-7">
            {/* w-[1050px] h-[90px] */}
            <h1 className="text-black font-bold text-[40px]">
              Data<span className="text-primary">Base</span>
            </h1>
          </div>

          <TechnologyPageProps
            title="Mongo"
            highlightedText="DB"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={MongoDbImage}
            reverseOrder={true}
          />

          <TechnologyPageProps
            title="Post"
            highlightedText="Gress"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={PostgressImage}
            reverseOrder={false}
          />
          <TechnologyPageProps
            title="My"
            highlightedText="SQL"
            description="create extremely user-friendly, flexible UI with the help of ReactJS. 
        ReactJS is only concerned with providing information to the DOM and thus enabling React applications
         generally require the use of additional libraries to declare the board and controlling.
          It has a wide range of possibilities in the design and development of applications.
           It can serve as a foundation for developing single-page programs and can adapt to various broad implementations."
            imageSrc={MysqlImage}
            reverseOrder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
