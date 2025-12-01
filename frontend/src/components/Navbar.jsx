import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      highlight: true,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.40244 7.04994C-0.246112 8.40275 -0.0184477 9.98496 0.43688 13.1495L0.771404 15.4742C1.3563 19.5392 1.64875 21.5717 3.05883 22.7858C4.4689 24 6.53684 24 10.6727 24H13.3273C17.4631 24 19.5311 24 20.9412 22.7858C22.3512 21.5717 22.6436 19.5392 23.2286 15.4742L23.5631 13.1495C24.0185 9.98496 24.2461 8.40275 23.5975 7.04994C22.949 5.69712 21.5686 4.87481 18.8077 3.23017L17.1458 2.24024C14.6388 0.746748 13.3852 0 12 0C10.6148 0 9.36125 0.746748 6.8541 2.24024L5.19229 3.23017C2.43142 4.87481 1.05099 5.69712 0.40244 7.04994ZM7.50012 19.1998C7.50012 18.7027 7.90307 18.2998 8.40012 18.2998H15.6001C16.0972 18.2998 16.5001 18.7027 16.5001 19.1998C16.5001 19.6968 16.0972 20.0998 15.6001 20.0998H8.40012C7.90307 20.0998 7.50012 19.6968 7.50012 19.1998Z"
            fill="white"
          />
        </svg>
      ),
    },

    { label: "Activities", img: "/image/img-7.png", link: "/activities" },

    {
      label: "Starfall Store",
      link: "/starfallstore",
      icon: (
        <svg
          className="fill-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.58381 4.09005C10.1038 1.36335 10.8638 0 12.0001 0C13.1363 0 13.8962 1.36335 15.4162 4.09005L15.8095 4.79548C16.2413 5.57032 16.4573 5.95774 16.7941 6.21337C17.1308 6.46899 17.5502 6.56388 18.389 6.75366L19.1525 6.92643C22.1042 7.59426 23.5801 7.92817 23.9311 9.05729C24.2822 10.1863 23.2762 11.3629 21.2639 13.7158L20.7433 14.3247C20.1715 14.9932 19.8856 15.3276 19.757 15.7413C19.6283 16.1548 19.6715 16.6009 19.7581 17.493L19.8367 18.3052C20.141 21.4447 20.2931 23.0145 19.3738 23.7123C18.4546 24.4101 17.0728 23.7738 14.3092 22.5013L13.5943 22.1722C12.8089 21.8106 12.4163 21.6298 12.0001 21.6298C11.5838 21.6298 11.1911 21.8106 10.4059 22.1722L9.69081 22.5013C6.92721 23.7738 5.54542 24.4101 4.62619 23.7123C3.70695 23.0145 3.85906 21.4447 4.16328 18.3052L4.24198 17.493C4.32844 16.6009 4.37166 16.1548 4.24305 15.7413C4.11442 15.3276 3.82852 14.9932 3.25671 14.3247L2.73613 13.7158C0.723907 11.3629 -0.282204 10.1863 0.0689015 9.05729C0.420022 7.92817 1.89583 7.59426 4.84746 6.92643L5.61108 6.75366C6.44976 6.56388 6.86916 6.46899 7.20591 6.21337C7.54266 5.95774 7.75866 5.57032 8.19051 4.79548L8.58381 4.09005Z"
            fill="currentColor"
          />
        </svg>
      ),
    },

    { label: "Surveys", img: "/image/img-8.png", link: "/surveys" },

    {
      label: "Settings",
      link: "/settings",
      icon: (
        <svg
          className="fill-white"
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C9.63867 0 8.39884 0.72084 5.91933 2.16253L5.0807 2.65015C2.60115 4.09184 1.36137 4.81268 0.680693 6C-2.18551e-07 7.18732 0 8.62901 0 11.5124V12.4876C0 15.371 -2.18551e-07 16.8127 0.680693 18C1.36137 19.1873 2.60115 19.9081 5.0807 21.3498L5.91933 21.8375C8.39884 23.2792 9.63867 24 11 24C12.3614 24 13.6011 23.2792 16.0808 21.8375L16.9193 21.3498C19.3989 19.9081 20.6387 19.1873 21.3193 18C22 16.8127 22 15.371 22 12.4876V11.5124C22 8.62901 22 7.18732 21.3193 6C20.6387 4.81268 19.3989 4.09184 16.9193 2.65015L16.0808 2.16253C13.6011 0.72084 12.3614 0 11 0ZM6.41668 12C6.41668 9.51472 8.46875 7.5 11 7.5C13.5313 7.5 15.5833 9.51472 15.5833 12C15.5833 14.4853 13.5313 16.5 11 16.5C8.46875 16.5 6.41668 14.4853 6.41668 12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const current = navbarItems.find((item) => item.link === location.pathname);
    if (current) {
      setActive(current.label);
    }
  }, [location.pathname]);

  return (
    <div>
      <nav className="navbar  top-0 bg-[#012331] px-4 sm:px-6 lg:px-8 py-3 lg:py-0">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo */}
          <div
            onClick={() => {
              navigate("/dashboard");
              setActive("Dashboard");
            }}
            className="navbar-logo cursor-pointer flex-shrink-0"
          >
            <img
              src="/image/img-1.png"
              className="w-[100px] h-[60px] sm:w-[120px] sm:h-[72px] lg:w-[154px] lg:h-[92px]"
              alt="navbar-logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex navbar-menu gap-5 lg:gap-8 text-white">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(item.link)}
                className={`flex items-center gap-1 relative ${
                  item.highlight ? "flex-col" : ""
                }`}
              >
                <div
                  className={`flex cursor-pointer items-center opacity-50 hover:opacity-75 transition-opacity ${
                    active === item.label && "opacity-100"
                  } gap-1 text-sm xl:text-base`}
                >
                  {item.icon && (
                    <span className="w-5 h-5 xl:w-6 xl:h-6">{item.icon}</span>
                  )}
                  {item.img && (
                    <img
                      src={item.img}
                      className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                      alt={item.label}
                    />
                  )}
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>

                {active === item.label && (
                  <div
                    className={`curve-navbar  absolute rotate-[-46.14deg] w-[40px] h-[40px] ${
                      item.label == "Dashboard" ? "bg-white" : "bg-[#d9d9d9]"
                    } rounded-tr-lg -bottom-20 xl:-bottom-19 left-7`}
                  ></div>
                )}
              </li>
            ))}
          </ul>

          {/* User - Desktop */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex navbar-user items-center gap-2 lg:gap-3 flex-shrink-0">
              <div className="relative">
                <img
                  src="/image/img-6.jpg"
                  alt="User"
                  className="user-avatar w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full object-cover"
                />
                <div className="absolute left-3 flex items-center lg:left-4 bottom-0 bg-white font-normal text-[7px] lg:text-[8px] text-center w-[20px] lg:w-[24px] rounded-sm text-[#012331] border border-[#012331]">
                  <span>
                    <img src="/image/img-22.png" className="" />
                  </span>{" "}
                  250
                </div>
              </div>

              <div className="text-white user-navbar">
                <div className="text-sm lg:text-base font-medium">
                  Ellington Thom
                </div>
                <div className="text-xs lg:text-sm opacity-50">12345678</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden cursor-pointer Mobile-menu-button text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`Mobile-Menu z-50 right-0 onerem lg:hidden absolute bg-[#012331] w-full overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex  flex-col gap-2 pb-4">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  navigate(item.link);
                  setIsMobileMenuOpen(false);
                }}
                className="text-white"
              >
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                    active === item.label
                      ? "bg-white/20 opacity-100"
                      : "opacity-50 hover:opacity-75 hover:bg-white/10"
                  }`}
                >
                  {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                  {item.img && (
                    <img src={item.img} className="w-5 h-5" alt={item.label} />
                  )}
                  <span>{item.label}</span>
                </div>
              </li>
            ))}

            {/* Mobile-User */}
            <div className="Mobile-User md:hidden flex justify-center items-center gap-3 border-t border-white/20">
              <div className="relative">
                <img
                  src="/image/img-6.jpg"
                  alt="User"
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="absolute left-3 flex items-center bottom-0 bg-white font-normal text-[8px] text-center w-[22px] rounded-sm text-[#012331] border border-[#012331]">
                  <span>
                    <img src="/image/img-22.png" className="" />
                  </span>{" "}
                  250
                </div>
              </div>
              <div className="text-white">
                <div className="text-base font-medium">Ellington Thom</div>
                <div className="text-sm opacity-50">12345678</div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
