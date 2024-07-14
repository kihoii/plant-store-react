import { SnsLinks } from '../SnsLinks/SnsLinks'
import './Footer.scss'
import logo from '../assets/logo.png';

export const Footer = () => {
    return (
        <>
            <div className="footer-links">
                <div className="footer-box container">
                    <img src={logo} />
                    <div className="footer-links-group">
                        <div className="footer-links-column">
                            <h4>Pages</h4>
                            <div className="links-group">
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">Service</a>
                                <a href="">Features</a>
                            </div>
                        </div>
                        <div className="footer-links-column">
                            <h4>Contact us</h4>
                            <div className="links-group">
                                <p>123 Demo st. India <br />Bihar 84020</p>
                                <p>mail@example.com</p>
                                <p>+91789457890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyrights">
                <div className="copyrights-box container">
                    <h5>© 2021 copyright all right reserved</h5>
                    <SnsLinks />
                </div>
            </div>
        </>
    )
}
