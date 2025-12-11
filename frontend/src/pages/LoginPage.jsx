import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [geniusId, setGeniusId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const clearGeniusId = () => {
    setGeniusId("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative bg-[#012331] w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        className="absolute inset-0 opacity-50 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 left-0 sm:left-[12.5%] md:left-[16.67%] lg:left-[25%] h-full object-cover"
        src="/image/img-3.png"
        alt="LoginImg"
      />

      {/* Content */}
      <div className="relative text-white min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Logo */}
        <div className="Hero-Logo flex justify-center items-center ">
          <img
            src="/image/img-1.png"
            className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 object-contain"
            alt="Logo"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          {/* Login-form */}
          <div className="Login-form bg-[rgba(5,9,11,.9)] w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl  p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl">
            {/* Title */}
            <h1 className="text-center font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif mb-6 sm:mb-8 lg:mb-10">
              Login
            </h1>

            {/* Genius ID */}
            <div className="">
              <label
                htmlFor="geniusId"
                className="block text-sm sm:text-base md:text-lg mb-2 sm:mb-3 font-medium"
              >
                Genius ID
              </label>
              <div className="flex border border-white/30 hover:border-white/50 justify-between items-center rounded-xl sm:rounded-2xl  bg-black/20">
                <div className="flex gap-1 form-div  items-center flex-1">
                  <img
                    src="/image/img-4.png"
                    className="w-6 h-6 sm:w-8 sm:h-8 object-cover flex-shrink-0"
                    alt="ID Icon"
                  />
                  <input
                    id="geniusId"
                    type="text"
                    placeholder="12345678"
                    value={geniusId}
                    onChange={(e) => setGeniusId(e.target.value)}
                    className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full text-sm sm:text-base md:text-lg"
                  />
                </div>
                  <button
                    onClick={clearGeniusId}
                    className="ml-2 pointthreerem flex-shrink-0 hover:opacity-70 cursor-pointer"
                    aria-label="Clear input"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-[17px] sm:h-[17px]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7429 1.81257C15.9377 1.61085 16.0455 1.34068 16.0431 1.06025C16.0407 0.779819 15.9282 0.511564 15.7299 0.313262C15.5316 0.11496 15.2633 0.0024773 14.9829 4.04314e-05C14.7025 -0.00239644 14.4323 0.105408 14.2306 0.300234L8.03472 6.4961L1.83885 0.300234C1.63713 0.105408 1.36697 -0.00239644 1.08653 4.04314e-05C0.806104 0.0024773 0.537849 0.11496 0.339548 0.313262C0.141246 0.511564 0.0287625 0.779819 0.0263257 1.06025C0.0238888 1.34068 0.131693 1.61085 0.326519 1.81257L6.52238 8.00843L0.326519 14.2043C0.224367 14.303 0.142887 14.421 0.0868329 14.5515C0.0307792 14.682 0.00127444 14.8223 4.03828e-05 14.9643C-0.00119367 15.1063 0.0258674 15.2472 0.0796449 15.3786C0.133423 15.51 0.212839 15.6295 0.313262 15.7299C0.413684 15.8303 0.533101 15.9097 0.664544 15.9635C0.795987 16.0173 0.936824 16.0443 1.07884 16.0431C1.22085 16.0419 1.3612 16.0124 1.49168 15.9563C1.62217 15.9003 1.74019 15.8188 1.83885 15.7166L8.03472 9.52076L14.2306 15.7166C14.4323 15.9115 14.7025 16.0193 14.9829 16.0168C15.2633 16.0144 15.5316 15.9019 15.7299 15.7036C15.9282 15.5053 16.0407 15.237 16.0431 14.9566C16.0455 14.6762 15.9377 14.406 15.7429 14.2043L9.54705 8.00843L15.7429 1.81257Z"
                        fill="#BFBFBF"
                      />
                    </svg>
                  </button>
              </div>
            </div>

            {/* Password */}
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base md:text-lg font-medium"
              >
                Password
              </label>
              <div className="flex border border-white/30 hover:border-white/50 transition-colors justify-between items-center rounded-xl sm:rounded-2xl  bg-black/20">
                <div className="flex gap-2 form-div sm:gap-3 items-center flex-1">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-[21px] sm:h-[21px] flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.59562 2.23152C10.5722 -0.744496 15.4029 -0.743076 18.3872 2.2312C21.3734 5.20734 21.3734 10.0579 18.3971 13.0341L18.396 13.0354C16.4308 14.9909 13.6618 15.6651 11.1558 15.04L6.23988 19.9473C5.98071 20.2122 5.63802 20.3897 5.3174 20.4937C4.99472 20.5982 4.61983 20.6524 4.2666 20.6015L4.26322 20.601L2.27729 20.3278C1.76386 20.2565 1.30756 19.9876 0.971335 19.6498C0.634936 19.3119 0.370938 18.858 0.293846 18.3533L0.292238 18.3428L0.019049 16.3569L0.0185684 16.3536C-0.0334248 15.9922 0.029598 15.6138 0.135224 15.2969C0.241331 14.9787 0.41657 14.644 0.662342 14.3908L0.669821 14.383L5.58134 9.47167C4.96417 6.96168 5.62696 4.19111 7.59562 2.23152Z"
                      fill="#BFBFBF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5088 7.56414C10.5088 6.15771 11.6489 5.01758 13.0554 5.01758C14.4618 5.01758 15.6019 6.15771 15.6019 7.56414C15.6019 8.97053 14.4618 10.1107 13.0554 10.1107C11.6489 10.1107 10.5088 8.97053 10.5088 7.56414Z"
                      fill="black"
                    />
                  </svg>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent outline-none text-white placeholder:text-gray-400 w-full text-sm sm:text-base md:text-lg"
                  />
                </div>
                <button
                  onClick={togglePasswordVisibility}
                  className="flex-shrink-0 hover:opacity-70 pointthreerem cursor-pointer"
                >
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-[19px] sm:h-[15px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.735891 4.77268C2.90485 1.77527 6.05744 0 9.48066 0C12.904 0 16.0567 1.77544 18.2257 4.77313C18.7311 5.46965 18.9613 6.36434 18.9613 7.22188C18.9613 8.0795 18.731 8.97438 18.2254 9.67101C16.0565 12.6685 12.9039 14.4437 9.48066 14.4437C6.05727 14.4437 2.90453 12.6683 0.735567 9.67056C0.230208 8.97402 0 8.07932 0 7.22188C0 6.36416 0.230298 5.46929 0.735891 4.77268Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M12.1803 7.22612C12.1803 8.71927 10.9736 9.92588 9.4805 9.92588C7.98736 9.92588 6.78076 8.71927 6.78076 7.22612C6.78076 5.73298 7.98736 4.52637 9.4805 4.52637C10.9736 4.52637 12.1803 5.73298 12.1803 7.22612Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.48064 5.20144C8.36024 5.20144 7.45584 6.10586 7.45584 7.22626C7.45584 8.34666 8.36024 9.25108 9.48064 9.25108C10.601 9.25108 11.5055 8.34666 11.5055 7.22626C11.5055 6.10586 10.601 5.20144 9.48064 5.20144ZM6.10596 7.22626C6.10596 5.36034 7.61473 3.85156 9.48064 3.85156C11.3466 3.85156 12.8553 5.36034 12.8553 7.22626C12.8553 9.09215 11.3466 10.601 9.48064 10.601C7.61473 10.601 6.10596 9.09215 6.10596 7.22626Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="login cursor-pointer active:scale-98 transition-all duration-200  bg-[#FED302] hover:bg-[#fdd000] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg md:text-xl text-black shadow-lg hover:shadow-xl"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}