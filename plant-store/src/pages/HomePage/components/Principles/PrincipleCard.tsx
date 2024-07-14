import './PrincipleCard.scss'

interface PrincipleCardProps {
    image: string;
    title: string;
    text: string;
}

export const PrincipleCard = (props: PrincipleCardProps) => {
    const { image, title, text } = props;

    return (
        <div className="principle-card">
            <div className="principle-img">
                <img src={image} alt="" />
            </div>
            <div className="principle-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
