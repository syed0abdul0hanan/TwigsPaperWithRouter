import React from 'react'
import EcobookStyle from './EcoBookStyle.module.css'
import EcobookImg from '../../../assets/Eco_Books.jpeg'

function EcoBookSection() {
  return (
    <div className={EcobookStyle.Ecodiv}>

    <div className={`${EcobookStyle.item} ${EcobookStyle.item1}`}>
        <img src={EcobookImg} alt="" />

        <div className={EcobookStyle.EcoImgContent}>
        <p className={EcobookStyle.EcoImgType}>in this photo</p>
        <p className={EcobookStyle.EcoImgTitle}>Eco Books</p>
        <p className={EcobookStyle.EcoImgView}>View product</p>
        </div>

      </div>

      <div className={`${EcobookStyle.item} ${EcobookStyle.item2}`}>
        <div className={EcobookStyle.EcoItem2Content}>
        <h1>Your Constant Companion</h1>
        <p>Don't leave for your next adventure without your Twigs pocket notepad. At 3.5 x 5.5 in. and 48 pages, it fits neatly in your back pocket with or without a wallet. Choose from blank, lined, or graph paper options to suit your organizational, occupational, or creative needs.</p>
        <button className={EcobookStyle.EcobookBtn}>Shop Eco Books</button>
        </div>
      </div>

    </div>
  )
}

export default EcoBookSection