import React from "react";

export default class Partner extends React.Component {

    render() {

        return <div className="s-grid u-colorOpaqueWhite4">
        {" "}
        <div className="s-grid-colSm12 u-text-right footer-content__bottom_content_section">
          {" "}
          <div className="s-marginBottom0_5 s-fontSize13 u-fontWeight400 u-hiddenSmUp">
            {" "}
            Invest in startups using your credit card{" "}
          </div>{" "}
          <img
            alt="You can invest using your credit card"
            src="https://assets.republic.com/assets/layouts/credit_cards-fb323581910488f0885fc63613e42a2d07ebc908e0af4df4ed139ed8cb3254fc.svg"
          />{" "}
        </div>{" "}
        <div className="s-grid-colSm12 u-floatLeftSmUp footer-content__bottom_content_section">
          {" "}
          <div className="s-marginTop1_5 u-hiddenSmUp" />{" "}
          <p className="s-fontSize13"> Made in SF/NYC </p>{" "}
        </div>{" "}
      </div>
    }

}