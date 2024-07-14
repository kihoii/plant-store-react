import './HomePage.scss';
import { Hero } from './components/Hero/Hero';
import { NewPlants } from './components/NewPlants/NewPlants';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <NewPlants />
        </>
    )
}
