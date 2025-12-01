import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewModel from "../../components/ReviewModel";
import { useModule } from "../../context/moduleContext";

export default function CartPg() {
  const {reviewModel, setReviewModel} = useModule();
  const navigate = useNavigate();
  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex ">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 whitespace-nowrap">
              Cart
            </h2>
          </div>

          {/* Activity-bottom */}
          <div className="Activity-bottom bg-white rounded-2xl shadow-md  relative">
            {/* Back-Button */}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="group Back-Button cursor-pointer flex items-center"
            >
              <svg
                className="w-10 h-10 text-green -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cart-card */}
            <div className="cart-card h-auto sm:h-[10rem] border border-gray-200 rounded-xl flex flex-col gap-2 sm:gap-3 sm:flex-row justify-between w-full">
              {/* Cart-left */}
              <div className="cart-left w-full sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col sm:flex-row gap-4">
                <img
                  className="rounded-xl w-full h-[8rem] object-cover  sm:h-full"
                  src="/image/img-16.png"
                  alt="Cart-1"
                />
              </div>

              {/* Cart-right */}
              <div className="flex justify-between w-full sm:w-[50%] md:w-[60%] lg:w-[70%] ">
                {/* cart-middle */}
                <div className="cart-middle flex flex-col justify-center gap-4">
                  <p className="font-[lato] font-semibold text-md sm:text-lg tracking-wider text-[#012331] ">
                    Tasty jelly rings
                  </p>
                  <p className="flex items-center gap-1">
                    <img
                      src="/image/img-22.png"
                      className="w-7 h-7"
                      alt="icon"
                    />
                    <p className="font-medium text-xl  sm:text-3xl tracking-wide">
                      20
                    </p>
                  </p>
                </div>
                <div className="cart-right flex flex-col justify-center items-center sm:gap-3">
                  <svg
                    className="cursor-pointer active:scale-98"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 30C23.2842 30 30 23.2842 30 15C30 6.71572 23.2842 0 15 0C6.71572 0 0 6.71572 0 15C0 23.2842 6.71572 30 15 30ZM16.125 10.5C16.125 9.87868 15.6213 9.375 15 9.375C14.3787 9.375 13.875 9.87868 13.875 10.5V13.875H10.5C9.87868 13.875 9.375 14.3787 9.375 15C9.375 15.6213 9.87868 16.125 10.5 16.125H13.875V19.5C13.875 20.1213 14.3787 20.625 15 20.625C15.6213 20.625 16.125 20.1213 16.125 19.5V16.125H19.5C20.1213 16.125 20.625 15.6213 20.625 15C20.625 14.3787 20.1213 13.875 19.5 13.875H16.125V10.5Z"
                      fill="#007D69"
                    />
                  </svg>
                  <p className="font-medium font-serif tracking-wide">2</p>
                  <svg
                    className="cursor-pointer active:scale-98"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 15C30 23.2842 23.2842 30 15 30C6.71572 30 0 23.2842 0 15C0 6.71572 6.71572 0 15 0C23.2842 0 30 6.71572 30 15ZM20.625 15C20.625 15.6213 20.1213 16.125 19.5 16.125H10.5C9.87868 16.125 9.375 15.6213 9.375 15C9.375 14.3787 9.87868 13.875 10.5 13.875H19.5C20.1213 13.875 20.625 14.3787 20.625 15Z"
                      fill="#007D69"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Second-cart */}
            <div className="cart-card h-auto sm:h-[10rem] border border-gray-200 rounded-xl flex flex-col gap-2 sm:gap-3 sm:flex-row justify-between w-full">
              {/* Cart-left */}
              <div className="cart-left w-full sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col sm:flex-row gap-4">
                <img
                  className="rounded-xl w-full h-[8rem] object-cover  sm:h-full"
                  src="/image/img-17.png"
                  alt="Cart-1"
                />
              </div>

              {/* Cart-right */}
              <div className="flex justify-between w-full sm:w-[50%] md:w-[60%] lg:w-[70%] ">
                {/* cart-middle */}
                <div className="cart-middle flex flex-col justify-center gap-4">
                  <p className="font-[lato] font-semibold text-md sm:text-lg tracking-wider text-[#012331] ">
                    Tasty jelly rings
                  </p>
                  <p className="flex items-center gap-1">
                    <img
                      src="/image/img-22.png"
                      className="w-7 h-7"
                      alt="icon"
                    />
                    <p className="font-medium text-xl  sm:text-3xl tracking-wide">
                      20
                    </p>
                  </p>
                </div>
                <div className="cart-right flex flex-col justify-center items-center sm:gap-3">
                  <svg
                    className="cursor-pointer active:scale-98"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 30C23.2842 30 30 23.2842 30 15C30 6.71572 23.2842 0 15 0C6.71572 0 0 6.71572 0 15C0 23.2842 6.71572 30 15 30ZM16.125 10.5C16.125 9.87868 15.6213 9.375 15 9.375C14.3787 9.375 13.875 9.87868 13.875 10.5V13.875H10.5C9.87868 13.875 9.375 14.3787 9.375 15C9.375 15.6213 9.87868 16.125 10.5 16.125H13.875V19.5C13.875 20.1213 14.3787 20.625 15 20.625C15.6213 20.625 16.125 20.1213 16.125 19.5V16.125H19.5C20.1213 16.125 20.625 15.6213 20.625 15C20.625 14.3787 20.1213 13.875 19.5 13.875H16.125V10.5Z"
                      fill="#007D69"
                    />
                  </svg>
                  <p className="font-medium font-serif tracking-wide">2</p>
                  <svg
                    className="cursor-pointer active:scale-98"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 15C30 23.2842 23.2842 30 15 30C6.71572 30 0 23.2842 0 15C0 6.71572 6.71572 0 15 0C23.2842 0 30 6.71572 30 15ZM20.625 15C20.625 15.6213 20.1213 16.125 19.5 16.125H10.5C9.87868 16.125 9.375 15.6213 9.375 15C9.375 14.3787 9.87868 13.875 10.5 13.875H19.5C20.1213 13.875 20.625 14.3787 20.625 15Z"
                      fill="#007D69"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button-Cart */}
            <div
                onClick={() => {
                  setReviewModel(true);
                }}
            className="Button-Cart flex justify-center px-4 sm:px-6 md:px-8">
              <div
                className="flex justify-center cursor-pointer w-full sm:w-[50%] lg:w-[30%] xl:w-[30%] gap-3 sm:gap-4 md:gap-5 items-center rounded-xl sm:rounded-2xl bg-[#007D69] halfrem hover:bg-[#006558] transition-colors duration-200 active:scale-95"

              >
                <span className="text-yellow-400 font-medium text-base sm:text-lg md:text-xl leading-none">
                  <img src="/image/img-22.png" className="w-7 h-7" alt="icon" />
                </span>
                <span className="text-white halfrem text-sm sm:text-base md:text-md font-medium">
                  Hard Work Pays Off!
                </span>
              </div>
            </div>

            {/* Review Model */}
                      <ReviewModel
            img={"/image/img-14.png"}
            title={"You Earned it!"}
            descrip={
              "Your hard work has truly paid off! Your prize is on its way and will arrive on Starfall Day. Keep shining bright and chasing your dreams. You are a bright star! Thank you for your amazing perseverance!"
            }
            btnText={"Thank You For Participating"}
            star={false}
            bgcolor={"#FFF"}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
