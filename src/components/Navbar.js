import React from 'react';
const Navbar = () => {

  return (
    <nav className="navbar">
            <ul className="navbar_pages hide">
                <li className="navbar_page"><a className="navbar_pages_link a-move" href="/">Home</a></li>
                <li className="navbar_page"><a className="navbar_pages_link a-move" href="/projects">Projects</a></li>
                <li className="navbar_page"><a className="navbar_pages_link a-move" href="https://blog.ardhysatrio.tech/" target="_blank">Blog</a></li>
                <li className="navbar_page"><i className="navbar_pages_link a-move" href="#" disabled style={{ fontStyle: 'normal' }}>Info</i></li>
            </ul>
            <ul className="navbar_links hide">
                <li>
                    <div className="navbar_link_heading">
                        Social
                    </div>
                    <div className="navbar_link_body">
                        <a href="https://twitter.com/" target="_blank" rel="noopener"
                            data-v-1082d173="">Twitter</a><span data-v-1082d173="">/</span><a
                            href="https://www.instagram.com/ardhy.satrio/" target="_blank" rel="noopener"
                            data-v-1082d173="">Instagram</a><span data-v-1082d173="">/</span><a
                            href="https://www.linkedin.com/in/ardhysatrio/" target="_blank" rel="noopener"
                            data-v-1082d173="">Linkedin</a>
                    </div>
                </li>
            </ul>
            <div className="navBtn">
                <div className="navBtn_inner">
                    <div className="navBtn_dot navBtn_dot-1"></div>
                    <div className="navBtn_dot navBtn_dot-2"></div>
                    <div className="navBtn_dot navBtn_dot-3"></div>
                </div>
            </div>
            <div className="navbar_closeBtn hide">
                <div className="closeBtn_shape">

                </div>
            </div>
        </nav>
  );
}
 
export default Navbar;
