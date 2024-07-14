import './NewPlants.scss'
import { Button } from '../../../../components/Button/Button'
import { PlantCard } from '../../../../components/PlantCard/PlantCard'

export const NewPlants = () => {
    const newPlants = [
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-1.png',
            name: 'Bird of Paradise',
            price: 124.90,
        },
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-2.png',
            name: 'Zz Plants',
            price: 129.90,
        },
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-3.png',
            name: 'Calarhea Beauty Star',
            price: 79.90,
        },
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-4.png',
            name: 'Birdnest Japanes',
            price: 89.90,
        },
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-5.png',
            name: 'Hoya Obovatum',
            price: 184.90,
        },
        {
            image: 'src/pages/HomePage/components/NewPlants/assets/plant-6.png',
            name: 'Monstera Deliciosa',
            price: 224.90,
        },
    ]
    return (
        <section id="new-plants" className="container">
            <div className="new-plants-section">
                <h3 className="section-title">New Plants</h3>
                <div className="plants-group">
                    {newPlants.map((plant, index) => (
                        <PlantCard key={index} plant={{ ...plant }} />
                    ))}
                </div>
                <Button className="green button wide" title="Shop Now" />
            </div>
        </section>
    )
}
