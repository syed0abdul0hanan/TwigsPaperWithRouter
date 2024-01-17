import React from 'react'
import OurPromisesSectionStyle from './OurPromisesSectionStyle.module.css'
import OurPromisesSectionImage1 from '../../../assets/OurPromisesSectionImage1.png'
import OurPromisesSectionImage2 from '../../../assets/OurPromisesSectionImage2.png'
import OurPromisesSectionImage3 from '../../../assets/OurPromisesSectionImage3.png'
import OurPromisesSectionImage4 from '../../../assets/OurPromisesSectionImage4.png'

function OurPromisesSection() {
    return (
        <div className={OurPromisesSectionStyle.OurPromisesSectionContainer}>
            <h5>OUR PROMISES TO YOU</h5>
            <div className={OurPromisesSectionStyle.OurPromisesContentContainer}>

                <div className={OurPromisesSectionStyle.OurPromisesContent}>
                    <img src={ OurPromisesSectionImage1} alt="" />
                    <p>Fast and free shipping on all orders.</p>
                </div>
                <div className={OurPromisesSectionStyle.OurPromisesContent}>
                    <img src={ OurPromisesSectionImage2} alt="" />
                    <p>Sustainable process from start to finish.</p>
                </div>
                <div className={OurPromisesSectionStyle.OurPromisesContent}>
                    <img src={OurPromisesSectionImage3 } alt="" />
                    <p>Unique designs and high-quality materials.</p>
                </div>
                <div className={OurPromisesSectionStyle.OurPromisesContent}>
                    <img src={OurPromisesSectionImage4 } alt="" />
                    <p>Partnering with small businesses in the USA.</p>
                </div>

            </div>
        </div>
    )
}

export default OurPromisesSection