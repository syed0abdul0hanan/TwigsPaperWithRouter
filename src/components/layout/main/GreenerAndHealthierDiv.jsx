import React from "react";
import GreenerAndHealthierStyle from "../main/GreenerAndHealtheirStyle.module.css";

function GreenerAndHealthierDiv() {
  return (
    <>
      <div className={GreenerAndHealthierStyle.container}>
        <h1 className={GreenerAndHealthierStyle.GreenerTitle}>
          Making the world a cleaner, greener, and healthier place. Heres our
          impact so far.
        </h1>
        <div className={GreenerAndHealthierStyle.GreenerItemsDiv}>
          <div
            className={`${GreenerAndHealthierStyle.items} ${GreenerAndHealthierStyle.item1}`}
          >
            <p className={GreenerAndHealthierStyle.cardType}>REDUCING WASTE</p>
            <p className={GreenerAndHealthierStyle.cardTitle}>Orders shipped in plastic-free packaging</p>
            <p className={GreenerAndHealthierStyle.cardNumbers}>100,000+</p>
          </div>
          <div
            className={`${GreenerAndHealthierStyle.items} ${GreenerAndHealthierStyle.item2}`}
          >
            <p className={GreenerAndHealthierStyle.cardType}>PROTECTING NATURE</p>
            <p className={GreenerAndHealthierStyle.cardTitle}>Trees saved by using 100% recycled paper</p>
            <p className={GreenerAndHealthierStyle.cardNumbers}>500+</p>
          </div>
          <div
            className={`${GreenerAndHealthierStyle.items} ${GreenerAndHealthierStyle.item3}`}
          >
            <p className={GreenerAndHealthierStyle.cardType}>SAVING WATER</p>
            <p className={GreenerAndHealthierStyle.cardTitle}>Gallons of water saved by using recycled water</p>
            <p className={GreenerAndHealthierStyle.cardNumbers}>40,000+</p>
          </div>
          <div
            className={`${GreenerAndHealthierStyle.items} ${GreenerAndHealthierStyle.item4}`}
          >
            <p className={GreenerAndHealthierStyle.cardType}>LOWERING EMISSIONS</p>
            <p className={GreenerAndHealthierStyle.cardTitle}>Lbs of CO2 have been offset by using biogas</p>
            <p className={GreenerAndHealthierStyle.cardNumbers}>85,000+</p>
          </div>
        </div>
        <div className={GreenerAndHealthierStyle.buttondiv}>
        <button>Our sustainable practises</button>    
        </div>
        
      </div>
    </>
  );
}

export default GreenerAndHealthierDiv;
