import { SnsLinks } from '../../../../components/SnsLinks/SnsLinks';
import './ContactsGroup.scss';
import locator from './assets/locator.svg';
import phone from './assets/phone.svg';
import mail from './assets/mail.svg';

export const ContactsGroup = () => {
    return (
        <div className="contacts-group">
            <div className="physics">
                <div className="contact">
                    <img src={locator} alt="" />
                    <div className="contact-type">
                        <h4>VISIT US</h4>
                        <p>123 Demo st. 84020 Bihar, India</p>
                    </div>
                </div>
                <div className="contact">
                    <img src={phone} alt="" />
                    <div className="contact-type">
                        <h4>CALL US</h4>
                        <p>+91 7894567890</p>
                    </div>
                </div>
                <div className="contact">
                    <img src={mail} alt="" />
                    <div className="contact-type">
                        <h4>EMAIL US</h4>
                        <p>mail@example.com</p>
                    </div>
                </div>
            </div>
            <div className="websites">
                <h4>Follow us</h4>
                <SnsLinks />
            </div>
        </div>
    )
}
