import React from "react";
import Style from "./orderFeedback.module.css";
import order from "./../../../Assets/MyOder/OrderFeedback/MyOder1.png";
import two from "./../../../Assets/MyOder/OrderFeedback/Shoptwo.png";
import three from "./../../../Assets/MyOder/OrderFeedback/Shopthree.png";

const orderFeedback = () => {
  return (
    <div className={Style.Section}>
      <div className={Style.navSection}>
        <button className={Style.removeButton}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 15L15 45M15 15L45 45"
              stroke="#777777"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p className={Style.navTitle}>Add Feedback</p>
      </div>
      <div className={Style.orderDetails}>
        <div className={Style.orderImage}>
          <img src={order} alt="error" className={Style.OrderPhoto} />
        </div>
        <div className={Style.orderName}>
          <p className={Style.order}>Fiddle leaf fig</p>
          <div>
            <p className={Style.rateTitle}>Rate this product</p>
            <img src={two} alt="error" />
            <img src={two} alt="error" />
            <img src={two} alt="error" />
            <img src={two} alt="error" />
            <img src={three} alt="error" />
          </div>
        </div>
        <div className={Style.orderNumber}>Order No. 20060230</div>
      </div>
      <div className={Style.addSection}>
        <p className={Style.addSectionTitle}>Add Photo or Video</p>
        <div className={Style.addMedia}>
          <div className={Style.addPhoto}>
            Add Photo
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.375 6.5625H21.1266L19.5293 4.16719C19.4437 4.03893 19.3278 3.93375 19.1919 3.86098C19.056 3.78821 18.9042 3.75009 18.75 3.75H11.25C11.0958 3.75009 10.944 3.78821 10.8081 3.86098C10.6722 3.93375 10.5563 4.03893 10.4707 4.16719L8.87227 6.5625H5.625C4.87908 6.5625 4.16371 6.85882 3.63626 7.38626C3.10882 7.91371 2.8125 8.62908 2.8125 9.375V22.5C2.8125 23.2459 3.10882 23.9613 3.63626 24.4887C4.16371 25.0162 4.87908 25.3125 5.625 25.3125H24.375C25.1209 25.3125 25.8363 25.0162 26.3637 24.4887C26.8912 23.9613 27.1875 23.2459 27.1875 22.5V9.375C27.1875 8.62908 26.8912 7.91371 26.3637 7.38626C25.8363 6.85882 25.1209 6.5625 24.375 6.5625ZM25.3125 22.5C25.3125 22.7486 25.2137 22.9871 25.0379 23.1629C24.8621 23.3387 24.6236 23.4375 24.375 23.4375H5.625C5.37636 23.4375 5.1379 23.3387 4.96209 23.1629C4.78627 22.9871 4.6875 22.7486 4.6875 22.5V9.375C4.6875 9.12636 4.78627 8.8879 4.96209 8.71209C5.1379 8.53627 5.37636 8.4375 5.625 8.4375H9.375C9.52938 8.4376 9.6814 8.39957 9.81756 8.32679C9.95371 8.25401 10.0698 8.14874 10.1555 8.02031L11.7516 5.625H18.2473L19.8445 8.02031C19.9302 8.14874 20.0463 8.25401 20.1824 8.32679C20.3186 8.39957 20.4706 8.4376 20.625 8.4375H24.375C24.6236 8.4375 24.8621 8.53627 25.0379 8.71209C25.2137 8.8879 25.3125 9.12636 25.3125 9.375V22.5ZM15 10.3125C13.9802 10.3125 12.9833 10.6149 12.1353 11.1815C11.2874 11.7481 10.6265 12.5534 10.2362 13.4955C9.84598 14.4377 9.74387 15.4745 9.94283 16.4747C10.1418 17.4749 10.6329 18.3937 11.354 19.1148C12.0751 19.8359 12.9939 20.327 13.9941 20.5259C14.9943 20.7249 16.031 20.6228 16.9732 20.2325C17.9154 19.8422 18.7207 19.1813 19.2873 18.3334C19.8538 17.4855 20.1562 16.4886 20.1562 15.4688C20.1547 14.1017 19.611 12.7911 18.6443 11.8244C17.6777 10.8578 16.367 10.3141 15 10.3125ZM15 18.75C14.351 18.75 13.7166 18.5576 13.177 18.197C12.6374 17.8365 12.2169 17.324 11.9685 16.7244C11.7202 16.1249 11.6552 15.4651 11.7818 14.8286C11.9084 14.1921 12.2209 13.6074 12.6798 13.1486C13.1387 12.6897 13.7234 12.3772 14.3599 12.2505C14.9964 12.1239 15.6561 12.1889 16.2557 12.4373C16.8552 12.6856 17.3677 13.1062 17.7283 13.6458C18.0888 14.1854 18.2812 14.8198 18.2812 15.4688C18.2812 16.339 17.9355 17.1736 17.3202 17.7889C16.7048 18.4043 15.8702 18.75 15 18.75Z"
                fill="#1F588E"
              />
            </svg>
          </div>
          <div className={Style.addVideo}>
            Add Video
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5778 7.02496C14.6212 6.7144 11.6414 6.69137 8.68034 6.95621L6.70285 7.13246C5.90933 7.20363 5.16295 7.54011 4.58417 8.08759C4.00538 8.63508 3.62797 9.36162 3.51284 10.15C3.04259 13.3662 3.04259 16.6337 3.51284 19.85C3.62824 20.6384 4.0059 21.365 4.58489 21.9124C5.16388 22.4599 5.91043 22.7963 6.70409 22.8675L8.68159 23.0425C11.6426 23.3078 14.6224 23.2852 17.5791 22.975L18.3391 22.895C19.0935 22.8158 19.8028 22.4975 20.3635 21.9866C20.9241 21.4756 21.3067 20.7988 21.4553 20.055L25.2641 22.0775C25.4008 22.1501 25.5534 22.1877 25.7083 22.187C25.8631 22.1863 26.0154 22.1472 26.1514 22.0733C26.2875 21.9994 26.4031 21.893 26.488 21.7635C26.5729 21.634 26.6244 21.4855 26.6378 21.3312L26.6691 20.9762C27.0177 16.9993 27.0177 12.9994 26.6691 9.02246L26.6378 8.66746C26.6243 8.51314 26.5726 8.3646 26.4876 8.23511C26.4026 8.10562 26.2868 7.99922 26.1506 7.92542C26.0144 7.85162 25.862 7.81272 25.7071 7.81221C25.5522 7.81169 25.3995 7.84957 25.2628 7.92246L21.4553 9.94496C21.3067 9.20112 20.9241 8.52429 20.3635 8.01335C19.8028 7.5024 19.0935 7.18411 18.3391 7.10496L17.5778 7.02496ZM8.84785 8.82371C11.6879 8.56982 14.5458 8.59201 17.3816 8.88996L18.1416 8.96996C18.5129 9.00928 18.8606 9.17101 19.1299 9.42968C19.3993 9.68835 19.5749 10.0293 19.6291 10.3987C20.0766 13.45 20.0766 16.5487 19.6291 19.6012C19.5749 19.9707 19.3993 20.3116 19.1299 20.5702C18.8606 20.8289 18.5129 20.9906 18.1416 21.03L17.3816 21.11C14.5458 21.4079 11.6879 21.4301 8.84785 21.1762L6.87034 20.9987C6.49661 20.9654 6.145 20.8071 5.87219 20.5495C5.59938 20.2919 5.42128 19.9499 5.3666 19.5787C4.92264 16.5424 4.92264 13.4576 5.3666 10.4212C5.42081 10.0497 5.59874 9.7073 5.87161 9.4494C6.14448 9.19149 6.49635 9.03315 6.87034 8.99996L8.84785 8.82371ZM21.7003 11.9375C21.8866 13.975 21.8866 16.025 21.7003 18.0625L24.8841 19.7537C25.1107 16.5886 25.1107 13.4113 24.8841 10.2462L21.7003 11.9375Z"
                fill="#1F588E"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class={Style.addReview}>
        <p class={Style.addReviewTitle}>Write a Review</p>
        <textarea
            class={Style.textarea}
            rows="5"
            placeholder="Write your review here..."
          ></textarea>
          <br />
        <div class={Style.textbox}>
          
          <div className={Style.senDiv}>
          <button class={Style.sendButton}>
            Send{" "}
            <svg
              class={Style.sendSvg}
              width="42"
              height="38"
              viewBox="0 0 42 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1061_1560)">
                <path
                  d="M15.8888 15.8202L36.7552 1.20944M15.8888 15.8202L19.5425 28.1037C19.586 28.2705 19.6765 28.4214 19.8033 28.5383C19.93 28.6552 20.0877 28.7333 20.2575 28.7633C20.4274 28.7932 20.6022 28.7738 20.7613 28.7072C20.9204 28.6407 21.0571 28.5299 21.1551 28.388L36.7552 1.20944M15.8888 15.8202L5.59579 8.18574C5.45387 8.08776 5.34307 7.9511 5.27654 7.79199C5.21002 7.63289 5.19058 7.45803 5.22052 7.2882C5.25047 7.11837 5.32855 6.9607 5.44547 6.83394C5.5624 6.70719 5.71326 6.61666 5.88013 6.57314L36.7552 1.20944"
                  stroke="#F9F9F9"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1061_1560"
                  x="0.207031"
                  y="0.208984"
                  width="41.5479"
                  height="37.5684"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.584314 0 0 0 0 0.847059 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1061_1560"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1061_1560"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orderFeedback;
