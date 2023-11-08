import React from "react";
import style from "./ProductsDetails.module.css";
import FooterImage1 from  "./../../Assets/ProductDetails/ProductDetails3.png"
import FooterImage2 from  "./../../Assets/ProductDetails/ProductDetails4.png"
import FooterImage3 from  "./../../Assets/ProductDetails/ProductDetails5.png"
import FooterImage4 from  "./../../Assets/ProductDetails/ProductDetails6.png"
const ProductDetails = () => {
    return (
        <div className={style.productdetails}>
            <div className={style.productdetailsNavbar}>
                <div className={style.ProductDetailsLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M16 18.667H29.3333C30.0406 18.667 30.7188 18.9479 31.2189 19.448C31.719 19.9481 32 20.6264 32 21.3337C32 22.0409 31.719 22.7192 31.2189 23.2193C30.7188 23.7194 30.0406 24.0003 29.3333 24.0003H16C15.2927 24.0003 14.6145 23.7194 14.1144 23.2193C13.6143 22.7192 13.3333 22.0409 13.3333 21.3337C13.3333 20.6264 13.6143 19.9481 14.1144 19.448C14.6145 18.9479 15.2927 18.667 16 18.667ZM34.6666 40.0003H48C48.7072 40.0003 49.3855 40.2813 49.8856 40.7814C50.3857 41.2815 50.6666 41.9597 50.6666 42.667C50.6666 43.3742 50.3857 44.0525 49.8856 44.5526C49.3855 45.0527 48.7072 45.3337 48 45.3337H34.6666C33.9594 45.3337 33.2811 45.0527 32.781 44.5526C32.2809 44.0525 32 43.3742 32 42.667C32 41.9597 32.2809 41.2815 32.781 40.7814C33.2811 40.2813 33.9594 40.0003 34.6666 40.0003ZM16 29.3337H48C48.7072 29.3337 49.3855 29.6146 49.8856 30.1147C50.3857 30.6148 50.6666 31.2931 50.6666 32.0003C50.6666 32.7076 50.3857 33.3858 49.8856 33.8859C49.3855 34.386 48.7072 34.667 48 34.667H16C15.2927 34.667 14.6145 34.386 14.1144 33.8859C13.6143 33.3858 13.3333 32.7076 13.3333 32.0003C13.3333 31.2931 13.6143 30.6148 14.1144 30.1147C14.6145 29.6146 15.2927 29.3337 16 29.3337Z" fill="#111111"/>
                </svg>
                <h1>Product Details</h1>
            </div>
            <div className={style.ProductDetailsICONS}>
                <div className={style.ProductDetailsLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                        <path d="M20 32.9132C21.1165 32.2779 25.2526 29.8211 29.3012 26.2007C33.9679 22.0277 37.9989 16.7694 38 11.307L20 32.9132ZM20 32.9132C18.8835 32.2779 14.7474 29.8211 10.6988 26.2007C6.03175 22.0274 2.00055 16.7687 2 11.3059C2.00302 8.82547 2.96973 6.4557 4.67528 4.71421C6.37944 2.97414 8.68094 2.00306 11.0726 2C14.1584 2.00034 16.7735 3.34426 18.3887 5.5408L20 7.732L21.6113 5.5408C23.2265 3.34426 25.8417 2.00034 28.9274 2C31.3191 2.00306 33.6206 2.97414 35.3247 4.71421C37.0305 6.45591 37.9972 8.82605 38 11.3068L20 32.9132Z" stroke="black" stroke-width="4"/>
                    </svg>
                </div>
                <div className={style.ProductDetailsShopIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32 32C33.0609 32 34.0783 32.4214 34.8284 33.1716C35.5786 33.9217 36 34.9391 36 36C36 37.0609 35.5786 38.0783 34.8284 38.8284C34.0783 39.5786 33.0609 40 32 40C30.9391 40 29.9217 39.5786 29.1716 38.8284C28.4214 38.0783 28 37.0609 28 36C28 33.78 29.78 32 32 32ZM0 0H6.54L8.42 4H38C38.5304 4 39.0391 4.21071 39.4142 4.58579C39.7893 4.96086 40 5.46957 40 6C40 6.34 39.9 6.68 39.76 7L32.6 19.94C31.92 21.16 30.6 22 29.1 22H14.2L12.4 25.26L12.34 25.5C12.34 25.6326 12.3927 25.7598 12.4864 25.8536C12.5802 25.9473 12.7074 26 12.84 26H36V30H12C10.9391 30 9.92172 29.5786 9.17157 28.8284C8.42143 28.0783 8 27.0609 8 26C8 25.3 8.18 24.64 8.48 24.08L11.2 19.18L4 4H0V0ZM12 32C13.0609 32 14.0783 32.4214 14.8284 33.1716C15.5786 33.9217 16 34.9391 16 36C16 37.0609 15.5786 38.0783 14.8284 38.8284C14.0783 39.5786 13.0609 40 12 40C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36C8 33.78 9.78 32 12 32ZM30 18L35.56 8H10.28L15 18H30Z" fill="black"/>
                    </svg>
                </div>
            </div>
            </div>
        <div className={style.ProductDetailsConatiner}>
            <div className={style.productdetailsImage}>
                <div className={style.ProductDetailsCards}>
                    <div className={style.ProductDetailsCardsImages}>
                    <div className={style.ProductDetailsCardsIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                            <g filter="url(#filter0_d_928_233)">
                                <circle cx="44" cy="43" r="40" fill="white"/>
                        </g>
                        <path d="M64 59V63H28V59M52 27L62 37L52 47" fill="white"/>
                        <path d="M64 59V63H28V59M52 27L62 37L52 47" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M62 37C42 37 28 40 28 53L62 37Z" fill="white"/>
                        <path d="M62 37C42 37 28 40 28 53" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <filter id="filter0_d_928_233" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_928_233"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_928_233" result="shape"/>
                            </filter>
                        </defs>
                        </svg>
                {/* </div> */}

                {/* <div className={style.ProductDetailsCardsLikeIcon}> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                        <g filter="url(#filter0_d_928_234)">
                            <circle cx="44" cy="43" r="40" fill="white"/>
                        </g>
                        <path d="M45.6238 65.0498L45.6209 65.0514C45.4377 65.1499 45.2329 65.2015 45.0248 65.2015C44.8168 65.2015 44.6119 65.1499 44.4287 65.0514L44.4258 65.0498C43.957 64.8016 38.049 61.5808 32.2658 56.5161C26.4562 51.4284 20.9096 44.5985 20.9094 37.1403C20.9134 33.6601 22.2977 30.3237 24.7585 27.8628C27.2194 25.4019 30.5559 24.0177 34.0361 24.0137C38.4283 24.0138 42.249 25.9 44.625 29.0644L45.0248 29.597L45.4247 29.0644C47.8006 25.9 51.6213 24.0138 56.0135 24.0137C59.4937 24.0177 62.8302 25.4019 65.2911 27.8628C67.752 30.3237 69.1363 33.6603 69.1402 37.1406C69.1399 44.5987 63.5933 51.4284 57.7839 56.5161C52.0006 61.5808 46.0926 64.8016 45.6238 65.0498Z" fill="white" stroke="black"/>
                        <defs>
                            <filter id="filter0_d_928_234" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_928_234"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_928_234" result="shape"/>
                            </filter>
                        </defs>
                        </svg>
                    </div>
                </div>
                    
                    <div className={style.ProductDetailButton}>
                            
                            <div className={style.addTOCART}>
                                <button className={style.DetailsCardsAdd}> 
                                    <span className={style.DetailsCardsSpan}>
                                        Add To cart
                                        </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M32 32C33.0609 32 34.0783 32.4214 34.8284 33.1716C35.5786 33.9217 36 34.9391 36 36C36 37.0609 35.5786 38.0783 34.8284 38.8284C34.0783 39.5786 33.0609 40 32 40C30.9391 40 29.9217 39.5786 29.1716 38.8284C28.4214 38.0783 28 37.0609 28 36C28 33.78 29.78 32 32 32ZM0 0H6.54L8.42 4H38C38.5304 4 39.0391 4.21071 39.4142 4.58579C39.7893 4.96086 40 5.46957 40 6C40 6.34 39.9 6.68 39.76 7L32.6 19.94C31.92 21.16 30.6 22 29.1 22H14.2L12.4 25.26L12.34 25.5C12.34 25.6326 12.3927 25.7598 12.4864 25.8536C12.5802 25.9473 12.7074 26 12.84 26H36V30H12C10.9391 30 9.92172 29.5786 9.17157 28.8284C8.42143 28.0783 8 27.0609 8 26C8 25.3 8.18 24.64 8.48 24.08L11.2 19.18L4 4H0V0ZM12 32C13.0609 32 14.0783 32.4214 14.8284 33.1716C15.5786 33.9217 16 34.9391 16 36C16 37.0609 15.5786 38.0783 14.8284 38.8284C14.0783 39.5786 13.0609 40 12 40C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36C8 33.78 9.78 32 12 32ZM30 18L35.56 8H10.28L15 18H30Z" fill="#327E47"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={style.buyNow}>
                                <button className={style.DetailsCardsBuy}>
                                        <span className={style.DetailsCardsSpan}>
                                        Buy Now
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M25.8334 8.33301H18.3334L26.6667 19.9997L18.3334 31.6663H25.8334L34.1667 19.9997L25.8334 8.33301Z" fill="white"/>
                                            <path d="M14.1666 8.33301H6.66663L15 19.9997L6.66663 31.6663H14.1666L22.5 19.9997L14.1666 8.33301Z" fill="white"/>
                                        </svg>
                                </button>
                            </div>
                            
                    </div>
                </div>
            </div>
            <div className={style.productdetailsDescription}>
                <div className={style.productdetailsDescriptionTitle}>
                    <h1>Rubber Plant</h1>
                </div>
                <div className={style.productdetailsDescriptionPrice}>
                <span className={style.firstPrice}>Price: &#8377;120</span>
                    <p>Price:
                    <span class={style.scratch}> &#8377;150</span>
                    </p>
                <p>Free Delivery</p>
                <button className={style.descriptionButton}>3.8 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M10 16.5737L16.18 20.5L14.54 13.1L20 8.12105L12.81 7.46842L10 0.5L7.19 7.46842L0 8.12105L5.45 13.1L3.82 20.5L10 16.5737Z" fill="white"/>
                    </svg>
                </button>
                </div>
                <div className={style.productdetailsDescriptionInfo}>
                    <h1 className={style.productdetailsDescriptionInfoH1}>Description:</h1>
                    <p>
                    The Rubber Plant, native to Southeast Asia, features
                    large, leathery leaves that have a beautiful shine. It 
                    can grow up to several feet in height, making it an 
                    excellent choice as a statement plant or a focal 
                    point in your indoor garden. The Rubber Plant is 
                    well-known for its ability to remove toxins from the 
                    air, promoting a healthier and fresher living 
                    environment.
                    </p>
                    <h1 className={style.productdetailsDescriptionInfoH1}>Benefits of Rubber Plant:</h1>
                    <p>
                        <span>Air Purification:</span> The Rubber Plant removes harmful 
                        toxins from the air, promoting cleaner and fresher 
                        indoor air quality.
                    </p>
                    <p>
                        <span>Aesthetically Pleasing:</span>  With its glossy leaves and 
vibrant green color, the Rubber Plant adds a touch of 
natural beauty to any indoor space.

                    </p>
                    <p>
                        <span>Low Maintenance:</span>  The Rubber Plant is relatively 
easy to care for and can thrive in various indoor 
environments.

                    </p>
                    <p>
                        <span>Stress Reduction:</span> The presence of plants, including 
the Rubber Plant, has been shown to reduce stress 
levels and create a calming atmosphere
                    </p>
                </div>
                <div className={style.productdetailsDescriptionFooter}>
                    <div className={style.footerHeading}>
                    <h1 className={style.DescriptionFooter}>Related Products</h1>
                    </div>
                    <div className={style.footerbody}>
                    <div className={style.FooterImage}>
                        <img src={FooterImage1} alt="error "/>
                        <p className={style.productdetailsDescriptionFooterTitle}>Fiddle leaf fig</p>
                        <p className={style.productdetailsDescriptionFooterPrice}>&#8377;100</p>

                    </div>
                    <div className={style.FooterImage}>
                        <img src={FooterImage2} alt="error "/>
                        <p className={style.productdetailsDescriptionFooterTitle}>Fiddle leaf fig</p>
                        <p className={style.productdetailsDescriptionFooterPrice}>&#8377;250</p>

                        
                    </div>
                    <div className={style.FooterImage}>
                        <img src={FooterImage3} alt="error "/>
                        <p className={style.productdetailsDescriptionFooterTitle}>Fiddle leaf fig</p>
                        <p className={style.productdetailsDescriptionFooterPrice}>&#8377;100</p>

                    </div>
                    <div className={style.FooterImage}>
                        <img src={FooterImage4} alt="error "/>
                        <p className={style.productdetailsDescriptionFooterTitle}>Fiddle leaf fig</p>
                        <p className={style.productdetailsDescriptionFooterPrice}>&#8377;100</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductDetails;
