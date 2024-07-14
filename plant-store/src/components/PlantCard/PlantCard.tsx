import './PlantCard.scss'

interface PlantCardProps {
    plant: PlantInfoDto;
}

export interface PlantInfoDto {
    image: string;
    name: string;
    price: number;
}

export const PlantCard = (props: PlantCardProps) => {
    const { image, name, price } = props.plant;

    return (
        <div>
            <div className="plant-card">
                <img className="plant-image" src={image} alt="" />
                <div className="plant-description">
                    <h4 className="plant-name">{name}</h4>
                    <p className="plant-price">${price}</p>
                </div>
            </div>
        </div>
    )
}
