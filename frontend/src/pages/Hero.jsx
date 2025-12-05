import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/image/img-2.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="Hero-Content relative text-white flex flex-col justify-center items-center min-h-screen">
        {/* Logo */}
        <div className="hero-Logo flex justify-center items-center ">
          <img
            src="/image/img-1.png"
            className="w-40 h-24 sm:w-50 sm:h-30 md:w-60 md:h-30 lg:w-70 lg:h-38 object-contain"
            alt="Logo"
          />
        </div>

        {/* Main Content */}
        <div className=" hero-content flex flex-col justify-start ">
          {/* Heading */}
          <h1 className="font-normal font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl leading-tight">
            Where education <br  />
            <span className="sm:hidden"> </span>
            and imagination meet.
          </h1>

          {/* Description */}
          <p className="font-normal font-sans text-sm sm:text-base md:text-lg lg:text-xl sm:tracking-[.4rem] md:tracking-[.5rem] lg:tracking-[.4rem] tracking-[.2rem]  w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            Unlock your full potential with customized learning experience for
            every curious mind.
          </p>

          {/* Login Button */}
          <div onClick={()=> navigate("/login")} className="cursor-pointer hero-Login-Button inline-flex gap-2 sm:gap-3 items-center hover:gap-4 transition-all duration-300 group">
            <span className="text-[#FED302] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Login
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              <svg
                width="32"
                height="32"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
              >
                <foreignObject x="-156" y="-156" width="364" height="364">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      backdropFilter: "blur(78px)",
                      clipPath: "url(#bgblur_0_129_9_clip_path)",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                </foreignObject>
                <g data-figma-bg-blur-radius="156">
                  <rect
                    width="52"
                    height="52"
                    rx="26"
                    fill="white"
                    fillOpacity="0.08"
                  />
                  <rect
                    x="0.52"
                    y="0.52"
                    width="50.96"
                    height="50.96"
                    rx="25.48"
                    stroke="white"
                    strokeOpacity="0.28"
                    strokeWidth="1.04"
                  />
                </g>
                <path
                  d="M29.9767 33.9592C29.7506 33.7283 29.6235 33.4152 29.6235 33.0888C29.6235 32.7625 29.7506 32.4494 29.9767 32.2185L34.3566 27.7518H14.7277C14.4074 27.7518 14.1002 27.622 13.8737 27.391C13.6473 27.1601 13.52 26.8468 13.52 26.5201C13.52 26.1935 13.6473 25.8802 13.8737 25.6492C14.1002 25.4183 14.4074 25.2885 14.7277 25.2885H34.3534L29.9767 20.8234C29.8645 20.709 29.7755 20.5732 29.7148 20.4237C29.6541 20.2742 29.6229 20.114 29.6229 19.9522C29.6229 19.6255 29.7502 19.3121 29.9767 19.0811C30.2033 18.85 30.5105 18.7202 30.8309 18.7202C31.1513 18.7202 31.4586 18.85 31.6852 19.0811L38.1262 25.6498C38.2383 25.764 38.3273 25.8997 38.388 26.049C38.4488 26.1984 38.48 26.3585 38.48 26.5201C38.48 26.6818 38.4488 26.8419 38.388 26.9912C38.3273 27.1406 38.2383 27.2762 38.1262 27.3905L31.6852 33.9592C31.573 34.0737 31.4399 34.1644 31.2933 34.2264C31.1467 34.2883 30.9896 34.3202 30.8309 34.3202C30.6723 34.3202 30.5152 34.2883 30.3686 34.2264C30.222 34.1644 30.0889 34.0737 29.9767 33.9592Z"
                  fill="white"
                />
                <defs>
                  <clipPath
                    id="bgblur_0_129_9_clip_path"
                    transform="translate(156 156)"
                  >
                    <rect width="52" height="52" rx="26" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
