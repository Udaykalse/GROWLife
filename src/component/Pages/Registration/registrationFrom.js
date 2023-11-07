import React, { useState, useEffect } from 'react';
import style from './registrationFrom.module.css';

const RegistrationForm = () => {
  const [cameraError, setCameraError] = useState(null);
  const [stream, setStream] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    file: null,
    name: '',
    email: '',
    verifyEmail: '',
    location: '',
    phoneNumber: '',
    verifyPhoneNumber: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });

    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSkip = () => {
    // Handle skip action if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors); // Always update errors state

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data or make an API call here
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.file) {
      errors.file = 'Image is required';
    }

    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (data.email !== data.verifyEmail) {
      errors.verifyEmail = 'Emails do not match';
    }

    if (!data.location) {
      errors.location = 'Location is required';
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (data.phoneNumber !== data.verifyPhoneNumber) {
      errors.verifyPhoneNumber = 'Phone numbers do not match';
    }

    return errors;
  };

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
    } catch (error) {
      setCameraError(error);
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  // Use a separate handleChange function for the file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
      setFormData({ ...formData, file }); // Update the form data with the file
    }
  };

  return (
    <div className={style.Home}>
      <div className={style.Heading}>
        <h2>Registration Form</h2>
      </div>
      <div className={style.From}>
        <form onSubmit={handleSubmit}>
          {/* Upload Image Field */}
          <div className={style.Upload}>
            <input
              type="file"
              name="file"
              id="fileInput"
              onChange={handleFileChange} // Use the handleFileChange function for file input
              className={style.UploadImage}
              style={{ display: 'none' }}
            />
            {selectedFile && (
              <img
                src={selectedFile}
                alt="Selected File"
                style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto' }}
              />
            )}
            <label htmlFor="fileInput" className={style.UploadImageSvg}>
            <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M79.6715 45.4138C79.6715 51.3995 77.2834 57.14 73.0326 61.3725C68.7818 65.605 63.0164 67.9828 57.0049 67.9828C50.9933 67.9828 45.228 65.605 40.9771 61.3725C36.7263 57.14 34.3382 51.3995 34.3382 45.4138C34.3382 39.4282 36.7263 33.6877 40.9771 29.4551C45.228 25.2226 50.9933 22.8448 57.0049 22.8448C63.0164 22.8448 68.7818 25.2226 73.0326 29.4551C77.2834 33.6877 79.6715 39.4282 79.6715 45.4138Z" fill="#716F6F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.688 113.076C24.4648 111.868 0.333332 87.0874 0.333332 56.6983C0.333332 25.5362 25.703 0.275879 57 0.275879C88.297 0.275879 113.667 25.5362 113.667 56.6983C113.667 87.8604 88.297 113.121 57 113.121C56.7412 113.122 56.4824 113.122 56.2237 113.121C55.7108 113.121 55.198 113.104 54.688 113.076ZM18.0479 89.476C18.6439 90.1772 20.1104 89.4382 20.2151 88.5239C20.361 87.2494 20.7934 86.0239 21.4801 84.9385C22.1669 83.8531 23.0903 82.9356 24.1818 82.2542C25.2734 81.5728 26.5051 81.1449 27.7855 81.0023C49.8742 78.5676 64.2618 78.7877 86.2428 81.0531C87.5249 81.186 88.7597 81.6085 89.853 82.2884C90.9463 82.9683 91.8694 83.8876 92.5519 84.9764C93.2345 86.0652 93.6585 87.2947 93.7917 88.5713C93.8848 89.4642 95.334 90.2054 95.9165 89.5223C103.705 80.3896 108.015 68.7618 108 56.6983C108 28.6535 85.1662 5.91812 57 5.91812C28.8338 5.91812 6 28.6535 6 56.6983C6 69.1914 10.5317 80.6315 18.0479 89.476Z" fill="#716F6F"/>
</svg>
            </label>
            <div className={style.cameraIcon}>
            <button type="button" onClick={openCamera} className={style.cameraButton}>
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.1111 12.0229H31.8356L31.2667 10.2528C30.8979 9.21414 30.2138 8.31541 29.3092 7.6811C28.4045 7.04679 27.3242 6.70832 26.2178 6.71256H17.1156C15.9983 6.71465 14.9099 7.06603 14.004 7.71711C13.0981 8.3682 12.4205 9.28611 12.0667 10.3413L11.4978 12.1114H9.22223C7.80774 12.1114 6.45118 12.6709 5.45099 13.6668C4.4508 14.6627 3.88889 16.0134 3.88889 17.4218V31.5827C3.88889 32.9911 4.4508 34.3418 5.45099 35.3377C6.45118 36.3335 7.80774 36.893 9.22223 36.893H34.1111C35.5256 36.893 36.8822 36.3335 37.8824 35.3377C38.8825 34.3418 39.4444 32.9911 39.4444 31.5827V17.4218C39.4562 16.717 39.327 16.0169 39.0643 15.3624C38.8015 14.7079 38.4106 14.112 37.9141 13.6094C37.4177 13.1069 36.8258 12.7078 36.1728 12.4354C35.5199 12.163 34.819 12.0228 34.1111 12.0229ZM35.8889 31.4942C35.8889 31.9636 35.7016 32.4139 35.3682 32.7458C35.0348 33.0778 34.5826 33.2643 34.1111 33.2643H9.22223C8.75073 33.2643 8.29855 33.0778 7.96515 32.7458C7.63175 32.4139 7.44445 31.9636 7.44445 31.4942V17.3333C7.44445 16.8638 7.63175 16.4136 7.96515 16.0816C8.29855 15.7496 8.75073 15.5631 9.22223 15.5631H12.7778C13.1655 15.5833 13.5491 15.4765 13.8701 15.2592C14.1911 15.0418 14.4319 14.7258 14.5556 14.3595L15.5156 11.4565C15.6348 11.1049 15.862 10.7995 16.1651 10.5835C16.4682 10.3675 16.8317 10.2518 17.2044 10.2528H26.3067C26.6794 10.2518 27.0429 10.3675 27.346 10.5835C27.6491 10.7995 27.8763 11.1049 27.9956 11.4565L28.9556 14.3595C29.0696 14.6971 29.2834 14.9926 29.5688 15.2074C29.8543 15.4221 30.1982 15.5461 30.5556 15.5631H34.1111C34.5826 15.5631 35.0348 15.7496 35.3682 16.0816C35.7016 16.4136 35.8889 16.8638 35.8889 17.3333V31.4942ZM21.6667 15.5631C20.2602 15.5631 18.8854 15.9784 17.7159 16.7564C16.5465 17.5344 15.6351 18.6402 15.0969 19.934C14.5586 21.2278 14.4178 22.6515 14.6922 24.0249C14.9666 25.3984 15.6438 26.66 16.6384 27.6502C17.6329 28.6405 18.8999 29.3148 20.2794 29.588C21.6588 29.8612 23.0886 29.721 24.388 29.1851C25.6874 28.6492 26.798 27.7417 27.5793 26.5773C28.3607 25.4129 28.7778 24.044 28.7778 22.6436C28.7778 20.7657 28.0286 18.9648 26.695 17.637C25.3614 16.3091 23.5527 15.5631 21.6667 15.5631ZM21.6667 26.1838C20.9634 26.1838 20.276 25.9762 19.6913 25.5872C19.1066 25.1982 18.6509 24.6453 18.3818 23.9984C18.1127 23.3515 18.0422 22.6397 18.1794 21.9529C18.3166 21.2662 18.6553 20.6354 19.1525 20.1403C19.6498 19.6452 20.2833 19.308 20.973 19.1714C21.6627 19.0348 22.3776 19.1049 23.0273 19.3729C23.677 19.6408 24.2323 20.0946 24.623 20.6768C25.0137 21.2589 25.2222 21.9434 25.2222 22.6436C25.2222 23.5825 24.8476 24.483 24.1808 25.1469C23.514 25.8108 22.6097 26.1838 21.6667 26.1838Z" fill="#111111"/>
</svg>
            </button>
            </div>
          </div>

          {/* Name Field */}
          <div className={style.UserName}>
            <label className={style.FristnameLabel}>
              Name:
            </label>
            <div className={style.InputUserName}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
          </div>

          {/* Email Field */}
          <div className={style.UserEmail}>
            <label>
              Email:
            </label>
            <div className={style.InputUserName}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>

          {/* Verify Email Field */}
          <div className={style.VerifyEmail}>
            <label>
              Verify Email:
            </label>
            <div className={style.InputUserName}>
              <input
                type="email"
                name="verifyEmail"
                value={formData.verifyEmail}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.verifyEmail && <div className="error">{errors.verifyEmail}</div>}
            </div>
          </div>

          {/* Location Field */}
          <div className={style.Location}>
            <label>
              Location:
            </label>
            <div className={style.InputUserName}>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.location && <div className="error">{errors.location}</div>}
            </div>
          </div>

          {/* Phone Number Field */}
          <div className={style.PhoneNumber}>
            <label>
              Phone Number:
            </label>
            <div className={style.InputUserName}>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            </div>
          </div>

          {/* Verify Phone Number Field */}
          <div className={style.VerifyPhoneNumber}>
            <label>
              Verify Phone Number:
            </label>
            <div className={style.InputUserName}>
              <input
                type="tel"
                name="verifyPhoneNumber"
                value={formData.verifyPhoneNumber}
                onChange={handleChange}
                className={style.Fristname}
              />
              {errors.verifyPhoneNumber && (
                <div className="error">{errors.verifyPhoneNumber}</div>
              )}
            </div>
          </div>

          <div className={style.FromGender}>
  <div className={style.genderHead}>
  <label className={style.genderTitle}>
    Gender:
  </label>
  </div>
  <div className={style.genderBody}> 
  <div className={style.genderSection}>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
          className={style.genderInput}
        />
        Male
      </label>
    </div>
    <div className={style.genderSection}>
      
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === 'female'}
        onChange={handleChange}
        className={style.genderInput}
      />
      Female
    </label>
  </div>
  </div>
</div>


          <button type="submit" className={style.SubmitButton}>Complete</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
