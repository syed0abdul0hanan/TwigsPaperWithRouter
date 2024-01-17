import React from "react";
import ShopOurBestSellercss from "../main/ShopOurBestSeller.module.css";
import bS1 from "../../../assets/bestSeller1.jpg";
import bS2 from "../../../assets/bestSeller2.jpg";
import bS3 from "../../../assets/bestSeller3.jpg";
import bS4 from "../../../assets/bestSeller4.jpg";
import bSB from "../../../assets/bestSellerRightBanner.jpeg";

function ShopOurBestSeller() {
  return (
    <div className={ShopOurBestSellercss.shopDiv}>
      <h1>Shop Our best sellers</h1>

      <div className={ShopOurBestSellercss.container}>
        <div className={ShopOurBestSellercss.item}>
          <img src={bS1} alt="" />
          <p className={ShopOurBestSellercss.productType}>assorted card set</p>
          <h3 className={ShopOurBestSellercss.productName}>Cats</h3>
          <p className={ShopOurBestSellercss.productPrice}>$12.95</p>
        </div>

        <div className={ShopOurBestSellercss.item}>
          <img src={bS2} alt="" />
          <p className={ShopOurBestSellercss.productType}>assorted card set</p>
          <h3 className={ShopOurBestSellercss.productName}>Ocean Life</h3>
          <p className={ShopOurBestSellercss.productPrice}>$12.95</p>
        </div>

        <div
          className={`${ShopOurBestSellercss.item} ${ShopOurBestSellercss.item3}`}>
          <img className={ShopOurBestSellercss.bigBoxImg} src={bSB} alt="" />
        </div>

        <div className={ShopOurBestSellercss.item}>
          <img src={bS3} alt="" />
          <p className={ShopOurBestSellercss.productType}>assorted card set</p>
          <h3 className={ShopOurBestSellercss.productName}>American Birds</h3>
          <p className={ShopOurBestSellercss.productPrice}>$12.95</p>
        </div>

        <div className={ShopOurBestSellercss.item}>
          <img src={bS4} alt="" />
          <p className={ShopOurBestSellercss.productType}>assorted card set</p>
          <h3 className={ShopOurBestSellercss.productName}>Bumble Bees</h3>
          <p className={ShopOurBestSellercss.productPrice}>$12.95</p>
        </div>
      </div>
    </div>
  );
}
export default ShopOurBestSeller;
