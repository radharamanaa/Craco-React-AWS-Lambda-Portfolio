import React from "react";
import "@fontsource/playfair-display"; // Defaults to weight 400
// or specify a weight and style
import "@fontsource/playfair-display/400.css"; // Normal weight
import "@fontsource/playfair-display/700.css"; // Bold weight
import "@fontsource/playfair-display/400-italic.css"; // Italic normal weight

const HeadingForExperience: React.FC<{ heading: string; totalExp: string }> = ({
  heading,
  totalExp,
}) => {
  return (
    <div
      className="grid grid-cols-1 justify-center gap-4 mx-auto w-9/12"
      style={{ fontFamily: "Playfair Display" }}
    >
      <div className="flex justify-between">
        <div className="flex text-purple-600 items-end">
          <span className="text-6xl underline">{heading.substring(0, 1)}</span>
          <span className=" text-2xl text-black">
            {heading.substring(1)} -{" "}
          </span>
          <span className="text-md text-slate-800 self-end ml-2">
            {totalExp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadingForExperience;
