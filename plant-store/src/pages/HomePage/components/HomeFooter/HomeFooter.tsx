import { Footer } from '../../../../components/Footer/Footer';
import { ContactsGroup } from './ContactsGroup';
import { GetInTouchForm } from './GetInTouchForm';
import './HomeFooter.scss';

export const HomeFooter = () => {
    return (
        <footer>
            <section id="get-in-touch">
                <div className="get-in-touch-section container">
                    <div className="get-in-touch-info">
                        <div className="head">
                            <h3>Get In Touch</h3>
                            <p>Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut
                                montes, dui
                                scelerisque ornare.</p>
                        </div>
                        <ContactsGroup />
                    </div>
                    <GetInTouchForm />
                </div>
            </section>
            <Footer />
        </footer>
    )
}
