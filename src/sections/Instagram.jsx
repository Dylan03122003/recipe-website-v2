import React from "react";
import Slider from "react-slick";
import icontick from "./../assets/img/icontick.png";
import avatar from "./../assets/img/avatar.png";
import pick1 from "./../assets/img/pick1.png";
import pick2 from "./../assets/img/pick2.png";
import pick3 from "./../assets/img/pick3.png";
import pick4 from "./../assets/img/pick4.png"
import avatar1 from "./../assets/img/avatar1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// npm install react-slick --save
// npm install slick-carousel
function SimpleSlider(props) {
  let settings = {
    dots: true,
    
  };
  const [src1, src2, src3, src4] = props.srcs;
  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between pb-3">
        <div className="flex flex-row items-center pl-3">
          <img className="w-10 h-10" src={avatar}></img>
          <div className="pl-2">
            <h1 className="flex flex-row items-center font-semibold">
              Foodieland.<img className="w-3 h-3" src={icontick}></img>
            </h1>
            <p className="text-sm">Tokyo, Japan</p>
          </div>
        </div>
        <div className="pr-3">
        <svg
          className=""
          width="12"
          height="4"
          viewBox="0 0 12 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z"
            fill="#262626"
          />
        </svg></div>
      </div>
      <Slider {...settings}>
        <div className="">
          <img className="lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]" src={src1} />
        </div>
        <div>
          <img className="lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] " src={src2} />
        </div>
        <div>
          <img className="lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] " src={src3} />
        </div>
        <div>
          <img className="lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]" src={src4} />
        </div>
      </Slider>
      <div className="flex flex-row justify-between pt-1">
        <div className="flex flex-row items-center">
          {" "}
          <svg
            width="25"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z"
              fill="#262626"
            />
          </svg>
          <svg
            width="25"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z"
              fill="#262626"
            />
          </svg>
          <svg
            width="30"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z"
              fill="#262626"
            />
          </svg>
        </div>
        <div>
          <svg
            width="40"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z"
              fill="#262626"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="pb-[50px]">
    <div className=" bg-gradient-to-b from-transparent via-green-50 to-[#E7F9FD]">
      <div className=" text-center ">
        <h1 className=" xl:text-[60px]
         lg:text-[50px]
         leading-tight
         font-semibold
         text-gray-900
         md:text-clip
         md:inline
         md:text-[40px]
         sm:text-[39px]
         max-sm:text-[30px]  ">
          Check out @foodieland on Instagram
        </h1>
        <p className="text-center mt-5 text-gray-500 lg:text-[15px] md:text-[10px] sm:text-[10px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore <br></br> magna aliqut enim ad
          minim
        </p>
      </div>
      <div className="pb-5 pt-[40px] w-[100%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  max-w-screen-xl gap-[30px] mx-auto justify-items-center w-[90%]">
          <div className="bg-white w-[300px] lg:w-[100%] md:w-[300px] sm:w-[300px]">
            <div className="pt-3 flex justify-center items-center">
              <SimpleSlider srcs={[pick1, pick2, pick3, pick4]} />
            </div>
            <div>
              <div>
                <div className="flex flex-row items-center m-1 pt-2">
                  <img className="w-5 h-5 mr-1" src={avatar1}></img>
                  <span className="text-sm font-normal">
                    Liked by <strong>craig_love</strong> and{" "}
                    <strong>44,686 others</strong>
                  </span>
                </div>
                <p className="text-sm pt-1 pl-2">
                  <strong>Foodieland.</strong> The vegetables dishes need to have certain vitamin for those people
                </p>
                <p className="text-sm text-gray-400 pt-4 pl-2 pb-3">
                  <i>September 19</i>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[300px] lg:w-[100%] md:w-[300px] sm:w-[300px]">
            <div className="pt-3">
              <SimpleSlider srcs={[ pick2, pick1, pick3, pick4]} />
            </div>
            <div>
              <div>
                <div className="flex flex-row items-center m-1 pt-2">
                  <img className="w-5 h-5 mr-1" src={avatar1}></img>
                  <span className="text-sm font-normal">
                    Liked by <strong>craig_love</strong> and{" "}
                    <strong>44,686 others</strong>
                  </span>
                </div>
                <p className="text-sm pt-1 pl-2">
                  <strong>Foodieland.</strong> Sweet food can bring someon into happiness as long as they don’t eat to much
                </p>
                <p className="text-sm text-gray-400 pt-4 pl-2 pb-3">
                  <i>September 19</i>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[300px] lg:w-[100%] md:w-[300px] sm:w-[300px]">
            <div className="pt-3">
              <SimpleSlider srcs={[ pick3, pick2, pick1, pick4]} />
            </div>
            <div>
              <div>
                <div className="flex flex-row items-center m-1 pt-2">
                  <img className="w-5 h-5 mr-1" src={avatar1}></img>
                  <span className="text-sm font-normal">
                    Liked by <strong>craig_love</strong> and{" "}
                    <strong>44,686 others</strong>
                  </span>
                </div>
                <p className="text-sm pt-1 pl-2">
                  <strong>Foodieland.</strong> What are you doing before start cooking? prepare the  tools or ingredients?
                </p>
                <p className="text-sm text-gray-400 pt-4 pl-2 pb-3">
                  <i>September 19</i>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[300px] lg:w-[100%] md:w-[300px] sm:w-[300px]">
            <div className="pt-3">
              <SimpleSlider srcs={[ pick4, pick1, pick2, pick3]} />
            </div>
            <div>
              <div>
                <div className="flex flex-row items-center m-1 pt-2">
                  <img className="w-5 h-5 mr-1" src={avatar1}></img>
                  <span className="text-sm font-normal">
                    Liked by <strong>craig_love</strong> and{" "}
                    <strong>44,686 others</strong>
                  </span>
                </div>
                <p className="text-sm pt-1 pl-2">
                  <strong>Foodieland.</strong> Steak never be wrong, it’s suitable for you who want romantic dinner
                </p>
                <p className="text-sm text-gray-400 pt-4 pl-2 pb-3">
                  <i>September 19</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Instagram;
