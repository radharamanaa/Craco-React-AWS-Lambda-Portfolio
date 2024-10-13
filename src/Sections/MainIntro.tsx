import "@fontsource/roboto";
import "@fontsource/playfair-display"; // Defaults to weight 400
// or specify a weight and style
import "@fontsource/playfair-display/400.css"; // Normal weight
import "@fontsource/playfair-display/700.css"; // Bold weight
import "@fontsource/playfair-display/400-italic.css"; // Italic normal weight
import "@fontsource/raleway";
import AppearOnceWrapper from "../atoms/AppearOnceWrapper";
const MainIntro = () => {
  return (
    <AppearOnceWrapper timeToAppear={1}>
      <div className="bg-slate-50 py-16" id="Home">
        <div className="flex flex-col md:grid md:grid-cols-12 mx-auto md:max-w-5xl w-full md:auto-rows-auto p-4">
          <div className="order-last md:order-1 md:col-span-7 flex flex-col justify-center">
            <AppearOnceWrapper timeToAppear={2}>
              <div
                className="text-4xl lg:text-6xl font-playfair mb-4 flex justify-center md:justify-start mt-4 md:mt-0 font-thin"
                style={{ fontFamily: "Playfair Display" }}
              >
                Technical Architect
              </div>
            </AppearOnceWrapper>
            <AppearOnceWrapper timeToAppear={4}>
              <div
                className="text-md md:w-10/12 pl-2"
                style={{ fontFamily: "Raleway" }}
              >
                I am a
                <span className="text-purple-700"> Technical Architect</span>{" "}
                with an AWS Certified Developer Certification, with experience
                in Designing architectures and developing web
                applications.Full-Stack Team Lead with expertise in Java,
                ReactJS, SQL &amp; JavaScript.
                <br />
                <br />
                With
                <span className="text-purple-700">
                  {" "}
                  8+ years of experience
                </span>{" "}
                in the industry, I have successfully delivered robust and
                scalable web applications. I am passionate about crafting
                elegant solutions to complex problems and thrive in
                collaborative environments.
              </div>
            </AppearOnceWrapper>
          </div>
          <div className="md:order-2 md:col-span-5">
            <div className="flex justify-center rounded-full">
              <img
                src="https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Professional.jpeg"
                alt=""
                className="h-64 md:h-96 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </AppearOnceWrapper>
  );
};

export default MainIntro;
