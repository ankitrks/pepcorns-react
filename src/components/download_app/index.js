import React from "react";

export default class DownloadApp extends React.Component {

    render() {

        return <div className="s-borderTop1_5 s-borderBottom1_5 s-marginBottom1_5 u-displayFlex u-justifyContentSpaceBetween u-alignItemsCenter footer-content__refer">
        {" "}
        <div className="u-hidden u-blockSmUp">
          {" "}
          <div className="u-displayFlex u-alignItemsCenter">
            {" "}
            <img
              alt="Dollar"
              src="https://assets.republic.com/assets/layouts/dollar-582d5a155e415013ca316098b15357e5557a7e43a142badb0eede421774a7684.svg"
            />{" "}
            <span className="u-verticalAlignMiddle s-fontSize18 u-fontWeight500 u-colorOpaqueWhite8 s-marginLeft1">
              {" "}
              <a
                className="footer-content__refer_link"
                rel="nofollow"
                href="/register?after_sign_in=%2Finvite%2Fstartups"
              >
                Refer a startup, get $2,500{" "}
              </a>
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="u-displayFlex u-alignItemsCenter s-marginLeftAuto s-marginRightAuto u-hiddenSmUp">
          {" "}
          <img
            alt="Dollar"
            src="https://assets.republic.com/assets/layouts/dollar-582d5a155e415013ca316098b15357e5557a7e43a142badb0eede421774a7684.svg"
          />{" "}
          <span className="u-verticalAlignMiddle s-fontSize18 u-fontWeight500 u-colorOpaqueWhite8 s-marginLeft1">
            {" "}
            <a
              className="footer-content__refer_link"
              rel="nofollow"
              href="/register?after_sign_in=%2Finvite%2Fstartups"
            >
              Refer a startup, get $2,500{" "}
            </a>
          </span>{" "}
        </div>{" "}
        <div className="u-hidden u-blockSmUp">
          {" "}
          <div className="u-displayFlex u-alignItemsCenter">
            {" "}
            <p className="s-marginRight2_5 u-colorOpaqueWhite6 s-fontSize18">
              {" "}
              Invest in the app{" "}
            </p>{" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.republicmobile&hl=en_US"
            >
              <img
                alt="Android app"
                title="Android app"
                className="footer-content__store-logo s-marginRight1"
                src="https://assets.republic.com/assets/layouts/play-store-9cadb4445b30496a302fc98996f198276dc521bbb594732f1e486595e8a16024.png"
              />{" "}
            </a>{" "}
            <a target="_blank" href="https://apps.apple.com/us/app/id1475230022">
              <img
                alt="iOS app"
                title="iOS app"
                className="footer-content__store-logo"
                src="https://assets.republic.com/assets/layouts/app-store-058a66dc51adb639795e2baf90a3dd2b22cc1ed0e14d940168901e67fde74f29.png"
              />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      
    }

}