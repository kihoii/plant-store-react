import './HomePage.scss';
import { Hero } from './components/Hero/Hero';
import { NewPlants } from './components/NewPlants/NewPlants';
import { OurStory } from './components/OurStory/OurStory';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <NewPlants />
            <OurStory />
        </>
    )
}
