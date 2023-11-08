import React from 'react';
import Navbar from "../../Navbar/Navbar"
import Style from "./Aboutstyle.module.css"
import { Fragment } from 'react';

const Aboutindex = () => {
return (
    <Fragment>
        <Navbar/>
        <section className={Style.ABOUT}>
                <div className={Style.row}>
                    <div className={Style.column}>
                        <div className={Style.AboutImage}>ABOUT US</div>
                    </div>
                    {/* <div className={Style.column}></div> */}
                </div>
        </section>
    </Fragment>
);
}

export default Aboutindex;
