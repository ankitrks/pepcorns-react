import React from "react";

export default class Footer extends React.Component {

    render() {

        return <div className="s-grid s-marginBottom1_5 u-colorOpaqueWhite4">
        {" "}
        <div className="s-grid-colMd5">
          {" "}
          <a href="#">
            <img
              alt="pepcorns"
              title="pepcorns"
              className="footer-content__logo"
              src="logo.png"
            />{" "}
          </a>{" "}
          <div className="footer-social_links" data-rc="layouts/footer/social_links">
            {" "}
            <p className="s-marginBottom1_5 u-lineHeight1_3 u-fontWeight400 footer-social_links__motto s-marginTop1_5">
              {" "}
              Giving everyone access to early-stage startup investing{" "}
            </p>{" "}
            <div className="s-marginBottom2 s-fontSize24 u-lineHeight1 footer-social_links__links_wrapper">
              {" "}
              <a target="_blank" className="footer-social_links__link" href="#">
                <i className="icon-facebook" />
              </a>{" "}
              <a target="_blank" className="footer-social_links__link" href="#">
                <i className="icon-instagram" />
              </a>{" "}
              <a target="_blank" className="footer-social_links__link" href="#" />{" "}
              <a target="_blank" className="footer-social_links__link" href="#">
                <i className="icon-linkedin" />
              </a>{" "}
              <a target="_blank" className="footer-social_links__link" href="#">
                <i className="icon-discord" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="s-grid-colMd19">
          {" "}
          <div
            className="s-grid s-paddingLeft1 footer-navigation"
            data-rc="layouts/footer/navigation"
          >
            {" "}
            <div className="s-grid-colSm6 s-grid-colXs12">
              {" "}
              <div className="s-fontSize18 u-fontWeight500 footer-navigation__caption_wrapper">
                {" "}
                For investors{" "}
              </div>{" "}
              <ul className="u-listUnstyled s-fontSize18 u-fontWeight500 u-whiteSpaceNowrap footer-navigation__links">
                {" "}
                <li>
                  <a id="footer-why-invest" href="/investors/why-invest">
                    Why invest
                  </a>
                </li>{" "}
                <li>
                  <a
                    id="footer-investors-how-it-works"
                    href="/learn/investors/how-it-works"
                  >
                    How it works
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-faq-for-investors" href="/help">
                    FAQ
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-risks" href="/risks">
                    Risks
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-privacy-policy" href="/privacy">
                    Privacy policy
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-accessibility" href="/accessibility">
                    Accessibility
                  </a>
                </li>{" "}
                <li>
                  {" "}
                  <a
                    className="js-footer_cookie-preferences"
                    href="javascript:void(0)"
                  >
                    {" "}
                    Cookie Preferences{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  <a
                    id="footer-form-crs"
                    target="_blank"
                    href="https://files.brokercheck.finra.org/crs_291387.pdf"
                  >
                    Form CRS
                  </a>
                </li>{" "}
              </ul>{" "}
              <div className="s-marginBottom1_5 u-hiddenSmUp" />{" "}
            </div>{" "}
            <div className="s-grid-colSm6 s-grid-colXs12">
              {" "}
              <div className="s-fontSize18 u-fontWeight500 footer-navigation__caption_wrapper">
                {" "}
                For startups{" "}
              </div>{" "}
              <ul className="u-listUnstyled s-fontSize18 u-fontWeight500 u-whiteSpaceNowrap footer-navigation__links">
                {" "}
                <li>
                  <a id="footer-why-raise" href="/raise">
                    Why raise
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-learn" href="/learn/issuers">
                    Learn
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-faq-for-startups" href="/help/category/fundraising">
                    FAQ
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-instruments" href="/startups/fundraising-instruments">
                    Instruments
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-crowd-safe" href="/crowdsafe">
                    Crowd SAFE
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-tokenize-assets" href="/tokenization">
                    Tokenized assets
                  </a>
                </li>{" "}
              </ul>{" "}
              <div className="s-marginBottom1_5 u-hiddenSmUp" />{" "}
            </div>{" "}
            <div className="s-grid-colSm6 s-grid-colXs12">
              {" "}
              <div className="s-fontSize18 u-fontWeight500 footer-navigation__caption_wrapper">
                {" "}
                Crypto{" "}
              </div>{" "}
              <ul className="u-listUnstyled s-fontSize18 u-fontWeight500 u-whiteSpaceNowrap footer-navigation__links">
                {" "}
                <li>
                  <a id="footer-for-investors" href="/crypto">
                    For investors
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-for-companies" href="/crypto/services">
                    For companies
                  </a>
                </li>{" "}
                <li>
                  <a
                    id="footer-crypto-how-it-works"
                    href="/crypto/for-investors/how-it-works"
                  >
                    How it works
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-token-dpa" href="/token-dpa">
                    Token DPA
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-tokeninzation" href="/tokenization">
                    Tokenization
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="s-grid-colSm6 s-grid-colXs12">
              {" "}
              <div className="s-fontSize18 u-fontWeight500 footer-navigation__caption_wrapper">
                {" "}
                Company{" "}
              </div>{" "}
              <ul className="u-listUnstyled s-fontSize18 u-fontWeight500 u-whiteSpaceNowrap footer-navigation__links">
                {" "}
                <li>
                  <a id="footer-about" href="/about">
                    About
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-journal" href="/blog">
                    Journal
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-events" href="/events">
                    Events
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-contact" href="/contact">
                    Contact
                  </a>
                </li>{" "}
                <li>
                  <a id="footer-we-are-hiring" href="/jobs">
                    We're hiring!
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      


    }

}