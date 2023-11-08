import React from "react";
import Navbar from "./../customComponents/CustomNavbar/Navbar";
import Style from "./recommendation.module.css";
import Image from "./../../Assets/Recommandation/white.png";
import Image1 from "./../../Assets/Recommandation/Roy.png";
import Image2 from "./../../Assets/Recommandation/Nick.png";

const recommendation = () => {
  return (
    <div className={Style.Main}>
      <Navbar />
      <div className={Style.Section}>
        <div className={Style.RightSection}>
          <div className={Style.ImageSection}>
            <svg
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_852_591)">
                <circle cx="54" cy="50" r="50" fill="#8CDC98" />
              </g>
              <g filter="url(#filter1_d_852_591)">
                <path
                  d="M90.7925 50.0001L35.6038 83.1128L35.6038 16.8873L90.7925 50.0001Z"
                  fill="#F9F9F9"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_852_591"
                  x="0"
                  y="0"
                  width="108"
                  height="108"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_852_591"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_852_591"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_852_591"
                  x="31.604"
                  y="16.8873"
                  width="63.1885"
                  height="74.2255"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_852_591"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_852_591"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className={Style.UserSection}>
            <div className={Style.UserTitle}>
              <h2 className={Style.ImageTitle}>
                Nurturing Nature - A Growing Plants Event
              </h2>
            </div>
            <div className={Style.UserInfo}>
              <div className={Style.UserImage}>
                <img src={Image} alt="Error" className={Style.UserPhoto} />
              </div>
              <div className={Style.UserDetails}>
                <p className={Style.Username}>Emily</p>
                <div className={Style.UserDiv}>
                  <p className={Style.UserViews}>1.0M Views</p>
                  <p className={Style.PostTime}>1 hr ago</p>
                </div>
              </div>
              <div className={Style.UserFollow}>
                <p className={Style.Follow}>Follow</p>
              </div>
            </div>
          </div>
          <div className={Style.ReviewSection}>
            <div className={Style.UserReview}>
              <svg
                width="50"
                height="42"
                viewBox="0 0 50 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 13.5657C50 28.8818 26.8326 41.2791 25.846 41.7911C25.5859 41.9282 25.2953 42 25 42C24.7047 42 24.4141 41.9282 24.154 41.7911C23.1674 41.2791 0 28.8818 0 13.5657C0.00413557 9.9691 1.46353 6.52096 4.058 3.97778C6.65247 1.4346 10.1701 0.00405382 13.8393 0C18.4487 0 22.4844 1.94296 25 5.22717C27.5156 1.94296 31.5513 0 36.1607 0C39.8299 0.00405382 43.3475 1.4346 45.942 3.97778C48.5365 6.52096 49.9959 9.9691 50 13.5657Z"
                  fill="#D73F3F"
                />
              </svg>
              <p className={Style.View}>20K</p>
            </div>
            <div className={Style.UserReview}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.975 5C49.975 2.25 47.75 0 45 0H5C2.25 0 0 2.25 0 5V35C0 37.75 2.25 40 5 40H40L50 50L49.975 5ZM45 5V37.925L42.075 35H5V5H45ZM10 25H40V30H10V25ZM10 17.5H40V22.5H10V17.5ZM10 10H40V15H10V10Z"
                  fill="black"
                />
              </svg>
              <p className={Style.View}>1K</p>
            </div>
            <div className={Style.UserReview}>
              <svg
                width="50"
                height="41"
                viewBox="0 0 50 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.6868 18.3485L31.1151 0.522804C30.8695 0.273359 30.5564 0.103406 30.2156 0.0344379C29.8748 -0.0345299 29.5214 0.000585646 29.2003 0.135343C28.8791 0.270101 28.6045 0.498448 28.4113 0.791506C28.2181 1.08456 28.1149 1.42917 28.1147 1.78174V10.7726C22.417 11.2672 16.1242 14.0971 10.9471 18.5512C4.71349 23.9168 0.832329 30.8309 0.0174382 38.0191C-0.0462424 38.578 0.0654564 39.1429 0.336638 39.6337C0.60782 40.1244 1.02467 40.5158 1.52786 40.7523C2.03105 40.9888 2.59494 41.0582 3.13929 40.9508C3.68363 40.8433 4.1807 40.5644 4.55974 40.1537C6.97586 37.5445 15.5728 29.2934 28.1147 28.567V37.4331C28.1149 37.7857 28.2181 38.1303 28.4113 38.4233C28.6045 38.7164 28.8791 38.9447 29.2003 39.0795C29.5214 39.2142 29.8748 39.2494 30.2156 39.1804C30.5564 39.1114 30.8695 38.9415 31.1151 38.692L48.6868 20.8664C49.0154 20.5322 49.2 20.0794 49.2 19.6074C49.2 19.1354 49.0154 18.6826 48.6868 18.3485ZM31.629 33.1304V26.7377C31.629 26.2649 31.4439 25.8115 31.1144 25.4772C30.7848 25.1429 30.3379 24.9551 29.8719 24.9551C23.7042 24.9551 17.6968 26.5884 12.0168 29.8126C9.12388 31.462 6.42852 33.4449 3.98426 35.7218C5.25822 30.4098 8.46946 25.3584 13.2204 21.2697C18.3206 16.8823 24.5454 14.2597 29.8719 14.2597C30.3379 14.2597 30.7848 14.0719 31.1144 13.7376C31.4439 13.4033 31.629 12.9499 31.629 12.4771V6.08664L44.9594 19.6074L31.629 33.1304Z"
                  fill="black"
                />
              </svg>
              <p className={Style.View}>Share</p>
            </div>
            <div className={Style.UserReview}>
              <svg
                width="51"
                height="46"
                viewBox="0 0 51 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2002 0C15.3538 0 7.34305 7.93677 7.34305 17.6923C7.34305 27.4478 15.3538 35.3846 25.2002 35.3846C35.0466 35.3846 43.0573 27.4478 43.0573 17.6923C43.0573 7.93677 35.0466 0 25.2002 0ZM25.2002 3.53846C33.077 3.53846 39.4859 9.88823 39.4859 17.6923C39.4859 25.4964 33.077 31.8462 25.2002 31.8462C17.3234 31.8462 10.9145 25.4964 10.9145 17.6923C10.9145 9.88823 17.3234 3.53846 25.2002 3.53846ZM23.4145 7.07692V9.18231C22.1269 9.64612 21.0607 10.5699 20.4252 11.7725C19.8717 12.8312 19.7051 14.047 19.9538 15.2136C20.1735 16.2286 20.683 17.1596 21.4216 17.8958C21.9091 18.3788 22.4895 18.7698 23.1288 19.0405C23.7681 19.3112 24.4681 19.4615 25.2002 19.4615C25.4538 19.4615 25.6931 19.5093 25.9073 19.596C26.1195 19.6815 26.3122 19.8082 26.4741 19.9686C26.636 20.1291 26.7639 20.32 26.8502 20.5302C26.9377 20.7425 26.9859 20.9795 26.9859 21.2308C26.9937 21.5793 26.8948 21.922 26.7023 22.2137C26.5098 22.5055 26.2327 22.7328 25.9073 22.8655C25.6931 22.9522 25.4538 23 25.2002 23C24.9448 23 24.7073 22.9522 24.4931 22.8655C24.2811 22.7798 24.0886 22.6528 23.927 22.4922C23.7615 22.3261 23.6309 22.129 23.543 21.9125C23.455 21.6959 23.4113 21.4642 23.4145 21.2308H19.8431C19.8433 22.6073 20.3935 23.9278 21.3734 24.9037C21.9469 25.4831 22.6444 25.9276 23.4145 26.2041V28.3077H26.9859V26.2023C27.8863 25.8825 28.6848 25.3315 29.2998 24.6057C29.9147 23.8798 30.3241 23.0052 30.4859 22.0712C30.7065 20.7444 30.4006 19.3846 29.6323 18.2762C29.2448 17.7109 28.7528 17.2235 28.1823 16.8395C27.6041 16.4508 26.9552 16.1768 26.2716 16.0328C25.9192 15.9599 25.5602 15.9231 25.2002 15.9231C24.9448 15.9231 24.7073 15.8753 24.4931 15.7886C24.2809 15.7031 24.0882 15.5764 23.9263 15.416C23.7644 15.2555 23.6365 15.0646 23.5502 14.8545C23.4594 14.6319 23.4133 14.3939 23.4145 14.1538C23.4145 13.9008 23.4627 13.6655 23.5502 13.4532C23.6365 13.2431 23.7644 13.0521 23.9263 12.8917C24.0882 12.7313 24.2809 12.6046 24.4931 12.5191C24.7073 12.4324 24.9466 12.3846 25.2002 12.3846C26.2181 12.3846 26.9859 13.1454 26.9859 14.1538H30.5573C30.5578 13.5984 30.4686 13.0466 30.2931 12.5191C30.0302 11.7525 29.5964 11.0544 29.0238 10.4767C28.4513 9.89908 27.7547 9.45664 26.9859 9.18231V7.07692H23.4145ZM0.200195 31.8462V46H3.77162V35.3846H13.3788C11.8646 34.3815 10.4846 33.1925 9.27162 31.8462H0.200195ZM41.1288 31.8462C39.9158 33.1925 38.5358 34.3815 37.0216 35.3846H46.6288V46H50.2002V31.8462H41.1288ZM7.34305 38.9231V42.4615H43.0573V38.9231H7.34305Z"
                  fill="black"
                />
              </svg>
              <p className={Style.View}>Commant</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className={Style.LeftSection}>
          <h1 className={Style.LeftTitle}>Recommended videos</h1>
          <div className={Style.VideoSection}>
            <div className={Style.LeftUser}>
              <div className={Style.LeftUserImage}>
                <img src={Image1} alt="Error" className={Style.LeftUserPhoto} />
              </div>
              <div className={Style.LeftUserDetails}>
                <div className={Style.LeftUserName}>Roy</div>
                <div className={Style.LeftUserDiv}>
                  <p className={Style.LeftUserView}>20k Views</p>
                  <p className={Style.LeftUserTime}>2 Days</p>
                </div>
              </div>
              <div className={Style.LeftUserRecommandation}>
                <svg
                  width="5"
                  height="17"
                  viewBox="0 0 5 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5625 1C2.31386 1 2.0754 1.09877 1.89959 1.27459C1.72377 1.4504 1.625 1.68886 1.625 1.9375C1.625 2.18614 1.72377 2.4246 1.89959 2.60041C2.0754 2.77623 2.31386 2.875 2.5625 2.875C2.81114 2.875 3.0496 2.77623 3.22541 2.60041C3.40123 2.4246 3.5 2.18614 3.5 1.9375C3.5 1.68886 3.40123 1.4504 3.22541 1.27459C3.0496 1.09877 2.81114 1 2.5625 1ZM2.5625 7.5625C2.31386 7.5625 2.0754 7.66127 1.89959 7.83709C1.72377 8.0129 1.625 8.25136 1.625 8.5C1.625 8.74864 1.72377 8.9871 1.89959 9.16291C2.0754 9.33873 2.31386 9.4375 2.5625 9.4375C2.81114 9.4375 3.0496 9.33873 3.22541 9.16291C3.40123 8.9871 3.5 8.74864 3.5 8.5C3.5 8.25136 3.40123 8.0129 3.22541 7.83709C3.0496 7.66127 2.81114 7.5625 2.5625 7.5625ZM2.5625 14.125C2.31386 14.125 2.0754 14.2238 1.89959 14.3996C1.72377 14.5754 1.625 14.8139 1.625 15.0625C1.625 15.3111 1.72377 15.5496 1.89959 15.7254C2.0754 15.9012 2.31386 16 2.5625 16C2.81114 16 3.0496 15.9012 3.22541 15.7254C3.40123 15.5496 3.5 15.3111 3.5 15.0625C3.5 14.8139 3.40123 14.5754 3.22541 14.3996C3.0496 14.2238 2.81114 14.125 2.5625 14.125Z"
                    stroke="#404040"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={Style.VideoImage}>
              <svg
                width="61"
                height="59"
                viewBox="0 0 61 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_852_623)">
                  <ellipse
                    cx="30.5"
                    cy="25.5"
                    rx="26.5"
                    ry="25.5"
                    fill="#8CDC98"
                  />
                </g>
                <g filter="url(#filter1_d_852_623)">
                  <path
                    d="M50 25.5L20.75 42.3875L20.75 8.6125L50 25.5Z"
                    fill="#F9F9F9"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_852_623"
                    x="0"
                    y="0"
                    width="61"
                    height="59"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_852_623"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_852_623"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_852_623"
                    x="16.75"
                    y="8.61255"
                    width="37.25"
                    height="41.7749"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_852_623"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_852_623"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className={Style.VideoTitle}>
              Green thumb magic: How we cultivate 350 healthy plants.
            </div>
          </div>
{/* 2 */}
          <div className={Style.VideoSection}>
            <div className={Style.LeftUser}>
              <div className={Style.LeftUserImage}>
                <img src={Image2} alt="Error" className={Style.LeftUserPhoto} />
              </div>
              <div className={Style.LeftUserDetails}>
                <div className={Style.LeftUserName}>Roy</div>
                <div className={Style.LeftUserDiv}>
                  <p className={Style.LeftUserView}>20k Views</p>
                  <p className={Style.LeftUserTime}>2 Days</p>
                </div>
              </div>
              <div className={Style.LeftUserRecommandation}>
                <svg
                  width="5"
                  height="17"
                  viewBox="0 0 5 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5625 1C2.31386 1 2.0754 1.09877 1.89959 1.27459C1.72377 1.4504 1.625 1.68886 1.625 1.9375C1.625 2.18614 1.72377 2.4246 1.89959 2.60041C2.0754 2.77623 2.31386 2.875 2.5625 2.875C2.81114 2.875 3.0496 2.77623 3.22541 2.60041C3.40123 2.4246 3.5 2.18614 3.5 1.9375C3.5 1.68886 3.40123 1.4504 3.22541 1.27459C3.0496 1.09877 2.81114 1 2.5625 1ZM2.5625 7.5625C2.31386 7.5625 2.0754 7.66127 1.89959 7.83709C1.72377 8.0129 1.625 8.25136 1.625 8.5C1.625 8.74864 1.72377 8.9871 1.89959 9.16291C2.0754 9.33873 2.31386 9.4375 2.5625 9.4375C2.81114 9.4375 3.0496 9.33873 3.22541 9.16291C3.40123 8.9871 3.5 8.74864 3.5 8.5C3.5 8.25136 3.40123 8.0129 3.22541 7.83709C3.0496 7.66127 2.81114 7.5625 2.5625 7.5625ZM2.5625 14.125C2.31386 14.125 2.0754 14.2238 1.89959 14.3996C1.72377 14.5754 1.625 14.8139 1.625 15.0625C1.625 15.3111 1.72377 15.5496 1.89959 15.7254C2.0754 15.9012 2.31386 16 2.5625 16C2.81114 16 3.0496 15.9012 3.22541 15.7254C3.40123 15.5496 3.5 15.3111 3.5 15.0625C3.5 14.8139 3.40123 14.5754 3.22541 14.3996C3.0496 14.2238 2.81114 14.125 2.5625 14.125Z"
                    stroke="#404040"
                    strokeidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={Style.VideoImage1}>
              <svg
                width="61"
                height="59"
                viewBox="0 0 61 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_852_623)">
                  <ellipse
                    cx="30.5"
                    cy="25.5"
                    rx="26.5"
                    ry="25.5"
                    fill="#8CDC98"
                  />
                </g>
                <g filter="url(#filter1_d_852_623)">
                  <path
                    d="M50 25.5L20.75 42.3875L20.75 8.6125L50 25.5Z"
                    fill="#F9F9F9"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_852_623"
                    x="0"
                    y="0"
                    width="61"
                    height="59"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_852_623"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_852_623"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_852_623"
                    x="16.75"
                    y="8.61255"
                    width="37.25"
                    height="41.7749"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_852_623"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_852_623"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className={Style.VideoTitle}>
              Green thumb magic: How we cultivate 350 healthy plants.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default recommendation;
