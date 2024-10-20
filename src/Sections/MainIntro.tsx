import "@fontsource/roboto";
import "@fontsource/playfair-display"; // Defaults to weight 400
// or specify a weight and style
import "@fontsource/playfair-display/400.css"; // Normal weight
import "@fontsource/playfair-display/700.css"; // Bold weight
import "@fontsource/playfair-display/400-italic.css"; // Italic normal weight
import "@fontsource/raleway";
import AppearOnceWrapper from "../atoms/AppearOnceWrapper";
import mainIntroData from "../data/MainIntroData";
const MainIntro = () => {
  return (
    <AppearOnceWrapper timeToAppear={1}>
      <div className="bg-slate-50 py-16" id="Home">
        <div className="flex flex-col md:grid md:grid-cols-12 mx-auto md:max-w-5xl w-full md:auto-rows-auto p-4">
          <div className="order-last md:order-1 md:col-span-7 flex flex-col justify-center">
            <div
              className="text-4xl lg:text-6xl font-playfair mb-4 flex justify-center md:justify-start mt-4 md:mt-0 font-thin"
              style={{ fontFamily: "Playfair Display" }}
            >
              {mainIntroData.title}
            </div>
            <div className="">
              <div
                className="text-md md:w-10/12 pl-2"
                style={{ fontFamily: "Raleway" }}
                dangerouslySetInnerHTML={{ __html: mainIntroData.description }}
              />
            </div>
          </div>
          <div className="md:order-2 md:col-span-5">
            <div className="flex justify-center rounded-full">
              <img
                src={mainIntroData.urlForImage}
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
