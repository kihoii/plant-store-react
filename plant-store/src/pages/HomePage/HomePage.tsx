import './HomePage.scss';
import { Feedback } from './components/Feedback/Feedback';
import { GiftCards } from './components/GiftCards/GiftCards';
import { Hero } from './components/Hero/Hero';
import { HomeFooter } from './components/HomeFooter/HomeFooter';
import { NewPlants } from './components/NewPlants/NewPlants';
import { OurStory } from './components/OurStory/OurStory';
import { Principles } from './components/Principles/Principles';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <NewPlants />
            <OurStory />
            <Feedback />
            <GiftCards />
            <Principles />
            <HomeFooter />
        </>
    )
}
