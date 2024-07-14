import './FeeadbackCard.scss'

interface FeedbackCardProps {
    feedback: FeedbackDto;
}

export interface FeedbackDto {
    text: string;
    photo: string;
    name: string;
}

export const FeedbackCard = (props: FeedbackCardProps) => {
    const { text, photo, name } = props.feedback;

    return (
        <div>
            <div className="feedback-card">
                <div className="feedback-section-comma">‘‘</div>
                <div className="feedback-text">{text}</div>
                <img className="feedback-photo" src={photo} alt="" />
                <div className="feedback-name">{name}</div>
            </div>
        </div>
    )
}
