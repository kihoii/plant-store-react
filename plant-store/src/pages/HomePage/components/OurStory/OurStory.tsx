import './OurStory.scss';
import banner from './assets/our-story-banner.png';

export const OurStory = () => {
    return (
        <section id="our-story" className="container">
            <div className="box our-story-section">
                <img className="our-story-banner mobile-hide" src={banner} alt="" />
                <div className="our-story-info">
                    <div className="our-story-head">
                        <h3>OUR STORY</h3>
                        <h4>For People Who Love Plants</h4>
                    </div>
                    <div className="our-story-text">
                        <p>Vivamus quam sociis tristique diam at donec nisi, hendrerit leo nunc at velit lacinia porttitor a
                            nulla tellus ultriices varius aliquet sed in piacerat.</p>
                        <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl
                            vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar
                            volutpat laoreet pharetra.
                        </p>
                    </div>
                    <button className="green button" type="button">Read More</button>
                </div>
            </div>
        </section>
    )
}
