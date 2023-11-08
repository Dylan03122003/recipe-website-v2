function Footer() {
  return (
    <div className=" mb-[50px] p-[80px]">
      <div>
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <div className="mt-[30px] flex flex-col sm:items-start justify-center items-center ">
            <h1 className="font-bold text-[25px] pb-[20px]">Foodieland</h1>
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <div>
            <ul className="font-semibold sm:text-[16px] text-[10px] gap-[15px] flex sm:gap-[46px] mt-[30px]">
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b-[2px] border-gray-100  mt-[50px]"></div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="md:ml-[150px] md:w-[1050px] text-center mt-[40px]">
          <p className="text-gray-500">
            &copy;2020 Flowbase. Powered by {""}
            <span className="text-orange-500">Webflow</span>
          </p>
        </div>
        <div className="flex gap-[50px] justify-end mt-[40px]">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"
              fill="black"
            />
          </svg>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9614 2.11613C22.1433 2.475 21.2716 2.71288 20.3627 2.82838C21.2977 2.27013 22.0113 1.39287 22.3468 0.3355C21.475 0.85525 20.5126 1.22238 19.4868 1.42725C18.6591 0.545875 17.4793 0 16.1923 0C13.6953 0 11.6851 2.02675 11.6851 4.51137C11.6851 4.86888 11.7153 5.21263 11.7896 5.53988C8.03993 5.357 4.72205 3.55988 2.49318 0.82225C2.10405 1.49738 1.8758 2.27012 1.8758 3.102C1.8758 4.664 2.68018 6.04862 3.87918 6.85025C3.15455 6.8365 2.44368 6.62613 1.84143 6.29475C1.84143 6.3085 1.84143 6.32638 1.84143 6.34425C1.84143 8.536 3.4048 10.3565 5.45493 10.7759C5.0878 10.8763 4.68768 10.9244 4.27243 10.9244C3.98368 10.9244 3.69218 10.9079 3.41855 10.8474C4.00293 12.6335 5.66118 13.9466 7.63293 13.9893C6.09843 15.1896 4.15005 15.9129 2.0408 15.9129C1.67093 15.9129 1.31618 15.8964 0.961426 15.851C2.9593 17.1394 5.32705 17.875 7.88043 17.875C16.1799 17.875 20.7174 11 20.7174 5.04075C20.7174 4.84137 20.7106 4.64887 20.7009 4.45775C21.5961 3.8225 22.3482 3.02913 22.9614 2.11613Z"
              fill="black"
            />
          </svg>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.83643 0H16.0864C19.8828 0 22.9614 3.07862 22.9614 6.875V15.125C22.9614 18.9214 19.8828 22 16.0864 22H7.83643C4.04005 22 0.961426 18.9214 0.961426 15.125V6.875C0.961426 3.07862 4.04005 0 7.83643 0ZM16.0864 19.9375C18.7402 19.9375 20.8989 17.7787 20.8989 15.125V6.875C20.8989 4.22125 18.7402 2.0625 16.0864 2.0625H7.83643C5.18268 2.0625 3.02393 4.22125 3.02393 6.875V15.125C3.02393 17.7787 5.18268 19.9375 7.83643 19.9375H16.0864Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46143 11C6.46143 7.96263 8.92405 5.5 11.9614 5.5C14.9988 5.5 17.4614 7.96263 17.4614 11C17.4614 14.0374 14.9988 16.5 11.9614 16.5C8.92405 16.5 6.46143 14.0374 6.46143 11ZM8.52393 11C8.52393 12.8948 10.0667 14.4375 11.9614 14.4375C13.8562 14.4375 15.3989 12.8948 15.3989 11C15.3989 9.10388 13.8562 7.5625 11.9614 7.5625C10.0667 7.5625 8.52393 9.10388 8.52393 11Z"
              fill="black"
            />
            <circle cx="17.874" cy="5.0875" r="0.732875" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
