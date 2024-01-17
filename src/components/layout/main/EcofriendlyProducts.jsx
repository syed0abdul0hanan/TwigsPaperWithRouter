import React from 'react'
import EcofriendlyStyle from './EcofriendlyProductsStyle.module.css'
import Ecofriendlyimg1 from '../../../assets/ecofriendly1.jfif'
import Ecofriendlyimg2 from '../../../assets/ecofriendly2.jfif'
import Ecofriendlyimg3 from '../../../assets/ecofriendly3.jfif'

function EcofriendlyProducts() {
    return (
        <div className={EcofriendlyStyle.container}>
            <h1 className={EcofriendlyStyle.EcofriendlyHeading}>Our eco-friendly products</h1>


            <div className={EcofriendlyStyle.EcofriendlyProductsContainer}>
                <div className={EcofriendlyStyle.EcofriendlyProducts}>
                    <img src={Ecofriendlyimg1} alt="" />
                    <p className={EcofriendlyStyle.EcofriendlyProductsTitle1}>Assorted Card Sets</p>
                </div>
                <div className={EcofriendlyStyle.EcofriendlyProducts}>
                    <img src={Ecofriendlyimg2} alt="" />
                    <p className={EcofriendlyStyle.EcofriendlyProductsTitle2}>Greeting Cards</p>
                </div>
                <div className={EcofriendlyStyle.EcofriendlyProducts}>
                    <img src={Ecofriendlyimg3} alt="" />
                    <p className={EcofriendlyStyle.EcofriendlyProductsTitle3}>Notebooks</p>
                </div>
            </div>
        </div>
    )
}

export default EcofriendlyProducts