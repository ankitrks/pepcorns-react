import React from "react";

export default class Header extends React.Component {

    render() {

        return <div classname="header-mobile_menu__header--closed">
        <div>
          <div classname="header-logo" data-rc="layouts/header/logo">
            <a
              classname="u-displayInlineBlock js-analytics_track_link"
              data-segment-analytics='{"event_name":"header_logo_clicked","destination":"homepage"}'
              href="#"
            >
              <img
                alt="pepcorns"
                title="pepcorns"
                classname="c-header-logo c-header-logo__full c-header-logo__full--nav-closed"
                src="logo.png"
              />
              <img
                alt="pepcorns"
                title="pepcorns"
                classname="u-hidden c-header-logo c-header-logo__full c-header-logo__full--nav-open"
                src="logo.png"
              />
              <img
                alt="pepcorns"
                classname="u-hidden c-header-logo c-header-logo__brand"
                src="logo.png"
              />
            </a>
          </div>
        </div>
        <ul classname="header-mobile_menu__toolbar">
          <li classname="header-mobile_menu__toolbar__menu-item">
            <div
              classname="c-header-nav__item c-header-nav__item--text header-login"
              data-rc="layouts/header/login"
            >
              <a classname="c-header-nav-link user-menu-link" href="/login">
                Log in
              </a>
            </div>
          </li>
        </ul>
      </div>
      

    }

}