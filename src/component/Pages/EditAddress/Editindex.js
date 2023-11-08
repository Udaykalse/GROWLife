import React from 'react';
import style from './EditStyle.module.css';

const Editindex = () => {
  return (
    <div className={style.Home}>
      <div className={style.EditNavbar}>
        <p className={style.EditParagraph}>Edit Address</p>
        <button className={style.navbarbutton}>UPDATE</button>
      </div>
      <div className={style.HorizontalLine}></div>
      <div className={style.formsection}>
        <div className={style.formheading}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.0005 0C13.4601 0 8.1001 5.344 8.1001 11.8664C8.1001 14.3936 8.9073 16.7424 10.2733 18.6728L18.5481 32.978C19.7069 34.492 20.4773 34.2044 21.4409 32.898L30.5681 17.366C30.7521 17.0324 30.8969 16.6772 31.0229 16.3144C31.6021 14.903 31.8999 13.392 31.8997 11.8664C31.9001 5.344 26.5417 0 20.0005 0ZM20.0005 5.56C23.5229 5.56 26.3237 8.3544 26.3237 11.8664C26.3237 15.3784 23.5229 18.1716 20.0005 18.1716C16.4785 18.1716 13.6765 15.3788 13.6765 11.8664C13.6765 8.3544 16.4785 5.5604 20.0005 5.5604V5.56Z" fill="#0FA958"/>
  <path d="M27.5651 19.5635L27.5459 19.6139C27.5519 19.5987 27.5567 19.5831 27.5627 19.5679L27.5651 19.5635Z" fill="#0FA958"/>
  <path d="M13.6024 27.623C7.952 28.4214 4 30.3314 4 33.143C4 36.9302 10.6032 40.0002 20 40.0002C29.3968 40.0002 36 36.9302 36 33.143C36 30.3314 32.0484 28.4214 26.3984 27.623L25.6156 28.9558C29.874 29.5466 32.8 30.7882 32.8 32.229C32.8 34.249 27.0692 35.8862 20 35.8862C12.9308 35.8862 7.2 34.249 7.2 32.229C7.1996 30.793 10.1064 29.5526 14.378 28.9594C14.12 28.5138 13.8608 28.069 13.6024 27.623Z" fill="#0FA958"/>
</svg>
          Address
        </div>
        <div className={style.formcontent}>
          <div className={style.formfield}>
            <label>House no./ Building Name</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>Road Name / Area / Colony</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>Pincode</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>City</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>State</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>Land Mark (optional)</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
        </div>
      </div>
      <div className={style.HorizontalLine}></div>
      <div className={style.formsection}>
        <div className={style.formheadingOne}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.7922 5.92625C23.8346 5.76761 23.9079 5.61889 24.0078 5.48858C24.1078 5.35827 24.2324 5.24892 24.3746 5.16679C24.5168 5.08467 24.6738 5.03136 24.8366 5.00993C24.9994 4.98849 25.1648 4.99935 25.3235 5.04187C27.6407 5.64648 29.755 6.85788 31.4484 8.5513C33.1418 10.2447 34.3532 12.359 34.9578 14.6762C35.0004 14.8349 35.0112 15.0003 34.9898 15.1631C34.9683 15.3259 34.915 15.4829 34.8329 15.6251C34.7508 15.7673 34.6414 15.8919 34.5111 15.9919C34.3808 16.0918 34.2321 16.1651 34.0735 16.2075C33.9679 16.2352 33.8592 16.2494 33.75 16.2497C33.4748 16.2498 33.2072 16.159 32.9888 15.9915C32.7704 15.8239 32.6134 15.589 32.5422 15.3231C32.0493 13.4311 31.0608 11.7049 29.6784 10.3223C28.2961 8.93964 26.57 7.95074 24.6781 7.4575C24.5194 7.41523 24.3705 7.34208 24.24 7.24222C24.1095 7.14237 24 7.01777 23.9177 6.87555C23.8354 6.73333 23.782 6.57628 23.7605 6.41339C23.7389 6.2505 23.7497 6.08496 23.7922 5.92625ZM23.4281 12.4575C25.5828 13.0325 26.9672 14.4184 27.5422 16.5731C27.6134 16.839 27.7704 17.0739 27.9888 17.2415C28.2072 17.409 28.4748 17.4998 28.75 17.4997C28.8592 17.4994 28.9679 17.4852 29.0735 17.4575C29.2321 17.4151 29.3808 17.3418 29.5111 17.2419C29.6414 17.1419 29.7508 17.0173 29.8329 16.8751C29.915 16.7329 29.9683 16.5759 29.9898 16.4131C30.0112 16.2503 30.0004 16.0849 29.9578 15.9262C29.1578 12.9325 27.0672 10.8419 24.0735 10.0419C23.9148 9.9995 23.7494 9.98878 23.5867 10.0103C23.4239 10.0319 23.267 10.0853 23.1249 10.1675C22.9828 10.2497 22.8582 10.3591 22.7584 10.4894C22.6586 10.6197 22.5854 10.7684 22.543 10.927C22.5006 11.0856 22.4899 11.251 22.5114 11.4138C22.533 11.5766 22.5864 11.7335 22.6686 11.8756C22.7508 12.0177 22.8602 12.1422 22.9905 12.2421C23.1208 12.3419 23.2695 12.4151 23.4281 12.4575ZM34.7453 24.7591L27.3844 21.4606L27.3641 21.4512C26.9819 21.2878 26.5651 21.2222 26.1512 21.2604C25.7373 21.2986 25.3395 21.4394 24.9938 21.67C24.9531 21.6969 24.9139 21.7261 24.8766 21.7575L21.0735 24.9997C18.6641 23.8294 16.1766 21.3606 15.0063 18.9825L18.2531 15.1216C18.2844 15.0825 18.3141 15.0434 18.3422 15.0012C18.5679 14.6564 18.7048 14.2611 18.7408 13.8506C18.7768 13.44 18.7107 13.027 18.5485 12.6481V12.6294L15.2406 5.25593C15.0262 4.76103 14.6574 4.34877 14.1894 4.08068C13.7213 3.81259 13.1792 3.70306 12.6438 3.76843C10.5265 4.04704 8.58311 5.08682 7.17647 6.69358C5.76984 8.30034 4.99619 10.3642 5.00001 12.4997C5.00001 24.9059 15.0938 34.9997 27.5 34.9997C29.6355 35.0035 31.6994 34.2299 33.3061 32.8232C34.9129 31.4166 35.9527 29.4732 36.2313 27.3559C36.2968 26.8207 36.1875 26.2787 35.9197 25.8107C35.6519 25.3427 35.2399 24.9738 34.7453 24.7591Z" fill="#0FA958"/>
</svg>
          Contact Details
        </div>
        <div className={style.formcontent}>
          <div className={style.formfield}>
            <label>Name</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
          <div className={style.formfield}>
            <label>Contact Number</label>
            <div className={style.horizontalLineInput}>
              <input type='text' className={style.InputField}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editindex;


