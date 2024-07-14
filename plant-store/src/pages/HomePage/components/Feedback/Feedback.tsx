import { FeedbackCard } from '../../../../components/FeedbackCard/FeedbackCard';
import './Feedback.scss';

export const Feedback = () => {
    const feedback = [
        {
            text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
            photo: 'src/pages/HomePage/components/Feedback/assets/customer-1.png',
            name: 'JENNIFER LEWIS',
        },
        {
            text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
            photo: 'src/pages/HomePage/components/Feedback/assets/customer-2.png',
            name: 'ALICIA HEART',
        },
        {
            text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
            photo: 'src/pages/HomePage/components/Feedback/assets/customer-3.png',
            name: 'JUAN CARLOS',
        },
    ]
    return (
        <section id="feedback" className="container">
            <div className="feedback-section">
                <div className="feedback-section-title">
                    <h3 className="section-title">What Our Customer Say</h3>
                    <hr />
                </div>
                <div className="feedback-cards-group">
                    {feedback.map((feedback, index) => (
                        <FeedbackCard key={index} feedback={feedback} />
                    ))}
                </div>
            </div>
        </section>
    )
}
