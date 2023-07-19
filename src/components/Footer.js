import React from 'react';
import './footer.scss' ;

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className="footer-links">
                <a href="facebook.com"><i className="fa fa-facebook"></i></a>
                <a href="instagram.com"><i className="fa fa-instagram"></i></a>
                <a href="github.com"><i className="fa fa-github"></i></a>
                <a href="linkedin.com"><i className="fa fa-linkedin"></i></a>
            </div>
            <h6 className="footer-copy">
                Fitiavana copyright mars 2023 &copy;
            </h6>
        </div>
    );
};

export default Footer;