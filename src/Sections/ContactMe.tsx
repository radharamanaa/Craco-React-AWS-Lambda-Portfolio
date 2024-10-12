const ContactMe = () => {
  return (
    <div
      className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-screen "
      id="ContactMe"
    >
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32 font-thin text-slate-700">
        Click to contact me on LinkedIn
      </div>
      <div className="">
        <div className="text-lg font-playfair w-full mt-4 underline">
          <a
            href="https://www.linkedin.com/in/abhijeet-mishra-24a3b695/"
            target="_blank"
          >
            <div className="w-32 md:w-64">
              <img
                src={
                  "https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/linkedinlogo.png"
                }
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
