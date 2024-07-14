import './Hero.scss';
import { Header } from '../../../../components/Header/Header';
import { Button } from '../../../../components/Button/Button';

export const Hero = () => {
    return (
        <section id="hero">
            <Header />
            <div className="front-container container">
                <div className="front-text">
                    <h2 className="welcome-text">WELCOME TO THE GREEN STORE</h2>
                    <h1 className="slogan">Let’s Bring the Spring to <br /> Your Home</h1>
                </div>
                <Button className="white button" title="Shop Now" />
            </div>
        </section>
    )
}
