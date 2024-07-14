import './SnsLinks.scss';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export const SnsLinks = () => {
    return (
        <div className="sns-links icon-group">
            <div className="icon">
                <img src={facebook} alt="Facebook" />
            </div>
            <div className="icon">
                <img src={youtube} alt="YouTube" />
            </div>
            <div className="icon">
                <img src={twitter} alt="Twitter" />
            </div>
            <div className="icon">
                <img src={instagram} alt="Instagram" />
            </div>
        </div>
    )
}
