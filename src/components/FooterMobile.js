import React from 'react';
const FooterMobile = () => {

  return (
          <div className="footer mobile" data-scroll data-scroll-speed="0" data-scroll-sticky data-scroll-target="#data-sec2">
            <div className="wrapper">
              <div className="footer_top">
                <p className="footer_talk">Let’s talk about your next project!</p>
                <a href="mailto:ardhysatrio@outlook.com?subject=Hi" target="_blank" className="footer_mail o-link">
                  ardhysatrio@outlook.com
                </a>
              </div>
              <div className="footer_social">
                <div className="footer__social-text js-social-text">
                  Find me on ☞
                </div>
                <div className="footer__social-link-box">
                  <a href="https://www.instagram.com/ardhy.satrio" target="_blank"
                    className="footer__social-link o-link">
                    Instagram
                  </a>
                  <span className="footer__social-link footer__social-link--nohover">
                    ·
                  </span>
                  <a href="https://github.com/kadabengarann" target="_blank"
                    className="footer__social-link o-link">
                    Github
                  </a>
                  <span className="footer__social-link footer__social-link--nohover">
                    ·
                  </span>
                  <a href="https://www.linkedin.com/in/ardhysatrio/" target="_blank"
                    className="footer__social-link o-link">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
  );
}
 
export default FooterMobile;