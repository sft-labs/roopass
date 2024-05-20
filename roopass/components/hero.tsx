import Image from "next/image";
import Mockup from "@/public/mockup.svg";

export default function Hero() {
  return (
    <section className="relative h-[720px] mb-72 md:mb-24">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#F5C9AF" offset="77.402%" />
              <stop stopColor="#FCBF9C" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            {/* <circle cx="155" cy="443" r="64" /> */}
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 sm:grid-cols-1">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 md:mt-32 sm:mt-10 md:w-[110%]">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-[60px] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5C00] to-[#FFC30F]">Effortless</span> Payments Everywhere{" "}
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5C00] to-[#FFC30F]">
                Financial Infrastructure{" "}
              </span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Roopass lets you make effortless Web3 payments anytime,
                anywhere, while securely managing your assets and protecting
                your privacy.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* <div>
                  <a
                    className="btn text-white bg-[#FF5C00] hover:bg-[#D84800] w-[250px] md:w-[350px] mb-4 sm:w-auto sm:mb-0"
                    href="/"
                  >
                    Get APP
                  </a>
                </div> */}
                {/* <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/">Learn More</a>
                </div> */}
              </div>
            </div>
          </div>
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
        <div className="md:mt-52 md:mr-[-150px]">
            {/* Hero image */}
          <Image
            className="md:max-w-none mx-auto rounded"
            src={Mockup}
            width={400}
            height={457}
            alt="Features bg"
          />
          </div>
      </div>
    </section>
  );
}
