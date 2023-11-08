import React from "react";
import style from "./addDetails.module.css";
import post from "./../../Assets/AddDetails/Post.png";

const addDetails = () => {
  return (
    <div className={style.detailsBody}>
      <div className={style.navDiv}>
        <div className={style.rightnav}>
          <button className={style.removeButton}>
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
          <p className={style.navHeadind}>Add Details</p>
        </div>
        <div className={style.leftNav}>
          <div className={style.DraftButton}>
            <button className={style.saveDraftButton}>Save draft</button>
          </div>
          <div className={style.buttonPost}>
            <button className={style.postButton}>Post</button>
          </div>
        </div>
      </div>
      <div className={style.postDiv}>
        <div className={style.Photo}>
          <img src={post} alt="error" className={style.postImage} />
        </div>
        <div className={style.textAreaDiv}>
          <textarea
            className={style.textArea}
            rows={10}
            cols={50}
            placeholder="Write a caption........"
          />
          <p className={style.charCount}>0/500</p>
        </div>
      </div>

      <div className={style.descriptionDiv}>
        <p className={style.descriptionTitle}>Add Description</p>
        <div className={style.descriptionArea}>
          <p className={style.descriptioncontext}>
            🌿 Join [NGO App Name] and help us plant a greener future together!
            🌎🌱 Download now and make a positive impact! 🌳 [App Download Link]
            🌿
          </p>
          <span className={style.descriptionSpan}>0/5000</span>
        </div>
      </div>
      <div className={style.featuresDiv}>
        <div className={style.visibilityDiv}>
          <div className={style.featuresIcon}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 28.8002C10.8 28.8002 6.64004 20.7202 6.48004 20.3202C6.40004 20.0802 6.40004 19.8402 6.48004 19.6002C6.64004 19.2802 10.8 11.2002 20 11.2002C29.2001 11.2002 33.3601 19.2802 33.5201 19.6802C33.6 19.9202 33.6 20.1602 33.5201 20.4002C33.3601 20.7202 29.2001 28.8002 20 28.8002ZM8.08004 20.0002C8.96004 21.5202 12.8 27.2002 20 27.2002C27.2 27.2002 30.9601 21.5202 31.9201 20.0002C31.0401 18.4802 27.2 12.8002 20 12.8002C12.8 12.8002 9.04004 18.4802 8.08004 20.0002Z"
                fill="#111111"
              />
              <path
                d="M20 27.1998C16 27.1998 12.8 23.9998 12.8 19.9998C12.8 15.9998 16 12.7998 20 12.7998C24 12.7998 27.2 15.9998 27.2 19.9998C27.2 23.9998 24 27.1998 20 27.1998ZM20 14.3998C16.88 14.3998 14.4 16.8798 14.4 19.9998C14.4 23.1198 16.88 25.5998 20 25.5998C23.12 25.5998 25.6 23.1198 25.6 19.9998C25.6 16.8798 23.12 14.3998 20 14.3998Z"
                fill="#111111"
              />
              <path
                d="M20 24C17.76 24 16 22.24 16 20C16 19.52 16.32 19.2 16.8 19.2C17.28 19.2 17.6 19.52 17.6 20C17.6 21.36 18.64 22.4 20 22.4C21.36 22.4 22.4 21.36 22.4 20C22.4 18.64 21.36 17.6 20 17.6C19.52 17.6 19.2 17.28 19.2 16.8C19.2 16.32 19.52 16 20 16C22.24 16 24 17.76 24 20C24 22.24 22.24 24 20 24Z"
                fill="#111111"
              />
            </svg>
          </div>

          <p className={style.featuresTitle}> <span className={style.featuresSpan}> Visibility</span> <br/> Location
          </p>
          <div className={style.featuresSVG}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54616 12.5L-1.01328e-06 2.77734L2.72692 0L15 12.5L2.72692 25L-1.01328e-06 22.2207L9.54616 12.498V12.5Z"
                fill="#323232"
              />
            </svg>
          </div>
        </div>
        <div className={style.locationDiv}>
          <div className={style.featuresIcon}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 22.5C18.7639 22.5 17.5555 22.1334 16.5277 21.4467C15.4999 20.7599 14.6988 19.7838 14.2258 18.6418C13.7527 17.4997 13.6289 16.2431 13.8701 15.0307C14.1113 13.8183 14.7065 12.7047 15.5806 11.8306C16.4547 10.9565 17.5683 10.3613 18.7807 10.1201C19.9931 9.87894 21.2497 10.0027 22.3918 10.4758C23.5338 10.9488 24.5099 11.7499 25.1967 12.7777C25.8834 13.8055 26.25 15.0139 26.25 16.25C26.248 17.907 25.5889 19.4956 24.4172 20.6672C23.2456 21.8389 21.657 22.498 20 22.5ZM20 12.5C19.2583 12.5 18.5333 12.7199 17.9166 13.132C17.2999 13.544 16.8193 14.1297 16.5355 14.8149C16.2516 15.5002 16.1774 16.2542 16.3221 16.9816C16.4668 17.709 16.8239 18.3772 17.3484 18.9017C17.8728 19.4261 18.541 19.7833 19.2684 19.9279C19.9958 20.0726 20.7498 19.9984 21.4351 19.7146C22.1203 19.4307 22.706 18.9501 23.118 18.3334C23.5301 17.7167 23.75 16.9917 23.75 16.25C23.749 15.2557 23.3536 14.3025 22.6506 13.5994C21.9475 12.8964 20.9943 12.501 20 12.5Z"
                fill="#111111"
              />
              <path
                d="M20 37.5L9.45501 25.0638C9.30849 24.877 9.16349 24.6891 9.02001 24.5C7.21874 22.1272 6.24565 19.229 6.25001 16.25C6.25001 12.6033 7.69867 9.10591 10.2773 6.52728C12.8559 3.94866 16.3533 2.5 20 2.5C23.6467 2.5 27.1441 3.94866 29.7227 6.52728C32.3014 9.10591 33.75 12.6033 33.75 16.25C33.7544 19.2277 32.7817 22.1246 30.9813 24.4963L30.98 24.5C30.98 24.5 30.605 24.9925 30.5488 25.0588L20 37.5ZM11.015 22.9938C11.0175 22.9938 11.3075 23.3787 11.3738 23.4612L20 33.635L28.6375 23.4475C28.6925 23.3787 28.985 22.9913 28.9863 22.99C30.4577 21.0514 31.2529 18.6838 31.25 16.25C31.25 13.2663 30.0647 10.4048 27.955 8.29505C25.8452 6.18526 22.9837 5 20 5C17.0163 5 14.1548 6.18526 12.0451 8.29505C9.93528 10.4048 8.75001 13.2663 8.75001 16.25C8.74739 18.6853 9.54224 21.0543 11.015 22.9938Z"
                fill="#111111"
              />
            </svg>
          </div>
          <p className={style.featuresTitle}>Location</p>
          <div className={style.featuresSVG}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54616 12.5L-1.01328e-06 2.77734L2.72692 0L15 12.5L2.72692 25L-1.01328e-06 22.2207L9.54616 12.498V12.5Z"
                fill="#323232"
              />
            </svg>
          </div>
        </div>
        <div className={style.tagpeopleDiv}>
          <div className={style.featuresIcon}>
            <svg
              width="40"
              height="31"
              viewBox="0 0 40 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1061_1775)">
                <path
                  d="M33.4211 16.9915L33.4209 16.9913C32.7666 16.3575 31.8736 16 30.9375 16H25.9813C25.1361 16 24.4813 16.6568 24.4813 17.4375V22.2328C24.4813 23.1246 24.8436 23.9765 25.4979 24.6104L31.1414 30.0716L31.1416 30.0717C31.729 30.6407 32.6898 30.6407 33.2771 30.0717L39.0584 24.4712L39.0598 24.4698C39.6428 23.9095 39.6428 23.013 39.0648 22.4529L33.4211 16.9915ZM33.4211 16.9915L39.0646 22.4527L33.4211 16.9915ZM25.9875 19.3689C25.9875 20.4652 26.8952 21.3221 27.9875 21.3221C29.0812 21.3221 29.9875 20.4578 29.9875 19.3689C29.9875 18.2727 29.0798 17.4158 27.9875 17.4158C26.8952 17.4158 25.9875 18.2727 25.9875 19.3689ZM21.5 7.74395C21.5 11.7336 18.1577 14.9939 14 14.9939C9.84205 14.9939 6.5 11.7334 6.5 7.75C6.5 3.76032 9.84231 0.5 14 0.5C18.1579 0.5 21.5 3.76057 21.5 7.74395ZM19.6 17.9254C20.2427 17.9254 20.8688 18.0272 21.4875 18.1837V22.2268C21.4875 23.9206 22.1691 25.5086 23.3959 26.697L26.6662 29.8652C26.2237 30.2545 25.6431 30.4939 25 30.4939H3C1.60481 30.4939 0.5 29.4012 0.5 28.0877V25.5689C0.5 21.3675 4.02359 17.9311 8.40065 17.9254H9.33911C10.7677 18.5433 12.34 18.8941 14 18.8941C15.6593 18.8941 17.2376 18.5436 18.6613 17.9254H19.6Z"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1061_1775">
                  <rect width="40" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className={style.featuresTitle}>Tag people</p>
          <div className={style.featuresSVG}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54616 12.5L-1.01328e-06 2.77734L2.72692 0L15 12.5L2.72692 25L-1.01328e-06 22.2207L9.54616 12.498V12.5Z"
                fill="#323232"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addDetails;
