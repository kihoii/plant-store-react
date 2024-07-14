import { PrincipleCard } from './PrincipleCard';
import './Principles.scss';

export const Principles = () => {
    const principles = [
        {
            image: "src/pages/HomePage/components/Principles/assets/lock.svg",
            title: "SECURE PAYMENT",
            text: "Enimod laorect eget turpis platea",
        },
        {
            image: "src/pages/HomePage/components/Principles/assets/case.svg",
            title: "DELIVERED WITH CARE",
            text: "Pharetra molestie viverra placerat",
        },
        {
            image: "src/pages/HomePage/components/Principles/assets/service.svg",
            title: "EXCELLENT SERVICE",
            text: "Ultricies risus integer sed placerat",
        },
    ]

    return (
        <section id="principles" className="container">
            <div className="box principles-group">
                {principles.map((principle, index) => (
                    <PrincipleCard key={index} image={principle.image} title={principle.title} text={principle.text} />
                ))}
            </div>
        </section>
    )
}
